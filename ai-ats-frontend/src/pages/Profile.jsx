import MainLayout from "../layouts/MainLayout";

function Profile() {
    return (
        <MainLayout>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">

                <img
                    src="https://i.pravatar.cc/150?img=5"
                    alt="profile"
                    className="w-28 h-28 rounded-full mx-auto"
                />

                <h1 className="text-2xl font-bold text-center mt-4 dark:text-white">
                    Sakshi Dudhe
                </h1>

                <p className="text-center text-gray-500">
                    Java Full Stack Aspirant
                </p>

            </div>

        </MainLayout>
    );
}

export default Profile;