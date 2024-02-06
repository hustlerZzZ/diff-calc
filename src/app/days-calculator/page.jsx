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
            currentDate.setDate(currentDate.getDate() + daysToAdd);
        } else if (type === "subtract") {
            currentDate.setDate(currentDate.getDate() - daysToAdd);
        } else {
            const inputDateObject = new Date(inputValue);

            const timeDifference =
                inputDateObject.getTime() - new Date().getTime();
            const days = Math.round(timeDifference / (1000 * 60 * 60 * 24)) + 1;
            return days;
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
                    Days Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Days Calculator is a multipurpose tool ideal for
                    calculating the total number of days between two dates, as
                    well as adding or subtracting days from a given date. For
                    example, to find out the days between January 1, 2023, and
                    February 1, 2024, simply input these dates. Additionally,
                    you can use it to add or subtract days, such as adding 4
                    days to a date or subtracting 24 days.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-8 bg-gray-100 my-8 rounded-md">
                <h2 className="text-lg font-semibold text-center bg-gray-300 p-4 rounded-lg">
                    📅 Days Calculator
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
                                    <label htmlFor="dateTime">Add Days</label>
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
                                        Subtract Days
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
                                        Days Between
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
                                        : "Days Between"}
                                </span>
                                <span>{result}</span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                )}
            </div>

            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8 p-2">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to Use the Days Calculator
                    </h2>
                    <p>
                        Using the Days Calculator is a straightforward process,
                        ideal for various date-related calculations such as
                        determining the number of days between two dates,
                        adding, or subtracting days from a specific date. Here's
                        a step-by-step guide:
                    </p>
                    <Image
                        src={"/daysCalc.jpeg"}
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
                                <strong>Select the Operation Type</strong> Above
                                the calculator, you'll find the ⚙️ Days
                                Operation field set. Here, you need to choose
                                your desired operation: adding days, subtracting
                                days, or calculating the days between two dates.
                                For instance, if you're interested in finding
                                the number of days between two dates, select
                                that option (usually selected by default).
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>Enter the Dates for Calculation</strong>{" "}
                                Once you've chosen the operation type, fill in
                                the necessary input fields. For the 'days
                                between' operation, enter the Start Date and the
                                End Date. The Start Date is the beginning of
                                your calculation period, while the End Date
                                marks the end of the period.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                <strong>
                                    Input for Addition or Subtraction of Days
                                </strong>{" "}
                                If you select the add or subtract days
                                operation, you should then enter the Start Date
                                and the number of days you wish to add or
                                subtract in their respective fields.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>
                            <p>
                                <strong>Calculate and Reset</strong>
                                <ul className="list-disc">
                                    <li>
                                        Click the 'Calculate' button to obtain
                                        the results of your chosen operation.
                                    </li>
                                    <li>
                                        If you need to start over or perform a
                                        new calculation, simply click the
                                        'Clear' button to reset all input
                                        fields.
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ol>
                    <p>
                        While there are specific calculators for{" "}
                        <Link href="/days-from-now-calculator">
                            days from now
                        </Link>
                        (➕) and{" "}
                        <Link href="/days-ago-calculator">days ago</Link> (➖) ,
                        this Days Calculator offers the flexibility to change
                        the starting date and includes the option to calculate
                        the days between two dates, making it a versatile tool
                        for your date calculation needs.
                    </p>
                </div>
            </div>
        </>
    );
}

export default page;
