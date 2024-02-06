"use client";

import { useEffect, useState } from "react";
import Table from "./table";
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
            futureDateObj.setDate(futureDateObj.getDate() - weeksToAdd * 7);

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
                    Weeks Ago Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Weeks Ago Calculator is a handy online tool designed to
                    help you determine a past date based on the number of weeks
                    ago. For instance, if you remember an event occurring
                    roughly 5 weeks ago and need to know the exact date, simply
                    input '5' into the calculator. Upon entering the number of
                    weeks, the calculator instantly computes and displays the
                    precise date that corresponds to that time period in the
                    past.
                </p>
            </div>
            <div className="p-8 -translate-y-6 mx-auto space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-semibold text-center">
                        📅 Weeks Ago Calculator
                    </h2>
                </div>

                <div className="text-center space-y-4">
                    <div className="space-y-2">
                        <h2>Weeks Ago</h2>
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
                        How to Use the Weeks Ago Calculator
                    </h2>
                    <p>
                        Using the Weeks Ago Calculator is a straightforward and
                        quick way to determine a past date based on a specific
                        number of weeks ago. Whether you're recalling a
                        significant event, tracking project timelines, or simply
                        curious about a past date, this tool makes the process
                        simple. Here's how to use it:
                    </p>
                    <Image
                        src={"/weeksAgo.jpeg"}
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
                                <strong>Enter the Number of Weeks Ago</strong>{" "}
                                <ul className="list-disc">
                                    <li>
                                        Locate the input field on the calculator
                                        specifically designed for the number of
                                        weeks ago.
                                    </li>
                                    <li>
                                        Type in the number of weeks you want to
                                        look back from today. For example, if
                                        you need to find out what the date was 4
                                        weeks ago, just enter '4' in this field.
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
                                        As soon as you input the number of
                                        weeks, the calculator immediately
                                        processes this data.
                                    </li>
                                    <li>
                                        The results are displayed without any
                                        need for further action. They include:
                                        <ul>
                                            <li>
                                                <strong>Date:</strong> The exact
                                                date corresponding to the
                                                entered number of weeks ago.
                                            </li>
                                            <li>
                                                <strong>
                                                    Day of the Week:
                                                </strong>{" "}
                                                It also shows which day of the
                                                week that date falls on.
                                            </li>
                                            <li>
                                                <strong>
                                                    Days and Weeks Countdown of
                                                    the Year:
                                                </strong>{" "}
                                                Additional information such as
                                                the day number and week number
                                                within the year for the
                                                calculated date.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ol>
                </div>
                <div className="space-y-2">
                    <div>
                        <h3 className="text-blue-500 text-center font-bold text-xl">
                            Weeks Ago Calculator Inputs and Outputs
                        </h3>
                        <p className="mt-2">
                            The Weeks Ago Calculator is a user-friendly tool
                            designed to calculate a past date based on a
                            specified number of weeks ago. It's straightforward
                            in its design, with a single input field and clear
                            outputs. Here's an overview of how it works:
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Input: Weeks Ago
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The primary and only input field is labeled
                                "Weeks Ago."
                            </li>
                            <li>
                                This field requires a numeric value,
                                representing the number of weeks ago you wish to
                                calculate the date for. For example, if you want
                                to know the date that was 6 weeks ago, you would
                                simply enter '6' into this field.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Outputs of the Calculator
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The results of your input are displayed directly
                                below the input field and are easy to
                                understand:
                                <ul>
                                    <li>
                                        <strong>Date:</strong> The main output
                                        is the exact date that corresponds to
                                        the number of weeks ago you entered.
                                        This includes the day, month, and year.
                                    </li>
                                    <li>
                                        <strong>
                                            Additional Date-Related Information:
                                        </strong>{" "}
                                        Along with the specific date, the
                                        calculator also provides additional
                                        information related to the date, such as
                                        the day of the week.
                                    </li>
                                    <li>
                                        <strong>Descriptive Write-Up:</strong>{" "}
                                        Below the output boxes, there is a brief
                                        explanatory text. This write-up
                                        elaborates on the results, providing a
                                        clearer context and understanding of the
                                        calculated date.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 1 to 50 weeks ago starting today in a table
                    format:
                </h3>
                <Table />
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
