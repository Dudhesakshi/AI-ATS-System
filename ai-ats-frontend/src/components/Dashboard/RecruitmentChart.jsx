import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        stage: "Applied",
        count: 120
    },
    {
        stage: "Screening",
        count: 75
    },
    {
        stage: "Interview",
        count: 40
    },
    {
        stage: "Selected",
        count: 15
    },
    {
        stage: "Rejected",
        count: 30
    }
];

function RecruitmentChart() {
    return (
        <div className="bg-white p-6 rounded-xl shadow mt-8">

            <h2 className="text-xl font-bold mb-5">
                Recruitment Pipeline
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >
                <BarChart data={data}>
                    <XAxis dataKey="stage" />
                    <YAxis />
                    <Tooltip />

                    <Bar
                        dataKey="count"
                    />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}

export default RecruitmentChart;