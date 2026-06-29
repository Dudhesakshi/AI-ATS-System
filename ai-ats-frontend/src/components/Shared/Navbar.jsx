import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-white dark:bg-slate-800 shadow p-4 flex justify-between items-center">

            <h2 className="text-xl font-semibold dark:text-white">
                Welcome Recruiter
            </h2>

            <Link to="/profile">

                <img
                    src="https://i.pravatar.cc/40?img=5"
                    alt="profile"
                    className="w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition"
                />

            </Link>

        </div>
    );
}

export default Navbar;