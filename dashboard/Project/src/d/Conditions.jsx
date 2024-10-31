import React, { useEffect, useState } from 'react';

// Mock medication data that relates to conditions
const medicationData = [
  { name: 'Metformin', conditions: ['Diabetes'] },
  { name: 'Lisinopril', conditions: ['Hypertension'] },
  { name: 'Epinephrine', conditions: ['Peanut Allergy'] },
  { name: 'Albuterol', conditions: ['Asthma'] },
  { name: 'Cetirizine', conditions: ['Seasonal Allergies'] },
];

const Conditions = () => {
  const [conditions, setConditions] = useState({
    currentWeek: [],
    lastWeek: [],
    twoWeeksAgo: [],
    threeWeeksAgo: [],
  });

  useEffect(() => {
    const fetchConditions = async () => {
      // Mocking an API call to fetch conditions based on medications
      setTimeout(() => {
        setConditions({
          currentWeek: [
            { name: 'Diabetes', severity: 'Chronic', doctor: 'Dr. Smith', notes: 'Regular monitoring required.', medications: ['Metformin'] },
            { name: 'Hypertension', severity: 'Moderate', doctor: 'Dr. Jones', notes: 'Medication required.', medications: ['Lisinopril'] },
          ],
          lastWeek: [
            { name: 'Peanut Allergy', severity: 'Severe', doctor: 'Dr. Brown', notes: 'Avoid peanuts entirely.', medications: ['Epinephrine'] },
          ],
          twoWeeksAgo: [
            { name: 'Asthma', severity: 'Mild', doctor: 'Dr. White', notes: 'Use inhaler as needed.', medications: ['Albuterol'] },
          ],
          threeWeeksAgo: [
            { name: 'Seasonal Allergies', severity: 'Mild', doctor: 'Dr. Green', notes: 'Take antihistamines.', medications: ['Cetirizine'] },
          ],
        });
      }, 1000);
    };

    fetchConditions();
  }, []);

  const renderConditions = (conditionList, title) => (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-teal-600 mb-4">{title}</h3>
      <ul className="space-y-4">
        {conditionList.length === 0 ? (
          <p className="text-gray-500">No conditions for this period.</p>
        ) : (
          conditionList.map((condition, index) => (
            <li key={index} className="text-lg">
              <div className="flex justify-between">
                <span className="font-semibold">{condition.name}</span>
                <span className="text-sm text-gray-500">{condition.severity}</span>
              </div>
              <div className="text-sm text-gray-600 mb-1">Prescribed by: {condition.doctor}</div>
              <div className="text-sm text-gray-500">Notes: {condition.notes}</div>
              <div className="text-sm text-gray-700">Medications: {condition.medications.join(', ')}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">Conditions & Allergies History</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Conditions for Current Week */}
        {renderConditions(conditions.currentWeek, 'Current Week')}

        {/* Conditions for Last Week */}
        {renderConditions(conditions.lastWeek, 'Last Week')}

        {/* Conditions for Two Weeks Ago */}
        {renderConditions(conditions.twoWeeksAgo, 'Two Weeks Ago')}

        {/* Conditions for Three Weeks Ago */}
        {renderConditions(conditions.threeWeeksAgo, 'Three Weeks Ago')}
      </div>
    </div>
  );
};

export default Conditions;
