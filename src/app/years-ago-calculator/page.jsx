"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Table from "./Table";
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
            futureDateObj.setFullYear(futureDateObj.getFullYear() - yearsToAdd);

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
                    📅 Years Ago Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Years Ago Calculator is an intuitive and straightforward
                    online tool designed to quickly provide the exact date from
                    a specified number of years in the past. For example, if
                    you're wondering what the date was exactly 4 years ago from
                    today, all you need to do is enter '4' into the calculator.
                    It immediately computes and displays the precise date
                    corresponding to that time frame in the past.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-semibold text-center">
                        📅 Years Ago Calculator
                    </h2>
                </div>

                <div className="text-center space-y-4">
                    <div className="space-y-2">
                        <h2>Years ago</h2>
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
                        How to Use the Years Ago Calculator
                    </h2>
                    <p>
                        Using the Years Ago Calculator is a straightforward
                        process, ideal for quickly finding out a date from a
                        specific number of years in the past. Here's a simple
                        guide on how to use it:
                    </p>
                    <Image
                        src={"/yearsAgo.jpeg"}
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
                                <strong>Enter the Number of Years Ago</strong>{" "}
                                <ul className="list-disc">
                                    <li>
                                        Locate the input field on the calculator
                                        labeled "Years Ago."
                                    </li>
                                    <li>
                                        Type in the number of years you want to
                                        go back from the current date. For
                                        example, if you're curious about what
                                        the date was 3 years ago from today,
                                        simply enter '3' in this field.
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
                                        Once you've entered the number of years,
                                        the calculator will automatically
                                        process this information.
                                    </li>
                                    <li>
                                        The results will be displayed
                                        immediately and include:
                                        <ul>
                                            <li>
                                                <strong>
                                                    Exact Date and Day:
                                                </strong>{" "}
                                                The calculator shows the
                                                specific date and day of the
                                                week that corresponds to the
                                                entered number of years ago.
                                            </li>
                                            <li>
                                                <strong>
                                                    Total Number of Weeks:
                                                </strong>{" "}
                                                It also calculates the total
                                                number of weeks that have passed
                                                since that date.
                                            </li>
                                            <li>
                                                <strong>
                                                    Total Number of Days:
                                                </strong>{" "}
                                                Additionally, the calculator
                                                provides the total number of
                                                days that have elapsed.
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
                            Years Ago Calculator Inputs and Outputs
                        </h3>
                        <p className="mt-2">
                            The Years Ago Calculator is a straightforward online
                            tool designed to provide you with a date from the
                            past, based on the number of years entered. Its
                            simplicity in design, with one input field and
                            several informative outputs, makes it a
                            user-friendly resource for various purposes. Let's
                            look at its input and outputs:
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Input: Years Ago
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The calculator features a single input field
                                labeled "Years Ago."
                            </li>
                            <li>
                                Here, you can enter the number of years you want
                                to go back to find the corresponding date. The
                                field accepts numeric values and even allows for
                                decimal inputs, enabling calculations like 1.5
                                years ago, which would equate to 1 year and 6
                                months.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Outputs of the Calculator
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The results of your entered value are neatly
                                displayed, offering a comprehensive view of the
                                calculated date:
                                <ul>
                                    <li>
                                        <strong>Date:</strong> This output shows
                                        the exact date corresponding to the
                                        number of years ago you entered.
                                    </li>
                                    <li>
                                        <strong>Day:</strong> Alongside the
                                        date, it also specifies the day of the
                                        week for that particular date.
                                    </li>
                                    <li>
                                        <strong>Total Number of Weeks:</strong>{" "}
                                        The calculator calculates and displays
                                        the total number of weeks that have
                                        passed since the given date.
                                    </li>
                                    <li>
                                        <strong>Total Number of Days:</strong>{" "}
                                        Additionally, it provides the total
                                        number of days that have elapsed since
                                        that date.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Below these output boxes, there is a descriptive
                                write-up that further elaborates on the results,
                                adding context and clarity to the calculated
                                date.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 1 to 50 years ago from today in a table
                    format.
                </h3>
                <Table />
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
