"use client";

import RelatedLink from "@/components/RelatedLink";
import Image from "next/image";
import { useEffect, useState } from "react";

function page() {
    const [type, setType] = useState("add");
    const [show, setShow] = useState(false);
    const [date, setDate] = useState("");
    const [addInput, setAddInput] = useState("");
    const [result, setResult] = useState("");

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [includeWeekends, setIncludeWeekends] = useState(true);

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}`;

        setDate(formattedDate);
        setStartDate(formattedDate);
    }, []);

    function calcPlusHandler() {
        setShow(true);

        const startDateObj = new Date(date);

        const businessDaysCount = parseInt(addInput);

        let count = 0;
        let currentDate = startDateObj;
        while (count < Math.abs(businessDaysCount)) {
            if (type === "add") {
                currentDate.setDate(currentDate.getDate() + 1);
            } else if (type === "subtract") {
                currentDate.setDate(currentDate.getDate() - 1);
            }

            if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                count++;
            }
        }

        setResult(currentDate.toISOString().split("T")[0]);
    }

    function calcMinusHandler() {
        setShow(true);

        const startDateObj = new Date(date);

        const businessDaysCount = parseInt(addInput);

        let count = 0;
        let currentDate = startDateObj;
        while (count < Math.abs(businessDaysCount)) {
            if (type === "add") {
                currentDate.setDate(currentDate.getDate() + 1);
            } else if (type === "subtract") {
                currentDate.setDate(currentDate.getDate() - 1);
            }

            if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                count++;
            }
        }

        setResult(currentDate.toISOString().split("T")[0]);
    }

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleIncludeWeekendsChange = () => {
        setIncludeWeekends(!includeWeekends);
    };

    const calculateDateRange = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        let currentDate = new Date(start);
        let count = 0;

        while (currentDate <= end) {
            if (
                includeWeekends ||
                (currentDate.getDay() !== 0 && currentDate.getDay() !== 6)
            ) {
                count++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }

        setResult(count);
    };

    function clearDataRange() {
        setShow(false);
        setResult("");
        setEndDate("");
        setStartDate("");
    }

    return (
        <>
            <div className="mt-8 mx-auto space-y-2">
                <h1 className="text-center font-bold text-lg md:text-2xl">
                    📅 Business Days Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    You've ordered a special gift for your friend's birthday,
                    and the shipping notice says it'll arrive in 5 business
                    days. But when exactly is that? Or, you're planning a
                    project at work and need to know how many business days are
                    between today and the deadline. The "Business Days
                    Calculator" is here to be your calendar buddy! It not only
                    adds and subtracts business days but also calculates the
                    number of business days between two dates. Let's dive in!
                </p>
            </div>
            <div className="p-8 mx-auto space-y-8">
                <div className="p-4 bg-gray-300 rounded">
                    <h2 className="text-lg font-bold text-center">
                        📅 Business Days Calculator
                    </h2>
                </div>
                <div className="space-y-4">
                    <div className="border border-black border-dashed p-2 space-y-4">
                        <h2 className="text-center">⚙️ Operation Type 🔧</h2>
                        <div>
                            <form className="md:space-x-6 flex justify-center text-center flex-col md:flex-row">
                                <span className="space-x-2">
                                    <input
                                        type="radio"
                                        name="add"
                                        id="add"
                                        checked={type === "add"}
                                        onChange={(e) => {
                                            setAddInput("");
                                            setShow(false);
                                            setType(e.target.value);
                                        }}
                                        value="add"
                                    />
                                    <label htmlFor="add">Add</label>
                                </span>
                                <span className="space-x-2">
                                    <input
                                        type="radio"
                                        name="subtract"
                                        id="subtract"
                                        checked={type === "subtract"}
                                        onChange={(e) => {
                                            setAddInput("");
                                            setShow(false);
                                            setType(e.target.value);
                                        }}
                                        value="subtract"
                                    />
                                    <label htmlFor="subtract">Subtract</label>
                                </span>
                                <span className="space-x-2">
                                    <input
                                        type="radio"
                                        name="between"
                                        id="between"
                                        checked={type === "between"}
                                        onChange={(e) => {
                                            setAddInput("");
                                            setShow(false);
                                            setType(e.target.value);
                                        }}
                                        value="between"
                                    />
                                    <label htmlFor="between">
                                        Business Days Between
                                    </label>
                                </span>
                            </form>
                        </div>
                    </div>

                    <div>
                        {type === "add" && (
                            <>
                                <div className="flex space-x-6 justify-center">
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-center">
                                            Start Date
                                        </span>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) =>
                                                setDate(e.target.value)
                                            }
                                            className="p-2 border-solid border-2 border-gray-200
                                        focus:border-gray-300 focus:outline-none"
                                        />
                                    </div>
                                    <span className="font-bold text-xl text-amber-900">
                                        +
                                    </span>
                                    <div className="flex flex-col space-y-2">
                                        <span>Business Days</span>
                                        <input
                                            type="number"
                                            value={addInput}
                                            onChange={(e) =>
                                                setAddInput(e.target.value)
                                            }
                                            className="px-2 py-2 focus:outline-none mx-auto border-gray-200 border-2 border-solid w-20 rounded"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center space-x-6">
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded"
                                        onClick={calcPlusHandler}
                                    >
                                        Calculate
                                    </button>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded">
                                        Clear
                                    </button>
                                </div>
                            </>
                        )}

                        {type === "subtract" && (
                            <>
                                <div className="flex space-x-6 justify-center">
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-center">
                                            Start Date
                                        </span>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) =>
                                                setDate(e.target.value)
                                            }
                                            className="p-2 border-solid border-2 border-gray-200
                                    focus:border-gray-300 focus:outline-none"
                                        />
                                    </div>
                                    <span className="font-bold text-xl text-amber-900">
                                        -
                                    </span>
                                    <div className="flex flex-col space-y-2">
                                        <span>Business Days</span>
                                        <input
                                            type="number"
                                            value={addInput}
                                            onChange={(e) =>
                                                setAddInput(e.target.value)
                                            }
                                            className="px-2 py-2 focus:outline-none mx-auto border-gray-200 border-2 border-solid w-20 rounded"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center space-x-6">
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded"
                                        onClick={calcMinusHandler}
                                    >
                                        Calculate
                                    </button>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded">
                                        Clear
                                    </button>
                                </div>
                            </>
                        )}

                        {type === "between" && (
                            <>
                                <div>
                                    <div className="flex space-x-6 justify-center text-center">
                                        <div className="flex flex-col space-y-2">
                                            <span>Start Date</span>
                                            <input
                                                type="date"
                                                className="p-2 border-solid border-2 border-gray-200 focus:border-gray-300 focus:outline-none"
                                                value={startDate}
                                                onChange={handleStartDateChange}
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <span>End Date</span>
                                            <input
                                                type="date"
                                                className="p-2 border-solid border-2 border-gray-200 focus:border-gray-300 focus:outline-none"
                                                value={endDate}
                                                onChange={handleEndDateChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 px-4 py-2 bg-red-500 justify-center mt-4 w-48 mx-auto text-white">
                                        <input
                                            type="checkbox"
                                            id="includeWeekends"
                                            checked={includeWeekends}
                                            onChange={
                                                handleIncludeWeekendsChange
                                            }
                                        />
                                        <label htmlFor="includeWeekends">
                                            Include Weekends
                                        </label>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={calculateDateRange}
                                            className="bg-green-500 px-4 py-2 rounded mt-4 mx-auto"
                                        >
                                            Calculate
                                        </button>
                                        <button
                                            onClick={clearDataRange}
                                            className="bg-red-500 px-4 py-2 rounded mt-4 mx-auto"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                    {result !== "" && (
                                        <div className="text-center mt-4">
                                            <p>{`Number of days between: ${result}`}</p>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}

                        {show && (
                            <div className="text-center mt-4 space-y-2">
                                <h2>📅 Date: {result}</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8">
                <div>
                    <h2 className="font-bold underline text-blue-500 text-center text-base md:text-xl">
                        How to Use the Business Days Calculator
                    </h2>
                    <p>
                        Navigating the world of business days can sometimes feel
                        like solving a puzzle, especially when weekends and
                        holidays come into play. This calculator is designed to
                        eliminate those uncertainties. Whether you're looking to
                        find out a specific date after a set number of business
                        days, wanting to determine how many workdays are between
                        two dates, or even including weekends in your
                        calculations, this guide will walk you through it. Here,
                        we'll break down each function of the Business Days
                        Calculator, ensuring you can use it with ease and
                        confidence. Let's jump right in!
                    </p>
                    <Image
                        src={"/bui.png"}
                        width={300}
                        height={300}
                        className="mx-auto my-4"
                    />
                </div>
                <div>
                    <h2 className="font-semibold text-lg mt-2">
                        &rarr; How to Add/Subtract Business Days
                    </h2>
                    <ol className="list-inside list-decimal mt-2 outline-dotted p-4">
                        <li>
                            Under "⚙️ Operation Type 🔧," select either "Add"
                            (if you want to count forward) or "Subtract" (if
                            counting backward).
                        </li>
                        <li>
                            Enter the "Start Date." For example, if today's date
                            is 09/08/2023, type that in.
                        </li>
                        <li>
                            Input the number of business days you want to add or
                            subtract in the "Business Days" field.
                        </li>
                        <li>Click on "Calculate."</li>
                        <li>
                            Outcome: The result will display under "📅 Date."
                            For example, adding 5 business days to 09/08/2023
                            will show a future date.
                        </li>
                        <li>
                            Real-life example: If you're expecting a package in
                            10 business days and today's date is 09/08/2023, the
                            calculator will tell you the expected arrival date!
                        </li>
                    </ol>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mt-2">
                        &rarr; How to Get Business Days Between Two Dates
                    </h2>

                    <ol className="list-inside list-decimal mt-2 outline-dotted p-4">
                        <li>
                            Choose "Business Days Between" under "⚙️ Operation
                            Type 🔧."
                        </li>
                        <li>
                            Fill in the "Start Date" and "End Date." Say you
                            want to check from 01/08/2023 to 09/08/2023.
                        </li>
                        <li>Click "Calculate."</li>
                        <li>
                            Outcome: The number of business days between those
                            dates will appear as "Number of days between: X."
                        </li>
                        <li>
                            Real-life example: Perfect for when you're trying to
                            figure out how many workdays are left until your
                            vacation starts!
                        </li>
                    </ol>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mt-2 ">
                        &rarr; Business Days Calculator Including Weekends
                    </h2>

                    <ol className="list-inside list-decimal mt-2 outline-dotted p-4">
                        <li>
                            After choosing "Business Days Between," fill in your
                            start and end dates.
                        </li>
                        <li>Check the box that says "Include Weekends."</li>
                        <li>Click on "Calculate."</li>
                        <li>
                            Outcome: The result now includes weekends in the
                            total count of days.
                        </li>
                        <li>
                            Real-life example: Useful when you're planning a
                            project that runs through the weekend or calculating
                            time for activities that don't stop for Saturdays
                            and Sundays!
                        </li>
                    </ol>
                    <p className="mt-2">
                        That's it! With these easy steps, planning around
                        business days has never been simpler. Whether it's
                        awaiting a package, setting a project timeline, or just
                        satisfying your curiosity, the Business Days Calculator
                        is here to help. Happy calculating! 🗓✨👩‍💼👨‍💼📦🔧🎉
                    </p>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mt-2 ">
                        &rarr; Add Business Days Table
                    </h2>

                    <p className="mt-2">
                        For your quick reference, here's 1 up to 30 business
                        days from now. It excludes Saturdays and Sundays.
                    </p>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mt-2 ">
                        &rarr; Subtract Business Days Table
                    </h2>

                    <p className="mt-2">
                        Including the weekends, here's a table when you subtract
                        a business day from the current date. Like when you ask
                        what 25 business days ago? Just check out day 25 and its
                        corresponding date on the table.
                    </p>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mt-2 ">
                        &rarr; FAQs
                    </h2>
                    </div>
                <div>
                    <h2 className="font-semibold text-lg mt-2 ">
                        Q: What is a Business Days Calculator?
                    </h2>

                    <p className="mt-2">
                        A: A Business Days Calculator is an online tool that 
                        calculates the number of working days between two dates. 
                        It helps in determining the number of work days or business days excluding weekends and public holidays.
                    </p>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mt-2 ">
                        Q: How does a Business Days Calculator work?
                    </h2>

                    <p className="mt-2">
              A: A Business Days Calculator utilizes a specific algorithm to calculate the number of working days 
                        between two dates. It takes into account weekends (typically Saturdays and Sundays) and 
                        public holidays to provide an accurate count of working days.                    
                    </p>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mt-2 ">
                        Q: Why would I need to use a Business Days Calculator?
                    </h2>

                    <p className="mt-2">
             A: You might need to use a Business Days Calculator to determine the number of work days or 
                        business days between two dates for various purposes. 
                        It can be helpful for project planning, estimating turnaround times, calculating payment due dates, and more.               
                    </p>
                    </div>
                    <div>
                    <h2 className="font-semibold text-lg mt-2 ">
                        Q: How can I use the Business Days Calculator?
                    </h2>

                    <p className="mt-2">
             A: Using the Business Days Calculator is simple. You just need to enter the start date and end date 
                        for which you want to calculate the number of working days. The calculator will then provide 
                        you with the result showing the total number of work days between those dates.               
                    </p>
                    </div>
                <div>
                    <h2 className="font-semibold text-lg mt-2 ">
                        Q: Are public holidays and weekends included in the calculation?
                    </h2>

                    <p className="mt-2">
             A: No, public holidays and weekends are not included in the calculation of working days. 
                        The Business Days Calculator automatically excludes these non-working days to give you an accurate count of business days.               
                    </p>
                    </div>
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
