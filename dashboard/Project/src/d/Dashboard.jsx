import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return `Heart Rate: ${tooltipItem.raw} BPM`;
        },
      },
    },
  },
};

const Dashboard = () => {
  // Data for heart rate graphs
  const badConditionData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Heart Rate (BPM)',
        data: [120, 125, 130, 135, 140, 138, 142],
        fill: false,
        borderColor: '#FF6347',
        tension: 0.1,
      },
    ],
  };

  const normalConditionData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Heart Rate (BPM)',
        data: [70, 72, 68, 74, 73, 71, 72],
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.1,
      },
    ],
  };

  const slightlyElevatedConditionData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Heart Rate (BPM)',
        data: [85, 87, 89, 90, 91, 92, 90],
        fill: false,
        borderColor: '#FFD700',
        tension: 0.1,
      },
    ],
  };

  // Sample data for upcoming appointments
  const upcomingAppointments = [
    { doctor: 'Dr. Smith', date: '2024-10-15', time: '10:30 AM', reason: 'Routine Check-up' },
    { doctor: 'Dr. Johnson', date: '2024-11-01', time: '3:00 PM', reason: 'Follow-up on Medication' },
  ];

  // Sample data for conditions
  const conditions = [
    { condition: 'Diabetes', status: 'Stable' },
    { condition: 'Hypertension', status: 'Under Control' },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-50 w-[85vw]">
      <h1 className="text-5xl font-bold text-teal-600 mb-8 text-center drop-shadow-lg">Health Dashboard</h1>

      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* Vitals Section */}
        <div className="flex flex-col w-full md:w-2/3 space-y-8 flex-grow">
          <div className="bg-white p-6 shadow-lg rounded-lg flex-grow">
            <h3 className="text-2xl font-semibold mb-4 text-red-600">Bad Condition Heart Rate</h3>
            <Line data={badConditionData} options={{ ...chartOptions, title: { text: 'Current Week: Bad Condition Heart Rate' } }} />
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg flex-grow">
            <h3 className="text-2xl font-semibold mb-4 text-teal-600">Normal Condition Heart Rate</h3>
            <Line data={normalConditionData} options={{ ...chartOptions, title: { text: 'Current Week: Normal Condition Heart Rate' } }} />
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg flex-grow">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-600">Slightly Elevated Heart Rate</h3>
            <Line data={slightlyElevatedConditionData} options={{ ...chartOptions, title: { text: 'Current Week: Slightly Elevated Heart Rate' } }} />
          </div>
        </div>

        {/* Right Side - Upcoming Appointments and Conditions */}
        <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded-lg flex-grow">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">Upcoming Appointments</h3>
          <ul className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <li key={index} className="border-b pb-2">
                <h4 className="font-semibold">{appointment.doctor}</h4>
                <p className="text-gray-700"><strong>Date:</strong> {appointment.date}</p>
                <p className="text-gray-700"><strong>Time:</strong> {appointment.time}</p>
                <p className="text-gray-700"><strong>Reason:</strong> {appointment.reason}</p>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-teal-600 mt-6 mb-4">Conditions</h3>
          <ul className="space-y-4">
            {conditions.map((condition, index) => (
              <li key={index} className="border-b pb-2">
                <h4 className="font-semibold">{condition.condition}</h4>
                <p className="text-gray-700"><strong>Status:</strong> {condition.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        &copy; 2024 Health Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
