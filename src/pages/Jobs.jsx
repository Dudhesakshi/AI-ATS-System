import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Jobs() {

    const [jobs, setJobs] = useState(() => {

        const savedJobs = localStorage.getItem("jobs");

        return savedJobs
            ? JSON.parse(savedJobs)
            : [
                {
                    id: 1,
                    title: "Java Full Stack Developer",
                    experience: "0-2 Years",
                    location: "Pune",
                    openings: 3
                },
                {
                    id: 2,
                    title: "React Developer",
                    experience: "1-3 Years",
                    location: "Mumbai",
                    openings: 2
                }
            ];
    });

    const [newJob, setNewJob] = useState({
        title: "",
        experience: "",
        location: "",
        openings: ""
    });

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        localStorage.setItem(
            "jobs",
            JSON.stringify(jobs)
        );
    }, [jobs]);

    const handleChange = (e) => {
        setNewJob({
            ...newJob,
            [e.target.name]: e.target.value
        });
    };

    const saveJob = () => {

        if (
            !newJob.title ||
            !newJob.experience ||
            !newJob.location ||
            !newJob.openings
        ) {
            alert("Fill all fields");
            return;
        }

        if (editId) {

            const updatedJobs = jobs.map((job) =>
                job.id === editId
                    ? { ...job, ...newJob }
                    : job
            );

            setJobs(updatedJobs);

            setEditId(null);

        } else {

            const job = {
                id: Date.now(),
                ...newJob
            };

            setJobs([...jobs, job]);
        }

        setNewJob({
            title: "",
            experience: "",
            location: "",
            openings: ""
        });
    };

    const deleteJob = (id) => {

        const updatedJobs =
            jobs.filter(
                (job) => job.id !== id
            );

        setJobs(updatedJobs);
    };

    const editJob = (job) => {

        setNewJob({
            title: job.title,
            experience: job.experience,
            location: job.location,
            openings: job.openings
        });

        setEditId(job.id);
    };

    return (
        <MainLayout>

            <h1 className="text-3xl font-bold mb-6 dark:text-white">
                Jobs Management
            </h1>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow mb-8">

                <h2 className="text-xl font-bold mb-4 dark:text-white">

                    {editId ? "Update Job" : "Add New Job"}

                </h2>

                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={newJob.title}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3 rounded"
                />

                <input
                    type="text"
                    name="experience"
                    placeholder="Experience"
                    value={newJob.experience}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3 rounded"
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={newJob.location}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3 rounded"
                />

                <input
                    type="number"
                    name="openings"
                    placeholder="Openings"
                    value={newJob.openings}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3 rounded"
                />

                <button
                    onClick={saveJob}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded"
                >
                    {editId ? "Update Job" : "Add Job"}
                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {jobs.map((job) => (

                    <div
                        key={job.id}
                        className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow"
                    >

                        <h2 className="text-xl font-bold dark:text-white">
                            {job.title}
                        </h2>

                        <p className="dark:text-gray-300 mt-2">
                            Experience: {job.experience}
                        </p>

                        <p className="dark:text-gray-300">
                            Location: {job.location}
                        </p>

                        <p className="dark:text-gray-300">
                            Openings: {job.openings}
                        </p>

                        <div className="flex gap-3 mt-4">

                            <button
                                onClick={() => editJob(job)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => deleteJob(job.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </MainLayout>
    );
}

export default Jobs;