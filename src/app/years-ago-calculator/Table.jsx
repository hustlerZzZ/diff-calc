import React from "react";

const YearTable = ({ years, startIndex }) => {
    return (
        <div className="p-4">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-blue-500">Year Ago</th>
                        <th className="px-4 py-2 bg-yellow-500">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {years.map((year, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2 bg-blue-300">
                                {index + startIndex} Year Ago
                            </td>
                            <td className="border px-4 py-2 bg-yellow-300">
                                {`${year.toLocaleDateString("en-US", {
                                    weekday: "long",
                                })}, ${year.toLocaleDateString("en-US", {
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
    const next50Years = Array.from({ length: 50 }, (_, index) => {
        const yearDate = new Date(currentDate);
        yearDate.setFullYear(currentDate.getFullYear() - index + 1);
        return yearDate;
    });

    const first25Years = next50Years.slice(0, 25);
    const next25Years = next50Years.slice(25);

    return (
        <div className="flex flex-col md:flex-row ">
            <YearTable years={first25Years} startIndex={1} />
            <YearTable years={next25Years} startIndex={26} />
        </div>
    );
};

export default App;
