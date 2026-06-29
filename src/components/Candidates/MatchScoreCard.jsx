function MatchScoreCard({ result }) {

    return (

        <div
            className="
            bg-white
            rounded-xl
            shadow
            p-6
            mt-6
            "
        >

            <h2
                className="
                text-xl
                font-bold
                mb-4
                "
            >
                Job Match Analysis
            </h2>


            <div className="mb-4">

                <div className="flex justify-between">

                    <span>Match Percentage</span>

                    <span className="font-bold">

                        {result.matchPercentage}%

                    </span>

                </div>


                <div
                    className="
                    w-full
                    h-4
                    bg-gray-200
                    rounded-full
                    mt-2
                    "
                >

                    <div
                        style={{
                            width:
                                `${result.matchPercentage}%`
                        }}
                        className="
                        h-4
                        bg-blue-500
                        rounded-full
                        "
                    />

                </div>

            </div>


            <div>

                <h3 className="font-bold mb-2">

                    Matched Skills

                </h3>

                <div className="flex gap-2 flex-wrap">

                    {result.matchedSkills.map(
                        (skill, index) => (

                            <span
                                key={index}
                                className="
                                bg-green-100
                                text-green-700
                                px-3
                                py-1
                                rounded-full
                                "
                            >

                                {skill}

                            </span>

                        )
                    )}

                </div>

            </div>

        </div>

    );

}

export default MatchScoreCard;