"use client";

import RelatedLink from "@/components/RelatedLink";
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
            currentDate.setDate(currentDate.getDate() + 7 * daysToAdd) + 1;
        } else if (type === "subtract") {
            currentDate.setDate(currentDate.getDate() - 7 * daysToAdd) + 1;
        } else {
            const inputDateObject = new Date(inputValue);

            const timeDifference =
                inputDateObject.getTime() - new Date().getTime();
            const days = Math.round(timeDifference / (1000 * 60 * 60 * 24)) + 1;
            return days / 7;
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
                    Weeks Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Weeks Calculator is a versatile and efficient tool for
                    various week-related calculations. It allows you to
                    determine the number of weeks between two specific dates, as
                    well as to add or subtract a certain number of weeks to or
                    from a starting date. For instance, if you're curious about
                    the number of weeks between December 5, 2022, and December
                    20, 2024, this calculator will quickly provide the answer.
                    Additionally, it's equipped to handle operations like adding
                    6 weeks to a given date or subtracting 13 weeks from one.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-8 bg-gray-100 my-8 rounded-md">
                <h2 className="text-lg font-semibold text-center bg-gray-300 p-4 rounded-lg">
                    📅 Weeks Calculator
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
                                <span>NUMBER OF WEEKS</span>
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
                                <span>NUMBER OF WEEKS</span>
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
                                        : "Weeks Between"}
                                </span>
                                <span>{Math.abs(result)}</span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                )}
            </div>

            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8 p-2">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to Use the Weeks Calculator
                    </h2>
                    <p>
                        Using the Weeks Calculator is a simple and efficient way
                        to manage various calculations involving weeks, such as
                        determining the number of weeks between two dates or
                        adding and subtracting weeks from a specified date.
                        Here's how you can use this tool effectively:
                    </p>
                    <Image
                        src={"/weeksCalc.jpeg"}
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
                                <strong>Select the Operation Type</strong> At
                                the top of the calculator, you'll find the ⚙️
                                Operation Type field set. Here, you need to
                                select your desired operation: adding weeks,
                                subtracting weeks, or calculating the weeks
                                between two dates. As a starting point, let’s
                                choose the 'weeks between' option, which is
                                typically selected by default.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>Enter the Dates for Calculation</strong>{" "}
                                Once you've selected the operation type, fill in
                                the relevant input fields. For the 'weeks
                                between' operation, input the Start Date and End
                                Date. The Start Date is your reference date for
                                the beginning of the period, while the End Date
                                signifies the end of the period.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                <strong>
                                    Input for Addition or Subtraction of Weeks
                                </strong>{" "}
                                If you choose to add or subtract weeks, first
                                select the appropriate operation type. Then,
                                enter the Start Date and the number of weeks you
                                wish to add or subtract in their respective
                                fields.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>
                            <p>
                                <strong>Calculate and Clear</strong>
                                <ul className="list-disc">
                                    <li>
                                        Click on the 'Calculate' button to
                                        obtain your results.
                                    </li>
                                    <li>
                                        If you need to perform a new calculation
                                        or modify your inputs, simply use the
                                        'Clear' button to reset all fields.
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ol>
                    <p>
                        While there are specialized calculators specifically
                        designed for calculating{" "}
                        <Link
                            className="text-blue-400"
                            href="/weeks-from-now-calculator"
                        >
                            weeks from now
                        </Link>{" "}
                        (➕ add weeks) and{" "}
                        <Link
                            className="text-blue-400"
                            href="/weeks-ago-calculator"
                        >
                            weeks ago
                        </Link>{" "}
                        (➖ subtract weeks) (interlink weeks ago calc), this
                        Weeks Calculator offers additional flexibility. It
                        allows you to select a custom starting date and combines
                        this feature with the ability to calculate the number of
                        weeks between two distinct dates.
                    </p>
                </div>
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
