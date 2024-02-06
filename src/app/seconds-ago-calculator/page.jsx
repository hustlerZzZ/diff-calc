"use client";

import { useEffect, useState } from "react";
import Table from "./table";
import Image from "next/image";
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
            currentHour,
            currentMinute,
            currentSecond - parseInt(second)
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
                        Seconds Ago Calculator
                    </h1>
                    <p className="w-[20rem] md:w-[40rem] md:text-xl">
                        The Seconds Ago Calculator is a convenient online tool
                        designed to accurately determine the time a specified
                        number of seconds ago. For example, if you're curious
                        about the exact time it was 100 seconds ago, simply
                        input '100' into the calculator. Upon entering the
                        desired number of seconds, the calculator promptly
                        processes this information and generates results,
                        showing you the precise time, date, and even the day
                        corresponding to that many seconds ago
                    </p>
                </div>
                <div className="mx-auto p-8 space-y-6">
                    <div className="bg-gray-300 p-4 rounded">
                        <h2 className="text-lg font-bold text-center">
                            ⌛ Seconds Ago Calculator
                        </h2>
                    </div>

                    <div className="flex space-x-6 text-center">
                        <div className="flex flex-col mx-auto">
                            <span>SECONDS</span>
                            <input
                                type="number"
                                value={second}
                                onChange={(e) => setSecond(e.target.value)}
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
                        How to Use the Seconds Ago Calculator
                    </h2>
                    <p>
                        Using the Seconds Ago Calculator is an effortless way to
                        find out the precise time that occurred a certain number
                        of seconds in the past. This tool is especially useful
                        for quick calculations and can be used with just a few
                        simple steps:
                    </p>
                    <Image
                        src={"/secondsAgo.jpeg"}
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
                                <strong> Input the Number of Seconds</strong>{" "}
                                Begin by entering the number of seconds ago you
                                wish to calculate. For instance, if you're
                                interested in finding out the exact time it was
                                5,400 seconds ago, simply type '5400' into the
                                input field. This field is designed to accept
                                any numerical value representing seconds.
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
                                        seconds, the calculator immediately
                                        processes this information.
                                    </li>
                                    <li>
                                        The results are displayed promptly and
                                        include several key pieces of
                                        information:
                                        <ul>
                                            <li>
                                                <strong>Exact Time Ago:</strong>{" "}
                                                This is the primary output,
                                                showing the exact time as it was
                                                the entered number of seconds
                                                ago.
                                            </li>
                                            <li>
                                                <strong>Date:</strong> Alongside
                                                the time, the calculator also
                                                provides the specific date
                                                corresponding to that time ago.
                                            </li>
                                            <li>
                                                <strong>Days:</strong> If
                                                applicable, it will also show
                                                the number of days ago
                                                corresponding to the entered
                                                seconds.
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
                            Seconds Ago Calculator Inputs and Outputs
                        </h3>
                        <p className="mt-2">
                            The Seconds Ago Calculator is designed with
                            straightforward functionality, offering one input
                            field and concise outputs. Here's a brief overview
                            of its features:
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Seconds Ago Input
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The calculator features a single input field
                                labeled "Seconds Ago". This is where you enter
                                the number of seconds you wish to calculate back
                                in time.
                            </li>
                            <li>
                                You can input any numerical value in this field
                                to specify how many seconds ago you are
                                interested in. The calculator is capable of
                                handling a wide range of numbers, from a few
                                seconds to several thousands.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Outputs: Time, Date, and Days
                        </h3>
                        <ul className="list-disc">
                            <li>
                                Upon entering the desired number of seconds, the
                                calculator instantly computes and displays the
                                results in a few distinct sections:
                                <ul>
                                    <li>
                                        <strong>Time:</strong> The primary
                                        output is the exact time as it was the
                                        entered number of seconds ago, shown in
                                        the HH:MM:SS format
                                        (Hours:Minutes:Seconds).
                                    </li>
                                    <li>
                                        <strong>Date:</strong> Along with the
                                        time, the calculator also provides the
                                        date corresponding to the time
                                        calculated.
                                    </li>
                                    <li>
                                        <strong>Days:</strong> If the number of
                                        seconds entered translates to a
                                        significant duration, the calculator
                                        will also indicate the number of days
                                        ago.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 10 to 500 seconds ago in a table format, it
                    is being incremented by 10 seconds:
                </h3>
                <Table />
            </div>

            <RelatedLink />
        </>
    );
}

export default page;
