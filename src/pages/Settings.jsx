import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Settings() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <MainLayout>
            <h1 className="text-3xl font-bold mb-6 dark:text-white">
                Settings
            </h1>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">

                <div className="flex justify-between items-center">

                    <h2 className="text-xl font-semibold dark:text-white">
                        Dark Mode
                    </h2>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        {darkMode ? "ON" : "OFF"}
                    </button>

                </div>

            </div>

        </MainLayout>
    );
}

export default Settings;