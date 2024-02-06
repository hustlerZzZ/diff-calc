"use client";
import RelatedLink from "@/components/RelatedLink";
import Image from "next/image";
import { useEffect, useState } from "react";

function Home() {
    const [type, setType] = useState("add");
    const [show, setShow] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [duration, setDuration] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("");
    const [ready, setReady] = useState("");

    const [calcDate, setCalcDate] = useState(date);
    const [calcTime, setCalcTime] = useState(time);
    const [todays, setTodays] = useState("");

    const [years, setYears] = useState("");
    const [months, setMonths] = useState("");
    const [weeks, setWeeks] = useState("");
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const [milliseconds, setMilliseconds] = useState("");

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        const hours = String(today.getHours()).padStart(2, "0");
        const minutes = String(today.getMinutes()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime = `${hours}:${minutes}`;
        setDate(formattedDate);
        setTodays(formattedDate);
        setTime(formattedTime);
    }, []);

    const calculateDuration = () => {
        const startDateTime = new Date(`${date} ${time}`);
        const endDateTime = new Date(`${endDate} ${endTime}`);

        const durationInMillis =
            endDateTime.getTime() - startDateTime.getTime();

        // Convert duration to hours and minutes
        const years = Math.floor(
            durationInMillis / (1000 * 60 * 60 * 24 * 365)
        );
        const weeks = Math.floor(durationInMillis / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor(durationInMillis / (1000 * 60 * 60 * 24));
        const hours = Math.floor(durationInMillis / (1000 * 60 * 60));
        const minutes = Math.floor(durationInMillis / (1000 * 60));

        setDuration(
            `${years} years, ${weeks} weeks, ${days} days, ${hours} hours, and ${minutes} minutes`
        );
    };

    const clearFields = () => {
        setDuration("");
        setDate("");
        setTime("");
        setEndDate("");
        setEndTime("");
    };

    function calculatePlusHandler() {
        if (date === "" || time === "") return;
        setShow(true);
        const currDate = new Date(date);
        const dateInNumber = currDate.getTime();

        const currTime = new Date();
        const timeInNumber = currTime.getTime();

        const yearsValue = Number(years) || 0;
        const monthsValue = Number(months) || 0;
        const weeksValue = Number(weeks) || 0;
        const daysValue = Number(days) || 0;
        const hoursValue = Number(hours) || 0;
        const minutesValue = Number(minutes) || 0;
        const secondsValue = Number(seconds) || 0;
        const millisecondsValue = Number(milliseconds) || 0;

        const totalMillisecondsForDate =
            yearsValue * 31536000000 +
            monthsValue * 2628000000 +
            weeksValue * 604800000 +
            daysValue * 86400000;

        const totalMillisecondsForTime =
            hoursValue * 3600000 +
            minutesValue * 60000 +
            secondsValue * 1000 +
            millisecondsValue;

        const totalDate = dateInNumber + totalMillisecondsForDate;
        const totalTime = timeInNumber + totalMillisecondsForTime;

        const readyDate = new Date(totalDate);
        const readyTime = new Date(totalTime);

        const displayMonths = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const day_ = String(readyDate.getDate()).padStart(2, "0");
        const month_ = displayMonths[readyDate.getMonth()];
        const year_ = readyDate.getFullYear();

        const hours_ = readyTime.getHours();
        const minutes_ = readyTime.getMinutes();
        let ampm_ = "AM";

        if (hours_ >= 12) {
            ampm_ = "PM";
        }

        const displayHours_ = hours_ % 12 === 0 ? 12 : hours_ % 12;
        const formattedTime_ = `${displayHours_}:${String(minutes_).padStart(
            2,
            "0"
        )} ${ampm_}`;

        setCalcTime(formattedTime_);

        const formattedDate_ = `${year_}-${month_}-${day_}`;

        setCalcDate(formattedDate_);
        setCalcTime(formattedTime_);
    }

    function calculateMinusHandler() {
        if (date === "" || time === "") return;
        setShow(true);
        const currDate = new Date(date);
        const dateInNumber = currDate.getTime();

        const currTime = new Date();
        const timeInNumber = currTime.getTime();

        const yearsValue = Number(years) || 0;
        const monthsValue = Number(months) || 0;
        const weeksValue = Number(weeks) || 0;
        const daysValue = Number(days) || 0;
        const hoursValue = Number(hours) || 0;
        const minutesValue = Number(minutes) || 0;
        const secondsValue = Number(seconds) || 0;
        const millisecondsValue = Number(milliseconds) || 0;

        const totalMillisecondsForDate =
            yearsValue * 31536000000 +
            monthsValue * 2628000000 +
            weeksValue * 604800000 +
            daysValue * 86400000;

        const totalMillisecondsForTime =
            hoursValue * 3600000 +
            minutesValue * 60000 +
            secondsValue * 1000 +
            millisecondsValue;

        const totalDate = dateInNumber - totalMillisecondsForDate;
        const totalTime = timeInNumber - totalMillisecondsForTime;

        const readyDate = new Date(totalDate);
        const readyTime = new Date(totalTime);

        const displayMonths = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const day_ = String(readyDate.getDate()).padStart(2, "0");
        const month_ = displayMonths[readyDate.getMonth()];
        const year_ = readyDate.getFullYear();
        const hours_ = readyTime.getHours();
        const minutes_ = readyTime.getMinutes();
        let ampm_ = "AM";

        if (hours_ >= 12) {
            ampm_ = "PM";
        }

        const displayHours_ = hours_ % 12 === 0 ? 12 : hours_ % 12;
        const formattedTime_ = `${displayHours_}:${String(minutes_).padStart(
            2,
            "0"
        )} ${ampm_}`;

        setCalcTime(formattedTime_);

        const formattedDate_ = `${year_}-${month_}-${day_}`;

        setCalcDate(formattedDate_);
        setCalcTime(formattedTime_);
    }

    function clearHandler() {
        setShow(false);
        setDate("");
        setTime("");
        setYears("");
        setDays("");
        setWeeks("");
        setMonths("");
        setHours("");
        setMinutes("");
        setSeconds("");
        setMilliseconds("");
    }

    return (
        <>
            <div className="mt-8 mx-auto space-y-2">
                <h1 className="font-bold text-lg md:text-2xl text-center">
                    Date Time Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    Introducing our <em>Date Time Calculator</em>, an intuitive
                    tool that simplifies your date and time operations. With
                    this calculator, easily add, subtract, or find the duration
                    between two dates. Simply choose the operation, input your
                    dates and times, and get accurate results instantly. Ideal
                    for planning, scheduling, or just for curiosity, our tool
                    makes date-time calculations a breeze.
                </p>
            </div>
            <div className="p-8 mx-auto space-y-8 bg-gray-100 my-8 rounded-md">
                <h2 className="text-lg font-semibold text-center bg-gray-300 p-4 rounded-lg">
                    📅 Date Time Calculator
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
                                            clearHandler();
                                            setType(e.target.value);
                                        }}
                                    />
                                    <label htmlFor="dateTime">Add</label>
                                </span>
                                <span className="space-x-2">
                                    <input
                                        type="radio"
                                        name="dateTime"
                                        id="subtract"
                                        value="subtract"
                                        checked={type === "subtract"}
                                        onChange={(e) => {
                                            clearHandler();
                                            setType(e.target.value);
                                        }}
                                    />
                                    <label htmlFor="dateTime">Subtract</label>
                                </span>
                                <span className="space-x-2">
                                    <input
                                        type="radio"
                                        name="dateTime"
                                        id="duration"
                                        value="duration"
                                        checked={type === "duration"}
                                        onChange={(e) => {
                                            clearHandler();
                                            setType(e.target.value);
                                        }}
                                    />
                                    <label htmlFor="dateTime">
                                        Duration Between
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
                                <span>START TIME</span>
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="p-1 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                        </div>
                        <span className="flex justify-center text-2xl font-bold">
                            +
                        </span>
                        <div className="space-y-4 text-center">
                            <div className="flex flex-col md:flex-row md:space-x-4 text-sm space-y-2 md:space-y-0 justify-center">
                                <div className="flex flex-col">
                                    <span>YEARS</span>
                                    <input
                                        type="number"
                                        value={years}
                                        onChange={(e) =>
                                            setYears(e.target.value)
                                        }
                                        className="px-2 py-2 focus:outline-none mx-auto border-gray-200 border-2 border-solid w-20 rounded"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>MONTHS</span>
                                    <input
                                        type="number"
                                        value={months}
                                        onChange={(e) =>
                                            setMonths(e.target.value)
                                        }
                                        className="px-2 py-2 focus:outline-none mx-auto border-gray-200 border-2 border-solid w-20 rounded"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>WEEKS</span>
                                    <input
                                        type="number"
                                        value={weeks}
                                        onChange={(e) =>
                                            setWeeks(e.target.value)
                                        }
                                        className="px-2 py-2 focus:outline-none mx-auto border-gray-200 border-2 border-solid w-20 rounded"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>DAYS</span>
                                    <input
                                        type="number"
                                        value={days}
                                        onChange={(e) =>
                                            setDays(e.target.value)
                                        }
                                        className="px-2 py-2 focus:outline-none mx-auto border-gray-200 border-2 border-solid w-20 rounded"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
                                <div className="flex flex-col">
                                    <span>HOURS</span>
                                    <input
                                        type="number"
                                        value={hours}
                                        onChange={(e) =>
                                            setHours(e.target.value)
                                        }
                                        placeholder="--"
                                        className="px-2 py-2 focus:outline-none mx-auto border-gray-200 border-2 border-solid w-32 rounded text-center"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>MINUTES</span>
                                    <input
                                        type="number"
                                        value={minutes}
                                        onChange={(e) =>
                                            setMinutes(e.target.value)
                                        }
                                        placeholder="--"
                                        className="px-2 py-2 focus:outline-none mx-auto border-gray-200 border-2 border-solid w-32 rounded text-center"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>SECONDS</span>
                                    <input
                                        type="number"
                                        value={seconds}
                                        onChange={(e) =>
                                            setSeconds(e.target.value)
                                        }
                                        placeholder="--"
                                        className="px-2 py-2 focus:outline-none mx-auto border-gray-200 border-2 border-solid w-32 rounded text-center"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>MILLISECONDS</span>
                                    <input
                                        type="number"
                                        value={milliseconds}
                                        onChange={(e) =>
                                            setMilliseconds(e.target.value)
                                        }
                                        placeholder="--"
                                        className="px-2 py-2 focus:outline-none mx-auto border-gray-200 border-2 border-solid w-32 rounded text-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-12 justify-center">
                            <button
                                className="bg-blue-500 px-4 py-2 rounded text-white"
                                onClick={calculatePlusHandler}
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
                                <span>START TIME</span>
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="p-2 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                        </div>
                        <span className="flex justify-center text-2xl font-bold">
                            -
                        </span>
                        <div className="space-y-4 text-center">
                            <div className="flex flex-col md:flex-row md:space-x-4 text-sm space-y-2 md:space-y-0 justify-center">
                                <div className="flex flex-col">
                                    <span>YEARS</span>
                                    <input
                                        type="number"
                                        value={years}
                                        onChange={(e) =>
                                            setYears(e.target.value)
                                        }
                                        className="px-2 py-2 focus:outline-none border-gray-200 mx-auto border-2 border-solid w-20 rounded"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>MONTHS</span>
                                    <input
                                        type="number"
                                        value={months}
                                        onChange={(e) =>
                                            setMonths(e.target.value)
                                        }
                                        className="px-2 py-2 mx-auto focus:outline-none border-gray-200 border-2 border-solid w-20 rounded"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>WEEKS</span>
                                    <input
                                        type="number"
                                        value={weeks}
                                        onChange={(e) =>
                                            setWeeks(e.target.value)
                                        }
                                        className="px-2 py-2 mx-auto focus:outline-none border-gray-200 border-2 border-solid w-20 rounded"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>DAYS</span>
                                    <input
                                        type="number"
                                        value={days}
                                        onChange={(e) =>
                                            setDays(e.target.value)
                                        }
                                        className="px-2 py-2 mx-auto focus:outline-none border-gray-200 border-2 border-solid w-20 rounded"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
                                <div className="flex flex-col">
                                    <span>HOURS</span>
                                    <input
                                        type="number"
                                        value={hours}
                                        onChange={(e) =>
                                            setHours(e.target.value)
                                        }
                                        placeholder="--"
                                        className="px-2 mx-auto py-2 focus:outline-none border-gray-200 border-2 border-solid w-32 rounded text-center"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>MINUTES</span>
                                    <input
                                        type="number"
                                        value={minutes}
                                        onChange={(e) =>
                                            setMinutes(e.target.value)
                                        }
                                        placeholder="--"
                                        className="px-2 mx-auto py-2 focus:outline-none border-gray-200 border-2 border-solid w-32 rounded text-center"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>SECONDS</span>
                                    <input
                                        type="number"
                                        value={seconds}
                                        onChange={(e) =>
                                            setSeconds(e.target.value)
                                        }
                                        placeholder="--"
                                        className="px-2 mx-auto py-2 focus:outline-none border-gray-200 border-2 border-solid w-32 rounded text-center"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>MILLISECONDS</span>
                                    <input
                                        type="number"
                                        value={milliseconds}
                                        onChange={(e) =>
                                            setMilliseconds(e.target.value)
                                        }
                                        placeholder="--"
                                        className="px-2 mx-auto py-2 focus:outline-none border-gray-200 border-2 border-solid w-32 rounded text-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-12 justify-center">
                            <button
                                className="bg-blue-500 px-4 py-2 rounded text-white"
                                onClick={calculateMinusHandler}
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
                    </>
                )}

                {type === "duration" && (
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
                                <span>START TIME</span>
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="p-2 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                        </div>
                        <span className="flex justify-center text-2xl font-bold">
                            ⇢
                        </span>
                        <div className="flex space-x-6 justify-center text-center">
                            <div className="flex flex-col space-y-4">
                                <span>END DATE</span>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="p-2 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <span>END TIME</span>
                                <input
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    className="p-2 border-solid border-2 border-gray-200
                            focus:border-gray-300 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex space-x-12 justify-center mt-8">
                            <button
                                className="bg-blue-500 px-4 py-2 rounded text-white"
                                onClick={calculateDuration}
                            >
                                Calculate
                            </button>
                            <button
                                className="bg-red-500 px-4 py-2 rounded text-white"
                                onClick={clearFields}
                            >
                                Clear
                            </button>
                        </div>
                        {duration && (
                            <div className="bg-gray-300 mt-4 p-2 rounded">
                                {duration}
                            </div>
                        )}
                    </div>
                )}

                {show && (
                    <div className="flex justify-center flex-col space-y-6">
                        <div className="flex">
                            <div className="flex flex-col mx-auto bg-white p-2 rounded">
                                <span>🗓️ Date</span>
                                <span>{calcDate}</span>
                            </div>
                            <div className="flex flex-col mx-auto bg-white p-2 rounded">
                                <span>⌚ Time</span>
                                <span>{calcTime}</span>
                            </div>
                        </div>
                        <div>
                            <p className=" sm:w-[30rem] mx-auto">
                                What is the date when you add {years || 0} year,{" "}
                                {months || 0} month, {weeks || 0} week,{" "}
                                {days || 0} day, {hours || 0} hour,{" "}
                                {minutes || 0} minute, {seconds || 0} second,{" "}
                                {milliseconds || 0} millisecond starting from{" "}
                                {todays}? The answer is {calcDate}.
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to use the Date Time Calculator
                    </h2>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mt-2">
                        &rarr; Addition
                    </h3>
                    <p className="">
                        Let's say you're planning a project that starts on
                        September 1, 2023, and is expected to last 2 years, 6
                        months, and 15 days
                    </p>
                    <Image
                        src={"/home.png"}
                        width={300}
                        height={300}
                        className="mx-auto my-4"
                    />

                    <ol className="list-inside list-decimal mt-2 outline-dotted p-4">
                        <li>
                            Open the Date Time Calculator and select "Add" from
                            the Operation Type.
                        </li>
                        <li>
                            Enter 'September 1, 2023' in the Start Date field.
                        </li>
                        <li>
                            Input '2' in the Years field, '6' in the Months
                            field, and '15' in the Days field.
                        </li>
                        <li>Click the Calculate button.</li>
                        <li>
                            The displayed result will be the expected end date
                            of your project.
                        </li>
                    </ol>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mt-2">
                        &rarr; Subtraction
                    </h3>
                    <p className="">
                        Suppose you want to find out the date 90 days before an
                        upcoming event on December 31, 2023, to start the event
                        preparations.
                    </p>
                    <ol className="list-inside list-decimal mt-2 outline-dotted p-4">
                        <li>
                            Open the Date Time Calculator and select "Subtract"
                            from the Operation Type.
                        </li>
                        <li>
                            Enter 'December 31, 2023' in the Start Date field.
                        </li>
                        <li>Input '90' in the Days field.</li>
                        <li>Click the Calculate button.</li>
                        <li>
                            The displayed result will be the expected end date
                            of your project.
                        </li>
                    </ol>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mt-2 ">
                        &rarr; Duration Between
                    </h3>
                    <p className="">
                        For example, you want to calculate the exact duration
                        between your birthday on January 15, 2023, and a future
                        date like August 8, 2023.
                        <ul className="list-outside list-disc py-2">
                            <li>
                                Open the Date Time Calculator and select
                                "Duration Between" from the Operation Type.
                            </li>
                            <li>Enter 'January 15, 2023' as the Start Date.</li>
                            <li>Enter 'August 8, 2023' as the End Date.</li>
                            <li>Click the Calculate button.</li>
                        </ul>
                        The result will be the duration (in Years, Months,
                        Weeks, Days, Hours, Minutes, Seconds, and/or
                        Milliseconds) between your birthday and the future date.
                        This can be useful to know how old you'll be on a
                        particular future date or how many days you've lived up
                        to a certain point in time.
                    </p>
                    <ol className="list-inside list-decimal mt-2 outline-dotted p-4">
                        <li>
                            Open the Date Time Calculator and select "Duration
                            Between" from the Operation Type.
                        </li>
                        <li>
                            Enter 'December 31, 2023' in the Start Date field.
                        </li>
                        <li>Input 'Anything' in the End field.</li>
                        <li>Click the Calculate button.</li>
                        <li>
                            The displayed result will be the expected end date
                            of your project.
                        </li>
                    </ol>
                </div>
            </div>
            <RelatedLink />
        </>
    );
}

export default Home;
