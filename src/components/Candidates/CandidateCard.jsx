import { Link } from "react-router-dom";

function CandidateCard({ candidate }) {

    return (

        <Link to={`/candidate/${candidate.id}`}>

            <div className="
            bg-white
            p-5
            rounded-xl
            shadow
            hover:shadow-lg
            cursor-pointer
            transition
            ">

                <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="
                    w-20
                    h-20
                    rounded-full
                    mx-auto
                    "
                />

                <h2 className="text-xl font-bold mt-3 text-center">

                    {candidate.name}

                </h2>

                <p className="text-center text-gray-500">

                    {candidate.role}

                </p>

            </div>

        </Link>

    );

}

export default CandidateCard;