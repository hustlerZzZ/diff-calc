import React from "react";

const MonthTable = ({ months }) => {
    return (
        <div className="p-4">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-blue-500 text-white">
                            S. No
                        </th>
                        <th className="px-4 py-2 bg-yellow-500 text-white">
                            Month
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {months.map((month, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2 bg-blue-300 ">
                                {index + 1} months ago
                            </td>
                            <td className="border px-4 py-2 bg-yellow-300">
                                {`${month.toLocaleDateString("en-US", {
                                    weekday: "long",
                                })}, ${month.toLocaleDateString("en-US", {
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
    const next50Months = Array.from({ length: 50 }, (_, index) => {
        const monthDate = new Date(currentDate);
        monthDate.setMonth(currentDate.getMonth() - index + 1);
        return monthDate;
    });

    const first25Months = next50Months.slice(0, 25);
    const next25Months = next50Months.slice(25);

    return (
        <div className="flex flex-col md:flex-row ">
            <MonthTable months={first25Months} />
            <MonthTable months={next25Months} />
        </div>
    );
};

export default App;
