require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const querystring = require('querystring');
const nodemailer = require('nodemailer');

const app = express();

// Enable CORS for all routes
app.use(cors());

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectUri = 'http://localhost:5000/auth/google/callback';

app.get('/auth/google', (req, res) => {
  try {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=email&access_type=offline`;
    res.json({ url: authUrl });
  } catch (error) {
    console.error('Error in /auth/google:', error);
    res.status(500).json({ error: 'Failed to generate auth URL' });
  }
});

app.get('/auth/google/callback', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    console.error('No code provided in callback');
    return res.status(400).send('No authorization code provided');
  }

  try {
    const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', querystring.stringify({
      code,
      client_id: googleClientId,
      client_secret: googleClientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }));

    const { access_token } = tokenResponse.data;

    const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const { email } = userInfoResponse.data;

    console.log(`Resume downloaded by: ${email}`);

    // Send email notification
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Resume Downloaded',
      text: `Resume downloaded by: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    res.redirect('https://drive.google.com/file/d/1nU1u4ON1lgHPR4QLIGcFHvP_hjIQ_hwC/view?usp=sharing');
  } catch (error) {
    console.error('Error during Google OAuth:', error.response ? error.response.data : error.message);
    res.status(500).send('Authentication failed: ' + (error.response ? JSON.stringify(error.response.data) : error.message));
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});