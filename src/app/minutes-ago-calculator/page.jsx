"use client";

import Image from "next/image";
import Table from "./table";
import { useEffect, useState } from "react";

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
            currentHour,
            currentMinute - parseInt(minute),
            currentSecond
        );

        // Format the date and time strings
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = futureDate.toLocaleDateString(undefined, options);
        const formattedTime = futureDate.toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
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
                        Minutes Ago Calculator
                    </h1>
                    <p className="w-[20rem] md:w-[40rem] md:text-xl">
                        The Minutes Ago Calculator is a simple tool that
                        determines the exact time and date from the past based
                        on the number of minutes. For instance, you want to know
                        what is 240 minutes ago? You just need to input that
                        number on the calculator.
                    </p>
                </div>
                <div className="mx-auto p-8 space-y-6">
                    <div className="bg-gray-300 p-4 rounded">
                        <h2 className="text-lg font-bold text-center">
                            ⌛ Minutes Ago Calculator
                        </h2>
                    </div>

                    <div className="flex space-x-6 text-center justify-center items-center">
                        <div className="flex flex-col">
                            <span>MINUTES</span>
                            <input
                                type="number"
                                value={minute}
                                onChange={(e) => setMinute(e.target.value)}
                                className="p-2 border-solid border-2 text-center border-gray-200 focus:border-gray-300 focus:outline-none"
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
                        How to Use the Minutes Ago Calculator
                    </h2>
                    <p>
                        Using the Minutes Ago Calculator is an incredibly
                        straightforward process, perfect for quickly determining
                        the exact time and date a specific number of minutes in
                        the past. Here's a step-by-step guide on how to utilize
                        this tool:
                    </p>
                    <Image
                        src={"/minutesAgo.jpeg"}
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
                                <strong>Enter the Number of Minutes</strong>{" "}
                                <ul className="list-disc">
                                    <li>
                                        Start by finding the input field labeled
                                        "Minutes Ago" on the calculator.
                                    </li>
                                    <li>
                                        Input the number of minutes you want to
                                        calculate back in time. For instance, if
                                        you're looking to find out what time it
                                        was 30 minutes ago, simply type '30'
                                        into this field.
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
                                        As soon as you've entered the number of
                                        minutes, the calculator automatically
                                        computes the time that was exactly that
                                        many minutes ago.
                                    </li>
                                    <li>
                                        The results include:
                                        <ul>
                                            <li>
                                                <strong>Exact Time:</strong>{" "}
                                                Displaying the precise time as
                                                it was the entered number of
                                                minutes ago.
                                            </li>
                                            <li>
                                                <strong>Date:</strong> Alongside
                                                the time, you'll also see the
                                                date corresponding to that time.
                                            </li>
                                            <li>
                                                <strong>
                                                    Additional Date Information:
                                                </strong>{" "}
                                                If applicable, the calculator
                                                provides further details about
                                                the date from the past.
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
                            Minutes Ago Calculator Inputs and Outputs
                        </h3>
                        <p className="mt-2">
                            The Minutes Ago Calculator is a straightforward tool
                            designed to provide information about a specific
                            time in the past, based on a number of minutes ago.
                            Here's a detailed look at its input field and the
                            outputs it provides:
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Input: Minutes Ago
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The calculator features one input field, labeled
                                "Minutes Ago." This is where you should enter
                                the desired number of minutes to look back in
                                time.
                            </li>
                            <li>
                                The field accepts only numeric values,
                                representing the minutes you wish to calculate
                                from the current moment backward.
                            </li>
                            <li>
                                If you input '0' or leave the field empty, the
                                calculator will default to showing the current
                                time and date.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Outputs of the Calculator
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The results of your input are displayed in a
                                clear and organized manner, making it easy to
                                understand the calculated past time:
                                <ul>
                                    <li>
                                        <strong>Time:</strong> Displayed in the
                                        HH:MM format (Hours:Minutes), this box
                                        shows the exact time as it was the
                                        entered number of minutes ago.
                                    </li>
                                    <li>
                                        <strong>Date:</strong> This box provides
                                        the specific date corresponding to the
                                        calculated time ago.
                                    </li>
                                    <li>
                                        <strong>Number of Days:</strong> In
                                        cases where the number of minutes
                                        extends over multiple days, this output
                                        will indicate the total number of days
                                        ago.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Additionally, the calculator provides a
                                summarized paragraph below these boxes. This
                                paragraph offers a descriptive result, detailing
                                the calculated future time and date in a clear,
                                easy-to-understand format.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 1 to 50 minutes from now in a table format.
                </h3>
                <Table />
            </div>
        </>
    );
}

export default page;
