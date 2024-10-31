import React, { useEffect, useState } from 'react';

// Sample data for appointments with conditions
const appointmentData = [
  {
    doctor: 'Dr. Smith',
    date: '2024-10-15',
    time: '10:30 AM',
    reason: 'Routine Check-up',
    condition: 'General Health',
  },
  {
    doctor: 'Dr. Johnson',
    date: '2024-11-01',
    time: '3:00 PM',
    reason: 'Follow-up on Medication',
    condition: 'Diabetes Management',
  },
  {
    doctor: 'Dr. Adams',
    date: '2024-09-20',
    time: '11:00 AM',
    reason: 'Allergy Consultation',
    condition: 'Peanut Allergy',
  },
  {
    doctor: 'Dr. Baker',
    date: '2024-09-25',
    time: '2:00 PM',
    reason: 'Heart Condition Assessment',
    condition: 'Cardiac Health',
  },
];

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      // Simulate fetching appointment data
      setTimeout(() => {
        setAppointments(appointmentData);
      }, 1500);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Side - Appointments List */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">Appointments</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {appointments.map((appointment, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{appointment.doctor}</h3>
              <p className="text-gray-700"><strong>Date:</strong> {appointment.date}</p>
              <p className="text-gray-700"><strong>Time:</strong> {appointment.time}</p>
              <p className="text-gray-700"><strong>Reason:</strong> {appointment.reason}</p>
              <p className="text-gray-700"><strong>Condition:</strong> {appointment.condition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Content Area */}
      <div className="w-full lg:w-[20vw] bg-gray-100 p-4 lg:ml-4 mt-6 lg:mt-0">
        <h3 className="text-xl font-semibold text-teal-600 mb-4">Why Attend Appointments?</h3>
        <img
          src="/Images/appointment.jpg" // Wider image
          alt="Medical Appointment"
          className="mb-4 rounded-md w-full" // Make the image full width
        />
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Q: Why are regular appointments important?</h4>
          <p className="text-gray-700">A: Regular appointments help monitor your health, manage chronic conditions, and detect any potential health issues early.</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Q: What should I bring to my appointment?</h4>
          <p className="text-gray-700">A: Bring your ID, insurance information, a list of medications, and any relevant medical records.</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Q: How can I prepare for my appointment?</h4>
          <p className="text-gray-700">A: Write down any questions you have, track your symptoms, and ensure you arrive on time.</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Q: What happens during a routine check-up?</h4>
          <p className="text-gray-700">A: A routine check-up typically includes a physical examination, discussion of any health concerns, and updates on vaccinations and screenings.</p>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
