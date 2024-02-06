"use client";

import { useEffect, useState } from "react";
import Table from "./table";
import Image from "next/image";

export default function page() {
    const [formValue, setFormValue] = useState(0);
    const [currentDate, setCurrentDate] = useState("");
    const [currentDay, setCurrentDay] = useState("");
    const [currentWeek, setCurrentWeek] = useState("");
    const [currentDayOfYear, setCurrentDayOfYear] = useState("");

    const getWeekAndDayOfYear = (date) => {
        const onejan = new Date(date.getFullYear(), 0, 1);
        const weekNumber = Math.ceil(
            ((date - onejan) / 86400000 + onejan.getDay() + 1) / 7
        );
        const dayOfYear = Math.floor((date - onejan) / 86400000);
        return { weekNumber, dayOfYear };
    };
    useEffect(() => {
        // Function to get the current week number and day of the year

        // Get the current date
        const currentDateObj = new Date();
        const formattedDate = currentDateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        // Get the current day of the week
        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const currentDayOfWeek = daysOfWeek[currentDateObj.getDay()];

        // Get the current week number and day of the year
        const { weekNumber, dayOfYear } = getWeekAndDayOfYear(currentDateObj);

        setCurrentDate(formattedDate);
        setCurrentDay(currentDayOfWeek);
        setCurrentWeek(`${weekNumber} / 52 weeks`);
        setCurrentDayOfYear(`${dayOfYear} / 365 days`);
    }, []);

    // Function to handle input change
    const handleInputChange = (e) => {
        setFormValue(e.target.value);
    };

    // Function to calculate and update the future date based on input value
    useEffect(() => {
        const monthsToAdd = parseInt(formValue, 10);
        if (!isNaN(monthsToAdd)) {
            const futureDateObj = new Date();
            futureDateObj.setMonth(futureDateObj.getMonth() - monthsToAdd);

            const formattedFutureDate = futureDateObj.toLocaleDateString(
                "en-US",
                {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }
            );

            setCurrentDate(formattedFutureDate);

            // Get the day of the week, week number, and day of the year for the future date
            const daysOfWeek = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            const futureDayOfWeek = daysOfWeek[futureDateObj.getDay()];

            const { weekNumber, dayOfYear } =
                getWeekAndDayOfYear(futureDateObj);

            setCurrentDay(futureDayOfWeek);
            setCurrentWeek(`${weekNumber} / 52 weeks`);
            setCurrentDayOfYear(`${dayOfYear} / 365 days`);
        }
    }, [formValue]);

    return (
        <>
            <div className="mt-8 mx-auto space-y-2">
                <h1 className="text-center font-bold text-lg md:text-2xl">
                    Months Ago Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Months Ago Calculator is a practical and efficient
                    online tool designed to quickly determine a past date by
                    counting back from the present day for a specified number of
                    months. For example, if you're trying to recall what the
                    date was 5 months ago, simply input '5' into the calculator.
                    It will swiftly compute and provide you with the exact date,
                    streamlining the process and saving you time.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-semibold text-center">
                        📅 Months Ago Calculator
                    </h2>
                </div>

                <div className="text-center space-y-4">
                    <div className="space-y-2">
                        <h2>Months Ago</h2>
                        <input
                            type="number"
                            value={formValue}
                            onChange={(e) => setFormValue(e.target.value)}
                            className="p-2 border-solid border-2 text-center border-gray-200
                        focus:border-gray-300 focus:outline-none"
                        />
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <div className="p-4 rounded-md shadow-lg">
                            <span>📅 Date</span>
                            <h2>{currentDate}</h2>
                        </div>
                        <div className="p-4 rounded-md shadow-lg">
                            <span>🌞 Day</span>
                            <h2>{currentDay}</h2>
                        </div>
                        <div className="p-4 rounded-md shadow-lg">
                            <span>📅 Week</span>
                            <h2>{currentWeek}</h2>
                        </div>
                        <div className="p-4 rounded-md shadow-lg">
                            <span>📅 Year</span>
                            <h2>{currentDayOfYear}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8 p-2">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to Use the Months Ago Calculator
                    </h2>
                    <p>
                        Using the Months Ago Calculator is an incredibly
                        straightforward process, making it simple to determine a
                        past date from a specified number of months ago. Whether
                        for personal remembrance, professional deadlines, or
                        historical interest, this tool can quickly provide the
                        information you need. Here's a guide on how to use it:
                    </p>
                    <Image
                        src={"/monthsAgo.jpeg"}
                        width={300}
                        height={300}
                        className="mx-auto my-4"
                    />
                </div>
                <div className="space-y-2">
                    <ol className="list-none">
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 1
                            </span>{" "}
                            <p>
                                <strong>Enter the Number of Months Ago</strong>{" "}
                                <ul className="list-disc">
                                    <li>
                                        Locate the input field on the calculator
                                        labeled "Months Ago."
                                    </li>
                                    <li>
                                        Input the number of months you wish to
                                        backtrack. For instance, if you're
                                        interested in finding out the date that
                                        was 7 months ago, simply type '7' in
                                        this field.
                                    </li>
                                </ul>
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>View the Results</strong>
                                <ul className="list-disc">
                                    <li>
                                        Upon entering the number of months, the
                                        calculator immediately computes this
                                        against the current local date.
                                    </li>
                                    <li>
                                        The result is displayed almost
                                        instantly. This includes the exact date
                                        corresponding to the entered number of
                                        months ago.
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ol>
                </div>
                <div className="space-y-2">
                    <div>
                        <h3 className="text-blue-500 text-center font-bold text-xl">
                            Months Ago Calculator Input and Outputs
                        </h3>
                        <p className="mt-2">
                            The Months Ago Calculator is a specialized tool
                            designed to provide you with the exact date
                            corresponding to a specific number of months in the
                            past. Here’s a clear breakdown of its input and
                            outputs:
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Input: Months Ago
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The calculator features a single input field
                                labeled "Months Ago."
                            </li>
                            <li>
                                This field is where you enter the number of
                                months you want to go back in time. It accepts
                                numeric values only.
                            </li>
                            <li>
                                For instance, to find out the date that was 6
                                months ago, you simply input '6' into this
                                field.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Outputs of the Calculator
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The results of the calculation are neatly
                                displayed, making it easy to understand the
                                historical date you’ve queried:
                                <ul>
                                    <li>
                                        <strong>Date:</strong> This box shows
                                        the exact date corresponding to the
                                        entered number of months ago.
                                    </li>
                                    <li>
                                        <strong>Day:</strong> It also indicates
                                        the day of the week for that date.
                                    </li>
                                    <li>
                                        <strong>Week and Year:</strong>{" "}
                                        Additional information includes the week
                                        number and year number within the year
                                        for the calculated date. These are
                                        essentially a countdown of the days and
                                        weeks of the year.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 1 to 50 months ago from today in a table
                    format.
                </h3>
                <Table />
            </div>
        </>
    );
}
