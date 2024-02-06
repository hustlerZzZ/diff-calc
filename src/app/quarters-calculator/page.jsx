"use client";

import RelatedLink from "@/components/RelatedLink";
import Image from "next/image";
import { useEffect, useState } from "react";

function page() {
    const [show, setShow] = useState(false);

    const [type, setType] = useState("add");
    const [date, setDate] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(date);

    useEffect(() => {
        const getTodayDate = () => {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, "0");
            const day = String(today.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
        };

        setDate(getTodayDate());
    }, []);

    const addCurrentDateAndInput = () => {
        setShow((curr) => !curr);

        const currentDate = new Date();
        const daysToAdd = parseInt(inputValue, 10) || 0;

        if (type === "add") {
            currentDate.setDate(currentDate.getDate() + 90 * daysToAdd);
        } else if (type === "subtract") {
            currentDate.setDate(currentDate.getDate() - 90 * daysToAdd);
        } else if (type === "fiscal") {
            const currentDate = new Date(date);
            const quarter = currentDate.getMonth() + 1;
            return Math.floor(quarter / 4) + 1;
        } else {
            const inputDateObject = new Date(inputValue);

            const timeDifference =
                inputDateObject.getTime() - new Date().getTime();
            const days = Math.round(timeDifference / (1000 * 60 * 60 * 24)) + 1;
            return days / 90;
        }

        const formattedDate = `${currentDate.getFullYear()}-${(
            currentDate.getMonth() + 1
        )
            .toString()
            .padStart(2, "0")}-${currentDate
            .getDate()
            .toString()
            .padStart(2, "0")}`;

        return formattedDate;
    };

    useEffect(() => {
        const result = addCurrentDateAndInput();
        console.log(result);
        setResult(result);
    }, [inputValue, date]);

    return (
        <>
            <div className="mt-8 mx-auto space-y-2">
                <h1 className="font-bold text-lg md:text-2xl text-center">
                    Quarters Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Quarters Calculator is a comprehensive tool equipped
                    with four distinct functionalities, making it highly useful
                    for various quarter-related calculations. It allows you to
                    calculate the number of quarters between two dates, add or
                    subtract a specified number of quarters from a given date,
                    and determine the fiscal quarter of a particular date. For
                    instance, you can easily add 9 quarters to a starting date
                    or subtract 3 quarters from it. Additionally, this
                    calculator can compute the total number of quarters between
                    two specific dates, such as from March 1, 2022, to August
                    22, 2024.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-8 bg-gray-100 my-8 rounded-md">
                <h2 className="text-lg font-semibold text-center bg-gray-300 p-4 rounded-lg">
                    📅 Quarters Calculator
                </h2>
                <div>
                    <div className="border border-black border-dashed p-2 space-y-4">
                        <h2 className="text-center">⚙️ Operation Type 🔧</h2>
                        <div>
                            <form className="md:space-x-6 flex justify-center text-center flex-col md:flex-row">
                                <span className="space-x-2">
                                    <input
                                        type="radio"
                                        name="dateTime"
                                        id="add"
                                        value="add"
                                        checked={type === "add"}
                                        onChange={(e) => {
                                            setType(e.target.value);
                                        }}
                                    />
                                    <label htmlFor="dateTime">
                                        Add Quarters
                                    </label>
                                </span>
                                <span className="space-x-2">
                                    <input
                                        type="radio"
                                        name="dateTime"
                                        id="subtract"
                                        value="subtract"
                                        checked={type === "subtract"}
                                        onChange={(e) => {
                                            setType(e.target.value);
                                        }}
                                    />
                                    <label htmlFor="dateTime">
                                        Subtract Quarters
                                    </label>
                                </span>
                                <span className="space-x-2">
                                    <input
                                        type="radio"
                                        name="dateTime"
                                        id="between"
                                        value="between"
                                        checked={type === "between"}
                                        onChange={(e) => {
                                            setType(e.target.value);
                                        }}
                                    />
                                    <label htmlFor="dateTime">
                                        Quarters Between
                                    </label>
                                </span>
                                <span className="space-x-2">
                                    <input
                                        type="radio"
                                        name="dateTime"
                                        id="fiscal"
                                        value="fiscal"
                                        checked={type === "fiscal"}
                                        onChange={(e) => {
                                            setType(e.target.value);
                                        }}
                                    />
                                    <label htmlFor="dateTime">
                                        What Fiscal Quarters
                                    </label>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>

                {type === "fiscal" && (
                    <>
                        <div className="flex space-x-6 justify-center text-center">
                            <div className="flex flex-col space-y-4">
                                <span>START DATE</span>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="p-1 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                        </div>
                    </>
                )}

                {type === "add" && (
                    <>
                        <div className="flex space-x-6 justify-center text-center">
                            <div className="flex flex-col space-y-4">
                                <span>START DATE</span>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="p-1 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <span>NUMBER OF QUARTERS</span>
                                <input
                                    type="number"
                                    value={inputValue}
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    className="p-1 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                        </div>
                    </>
                )}
                {type === "subtract" && (
                    <>
                        <div className="flex space-x-6 justify-center text-center">
                            <div className="flex flex-col space-y-4">
                                <span>START DATE</span>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="p-2 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <span>NUMBER OF QUARTERS</span>
                                <input
                                    type="input"
                                    value={inputValue}
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    className="p-2 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                        </div>
                    </>
                )}

                {type === "between" && (
                    <div>
                        <div className="flex space-x-6 justify-center text-center">
                            <div className="flex flex-col space-y-4">
                                <span>START DATE</span>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="p-2 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <span>END DATE</span>
                                <input
                                    type="date"
                                    value={inputValue}
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    className="p-2 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex space-x-12 justify-center">
                    <button
                        className="bg-blue-500 px-4 py-2 rounded text-white"
                        onClick={addCurrentDateAndInput}
                    >
                        Calculate
                    </button>
                    <button className="bg-red-500 px-4 py-2 rounded text-white">
                        Clear
                    </button>
                </div>

                {show && (
                    <div className="flex justify-center flex-col space-y-6">
                        <div className="flex">
                            <div className="flex flex-col mx-auto bg-white p-2 rounded justify-center items-center">
                                <span>
                                    {type !== "between" &&
                                        type !== "fiscal" &&
                                        "🗓️ Date"}
                                </span>

                                <span>
                                    {type === "between" &&
                                        "🗓️ Number of Quarters"}
                                </span>

                                <span>
                                    {type === "fiscal" &&
                                        "🗓️ Number of Quarters"}
                                </span>

                                <span>
                                    {type === "between" || type === "fiscal"
                                        ? Math.abs(Math.round(result))
                                        : result}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8 p-2">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to Use the Quarters Calculator
                    </h2>
                    <p>
                        Using the Quarters Calculator is a straightforward
                        process, whether you want to calculate the number of
                        quarters between two dates, or need to add or subtract
                        quarters from a specific date. Here's a step-by-step
                        guide to effectively use this calculator:
                    </p>
                    <Image
                        src={"/quaterCalc.jpeg"}
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
                            </span>
                            <p>
                                <strong>Select the Operation Type</strong> At
                                the top of the calculator, you'll find the ⚙️
                                Operation Type field set. Here, choose the
                                operation you wish to perform: adding quarters,
                                subtracting quarters, or calculating the
                                quarters between two dates. For instance, if
                                you're interested in finding out the number of
                                quarters between two dates, select 'quarters
                                between,' typically the default choice.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>
                            <p>
                                <strong> Enter the Start and End Dates</strong>{" "}
                                After selecting your operation, fill in the
                                input fields. For 'quarters between,' input the
                                Start Date and the End Date. The Start Date is
                                your starting point for the calculation, while
                                the End Date marks the conclusion of the period.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>
                            <p>
                                <strong>Execute the Calculation</strong> Click
                                the 'Calculate' button to receive your results.
                                If you wish to start over or make a different
                                calculation, just click the 'Clear' button to
                                reset the input fields.
                            </p>
                        </li>
                    </ol>
                    <p>
                        The Quarters Calculator not only facilitates calculating
                        quarters from a specific date (➕ add quarters or ➖
                        subtract quarters) but also allows for calculating the
                        duration in quarters between two different dates. Its
                        versatility makes it a valuable tool for financial
                        planning, academic purposes, or personal use.
                    </p>
                </div>
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
