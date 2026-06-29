import Sidebar from "../components/Shared/Sidebar";
import Navbar from "../components/Shared/Navbar";

function MainLayout({ children }) {

    return (

        <div className="flex">

            {/* Fixed Sidebar */}

            <div
                className="
                fixed
                left-0
                top-0
                h-screen
                w-64
                "
            >

                <Sidebar />

            </div>


            {/* Main Content Area */}

            <div
                className="
                flex-1
                ml-64
                bg-gray-100
                dark:bg-slate-900
                min-h-screen
                transition
                "
            >

                {/* Navbar */}

                <Navbar />


                {/* Page Content */}

                <div className="p-6">

                    {children}

                </div>


                {/* Footer */}

                <footer
                    className="
                    text-center
                    py-4
                    text-gray-500
                    mt-10
                    "
                >

                    AI ATS Dashboard © 2026

                </footer>

            </div>

        </div>

    );

}

export default MainLayout;