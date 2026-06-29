import MainLayout from "../layouts/MainLayout";

import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function Analytics() {

    const candidateData = [

        {
            name: "Java",
            candidates: 12
        },

        {
            name: "React",
            candidates: 8
        },

        {
            name: "Python",
            candidates: 15
        },

        {
            name: "Spring",
            candidates: 10
        }

    ];

    const scoreData = [

        {
            name: "Selected",
            value: 18
        },

        {
            name: "Rejected",
            value: 7
        },

        {
            name: "Pending",
            value: 10
        }

    ];

    const COLORS = [
        "#2563eb",
        "#22c55e",
        "#f59e0b"
    ];

    return (

        <MainLayout>

            <h1
                className="
                text-3xl
                font-bold
                mb-6
                "
            >
                Analytics Dashboard
            </h1>

            {/* Top Cards */}

            <div
                className="
                grid
                md:grid-cols-3
                gap-6
                mb-8
                "
            >

                <div
                    className="
                    bg-white
                    p-6
                    rounded-xl
                    shadow
                    "
                >

                    <h2 className="text-gray-500">
                        Total Candidates
                    </h2>

                    <p className="text-3xl font-bold">
                        35
                    </p>

                </div>

                <div
                    className="
                    bg-white
                    p-6
                    rounded-xl
                    shadow
                    "
                >

                    <h2 className="text-gray-500">
                        Selected
                    </h2>

                    <p className="text-3xl font-bold text-green-600">
                        18
                    </p>

                </div>

                <div
                    className="
                    bg-white
                    p-6
                    rounded-xl
                    shadow
                    "
                >

                    <h2 className="text-gray-500">
                        Average ATS Score
                    </h2>

                    <p className="text-3xl font-bold text-blue-600">
                        84%
                    </p>

                </div>

            </div>

            {/* Charts */}

            <div
                className="
                grid
                lg:grid-cols-2
                gap-8
                "
            >

                {/* Bar Chart */}

                <div
                    className="
                    bg-white
                    p-6
                    rounded-xl
                    shadow
                    "
                >

                    <h2
                        className="
                        text-xl
                        font-bold
                        mb-4
                        "
                    >
                        Skills Distribution
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={300}
                    >

                        <BarChart
                            data={candidateData}
                        >

                            <XAxis dataKey="name" />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="candidates"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

                {/* Pie Chart */}

                <div
                    className="
                    bg-white
                    p-6
                    rounded-xl
                    shadow
                    "
                >

                    <h2
                        className="
                        text-xl
                        font-bold
                        mb-4
                        "
                    >
                        Candidate Status
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={300}
                    >

                        <PieChart>

                            <Pie
                                data={scoreData}
                                dataKey="value"
                                outerRadius={100}
                                label
                            >

                                {scoreData.map(
                                    (
                                        entry,
                                        index
                                    ) => (

                                        <Cell
                                            key={index}
                                            fill={
                                                COLORS[index]
                                            }
                                        />

                                    )
                                )}

                            </Pie>

                            <Tooltip />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </MainLayout>

    );

}

export default Analytics;