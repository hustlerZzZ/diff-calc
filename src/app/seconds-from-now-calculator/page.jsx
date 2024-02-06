"use client";

import Image from "next/image";
import Table from "./Table";
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
            currentMinute,
            currentSecond + parseInt(second)
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
                        Seconds From Now Calculator
                    </h1>
                    <p className="w-[20rem] md:w-[40rem] md:text-xl">
                        The Seconds From Now Calculator is used to pinpoint the
                        exact time of the day from the specified number of
                        seconds. You might ask, what is 240 seconds from now?
                        This calculator is built to answer that question. You
                        just need to enter the number of seconds and the time,
                        date and days will be displayed.
                    </p>
                </div>
                <div className="mx-auto p-8 space-y-6">
                    <div className="bg-gray-300 p-4 rounded">
                        <h2 className="text-lg font-bold text-center">
                            ⌛ Seconds From Now Calculator
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
                        How to Use the Seconds From Now Calculator
                    </h2>
                    <p>
                        Using the Seconds From Now Calculator is remarkably
                        straightforward and efficient, especially when you need
                        to find out a precise future time based on a certain
                        number of seconds. Here's a quick guide on how to use
                        this tool:
                    </p>
                    <Image
                        src={"/secondsFromNow.jpeg"}
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
                                <strong> Enter the Number of Seconds</strong>{" "}
                                The primary input for this calculator is the
                                number of seconds you want to project into the
                                future. For instance, if you're looking to
                                determine what the exact time will be 500
                                seconds from now, simply enter '500' into the
                                seconds input field.
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
                                        After entering the desired number of
                                        seconds, the calculator immediately
                                        processes the input against the current
                                        time.
                                    </li>
                                    <li>
                                        The results are displayed right below
                                        the input field. These results will
                                        include the exact future time (hours,
                                        minutes, and seconds), the date at that
                                        future moment, and the number of days
                                        from now until then.
                                    </li>
                                    <li>
                                        This instant calculation ensures that
                                        every time you enter a new value, it is
                                        calculated in real-time, providing the
                                        most current and accurate result based
                                        on the exact moment of inquiry.
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ol>
                </div>
                <div className="space-y-2">
                    <div>
                        <h3 className="text-blue-500 text-center font-bold text-xl">
                            Seconds From Now Calculator Inputs and Outputs
                        </h3>
                        <p className="mt-2">
                            The Seconds From Now Calculator is a streamlined and
                            user-friendly tool, designed with a single input
                            field and straightforward outputs. Here's a brief
                            overview of its components:
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Seconds From Now Input
                        </h3>
                        <ul className="list-disc">
                            <li>
                                This singular input field is where you enter the
                                number of seconds you wish to project into the
                                future.
                            </li>
                            <li>
                                The field accepts numerical input, allowing you
                                to specify exactly how many seconds ahead you
                                want to calculate.
                            </li>
                            <li>
                                The calculator is capable of handling a wide
                                range of numerical inputs, so you can enter as
                                many seconds as needed, whether it's just a few
                                seconds or several thousand.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Outputs: Time, Date, and Days
                        </h3>
                        <ul className="list-disc">
                            <li>
                                Once you've entered the desired number of
                                seconds, the calculator processes this input and
                                displays the results in three distinct sections:
                                <ul>
                                    <li>
                                        <strong>Time:</strong> Shows the exact
                                        time from the past, based on your input.
                                    </li>
                                    <li>
                                        <strong>Date:</strong> Shows the exact
                                        future time (hours, minutes, and
                                        seconds) corresponding to the entered
                                        number of seconds.
                                    </li>
                                    <li>
                                        <strong>Date:</strong> Displays the date
                                        on which this future time falls
                                    </li>
                                    <li>
                                        <strong>Days:</strong> Indicates the
                                        number of days from the current moment
                                        until the calculated future time.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                In addition to these boxes, the calculator also
                                presents a brief summary in paragraph form at
                                the bottom. This summary provides a more
                                detailed explanation of the results, making it
                                easy to understand the context of the calculated
                                future time.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 10 to 500 seconds from now in a table format:
                </h3>
                <Table />
            </div>
        </>
    );
}

export default page;
