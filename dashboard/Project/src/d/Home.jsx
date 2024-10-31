import Dashboard from "./Dashboard";
import Conditions from "./Conditions";
import Appointment from "./Appointments";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Medications from "./Medications";
import Vitals from "./Vitals";

const Home = () => {
    const [selectedTab, setSelectedTab] = useState("Home");
    return (
        <>
            <div className="flex">
                <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
                <div className="flex flex-col">
                    {selectedTab === "Home" && <Dashboard />}
                    {selectedTab === "Conditions" && <Conditions />}
                    {selectedTab === "Appointments" && <Appointment />}
                    {selectedTab === "Medications" && <Medications />}
                    {selectedTab === "Vitals" && <Vitals />}
                </div>
            </div>
        </>
    )
}

export default Home;    