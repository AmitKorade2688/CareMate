import React, { useEffect, useState } from 'react';

const Medications = () => {
  const [medications, setMedications] = useState({
    currentWeek: [],
    lastWeek: [],
    twoWeeksAgo: [],
    threeWeeksAgo: [],
  });

  useEffect(() => {
    const fetchMedications = async () => {
      // Mocking an API call
      setTimeout(() => {
        setMedications({
          currentWeek: [
            { name: 'Metformin', dosage: '500mg', timing: 'Morning', description: 'Used for blood sugar control', status: 'Ongoing', doctor: 'Dr. John' },
            { name: 'Lisinopril', dosage: '10mg', timing: 'Evening', description: 'Used for blood pressure', status: 'Ongoing', doctor: 'Dr. Jane' },
          ],
          lastWeek: [
            { name: 'Atorvastatin', dosage: '40mg', timing: 'Night', description: 'Cholesterol medication', status: 'Completed', doctor: 'Dr. John' },
            { name: 'Aspirin', dosage: '75mg', timing: 'Morning', description: 'For heart health', status: 'Completed', doctor: 'Dr. Jane' },
          ],
          twoWeeksAgo: [
            { name: 'Ibuprofen', dosage: '200mg', timing: 'Afternoon', description: 'For pain relief', status: 'Completed', doctor: 'Dr. Doe' },
          ],
          threeWeeksAgo: [
            { name: 'Amoxicillin', dosage: '500mg', timing: 'Morning and Evening', description: 'Antibiotic for infection', status: 'Completed', doctor: 'Dr. Jane' },
          ],
        });
      }, 2000);
    };

    fetchMedications();
  }, []);

  const renderMedications = (medicationList, title) => (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-teal-600 mb-4">{title}</h3>
      <ul className="space-y-4">
        {medicationList.length === 0 ? (
          <p className="text-gray-500">No medications for this period.</p>
        ) : (
          medicationList.map((med, index) => (
            <li key={index} className="text-lg">
              <div className="flex justify-between">
                <span className="font-semibold">{med.name}</span>
                <span className="text-sm text-gray-500">{med.dosage}</span>
              </div>
              <div className="text-sm text-gray-500 mb-1">Timing: {med.timing}</div>
              <div className="text-sm text-gray-600 mb-1">{med.description}</div>
              <div className="text-sm text-gray-500">Status: {med.status}</div>
              <div className="text-sm text-gray-500">Prescribed by: {med.doctor}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );

  return (
    <div className="container w-[85vw] mx-auto p-6">
      <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">Medications History</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Medications for Current Week */}
        {renderMedications(medications.currentWeek, 'Current Week')}

        {/* Medications for Last Week */}
        {renderMedications(medications.lastWeek, 'Last Week')}

        {/* Medications for Two Weeks Ago */}
        {renderMedications(medications.twoWeeksAgo, 'Two Weeks Ago')}

        {/* Medications for Three Weeks Ago */}
        {renderMedications(medications.threeWeeksAgo, 'Three Weeks Ago')}
      </div>
    </div>
  );
};

export default Medications;
