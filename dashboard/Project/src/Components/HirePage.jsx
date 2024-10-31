import React from 'react';
import HireForm from './HireForm'; // Import the form component
import './HirePage.css';

const HirePage = () => {
  return (
    <div className="hire-page-container">
      {/* Left Side - Form */}
      <div className="form-section">
        <h2>Hire a Caregiver or Nurse</h2>
        <p className="form-description">Please fill out the form below to hire a caregiver. Ensure to provide accurate details to get the best service.</p>
        <HireForm /> {/* The HireForm component */}
      </div>

      {/* Right Side - Image and Text */}
      <div className="image-section">
        <img src="/Images/caretake.jpg" alt="Why Hire" className="hire-image" />
        <h3 className="why-hire-title">Why Hire a Caregiver?</h3>
        <p className="why-hire-description">Our caregivers provide professional and compassionate care for your loved ones, ensuring their well-being and comfort. Whether you need daily assistance or specialized care, our service connects you with trusted professionals.</p>
        <p className="form-tips">Form Tips: Make sure to provide emergency contacts, list any special requirements, and select the appropriate care type based on your loved one’s needs.</p>
      </div>
    </div>
  );
};

export default HirePage;
