import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    { name: "Selected", value: 15 },
    { name: "Interview", value: 40 },
    { name: "Screening", value: 75 },
    { name: "Rejected", value: 30 }
];

const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042"
];

function HiringChart() {
    return (
        <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-xl font-bold mb-5">
                Hiring Analytics
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={100}
                        label
                    >

                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />
                        ))}

                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </div>
    );
}

export default HiringChart;