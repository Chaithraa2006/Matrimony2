import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import '../styles/successStoryDetails.css';

const SuccessStoryDetails = () => {
  const { coupleName } = useParams();
  const navigate = useNavigate();

  console.log("Received couple name:", coupleName); // Add this for debugging

  // Success stories data
  const successStories = {
    'Shobhit & Gaurangi': {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQfGX32ESP4Int23G9sjXrnUr0cJCSOQkEg&s',
      story: `"We enrolled with LoveVivah last year in December for 3 months personalized service for my son Shobhit. We are a service class family based in Jaipur and since our son is also working in Jaipur, we were preferably looking a working girl from Jaipur only. It wasn't too easy to find a relevant match within Jaipur, but LoveVivah made it possible. As a part of our personalized service, our Relationship Manager Ms. Chhaya shared 41 profiles with us. Meetings were arranged with approx. 6 shortlisted prospects and we finally proceeded with 2 of them. Finally things worked out well and we solemnized a formal Roka ceremony with Gaurangi and marriage has been fixed for later this year.

      Thank You.
      Shobhit's Father"`,
      date: 'December 2023',
      location: 'Jaipur'
    },
    'Priyanka and Pawan': {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6rxjTvpXA-C4izUchNVWHJBb8hsea5O7rw&s',
      story: `"We enrolled with LoveVivah and found our perfect match. The personalized service and attention to detail made our journey special. After meeting several prospects, we knew we had found the right person. Thank you LoveVivah for making our dreams come true."`,
      date: 'February 2024',
      location: 'Mumbai'
    },
    'Rahul and Latika': {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Mj66RVJlbnNle1cw2AJ75ziGvav09MWFvg&s',
      story: `"Finding love through LoveVivah was a wonderful experience. The platform helped us connect and our families were very supportive throughout the process. We're grateful for the professional service that led us to each other."`,
      date: 'January 2024',
      location: 'Delhi'
    }
  };

  // Find the story based on the URL parameter
  const story = successStories[coupleName];
  
  console.log("Found story:", story); // Add this for debugging

  // If story is not found, show error message
  if (!story) {
    return (
      <div className="success-stories-page">
        <div className="success-stories-header">
          <div className="header-content">
            <h1>Success Stories</h1>
            <p>As our numerous success stories prove, marriages are really made at Lovevivah.com</p>
          </div>
        </div>
        <div className="story-container">
          <div className="error-message">Story not found for: {coupleName}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="success-stories-page">
      <div className="success-stories-header">
        <div className="header-content">
          <h1>Success Stories</h1>
          <p>As our numerous success stories prove, marriages are really made at Lovevivah.com</p>
        </div>
      </div>
      
      <div className="story-container">
        <div className="story-content-wrapper">
          <div className="story-image">
            <img src={story.image} alt={coupleName} />
          </div>
          
          <div className="story-details">
            <div className="couple-name">{coupleName}</div>
            <div className="story-text">
              <p>{story.story}</p>
              <p className="story-meta">
                Wedding Date: {story.date}<br/>
                Location: {story.location}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="view-stories-btn" onClick={() => navigate('/')}>
          View Happy Stories
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default SuccessStoryDetails; 