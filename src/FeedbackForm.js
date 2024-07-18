import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      feedbackType,
      description,
      name,
      email,
    };

    try {
      const response = await axios.post('http://localhost:5000/feedback', feedbackData);
      console.log('Feedback submitted:', response.data);
      alert('Feedback submitted successfully');

      // Clear the form after successful submission
      setFeedbackType('');
      setDescription('');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback');
    }
  };

  return (
    <div className="feedback-form-wrapper">
      <div className="feedback-form-container">
        <h3 className='form-haeding'>Feedback Form</h3>
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label>Feedback Type:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="Comments"
                  checked={feedbackType === 'Comments'}
                  onChange={() => setFeedbackType('Comments')}
                  required
                />
                Comments
              </label>
              <label>
                <input
                  type="radio"
                  value="Suggestion"
                  checked={feedbackType === 'Suggestion'}
                  onChange={() => setFeedbackType('Suggestion')}
                  required
                />
                Suggestion
              </label>
              <label>
                <input
                  type="radio"
                  value="Question"
                  checked={feedbackType === 'Question'}
                  onChange={() => setFeedbackType('Question')}
                  required
                />
                Question
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Describe Your Feedback:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder='Enter your name here..'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder='Enter your gmail here..'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
