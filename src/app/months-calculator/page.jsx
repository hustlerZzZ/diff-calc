"use client";

import Image from "next/image";
import Link from "next/link";
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
        console.log(inputValue);

        if (type === "add") {
            currentDate.setDate(currentDate.getDate() + 30 * daysToAdd);
        } else if (type === "subtract") {
            currentDate.setDate(currentDate.getDate() - 30 * daysToAdd);
        } else {
            const inputDateObject = new Date(inputValue);

            const timeDifference =
                inputDateObject.getTime() - new Date().getTime();
            const days = Math.round(timeDifference / (1000 * 60 * 60 * 24)) + 1;
            return days / 30;
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
        setResult(result);
    }, [inputValue]);

    return (
        <>
            <div className="mt-8 mx-auto space-y-2">
                <h1 className="font-bold text-lg md:text-2xl text-center">
                    Months Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Months Calculator is a multifunctional tool designed to
                    handle various calculations involving months. It offers
                    three key features: calculating the number of months between
                    two dates, adding a specified number of months to a given
                    date, and subtracting months from a reference date. For
                    instance, if you need to add 9 months to a particular date
                    or subtract 3 months from another, this calculator
                    simplifies the task. Additionally, it can efficiently
                    compute the total number of months between two specific
                    dates, such as from March 1, 2022, to August 22, 2024.
                    Simply input the relevant dates or numbers into the
                    calculator to get your desired result.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-8 bg-gray-100 my-8 rounded-md">
                <h2 className="text-lg font-semibold text-center bg-gray-300 p-4 rounded-lg">
                    📅 Months Calculator
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
                                    <label htmlFor="dateTime">Add Weeks</label>
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
                                        Subtract Weeks
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
                                        Weeks Between
                                    </label>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>

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
                                <span>END DATE</span>
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
                                <span>END DATE</span>
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
                                    🗓️
                                    {type !== "between"
                                        ? "Date"
                                        : "Months Between"}
                                </span>
                                <span>
                                    {type === "between"
                                        ? Math.abs(Math.round(result))
                                        : result}
                                </span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                )}
            </div>

            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8 p-2">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to Use the Months Calculator
                    </h2>
                    <p>
                        Using the Months Calculator is a straightforward
                        process, whether you're looking to add or subtract
                        months from a date, or calculate the total number of
                        months between two dates. Here's a detailed guide on how
                        to navigate and use this tool:
                    </p>
                    <Image
                        src={"/monthsCalc.jpeg"}
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
                                <strong>Select the Desired Operation</strong> At
                                the top section of the calculator, you will find
                                the ⚙️ Operation Type field set. Here, you need
                                to select the type of operation you wish to
                                perform: add months, subtract months, or
                                calculate the months between two dates. For
                                example, if you want to determine the number of
                                months between two dates, choose the 'months
                                between' option, which is often the default
                                selection.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>Input Your Dates</strong> After
                                selecting your operation type, proceed to fill
                                in the input fields. For 'months between,'
                                you'll need to enter a Start Date (the beginning
                                of your time period) and an End Date (the
                                conclusion of that period).
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>
                            <p>
                                <strong>Execute the Calculation</strong>
                                <ul>
                                    <li>
                                        Click on the 'Calculate' button to
                                        obtain your results. The calculator will
                                        process your inputs and display the
                                        outcome.
                                    </li>
                                    <li>
                                        If you need to perform another
                                        calculation or adjust your inputs,
                                        simply click the 'Clear' button to reset
                                        the input fields.
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ol>
                    <p>
                        If your task involves adding or subtracting months,
                        first select the appropriate operation (add or
                        subtract). Then, input the Start Date and the number of
                        months you wish to add or subtract in their respective
                        fields.
                    </p>
                    <p>
                        While there are dedicated calculators specifically
                        designed for calculating{" "}
                        <Link href="/months-from-now-calculator">
                            months from now
                        </Link>{" "}
                        (➕ add months) and{" "}
                        <Link href="/months-ago-calculator">months ago</Link>{" "}
                        (➖ subtract months), this Months Calculator provides
                        additional versatility. It allows you to modify the
                        starting date and also offers the functionality to
                        calculate the span of months between two different
                        dates.
                    </p>
                </div>
            </div>
        </>
    );
}

export default page;
