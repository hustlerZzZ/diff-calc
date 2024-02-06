"use client";

import Image from "next/image";
import Table from "./table";
import { useEffect, useState } from "react";
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
            currentMinute + parseInt(minute),
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
                        Minutes From Now Calculator
                    </h1>
                    <p className="w-[20rem] md:w-[40rem] md:text-xl">
                        The Minutes From Now Calculator is a highly useful tool
                        for determining the precise time and date at a certain
                        number of minutes into the future. For example, if
                        you're curious about what the time will be 30 minutes
                        from the current moment, this calculator is exactly what
                        you need. Simply enter the number of minutes you want to
                        project forward, and it will instantly provide you with
                        the exact future time and date.
                    </p>
                </div>
                <div className="mx-auto p-8 space-y-6">
                    <div className="bg-gray-300 p-4 rounded">
                        <h2 className="text-lg font-bold text-center">
                            ⌛ Minutes From Now Calculator
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
                        How to Use the Minutes From Now Calculator
                    </h2>
                    <p>
                        The Minutes From Now Calculator is a straightforward and
                        efficient tool for determining future time points based
                        on a specified number of minutes from the current
                        moment. It's particularly useful for a variety of
                        scenarios like setting a duration for exams, estimating
                        travel time, or aligning schedules. Here's how to use
                        this calculator:
                    </p>
                    <Image
                        src={"/minutesNow.jpeg"}
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
                                        Look for the input field labeled
                                        "Minutes From Now".
                                    </li>
                                    <li>
                                        Enter the number of minutes you want to
                                        calculate into the future. For instance,
                                        if you want to know what time it will be
                                        45 minutes from now, simply type '45' in
                                        this field.
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
                                        As soon as you enter the minutes, the
                                        calculator automatically processes this
                                        input against the current time. There's
                                        no need for any additional actions like
                                        pressing a 'Calculate' button.
                                    </li>
                                    <li>
                                        The results are displayed immediately
                                        and include:
                                        <ul>
                                            <li>
                                                <strong>Time:</strong> This
                                                shows the exact future time
                                                (hours and minutes) after the
                                                entered number of minutes have
                                                elapsed.
                                            </li>
                                            <li>
                                                <strong>Date:</strong> Alongside
                                                the future time, the calculator
                                                also provides the date on which
                                                this future time falls.
                                            </li>
                                            <li>
                                                <strong>Days:</strong> If the
                                                number of minutes entered
                                                extends into the next day or
                                                further, it will also show the
                                                number of days from now until
                                                then.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ol>
                    <p>
                        The calculator updates in real-time with each change of
                        input, ensuring that the results always reflect the most
                        current time. This tool is designed for ease of use and
                        efficiency, making it a reliable resource for anyone
                        needing to quickly determine a future time and date.
                    </p>
                </div>
                <div className="space-y-2">
                    <div>
                        <h3 className="text-blue-500 text-center font-bold text-xl">
                            Minutes From Now Calculator Inputs and Outputs
                        </h3>
                        <p className="mt-2">
                            The Minutes From Now Calculator is designed with
                            simplicity and precision in mind, featuring a single
                            input field and clear outputs to show your
                            calculated future time. Here’s a breakdown of its
                            inputs and outputs:
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Inputs of the Minutes From Now Calculator
                        </h3>
                        <ul className="list-disc">
                            <li>
                                <strong>Minutes From Now:</strong> This is the
                                primary and only input field of the calculator.
                                You are required to enter the number of minutes
                                you wish to project into the future.
                            </li>
                            <li>
                                Each time you enter or change the value in this
                                field, the calculator automatically performs the
                                calculation, using the current time as the
                                starting point.
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
                                organized manner, making it easy to interpret
                                the calculated future time:
                                <ul>
                                    <li>
                                        <strong>Time:</strong> This box shows
                                        the exact time that will be reached
                                        after the entered number of minutes have
                                        elapsed from the current moment.
                                    </li>
                                    <li>
                                        <strong>Date:</strong> The date box
                                        displays the specific date on which this
                                        future time will occur.
                                    </li>
                                    <li>
                                        <strong>Days:</strong> In cases where
                                        the number of minutes extends
                                        significantly into the future, this box
                                        indicates the number of days from now
                                        until the calculated time.
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

            <RelatedLink />
        </>
    );
}

export default page;
