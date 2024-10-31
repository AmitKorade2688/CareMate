import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// Reusable chart options
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

const Vitals = () => {
  // Data for current week's heart rate for 3 conditions
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

  return (
    <div className="flex flex-col lg:flex-row w-[85vw]">
      {/* Left Side - Graphs Section */}
      <div className="flex-1 p-4 space-y-12 md:w-2/3">
        <h2 className="text-3xl font-semibold mb-6 text-teal-600">Weekly Heart Rate Overview</h2>

        {/* Bad Condition Graph */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-full text-center">
          <div className="w-2/3 mx-auto">
            <Line
              data={badConditionData}
              options={{ ...chartOptions, title: { text: 'Current Week: Bad Condition Heart Rate' } }}
            />
          </div>
          <p className="text-red-500 mt-4 font-semibold">
            A1: Warning: Your heart rate is too high. Please consult a doctor!
          </p>
        </div>

        {/* Normal Condition Graph */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-full  text-center">
          <div className="w-2/3 mx-auto">
            <Line
              data={normalConditionData}
              options={{ ...chartOptions, title: { text: 'Current Week: Normal Condition Heart Rate' } }}
            />
          </div>
          <p className="text-teal-500 mt-4 font-semibold">
            A2: Everything looks normal. Keep maintaining your health!
          </p>
        </div>

        {/* Slightly Elevated Condition Graph */}
        <div className="bg-white p-6 md:w-2/3 shadow-lg rounded-lg w-full text-center">
          <div className="w-2/3 mx-auto">
            <Line
              data={slightlyElevatedConditionData}
              options={{ ...chartOptions, title: { text: 'Current Week: Slightly Elevated Heart Rate' } }}
            />
          </div>
          <p className="text-yellow-500 mt-4 font-semibold">
            A3: Your heart rate is slightly elevated. Monitor closely.
          </p>
        </div>
      </div>

      {/* Right Side - Information Section */}
      <div className="w-full lg:w-[20vw] bg-gray-100 p-4">
        <h3 className="text-xl font-semibold text-teal-600 mb-4">Heart Rate Information</h3>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Q: What is a normal heart rate?</h4>
          <p className="text-gray-700">A: A normal resting heart rate for adults ranges from 60 to 100 beats per minute.</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Q: What can affect heart rate?</h4>
          <p className="text-gray-700">A: Factors such as age, fitness level, medication, and emotional state can affect your heart rate.</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Q: When should I be concerned?</h4>
          <p className="text-gray-700">A: If you notice significant changes in your heart rate, such as persistent tachycardia or bradycardia, consult a doctor.</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Q: How can I maintain a healthy heart rate?</h4>
          <p className="text-gray-700">A: Regular exercise, a balanced diet, and managing stress can help maintain a healthy heart rate.</p>
        </div>
      </div>
    </div>
  );
};

export default Vitals;
