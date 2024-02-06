"use client";

import { useEffect, useState } from "react";
import Table from "./Table";
import Image from "next/image";
import RelatedLink from "@/components/RelatedLink";

function page() {
    const [currentDate, setCurrentDate] = useState("");
    const [currentDay, setCurrentDay] = useState("");
    const [currentWeek, setCurrentWeek] = useState("");
    const [currentDayOfYear, setCurrentDayOfYear] = useState("");
    const [formValue, setFormValue] = useState(0);

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
        const yearsToAdd = parseInt(formValue, 10);
        if (!isNaN(yearsToAdd)) {
            const futureDateObj = new Date();
            futureDateObj.setFullYear(futureDateObj.getFullYear() + yearsToAdd);

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
                    📅 Years From Now Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    Imagine it's your 10th birthday and you're thinking about
                    how old you'll be in 5 years. Or, maybe you're 15 and you
                    wonder which day of the week your 18th birthday will fall
                    on. Enter the <em>"Years from Now Calculator!"</em> With
                    this tool, you just input a number of years, and like magic,
                    it tells you the exact date, day, week, and how many days
                    into that year it will be.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-semibold text-center">
                        📅 Years From Now Calculator
                    </h2>
                </div>

                <div className="text-center space-y-4">
                    <div className="space-y-2">
                        <h2>Years from now</h2>
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
                        How to Use the 📅 Years from Now Calculator
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
                                Start with a clear field to ensure your
                                calculation is spot on. Always input numbers
                                only.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                You'll see a space that says "Years from now."
                                This is where you'll type in the number of years
                                you're curious about. Real-life example: You're
                                12 and you're daydreaming about when you'll be
                                20 and perhaps driving a car! Enter "8" for 8
                                years from now.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                Give that button a push, and let the calculator
                                do it's magic & whisk you into the future!
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                After you press "Calculate," you'll get details
                                like: 📅 Date August 9, 2031 (Because 12 + 8 =
                                20!) 🌞 Day Maybe it's a Saturday, so you'll
                                know you can plan a big party! 📅 Week 34 / 52
                                weeks (This tells you it's the 34th week of the
                                year.) 📅 Year 220 / 365 days (This means it's
                                the 220th day of the year.)
                            </p>
                        </li>
                    </ol>
                    <div className="space-y-4">
                        <Image
                            src={"/years.png"}
                            width={300}
                            height={300}
                            className="mx-auto my-4"
                        />
                        <p>
                            Voilà! Now, every time you're curious about a date
                            in the future, like maybe when you'll graduate, or
                            the date of your 50th anniversary, you can check it
                            out. Dive in, and see where the calendar takes you!
                            🚀📆🔍🎉
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 1 to 50 hours and minutes from now in a table
                    format.
                </h3>
                <Table />
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
