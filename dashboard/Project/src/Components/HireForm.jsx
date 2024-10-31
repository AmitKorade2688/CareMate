import React, { useState } from 'react';
import './HireForm.css';

const HireForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    careType: '',
    startDate: '',
    timeSchedule: '',
    recurringSchedule: '',
    address: '',
    householdTasks: false,
    transportationTasks: false,
    specialInstructions: '',
    emergencyContact: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-container">
      <h2>Hire a Caregiver/Nurse</h2>
      <form onSubmit={handleSubmit} className="hire-form">
        {/* Personal Information */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter full name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter email address"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
          />
        </div>

        {/* Care Type */}
        <div className="form-group">
          <label>Type of Care Required</label>
          <select
            name="careType"
            value={formData.careType}
            onChange={handleChange}
            required
          >
            <option value="">Select Care Type</option>
            <option value="nurse">Nurse</option>
            <option value="caregiver">General Caregiver</option>
            <option value="specialized">Specialized Care</option>
          </select>
        </div>

        {/* Schedule */}
        <div className="form-group">
          <label>Preferred Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Time Schedule</label>
          <input
            type="text"
            name="timeSchedule"
            value={formData.timeSchedule}
            onChange={handleChange}
            required
            placeholder="e.g. 9:00 AM - 5:00 PM"
          />
        </div>

        {/* Recurring Schedule */}
        <div className="form-group">
          <label>Recurring Schedule</label>
          <select
            name="recurringSchedule"
            value={formData.recurringSchedule}
            onChange={handleChange}
          >
            <option value="">Select Recurring Option</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="none">One-time</option>
          </select>
        </div>

        {/* Address */}
        <div className="form-group">
          <label>Service Location (Address)</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter address"
          />
        </div>

        {/* Household and Transportation Tasks */}
        <div className="form-group">
          <label>Additional Services</label>
          <div className="checkbox-group" style={{ width: "55%" }}>
            <input
              type="checkbox"
              name="householdTasks"
              checked={formData.householdTasks}
              onChange={handleChange}
            />
            <label>Household Tasks (cleaning, groceries, etc.)</label>
          </div>
          <div className="checkbox-group" style={{ width: "48%" }}>
            <input
              type="checkbox"
              name="transportationTasks"
              checked={formData.transportationTasks}
              onChange={handleChange}
            />
            <label>Transportation Assistance</label>
          </div>
        </div>

        {/* Special Instructions */}
        <div className="form-group">
          <label>Special Instructions</label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            placeholder="Any specific needs or preferences"
          />
        </div>

        {/* Emergency Contact */}
        <div className="form-group">
          <label>Emergency Contact</label>
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            required
            placeholder="Enter emergency contact details"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default HireForm;
