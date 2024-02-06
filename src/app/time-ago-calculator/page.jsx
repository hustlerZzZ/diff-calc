"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Table from "./Table";
import RelatedLink from "@/components/RelatedLink";

function page() {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [day, setDay] = useState(0);

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        const hours = String(today.getHours()).padStart(2, "0");
        const minutes = String(today.getMinutes()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime =
            hours >= 12 ? `${hours}:${minutes} PM` : `${hours}:${minutes} AM`;
        setDate(formattedDate);
        setTime(formattedTime);
    }, []);

    function calcHandler() {
        setShow(true);

        // Get the current date and time
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const currentDay = today.getDate();
        const currentHour = today.getHours();
        const currentMinute = today.getMinutes();
        const currentSecond = today.getSeconds();

        // Calculate the future date and time
        const futureDate = new Date(
            currentYear,
            currentMonth,
            currentDay,
            currentHour - parseInt(hour),
            currentMinute - parseInt(minute),
            currentSecond - parseInt(second)
        );

        // Format the date and time strings
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = futureDate.toLocaleDateString(undefined, options);
        const formattedTime = futureDate.toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "numeric",
            hour12: true, // Use 12-hour format (AM/PM)
        });

        const days = Math.floor(hour / 24);

        setDate(formattedDate);
        setTime(formattedTime);
        setDay(days);
    }

    function clearHandler() {
        setShow(false);
        setDate("");
        setTime("");
        setDay(0);
        setHour(0);
        setMinute(0);
        setSecond(0);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="mt-8 mx-auto space-y-2">
                    <h1 className="text-center font-bold text-lg md:text-2xl">
                        Time Ago Calculator
                    </h1>
                    <p className="w-[20rem] md:w-[40rem] md:text-xl">
                        The Time Ago Calculator is a helpful tool specially in
                        tracking the exact time from the past hours, minutes and
                        even seconds. For example, you want to know what is 13
                        hours and 17 minutes ago? Place these values on the
                        calculator and press Enter. Results will be displayed
                        for you with the exact time, date and number of days.
                    </p>
                </div>
                <div className="mx-auto p-8 space-y-6">
                    <div className="bg-gray-300 p-4 rounded">
                        <h2 className="text-lg font-bold text-center">
                            ⌛ Time Ago Calculator
                        </h2>
                    </div>

                    <div className="flex space-x-6 text-center">
                        <div className="flex flex-col">
                            <span>HOURS</span>
                            <input
                                type="number"
                                value={hour}
                                onChange={(e) => setHour(e.target.value)}
                                className="p-2 border-solid border-2 text-center border-gray-200 focus:border-gray-300 focus:outline-none w-24"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span>MINUTES</span>
                            <input
                                type="number"
                                value={minute}
                                onChange={(e) => setMinute(e.target.value)}
                                className="p-2 border-solid border-2 text-center border-gray-200 focus:border-gray-300 focus:outline-none w-24"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span>SECONDS</span>
                            <input
                                type="number"
                                value={second}
                                onChange={(e) => setSecond(e.target.value)}
                                className="p-2 border-solid border-2 text-center border-gray-200 focus:border-gray-300 focus:outline-none w-24"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <button
                            className="bg-green-500 px-4 py-2 rounded text-white"
                            onClick={calcHandler}
                        >
                            Calculate
                        </button>
                        <button
                            className="bg-red-500 px-4 py-2 rounded text-white"
                            onClick={clearHandler}
                        >
                            Clear
                        </button>
                    </div>

                    {show && (
                        <div className="flex space-x-6 justify-center text-center">
                            <div className="shadow-md p-4 space-y-1">
                                <span>🕑 Time</span>
                                <h2>{time}</h2>
                            </div>
                            <div className="shadow-md p-4 space-y-1">
                                <span>📅 Date</span>
                                <h2>{date}</h2>
                            </div>
                            <div className="shadow-md p-4 space-y-1">
                                <span>🌞 Days</span>
                                <h2>{day}</h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8 p-2">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to Use the Time Ago Calculator
                    </h2>
                    <p>
                        The Time Ago Calculator is an efficient tool for
                        pinpointing the exact time and date of an event that
                        occurred in the past, based on its duration from the
                        present moment. This is particularly useful for
                        interpreting time stamps on social media posts or other
                        digital platforms, where events are often marked with
                        phrases like "started 2 hours ago" or "posted 15 minutes
                        ago". To use this calculator effectively, follow these
                        simple steps:
                    </p>
                    <Image
                        src={"/timeAgo.jpeg"}
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
                                <strong> Enter the Time Duration Ago</strong>
                                <ul className="list-disc">
                                    <li>
                                        The calculator features three input
                                        fields labeled for hours, minutes, and
                                        seconds.
                                    </li>
                                    <li>
                                        Input the duration ago that you want to
                                        calculate. For instance, if you are
                                        looking to find out the exact time for
                                        10 hours and 30 minutes ago, you would
                                        enter '10' in the hours field and '30'
                                        in the minutes field.
                                    </li>
                                    <li>
                                        If you do not need to use all three
                                        units (hours, minutes, seconds), leave
                                        the unnecessary fields blank.
                                    </li>
                                </ul>
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>
                                    Calculate to Find the Exact Time and Date
                                </strong>
                                <ul className="list-disc">
                                    <li>
                                        Once you have entered the time duration
                                        ago, you can either press the Enter key
                                        on your keyboard or click on the
                                        'Calculate' button to process your
                                        query.
                                    </li>
                                    <li>
                                        The result will be displayed, providing
                                        you with the precise time, date, and the
                                        total number of days ago for the entered
                                        duration.
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ol>
                </div>
                <div className="space-y-2">
                    <div>
                        <h3 className="text-blue-500 text-center font-bold text-xl">
                            Time Ago Calculator Inputs and Outputs
                        </h3>
                        <p className="mt-2">
                            The Time Ago Calculator is designed to provide you
                            with precise information about a specific time in
                            the past based on the current time. It's
                            straightforward to use, with inputs for hours,
                            minutes, and seconds, and gives comprehensive
                            outputs including the exact time, date, and number
                            of days ago. Here's a closer look at its inputs and
                            outputs:
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Time Ago Calculator Inputs
                        </h3>
                        <ul className="list-disc">
                            <li>
                                <strong>
                                    Hours, Minutes, and Seconds Fields:
                                </strong>{" "}
                                You can input the time duration you want to
                                backtrack from the current moment. These fields
                                accept the number of hours, minutes, and seconds
                                respectively.
                            </li>
                            <li>
                                <strong>Calculate Button:</strong> After
                                entering your time duration, click this button
                                to initiate the calculation. Alternatively, you
                                can simply press the Enter key on your keyboard
                                for the same effect.
                            </li>
                            <li>
                                <strong>Clear Button:</strong> This option
                                allows you to reset all input fields, making it
                                convenient to perform a new calculation without
                                manually erasing the previous inputs.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Outputs
                        </h3>
                        <ul className="list-disc">
                            <li>
                                <strong>
                                    Display Boxes for Time, Date, and Days:
                                </strong>{" "}
                                Upon calculation, the results are shown in three
                                distinct sections:
                                <ul>
                                    <li>
                                        <strong>Time:</strong> Shows the exact
                                        time from the past, based on your input.
                                    </li>
                                    <li>
                                        <strong>Date:</strong> Displays the
                                        specific date corresponding to the
                                        calculated time ago.
                                    </li>
                                    <li>
                                        <strong>Days:</strong> Indicates the
                                        total number of days that have elapsed
                                        since the time you inquired about.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Descriptive Paragraph:</strong> Below
                                the display boxes, there's a section that
                                provides a written summary of the results. This
                                paragraph includes a comprehensive description
                                of the calculated time, date, and the number of
                                days ago, giving you a clear understanding of
                                when the event or moment in question occurred.
                            </li>
                        </ul>
                    </div>
                    <p>
                        This calculator is especially useful for situations
                        where you need to determine the exact moment of past
                        events relative to the current time, such as figuring
                        out when a social media post was made or when a specific
                        event occurred. The clear and concise outputs make it an
                        invaluable tool for both personal and professional use.
                    </p>
                </div>
            </div>

            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 1 to 50 hours and minutes ago in a table
                    format:
                </h3>
                <Table />
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
