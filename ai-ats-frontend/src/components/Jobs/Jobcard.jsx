function JobCard({ job, deleteJob }) {
    return (
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow">

            <h2 className="text-xl font-bold dark:text-white">
                {job.title}
            </h2>

            <p className="mt-3 dark:text-gray-300">
                Experience: {job.experience}
            </p>

            <p className="dark:text-gray-300">
                Location: {job.location}
            </p>

            <p className="dark:text-gray-300">
                Openings: {job.openings}
            </p>

            <button
                onClick={() => deleteJob(job.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Delete
            </button>

        </div>
    );
}

export default JobCard;