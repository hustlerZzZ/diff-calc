"use client";

import RelatedLink from "@/components/RelatedLink";
import Image from "next/image";
import Link from "next/link";

const { useState } = require("react");

function page() {
    const [showHour, setShowHour] = useState(true);
    const [showMinute, setShowMinute] = useState(true);
    const [showSecond, setShowSecond] = useState(true);
    const [showMilli, setShowMilli] = useState(true);

    const [option, setOption] = useState("+");

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [milli, setMilli] = useState(0);
    const [inputs, setInputs] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    });
    const [input_2, setInput_2] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    });

    function checkHourHandler() {
        setShowHour((cur) => !cur);
    }
    function checkMinuteHandler() {
        setShowMinute((cur) => !cur);
    }
    function checkSecondHandler() {
        setShowSecond((cur) => !cur);
    }
    function checkMilliHandler() {
        setShowMilli((cur) => !cur);
    }

    const adjustTime = (option) => {
        const date = new Date();
        console.log(inputs, setInput_2);

        if (option === "+") {
            date.setHours(+inputs.hours + +input_2.hours);
            date.setMinutes(+inputs.minutes + +input_2.minutes);
            date.setSeconds(+inputs.seconds + +input_2.seconds);
            date.setMilliseconds(+inputs.milliseconds + +input_2.milliseconds);
        } else if (option === "-") {
            date.setHours(+inputs.hours - +input_2.hours);
            date.setMinutes(+inputs.minutes - +input_2.minutes);
            date.setSeconds(+inputs.seconds - +input_2.seconds);
            date.setMilliseconds(+inputs.milliseconds - +input_2.milliseconds);
        } else if (option === "*") {
            date.setHours(+inputs.hours * +input_2.hours);
            date.setMinutes(+inputs.minutes * +input_2.minutes);
            date.setSeconds(+inputs.seconds * +input_2.seconds);
            date.setMilliseconds(+inputs.milliseconds * +input_2.milliseconds);
        } else {
            date.setHours(+inputs.hours / +input_2.hours);
            date.setMinutes(+inputs.minutes / +input_2.minutes);
            date.setSeconds(+inputs.seconds / +input_2.seconds);
            date.setMilliseconds(+inputs.milliseconds / +input_2.milliseconds);
        }

        return date;
    };

    function performOperation() {
        const adjustedTime = adjustTime(option);

        setHour(adjustedTime.getHours());
        setMinute(adjustedTime.getMinutes());
        setSecond(adjustedTime.getSeconds());
        setMilli(adjustedTime.getMilliseconds());
    }

    function clearInputs() {
        setInputs({
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
        setInput_2({
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
        setHour(0);
        setMilli(0);
        setSecond(0);
        setMinute(0);
    }

    return (
        <>
            <div className="mx-auto  p-8 space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h1 className="text-lg font-semibold text-center">
                        📊 Time Calculator
                    </h1>
                </div>

                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Time Calculator is a comprehensive tool designed to
                    simplify various time-related calculations by allowing you
                    to{" "}
                    <Link
                        href="/add-time-calculator"
                        className="text-blue-400 underline"
                    >
                        add time
                    </Link>
                    ,{" "}
                    <Link
                        href="/subtract-time-calculator"
                        className="text-blue-400 underline"
                    >
                        subtract time
                    </Link>
                    ,{" "}
                    <Link
                        href="/multiply-time-calculator"
                        className="text-blue-400 underline"
                    >
                        multiply time
                    </Link>
                    , and{" "}
                    <Link
                        href="/divide-time-calculator"
                        className="text-blue-400 underline"
                    >
                        divide time
                    </Link>
                    . This all-in-one calculator is especially useful in
                    scenarios where precise time management is crucial.
                </p>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    For example, if you're coordinating a project and need to
                    add 3 hours and 45 minutes to a start time, or if you're
                    adjusting a schedule and need to subtract 1 hour and 30
                    minutes from an end time, this calculator makes the task
                    effortless.
                </p>

                <div>
                    <div className="border border-black border-dashed p-2 space-y-4 flex flex-col justify-center items-center">
                        <h2 className="text-center mx-auto">
                            ⚙️ Display Settings
                        </h2>
                        <div className="flex space-x-4">
                            <div className="space-x-2">
                                <input
                                    type="checkbox"
                                    name="hours"
                                    id="hours"
                                    checked={showHour}
                                    onClick={checkHourHandler}
                                />
                                <label htmlFor="hours">Hours</label>
                            </div>
                            <div className="space-x-2">
                                <input
                                    type="checkbox"
                                    name="minutes"
                                    id="minutes"
                                    checked={showMinute}
                                    onClick={checkMinuteHandler}
                                />
                                <label htmlFor="minutes">Minutes</label>
                            </div>
                            <div className="space-x-2">
                                <input
                                    type="checkbox"
                                    name="second"
                                    id="second"
                                    checked={showSecond}
                                    onClick={checkSecondHandler}
                                />
                                <label htmlFor="second">Seconds</label>
                            </div>
                            <div className="space-x-2">
                                <input
                                    type="checkbox"
                                    name="milli"
                                    id="milli"
                                    checked={showMilli}
                                    onClick={checkMilliHandler}
                                />
                                <label htmlFor="milli">Milliseconds</label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="grid text-center justify-center">
                            <div className="flex space-x-2">
                                {showHour && (
                                    <div className="flex flex-col">
                                        <span>HOURS</span>
                                        <div>
                                            <input
                                                type="number"
                                                name="hours"
                                                value={inputs.hours}
                                                onChange={(e) =>
                                                    setInputs((prevInputs) => ({
                                                        ...prevInputs,
                                                        hours: parseInt(
                                                            e.target.value,
                                                            10
                                                        ),
                                                    }))
                                                }
                                                className="p-2 border-solid border-2 border-gray-200
                                                    focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                            />
                                        </div>
                                    </div>
                                )}
                                {showMinute && (
                                    <div className="flex flex-col">
                                        <span>MINUTES</span>
                                        <div>
                                            <input
                                                type="number"
                                                name="minutes"
                                                value={inputs.minutes}
                                                onChange={(e) =>
                                                    setInputs((prevInputs) => ({
                                                        ...prevInputs,
                                                        minutes: parseInt(
                                                            e.target.value,
                                                            10
                                                        ),
                                                    }))
                                                }
                                                className="p-2 border-solid border-2 border-gray-200
                                                focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                            />
                                        </div>
                                    </div>
                                )}
                                {showSecond && (
                                    <div className="flex flex-col">
                                        <span>SECONDS</span>
                                        <div>
                                            <input
                                                type="number"
                                                name="seconds"
                                                value={inputs.seconds}
                                                onChange={(e) =>
                                                    setInputs((prevInputs) => ({
                                                        ...prevInputs,
                                                        seconds: parseInt(
                                                            e.target.value,
                                                            10
                                                        ),
                                                    }))
                                                }
                                                className="p-2 border-solid border-2 border-gray-200
                                                focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                            />
                                        </div>
                                    </div>
                                )}
                                {showMilli && (
                                    <div className="flex flex-col">
                                        <span>MILLISECONDS</span>
                                        <div>
                                            <input
                                                type="number"
                                                name="milliseconds"
                                                value={inputs.milliseconds}
                                                onChange={(e) =>
                                                    setInputs((prevInputs) => ({
                                                        ...prevInputs,
                                                        milliseconds: parseInt(
                                                            e.target.value,
                                                            10
                                                        ),
                                                    }))
                                                }
                                                className="p-2 border-solid border-2 border-gray-200
                                                focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center my-2">
                        <select
                            className=" py-1 px-2 bg-blue-500 rounded-md text-white"
                            value={option}
                            onChange={(e) => setOption(e.target.value)}
                        >
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="/">/</option>
                            <option value="*">*</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <div className="flex space-x-4 text-center justify-center">
                            {showHour && (
                                <div>
                                    <span>HOURS</span>
                                    <div>
                                        <input
                                            type="number"
                                            name="hours"
                                            value={input_2.hours}
                                            onChange={(e) =>
                                                setInput_2((prevInputs) => ({
                                                    ...prevInputs,
                                                    hours: parseInt(
                                                        e.target.value,
                                                        10
                                                    ),
                                                }))
                                            }
                                            className="p-2 border-solid border-2 border-gray-200
                                        focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                        />
                                    </div>
                                </div>
                            )}
                            {showMinute && (
                                <div>
                                    <span>MINUTES</span>
                                    <div>
                                        <input
                                            type="number"
                                            name="minutes"
                                            value={input_2.minutes}
                                            onChange={(e) =>
                                                setInput_2((prevInputs) => ({
                                                    ...prevInputs,
                                                    minutes: parseInt(
                                                        e.target.value,
                                                        10
                                                    ),
                                                }))
                                            }
                                            className="p-2 border-solid border-2 border-gray-200
                                        focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                        />
                                    </div>
                                </div>
                            )}
                            {showSecond && (
                                <div>
                                    <span>SECONDS</span>
                                    <div>
                                        <input
                                            type="number"
                                            name="seconds"
                                            value={input_2.seconds}
                                            onChange={(e) =>
                                                setInput_2((prevInputs) => ({
                                                    ...prevInputs,
                                                    seconds: parseInt(
                                                        e.target.value,
                                                        10
                                                    ),
                                                }))
                                            }
                                            className="p-2 border-solid border-2 border-gray-200
                                        focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                        />
                                    </div>
                                </div>
                            )}
                            {showMilli && (
                                <div>
                                    <span>MILLISECONDS</span>
                                    <div>
                                        <input
                                            type="number"
                                            name="milliseconds"
                                            value={input_2.milliseconds}
                                            onChange={(e) =>
                                                setInput_2((prevInputs) => ({
                                                    ...prevInputs,
                                                    milliseconds: parseInt(
                                                        e.target.value,
                                                        10
                                                    ),
                                                }))
                                            }
                                            className="p-2 border-solid border-2 border-gray-200
                                        focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="mt-4 space-y-4 text-center">
                            <div>
                                <hr className="border-2" />
                            </div>

                            <div className="text-center text-lg">📝 Result</div>

                            <div className="flex space-x-4 text-center justify-center">
                                <div className="space-x-1">
                                    <span className="font-bold">
                                        {hour < 0
                                            ? `-${
                                                  Math.abs(hour) < 10
                                                      ? `0${Math.abs(hour)}`
                                                      : Math.abs(hour)
                                              }`
                                            : `${
                                                  hour < 10 ? `0${hour}` : hour
                                              }`}{" "}
                                        :
                                    </span>
                                    <span>hours</span>
                                </div>

                                <div className="space-x-2">
                                    <span className="font-bold">
                                        {minute < 0
                                            ? `-${
                                                  Math.abs(minute) < 10
                                                      ? `0${Math.abs(minute)}`
                                                      : Math.abs(minute)
                                              }`
                                            : `${
                                                  minute < 10
                                                      ? `0${minute}`
                                                      : minute
                                              }`}{" "}
                                        :
                                    </span>
                                    <span>minutes</span>
                                </div>

                                <div className="space-x-2">
                                    <span className="font-bold">
                                        {second < 0
                                            ? `-${
                                                  Math.abs(second) < 10
                                                      ? `0${Math.abs(second)}`
                                                      : Math.abs(second)
                                              }`
                                            : `${
                                                  second < 10
                                                      ? `0${second}`
                                                      : second
                                              }`}{" "}
                                        :
                                    </span>
                                    <span>seconds</span>
                                </div>

                                <div className="space-x-2">
                                    <span className="font-bold">
                                        {milli < 0
                                            ? `-${
                                                  Math.abs(milli) < 10
                                                      ? `0${Math.abs(milli)}`
                                                      : Math.abs(milli)
                                              }`
                                            : `${
                                                  milli < 10
                                                      ? `0${milli}`
                                                      : milli
                                              }`}{" "}
                                        :
                                    </span>
                                    <span>milliseconds</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center space-x-4 mt-4 text-white">
                            <button
                                className="bg-blue-500 px-4 py-2 rounded"
                                onClick={performOperation}
                            >
                                Calculate
                            </button>
                            <button
                                className="bg-red-500 px-4 py-2 rounded"
                                onClick={clearInputs}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8 p-2">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to Use the Time Calculator
                    </h2>
                    <p>
                        Navigating time calculations, especially with
                        unconventional numbers or multiple entries, can be a
                        complex task. For example, adding times like 4 hours and
                        25 minutes, 7 hours and 32 minutes, and 15 hours and 42
                        minutes, could be time-consuming and prone to errors.
                        The Time Calculator simplifies this process, allowing
                        you to add, subtract, multiply, and divide time
                        efficiently. Here's a straightforward guide to using
                        this tool:
                    </p>
                    <Image
                        src={"/timeCalc.jpeg"}
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
                                <strong>Configure Display Settings</strong>{" "}
                                Firstly, assess if you need to use all units of
                                time: hours, minutes, seconds, and milliseconds.
                                The Time Calculator provides flexibility by
                                allowing you to include or exclude these units
                                as per your requirement. You can easily manage
                                this in the ⚙️ Display Settings by checking or
                                unchecking the boxes for the units you need or
                                don't need.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>Enter Your Base Time</strong> Start by
                                entering the base time in the first row of the
                                calculator. This base time varies depending on
                                the operation:
                                <ul className="list-disc">
                                    <li>
                                        For addition, it's the first number you
                                        want to add.
                                    </li>
                                    <li>
                                        In subtraction, it's the number from
                                        which you'll subtract (the minuend).
                                    </li>
                                    <li>
                                        For multiplication, it's the time you
                                        want to multiply (the multiplicand).
                                    </li>
                                    <li>
                                        In division, it's the time you want to
                                        divide (the dividend).
                                    </li>
                                </ul>
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                <strong>
                                    Choose the Mathematical Operation
                                </strong>{" "}
                                Below the initial time input, you'll find an
                                option to select the mathematical operation you
                                wish to perform. Choose from addition (➕),
                                subtraction (➖), multiplication (✖️), or
                                division (➗), depending on your calculation
                                needs.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                <strong>Input Secondary Time or Numbers</strong>{" "}
                                After selecting the operation, enter the
                                secondary time or numbers. For addition and
                                subtraction, input the time in the same format
                                as the base. For multiplication and division,
                                enter the multiplier or divisor, which are
                                typically whole numbers.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 5
                            </span>{" "}
                            <p>
                                <strong>Add More Rows if Needed</strong> Add
                                More Rows if Needed If your calculation involves
                                more than two time entries, simply click on the
                                '+Add Row' button to introduce additional input
                                fields. Should you need to remove any of these
                                extra rows, use the adjacent trash icon 🗑️.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 6
                            </span>{" "}
                            <p>
                                <strong>Calculate and View Results</strong>
                                Once all inputs are set, click the 'Calculate'
                                button. The result of your time calculation will
                                be displayed promptly, ensuring accuracy and
                                saving you from the complex task of manual time
                                arithmetic.
                            </p>
                        </li>{" "}
                    </ol>
                </div>
            </div>

            <RelatedLink />
        </>
    );
}

export default page;
