import React from "react";

const DayTable = ({ days, startIndex }) => {
    return (
        <div className="p-4">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-blue-500">Days from Now</th>
                        <th className="px-4 py-2 bg-yellow-500">Day</th>
                    </tr>
                </thead>
                <tbody>
                    {days.map((day, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2 bg-blue-300">
                                {index + startIndex} days from now
                            </td>

                            <td className="border px-4 py-2 bg-yellow-300">
                                {`${day.toLocaleDateString("en-US", {
                                    weekday: "long",
                                })}, ${day.toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}`}
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
    const last50Days = Array.from({ length: 50 }, (_, index) => {
        const dayDate = new Date(currentDate);
        dayDate.setDate(currentDate.getDate() + index);
        return dayDate;
    });

    const first25Days = last50Days.slice(0, 25);
    const next25Days = last50Days.slice(25);

    return (
        <div className="flex flex-col md:flex-row ">
            <DayTable days={first25Days} startIndex={1} />
            <DayTable days={next25Days} startIndex={26} />
        </div>
    );
};

export default App;
