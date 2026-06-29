import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

function CandidateDetails() {

    const { id } = useParams();

    const [candidate, setCandidate] =
        useState(null);

    useEffect(() => {

        loadCandidate();

    }, []);

    const loadCandidate = async () => {

        try {

            const response =
                await API.get(
                    `/candidates/${id}`
                );

            setCandidate(
                response.data
            );

        }

        catch (error) {

            console.log(error);

        }

    };

    if (!candidate) {

        return (

            <MainLayout>

                <h1 className="text-2xl font-bold">

                    Loading...

                </h1>

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <div className="bg-white p-8 rounded-xl shadow-lg">

                <h1 className="text-3xl font-bold">

                    {candidate.name}

                </h1>

                <p className="text-gray-500">

                    {candidate.role}

                </p>

                <div className="mt-6">

                    <p>

                        <strong>Email:</strong>
                        {" "}
                        {candidate.email}

                    </p>

                    <p>

                        <strong>Experience:</strong>
                        {" "}
                        {candidate.experience}

                    </p>

                </div>

                <div className="mt-6">

                    <h2 className="font-bold mb-3">

                        Skills

                    </h2>

                    <div className="flex flex-wrap gap-2">

                        {candidate.skills
                            .split(",")
                            .map((skill, index) => (

                                <span
                                    key={index}
                                    className="
                                    bg-blue-100
                                    text-blue-700
                                    px-3
                                    py-1
                                    rounded-full
                                    "
                                >

                                    {skill}

                                </span>

                            ))}

                    </div>

                </div>

                <div className="mt-6">

                    <h2 className="font-bold">

                        Resume Score:
                        {" "}
                        {candidate.score}%

                    </h2>

                </div>

            </div>

        </MainLayout>

    );

}

export default CandidateDetails;