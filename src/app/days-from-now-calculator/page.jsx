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

    useEffect(() => {
        // Get the current date
        const today = new Date();
        // Calculate the new date based on the input value (days ago)
        const newDate = new Date(
            today.getTime() + formValue * 24 * 60 * 60 * 1000
        );
        // Update the state with the new date
        setCurrentDate(newDate.toDateString());
        setCurrentDay(newDate.toLocaleDateString("en-US", { weekday: "long" }));

        // Calculate the week and year
        const firstDayOfYear = new Date(newDate.getFullYear(), 0, 1);
        const dayOfYear = Math.ceil((newDate - firstDayOfYear + 1) / 86400000);
        setCurrentWeek(Math.ceil(dayOfYear / 7));

        const daysPassed = Math.ceil((newDate - firstDayOfYear) / 86400000);
        setCurrentDayOfYear(daysPassed);
    }, [formValue]);

    return (
        <>
            <div className="mt-8 mx-auto space-y-2">
                <h1 className="text-center font-bold text-lg md:text-2xl">
                    ⌛ Days From Now Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Days From Now Calculator is an effective and
                    straightforward online tool crafted to determine the exact
                    future date based on a specified number of days ahead from
                    the current day. Whether you're scheduling events, setting
                    deadlines, or planning personal milestones, simply input the
                    desired number of days into the calculator, and it will
                    instantly display the corresponding future date.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-semibold text-center ">
                        ⌛ Days From Now Calculator
                    </h2>
                </div>

                <div className="text-center space-y-4">
                    <div className="space-y-2">
                        <h2>Days From Now</h2>
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
                            <h2>{currentWeek} / 52 weeks</h2>
                        </div>
                        <div className="p-4 rounded-md shadow-lg">
                            <span>📅 Year</span>
                            <h2>{currentDayOfYear} / 365</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8 p-2">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to Use the Days From Now Calculator
                    </h2>
                    <p>
                        The Days From Now Calculator is a convenient and
                        user-friendly tool that comes in handy for various
                        purposes, including agriculture planning, event
                        scheduling, or any scenario where future date
                        calculation is needed. Here's a simple guide on how to
                        use it:
                    </p>
                    <Image
                        src={"/daysFromNow.jpeg"}
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
                                <strong>Enter the Number of Days</strong>{" "}
                                <ul className="list-disc">
                                    <li>
                                        Locate the input field on the calculator
                                        labeled "Days From Now."
                                    </li>
                                    <li>
                                        Input the number of days you wish to
                                        project into the future. For instance,
                                        if a farmer wants to know the date 28
                                        days from now for transplanting
                                        seedlings, they would enter '28' in this
                                        field. Similarly, for any other future
                                        date calculation, like finding out what
                                        date it will be 52 days from now, just
                                        type '52' into the field.
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
                                        As soon as you input the number of days,
                                        the calculator processes this
                                        information and instantly provides the
                                        results.
                                    </li>
                                    <li>
                                        The output includes:
                                        <ul>
                                            <li>
                                                <strong>Time:</strong> The
                                                specific future date after the
                                                entered number of days.
                                            </li>
                                            <li>
                                                <strong>
                                                    Day of the Week:
                                                </strong>{" "}
                                                It will tell you what day of the
                                                week this future date falls on
                                                (e.g., Monday, Tuesday).
                                            </li>
                                            <li>
                                                <strong>
                                                    Week of the Year:
                                                </strong>{" "}
                                                This shows which week number of
                                                the year the future date is part
                                                of.
                                            </li>
                                            <li>
                                                <strong>
                                                    Day of the 365 Days of the
                                                    Year
                                                </strong>{" "}
                                                Indicates the day number out of
                                                the 365 days in the year.
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
                            Days From Now Calculator Inputs and Outputs
                        </h3>
                        <p className="mt-2">
                            The Days From Now Calculator is a straightforward
                            tool designed to project future dates based on a
                            specified number of days from the current date.
                            Understanding its input and output features will
                            enable you to use it effectively. Here's a
                            breakdown:
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Input: Days From Now
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The calculator has a single input field labeled
                                "Days From Now."
                            </li>
                            <li>
                                This field only accepts numeric values, so be
                                sure to input the number of days you wish to
                                calculate into the future.
                            </li>
                            <li>
                                The calculation is based on the current local
                                date and time, ensuring that the output is
                                relevant and accurate to your specific location
                                and time zone.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Outputs of the Calculator
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The results of your input are displayed in an
                                organized format, making it easy to interpret
                                the calculated future date:
                                <ul>
                                    <li>
                                        <strong>Day and Exact Date:</strong> The
                                        primary output includes the specific day
                                        of the week (like Monday, Tuesday, etc.)
                                        and the exact date (including month and
                                        year) that corresponds to the entered
                                        number of days in the future
                                    </li>
                                    <li>
                                        <strong>Day of the Year:</strong> This
                                        shows the exact day number out of the
                                        365 days in the year for the calculated
                                        future date.
                                    </li>
                                    <li>
                                        <strong>Week of the Year:</strong> It
                                        also displays the week number of the
                                        year for the future date.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Additionally, there is a descriptive text at the
                                bottom of the calculator which provides a more
                                detailed explanation of the results.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 1 to 50 days from now in a table format.
                </h3>
                <Table />
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
