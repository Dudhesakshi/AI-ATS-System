import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CandidateCard from "../components/Candidates/CandidateCard";
import API from "../services/api";

function Candidates() {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {

        loadCandidates();

    }, []);


    const loadCandidates = async () => {

        try {

            const response =
                await API.get("/candidates");

            setCandidates(
                response.data
            );

        }

        catch (error) {

            console.log(
                "Error loading candidates:",
                error
            );

        }

    };


    const deleteCandidate = async (id) => {

        try {

            await API.delete(
                `/candidates/${id}`
            );

            loadCandidates();

        }

        catch (error) {

            console.log(
                "Delete Error:",
                error
            );

        }

    };


    return (

        <MainLayout>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">

                    Candidates

                </h1>

                <Link
                    to="/add-candidate"
                    className="
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    "
                >

                    + Add Candidate

                </Link>

            </div>


            <div
                className="
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
                "
            >

                {candidates.map((candidate) => (

                    <div
                        key={candidate.id}
                        className="relative"
                    >

                        <CandidateCard
                            candidate={candidate}
                        />

                        <button
                            onClick={() =>
                                deleteCandidate(
                                    candidate.id
                                )
                            }
                            className="
                            bg-red-500
                            text-white
                            px-3
                            py-2
                            rounded
                            mt-2
                            w-full
                            "
                        >

                            Delete

                        </button>

                    </div>

                ))}

            </div>

        </MainLayout>

    );

}

export default Candidates;