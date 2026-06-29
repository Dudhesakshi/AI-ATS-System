import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

function AddCandidate() {

    const navigate = useNavigate();

    const [candidate, setCandidate] = useState({

        name: "",
        email: "",
        role: "",
        experience: "",
        skills: "",
        score: 0

    });

    const handleChange = (e) => {

        setCandidate({

            ...candidate,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post(
                "/candidates",
                candidate
            );

            console.log(
                response.data
            );

            alert(
                "Candidate Added Successfully"
            );

            navigate(
                "/candidates"
            );

        }

        catch (error) {

            console.log(error);

            alert(
                "Failed to add candidate"
            );

        }

    };

    return (

        <MainLayout>

            <h1 className="text-3xl font-bold mb-6">

                Add Candidate

            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    type="text"
                    name="name"
                    value={candidate.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="email"
                    name="email"
                    value={candidate.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="role"
                    value={candidate.role}
                    onChange={handleChange}
                    placeholder="Role"
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="experience"
                    value={candidate.experience}
                    onChange={handleChange}
                    placeholder="Experience"
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    name="skills"
                    value={candidate.skills}
                    onChange={handleChange}
                    placeholder="Skills"
                    className="w-full border p-3 rounded"
                />

                <input
                    type="number"
                    name="score"
                    value={candidate.score}
                    onChange={handleChange}
                    placeholder="Score"
                    className="w-full border p-3 rounded"
                />

                <button
                    type="submit"
                    className="
                    bg-blue-600
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    "
                >

                    Save Candidate

                </button>

            </form>

        </MainLayout>

    );

}

export default AddCandidate;