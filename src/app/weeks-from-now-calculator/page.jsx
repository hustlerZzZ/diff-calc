"use client";

import { useEffect, useState } from "react";
import WeekTable from "./WeekTable";
import Image from "next/image";
import RelatedLink from "@/components/RelatedLink";

function page() {
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

    useEffect(() => {
        const weeksToAdd = parseInt(formValue, 10);
        if (!isNaN(weeksToAdd)) {
            const futureDateObj = new Date();
            futureDateObj.setDate(futureDateObj.getDate() + weeksToAdd * 7);

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
                <h1 className="font-bold text-lg md:text-2xl text-center">
                    Weeks From Now Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The <em>Weeks From Now Calculator</em> is a powerful,
                    user-friendly tool, designed for precise date calculations.
                    Enter the number of weeks and it instantly computes the
                    corresponding future date from a given start point. This
                    easy-to-use calculator is perfect for planning, scheduling,
                    and countdown needs.
                </p>
            </div>
            <div className="p-8 -translate-y-6 mx-auto space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-semibold text-center">
                        📅 Weeks From Now Calculator
                    </h2>
                </div>
    
                <div className="text-center space-y-4">
                    <div className="space-y-2">
                        <h2>Weeks from now</h2>
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
                        How to use Weeks from now calculator
                    </h2>
                </div>
                <div className="space-y-2">
                    <ol className="list-none">
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 1
                            </span>{" "}
                            <p>
                                Enter the number of weeks from the present date
                                you want to calculate in the "Weeks from now"
                                field.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                After entering the number of weeks, the
                                calculator will automatically provide the
                                corresponding future date.
                            </p>
                        </li>
                    </ol>
                    <div>
                        <h3>The output you will receive will include:</h3>
                        <ul className="list-disc list-inside">
                            <li>
                                Date: This shows the exact future date after the
                                specified number of weeks.
                            </li>
                            <li>
                                Day: This reveals the day of the week that the
                                future date falls on.
                            </li>
                            <li>
                                Week: This denotes the week number of the year
                                for the future date (out of 52 weeks).
                            </li>
                            <li>
                                Year: This shows the day number of the year for
                                the future date (out of 365 days).
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            To illustrate with a real-life example, let's say
                            you have a project deadline that is 10 weeks from
                            today (let's consider today as August 8, 2023).
                        </p>
                        <span>Input '10' in the "Weeks from now" field.</span>
                        <span>The calculator will output the following:</span>
                        <ul>
                            <li>📅 Date: October 17, 2023</li>
                            <li>🌞 Day: Tuesday</li>
                            <li>📅 Week: 42 / 52 weeks</li>
                            <li>📅 Year: 289 / 365 days</li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src={"/weeks.png"}
                            width={300}
                            height={300}
                            className="mx-auto my-4"
                        />
                        <h3>
                            This tells you that your project deadline will fall
                            on October 17, 2023, which is a Tuesday. It will be
                            the 42nd week and the 290th day of the year. This
                            can be helpful in planning your project timeline and
                            ensuring everything is on track to meet the
                            deadline.
                        </h3>
                    </div>
                </div>
            </div>

            <div className="mx-auto ">
                <h3 className="p-2">
                    Here's a quick 1 to 50 weeks from now in a table format.
                </h3>
                <WeekTable />
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
