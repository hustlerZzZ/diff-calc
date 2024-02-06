import React from "react";

const WeekTable = ({ weeks }) => {
    return (
        <div className="p-4">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-blue-500 text-white">
                            Weeks from Now
                        </th>
                        <th className="px-4 py-2 bg-yellow-500 text-white">
                            Week
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week) => (
                        <tr key={week.weekNumber}>
                            <td className="border px-4 py-2 bg-blue-300 ">
                                {week.weekNumber} weeks from now
                            </td>
                            <td className="border px-4 py-2 bg-yellow-100">
                                {`${week.startDate.toLocaleDateString("en-US", {
                                    weekday: "long",
                                })}`}
                                ,{" "}
                                {week.endDate.toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const App = () => {
    const currentDate = new Date();
    const first25Weeks = Array.from({ length: 25 }, (_, index) => {
        const weekStartDate = new Date(currentDate);
        weekStartDate.setDate(currentDate.getDate() + index * 7);
        const weekEndDate = new Date(weekStartDate);
        weekEndDate.setDate(weekStartDate.getDate() + 7);
        return {
            weekNumber: index + 1,
            startDate: weekStartDate,
            endDate: weekEndDate,
        };
    });

    const next25Weeks = Array.from({ length: 25 }, (_, index) => {
        const weekStartDate = new Date(currentDate);
        weekStartDate.setDate(currentDate.getDate() + (index * 7 + 25 * 7));
        const weekEndDate = new Date(weekStartDate);
        weekEndDate.setDate(weekStartDate.getDate() + 7);
        return {
            weekNumber: index + 26,
            startDate: weekStartDate,
            endDate: weekEndDate,
        };
    });

    return (
        <div className="flex flex-col md:flex-row">
            <WeekTable weeks={first25Weeks} />
            <WeekTable weeks={next25Weeks} />
        </div>
    );
};

export default App;
