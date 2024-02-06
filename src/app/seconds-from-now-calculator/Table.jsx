import React from "react";

const HourTable = ({ hours }) => {
    return (
        <div className="p-4">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-blue-500">S. No</th>
                        <th className="px-4 py-2 bg-yellow-500">Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                    {hours.map((hour, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2 bg-blue-300">
                                {index + 1}
                            </td>
                            <td className="border px-4 py-2 bg-yellow-300">
                                {`${hour.toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}, ${hour.toLocaleString("en-US", {
                                    hour: "numeric",
                                    minute: "2-digit",
                                    second: "2-digit",
                                    hour12: true,
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
    const next50Hours = Array.from({ length: 50 }, (_, index) => {
        const hourDate = new Date(currentDate);
        hourDate.setSeconds(currentDate.getSeconds() + 10 * index);
        return hourDate;
    });

    const first25Hours = next50Hours.slice(0, 25);
    const next25Hours = next50Hours.slice(25);

    return (
        <div className="flex flex-col md:flex-row ">
            <HourTable hours={first25Hours} />
            <HourTable hours={next25Hours} />
        </div>
    );
};

export default App;
