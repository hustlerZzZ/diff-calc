"use client";

import { useEffect, useState } from "react";
import Table from "./Table";
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
            currentHour + parseInt(hour),
            currentMinute + parseInt(minute),
            currentSecond + parseInt(second)
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
        console.log("Hiii");
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
            <div className="mt-8 mx-auto space-y-2">
                <h1 className="text-center font-bold text-lg md:text-2xl">
                    Time From Now Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The <em>"Time From Now Calculator"</em> is a tool that
                    calculates the exact time from a given duration in hours,
                    minutes, and seconds relative to the present moment. If the
                    current time is 2:00 PM and you input a duration of 5 hours
                    and 30 minutes, the calculator will show the result as 7:30
                    PM on the same day.
                </p>
            </div>
            <div className="mx-auto p-8 space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-bold text-center">
                        ⌛ Time From Now Calculator
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

            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8 p-2">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to Use the Time From Now Calculator
                    </h2>
                    <p>
                        Hey there, future time traveler! 🚀 Want to know what
                        the date and time will be after adding some hours,
                        minutes, and seconds? Well, you're in the right place.
                        Let's figure it out together, step by step.
                    </p>
                </div>
                <div className="space-y-2">
                    <ol className="list-none">
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 1
                            </span>{" "}
                            <p>
                                Before you start, know the current time. For
                                example, let's say right now, it's 10:00 am on
                                August 9, 2023.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                Look at the calculator and you'll see a space
                                for hours. Type in the number of hours you want
                                to add. Example: Let's add 1 hour.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                Next, there's a spot for minutes. Fill that in
                                too! Example: Let's add 1 minute.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                Last but not least, type in the seconds.
                                Example: We're not adding any seconds this time.
                                So, we can leave it as 0.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 5
                            </span>{" "}
                            <p>
                                This is the magic moment! Push that button and
                                watch the calculator work its magic.
                            </p>
                        </li>
                    </ol>
                    <div className="space-y-4">
                        <p>
                            Here's what you'll see:
                            <ul>
                                <li>🕑 Time 11:01 am</li>
                                <li>📅 Date August 9, 2023</li>
                                <li>🌞 Days 0</li>
                            </ul>
                        </p>
                        <Image
                            src={"/now.png"}
                            width={300}
                            height={300}
                            className="mx-auto my-4"
                        />
                        <p>
                            So, what does this mean? After adding 1 hour and 1
                            minute to 10:00 am on August 9, 2023, it'll be 11:01
                            am on the same day. Cool, right? Now you're all set
                            to play around and check different times. Want to
                            know what time it'll be 23 hours, 59 minutes, and 59
                            seconds from now? Just type those numbers in and hit
                            calculate. Happy time traveling! ⏰🔮
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
