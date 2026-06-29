import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/Dashboard/StatCard";
import RecruitmentChart from "../components/Dashboard/RecruitmentChart";
import API from "../services/api";

function Dashboard() {

    const [totalCandidates, setTotalCandidates] =
        useState(0);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const response =
                await API.get(
                    "/candidates"
                );

            setTotalCandidates(
                response.data.length
            );

        }

        catch (error) {

            console.log(
                error
            );

        }

    };

    return (

        <MainLayout>

            <h1
                className="
            text-3xl
            font-bold
            mb-6
            "
            >

                ATS Dashboard

            </h1>


            <div
                className="
            grid
            grid-cols-4
            gap-6
            "
            >

                <StatCard
                    title="Total Candidates"
                    value={totalCandidates}
                />

                <StatCard
                    title="Active Jobs"
                    value="15"
                />

                <StatCard
                    title="Interviews"
                    value="28"
                />

                <StatCard
                    title="Selected"
                    value="12"
                />

            </div>


            <RecruitmentChart />

            <div
className="
bg-white
dark:bg-slate-800
p-6
rounded-xl
shadow-md
mt-8
"
>

    <h2
    className="
    text-2xl
    font-bold
    mb-4
    "
    >

        About AI ATS Dashboard

    </h2>

    <p
    className="
    text-gray-600
    dark:text-gray-300
    leading-7
    "
    >

        AI ATS Dashboard is a Full Stack recruitment
        management system built using React,
        Spring Boot and MySQL.

        It helps recruiters manage candidates,
        upload resumes, analyze ATS scores,
        view candidate profiles, and track
        recruitment analytics through an
        interactive dashboard.

    </p>

</div>

        </MainLayout>

    );

}

export default Dashboard;