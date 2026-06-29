import { Link } from "react-router-dom";
import {
    FaHome,
    FaUsers,
    FaBriefcase,
    FaChartBar,
    FaCog,
    FaFileAlt
} from "react-icons/fa";

function Sidebar() {
    return (
        <div className="w-64 h-screen bg-slate-900 dark:bg-black text-white p-5">

            <h1 className="text-2xl font-bold mb-8">
                ATS Dashboard
            </h1>

            <ul className="space-y-6">

                <li>
                    <Link
                        to="/"
                        className="flex items-center gap-3 hover:text-blue-400"
                    >
                        <FaHome />
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link
                        to="/candidates"
                        className="flex items-center gap-3 hover:text-blue-400"
                    >
                        <FaUsers />
                        Candidates
                    </Link>
                </li>

                <li>
                    <Link
                        to="/jobs"
                        className="flex items-center gap-3 hover:text-blue-400"
                    >
                        <FaBriefcase />
                        Jobs
                    </Link>
                </li>

                <li>
                    <Link
                        to="/analytics"
                        className="flex items-center gap-3 hover:text-blue-400"
                    >
                        <FaChartBar />
                        Analytics
                    </Link>
                </li>

                <li>
                    <Link
                        to="/resume"
                        className="flex items-center gap-3 hover:text-blue-400"
                    >
                        <FaFileAlt />
                        AI Resume
                    </Link>
                </li>

                <li>
                    <Link
                        to="/settings"
                        className="flex items-center gap-3 hover:text-blue-400"
                    >
                        <FaCog />
                        Settings
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;