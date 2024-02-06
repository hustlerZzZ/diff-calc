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
            currentDate.setDate(currentDate.getDate() + 365 * daysToAdd);
        } else if (type === "subtract") {
            currentDate.setDate(currentDate.getDate() - 365 * daysToAdd);
        } else {
            const inputDateObject = new Date(inputValue);

            const timeDifference =
                inputDateObject.getTime() - new Date().getTime();
            const days = Math.round(timeDifference / (1000 * 60 * 60 * 24)) + 1;
            return days / 365;
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
                    Years Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Years Calculator is a multifunctional tool that offers
                    three key operations: calculating the number of years
                    between two dates, adding a certain number of years to a
                    starting date, and subtracting years from a starting date.
                    For instance, if you need to add 11 years to a specific
                    starting date or subtract 5 years from another date, the
                    Years Calculator makes this process effortless.
                    Additionally, it can accurately determine the total number
                    of years between two distinct dates, such as from January 1,
                    2023, to December 31, 2030. Simply input the relevant dates
                    into the calculator, and it will provide you with the
                    precise calculations you require.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-8 bg-gray-100 my-8 rounded-md">
                <h2 className="text-lg font-semibold text-center bg-gray-300 p-4 rounded-lg">
                    📅 Years Calculator
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
                                    <label htmlFor="dateTime">Add Years</label>
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
                                        Subtract Years
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
                                        Years Between
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
                                        : "Years Between"}
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
                        How to Use the Years Calculator
                    </h2>
                    <p>
                        Using the Years Calculator is straightforward and
                        efficient for various calculations involving years.
                        Whether you're adding or subtracting years from a date
                        or calculating the total number of years between two
                        dates, here's a step-by-step guide:
                    </p>
                    <Image
                        src={"/yearCalc.jpeg"}
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
                                the top of the calculator, locate the ⚙️
                                Operation Type field set. Here, you need to
                                select your desired operation: adding years,
                                subtracting years, or calculating the years
                                between two dates. As an example, let’s choose
                                the 'years between' option, which is usually the
                                default selection.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>
                            <p>
                                <strong> Enter the Start and End Dates</strong>{" "}
                                After selecting the operation type, enter the
                                dates in the input fields. For calculating
                                'years between,' input the Start Date (your
                                calculation’s starting point) and the End Date
                                (the conclusion of the period).
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>
                            <p>
                                <strong>Execute the Calculation</strong> Click
                                the 'Calculate' button to receive your results.
                                If you need to start over or adjust your inputs,
                                use the 'Clear' button to reset the fields.
                            </p>
                        </li>
                    </ol>
                    <p>
                        If you're adding or subtracting years, first select the
                        appropriate operation (add or subtract). Then, input the
                        Start Date and the number of years you wish to add or
                        subtract.
                    </p>
                    <p>
                        While there are dedicated calculators for calculating{" "}
                        <Link
                            className="text-blue-400"
                            href="/years-from-now-calculator"
                        >
                            years from now
                        </Link>{" "}
                        (➕ add years) and{" "}
                        <Link
                            className="text-blue-400"
                            href="/years-ago-calculator"
                        >
                            years ago
                        </Link>{" "}
                        (➖ subtract years) , this Years Calculator offers
                        additional functionality. It allows you to alter the
                        starting date and also provides the capability to
                        calculate the number of years between two distinct
                        dates.
                    </p>
                </div>
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
