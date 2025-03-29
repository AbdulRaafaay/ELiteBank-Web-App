import React from "react";
import '../userDashboard/User-dashboard.css'
import { FaTachometerAlt, FaExchangeAlt,  FaLock, FaSignOutAlt, FaChartBar, FaMoneyCheckAlt, FaQuestionCircle, FaCog, FaEllipsisH} from "react-icons/fa";

import Account from "./pages/Account";
import Transaction from "../userDashboard/pages/Transaction"
import Loan from "../userDashboard/pages/Loan";
import Settings from "./pages/Settings"
import Notifications from "./pages/Notification";
import HelpSupport from "./pages/HelpSupport";
import Statement from "./pages/Statement";
import Other from "./pages/Other";
import SideBar from "../SideBar/SideBar";
import Data from "../data/modalsData/data.json";


const iconArray = { FaTachometerAlt, FaExchangeAlt, FaChartBar, FaLock, FaMoneyCheckAlt, FaEllipsisH, FaCog, FaQuestionCircle };

export default function UserDashboard() {

    const [activeTab, setActiveTab] = React.useState("Account");

    const navItems = Data.user.map(item => item)

    return (

    <div className="user-dashboard">
        <SideBar 
            navItems={navItems}
            iconArray={iconArray}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
        />

            <main className="dashboard-content">
                {activeTab === "Account" && <Account />} 
                {activeTab === "Transactions" && <Transaction />}
                {activeTab === "Reports & Statements" && <Statement />}
                {activeTab === "Notifications" && <Notifications />}
                {activeTab === "Loan" && <Loan />}
                {activeTab === "Others" && <Other />}
                {activeTab === "Settings" && <Settings />}
                {activeTab === "Help" && <HelpSupport />}
            </main> 
    </div>          
    );
}
