"use client";
import { useEffect, useState } from "react";
import Table from "./Table";
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

    // Function to handle input change
    const handleInputChange = (e) => {
        setFormValue(e.target.value);
    };

    // Function to calculate and update the future date based on input value
    useEffect(() => {
        const monthsToAdd = parseInt(formValue, 10);
        if (!isNaN(monthsToAdd)) {
            const futureDateObj = new Date();
            futureDateObj.setMonth(futureDateObj.getMonth() + monthsToAdd);

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
                    Months From Now Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The <em>Months From Now Calculator</em> is a digital tool
                    that computes future dates accurately based on a given
                    number of months from a specified start date. For instance,
                    if you want to know the date 6 months from March 1, 2023,
                    simply input '6' into the Months From Now Calculator. The
                    tool will instantly calculate and display the corresponding
                    future date, which is September 1, 2023.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-semibold text-center">
                        📅 Months From Now Calculator
                    </h2>
                </div>

                <div className="text-center space-y-4">
                    <div className="space-y-2">
                        <h2>Months from now</h2>
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
                        How to Use Months From Now Calculator
                    </h2>
                    <p>
                        Let's say you are a student and you have a big science
                        project due for school. Your teacher told you that the
                        project is due exactly 7 months from today (let's assume
                        today is August 8, 2023).
                    </p>
                    <p>
                        You're excited about this project and want to make sure
                        you plan your time effectively. You decide to use the
                        Months From Now Calculator to find out the exact due
                        date. Just enter a number in the input field above.
                    </p>
                    <Image
                        src={"/months.png"}
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
                                In the Months From Now Calculator, you will see
                                a box where you can type in a number. This
                                number is how many months in the future you want
                                to find out about. For example, if you want to
                                know what day it will be 3 months from now, you
                                type '3' in the box.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                After you have entered the number of months, the
                                calculator will instantly figure out the date
                                that is exactly that many months in the future.
                                It does all the counting and calculating for
                                you!
                            </p>
                        </li>
                    </ol>
                    <div>
                        <h3>You will get the following information:</h3>
                        <ul className="list-disc list-inside">
                            <li>
                                📅 Date: This will be the exact date that is the
                                number of months in the future you asked about.
                            </li>
                            <li>
                                🌞 Day: This tells you what day of the week that
                                date falls on. Will it be a Monday, a Wednesday,
                                a Friday, or some other day?
                            </li>
                            <li>
                                📅 Week: This tells you which week of the year
                                that future date falls in. There are 52 weeks in
                                a year, so this will be a number between 1 and
                                52.
                            </li>
                            <li>
                                📅 Year: This tells you which day of the year
                                that future date is. There are 365 days in a
                                year (except in a leap year), so this will be a
                                number between 1 and 365.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            For example, let's say you want to find out the date
                            5 months from August 8, 2023:
                        </p>
                        <span>You type '5' in the Months from now box.</span>
                        <span>The calculator will output the following:</span>
                        <ul>
                            <li>
                                📅 Date: January 8, 2024 (This is 5 months after
                                August 8, 2023)
                            </li>
                            <li>
                                🌞 Day: Tuesday (January 8, 2024, will be a
                                Tuesday)
                            </li>
                            <li>
                                📅 Week: 2 / 52 weeks (January 8, 2024, falls in
                                the 2nd week of the year)
                            </li>
                            <li>
                                📅 Year: 8 / 365 days (January 8 is the 8th day
                                of the year)
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            So, using the Months From Now Calculator, you can
                            easily find out what day it will be any number of
                            months from today!
                        </h3>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 1 to 50 weeks from now in a table format.
                </h3>
                <Table />
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
