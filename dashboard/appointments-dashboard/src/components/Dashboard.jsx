import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/appointments'); // Change port if needed
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
                setError('Error fetching appointments');
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    if (loading) {
        return <div>Loading appointments...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Appointments Dashboard</h1>

            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="py-2 px-4 text-left">Name</th>
                        <th className="py-2 px-4 text-left">Email</th>
                        <th className="py-2 px-4 text-left">Date</th>
                        <th className="py-2 px-4 text-left">Time</th>
                        <th className="py-2 px-4 text-left">Service</th>
                        {/* Add more headers based on your appointment fields */}
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-2 px-4">{appointment.name}</td>
                            <td className="py-2 px-4">{appointment.email}</td>
                            <td className="py-2 px-4">{appointment.date}</td>
                            <td className="py-2 px-4">{appointment.time}</td>
                            <td className="py-2 px-4">{appointment.service}</td>
                            {/* Add more cells based on your appointment fields */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
