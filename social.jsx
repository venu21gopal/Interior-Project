import React, { useState } from 'react';
import './social.css';

const Social = () => {
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackButtonClick = () => {
    setFeedbackVisible(true);
  };

  const handleCloseFeedbackClick = () => {
    setFeedbackVisible(false);
  };

  const handleSendFeedbackClick = () => {
    // Add your feedback submission logic here

    // Clear the text in the textarea
    setFeedbackText('');
  };

  const handleTextareaChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const recipientPhoneNumber = "7981300613";
  const message = "Hello, this is my message!";
  const encodedMessage = encodeURIComponent(message);

  const handleWhatsappButtonClick = () => {
    const whatsappUrl = `https://wa.me/${recipientPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <div className="icon-bar" style={{ zIndex: 9999 }}>
      <a href="tel:555-555-5555" type='tel' className="Phone" target="_blank"><i class="fa fa-phone" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/" className="facebook" target="_blank"><i className="fa fa-facebook"></i></a>
        <a href="#" className="whatsapp" target="_blank" onClick={handleWhatsappButtonClick}><i className="fa fa-whatsapp"></i></a>
        <a href="https://www.youtube.com/" className="youtube" target="_blank"><i className="fa fa-youtube"></i></a>
        <a href="https://www.instagram.com/" className="instagram" target="_blank"><i className="fa fa-instagram"></i></a>

      </div>
    </div>
  );
};

export default Social;



