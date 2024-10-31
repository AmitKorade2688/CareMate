import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';

const Sidebar = ({ selectedTab, setSelectedTab }) => {
    const [isAccountOpen, setIsAccountOpen] = useState(false); // State to handle dropdown animation

    const handleHome = () => {
        setSelectedTab("Home");
    };

    const toggleAccountDropdown = () => {
        setIsAccountOpen(!isAccountOpen); // Toggle dropdown
    };

    return (
        <>
            <div className="flex-shrink-0 p-4 bg-gray-100 w-[15vw] h-[100vh] hidden lg:flex flex-col justify-between">
                <div>
                    <a href="/" className="flex items-center pb-3 mb-6 text-black no-underline border-b border-gray-300">
                        <span className="text-xl font-semibold">CareMate</span>
                    </a>

                    <ul className="flex flex-col mb-auto space-y-3">
                        <li className="nav-item" onClick={handleHome}>
                            <a href="#" className={`text-gray-700 hover:bg-gray-200 hover:text-black rounded-md p-2 flex items-center transition duration-200 ${selectedTab === 'Home' && 'bg-gray-300 text-black'}`}>
                                <i className='bx bx-home mr-2 text-xl'></i>
                                Dashboard
                            </a>
                        </li>

                        <li onClick={() => setSelectedTab("Medications")}>
                            <a href="#" className={`text-gray-700 hover:bg-gray-200 hover:text-black rounded-md p-2 flex items-center transition duration-200 ${selectedTab === 'Medications' && 'bg-gray-300 text-black'}`}>
                                <i className="bx bx-capsule mr-2 text-xl"></i>
                                Medications
                            </a>
                        </li>

                        <li onClick={() => setSelectedTab("Conditions")}>
                            <a href="#" className={`text-gray-700 hover:bg-gray-200 hover:text-black rounded-md p-2 flex items-center transition duration-200 ${selectedTab === 'Conditions' && 'bg-gray-300 text-black'}`}>
                                <i className='bx bx-pulse mr-2 text-xl'></i>
                                Conditions
                            </a>
                        </li>

                        <li onClick={() => setSelectedTab("Appointments")}>
                            <a href="#" className={`text-gray-700 hover:bg-gray-200 hover:text-black rounded-md p-2 flex items-center transition duration-200 ${selectedTab === 'Appointments' && 'bg-gray-300 text-black'}`}>
                                <i className="bx bx-calendar-check mr-2 text-xl"></i>
                                Appointments
                            </a>
                        </li>

                        <li onClick={() => setSelectedTab("Vitals")}>
                            <a href="#" className={`text-gray-700 hover:bg-gray-200 hover:text-black rounded-md p-2 flex items-center transition duration-200 ${selectedTab === 'Vitals' && 'bg-gray-300 text-black'}`}>
                                <i className='bx bx-heart mr-2 text-xl'></i>
                                Vitals
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="border-t border-gray-300 mt-3 pt-3">
                    <button
                        className="flex items-center justify-between text-gray-700 hover:text-black w-full transition duration-300 focus:outline-none"
                        onClick={toggleAccountDropdown}
                    >
                        <span>Account</span>
                        <i className={`bx ${isAccountOpen ? 'bx-chevron-up' : 'bx-chevron-down'} transition-transform duration-300`}></i>
                    </button>

                    {/* Dropdown animation */}
                    <div
                        className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${isAccountOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <ul className="list-none space-y-2 text-center">
                            <li><a href="#" className="text-gray-700 hover:bg-gray-200 hover:text-black rounded-md p-2 block transition duration-200">Profile</a></li>
                            <li><a href="#" className="text-gray-700 hover:bg-gray-200 hover:text-black rounded-md p-2 block transition duration-200">Settings</a></li>
                            <li><a href="#" className="text-gray-700 hover:bg-gray-200 hover:text-black rounded-md p-2 block transition duration-200">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
