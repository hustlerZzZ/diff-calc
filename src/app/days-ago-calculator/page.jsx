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

    useEffect(() => {
        // Get the current date
        const today = new Date();
        // Calculate the new date based on the input value (days ago)
        const newDate = new Date(
            today.getTime() - formValue * 24 * 60 * 60 * 1000
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
                    ⌛ Days Ago Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    Let's say you have a toy you received on your last birthday
                    and you're wondering exactly which day you got it. Or
                    perhaps, you're trying to remember the day you went on that
                    super fun trip two weeks ago. The{" "}
                    <em>"Days Ago Calculator"</em> is your magical time machine
                    for these questions! Pop in the number of days you want to
                    look back, and the calculator takes you on a journey to that
                    exact day.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-semibold text-center ">
                        ⌛ Days Ago Calculator
                    </h2>
                </div>

                <div className="text-center space-y-4">
                    <div className="space-y-2">
                        <h2>Days Ago</h2>
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
                        How to Use the ⌛ Days Ago Calculator
                    </h2>
                </div>
                <div className="space-y-2">
                    <ol className="list-none">
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 1
                            </span>{" "}
                            <p>
                                Ensure the inputs are only numbers & field is
                                clear so you can start your journey correctly.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                You'll spot a space that reads "Days Ago." Here,
                                you'll input the number of days you want to
                                travel back in time. Real-life example: You want
                                to know the date of the day 10 days ago when you
                                had that amazing pizza party. Type "10" in this
                                field.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                Tap on this beautiful button, and let the magic
                                happen & head back in time!
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                After the quick calculation, you'll discover
                                details like:
                                <ul>
                                    <li>
                                        📅 Date Sat July 30, 2023 (Because today
                                        is August 9 and 10 days ago was July
                                        30!)
                                    </li>
                                    <li>
                                        🌞 Day Saturday (Looks like your pizza
                                        party was on a weekend!)
                                    </li>
                                    <li>
                                        📅 Week 31 / 52 weeks (This means it was
                                        the 31st week of the year.)
                                    </li>
                                    <li>
                                        📅 Year 211 / 365 (This indicates it was
                                        the 211th day of the year.)
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ol>
                    <div className="space-y-4">
                        <Image
                            src={"/ago.png"}
                            width={300}
                            height={300}
                            className="mx-auto my-4"
                        />
                        <p>
                            There you have it! Anytime you're trying to remember
                            the exact day of a past event, like the day of the
                            last big holiday, the day you adopted your pet, or
                            even just a random fun day, the "Days Ago
                            Calculator" is here to help. Dive in and rediscover
                            your memories! 📆🔍🎈🍕
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <h3 className="p-2">
                    Here's a quick 1 to 50 days ago in a table format.
                </h3>
                <Table />
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
