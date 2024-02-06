"use client";

import Image from "next/image";

const { useState } = require("react");

function page() {
    const [showHour, setShowHour] = useState(true);
    const [showMinute, setShowMinute] = useState(true);
    const [showSecond, setShowSecond] = useState(true);
    const [showMilli, setShowMilli] = useState(true);

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

    function performOperation() {
        const result = { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };

        result.hours = parseInt(inputs.hours, 10) + parseInt(input_2.hours, 10);
        result.minutes =
            parseInt(inputs.minutes, 10) + parseInt(input_2.minutes, 10);
        result.seconds =
            parseInt(inputs.seconds, 10) + parseInt(input_2.seconds, 10);
        result.milliseconds =
            parseInt(inputs.milliseconds, 10) +
            parseInt(input_2.milliseconds, 10);

        setHour(result.hours);
        setMinute(result.minutes);
        setSecond(result.seconds);
        setMilli(result.milliseconds);
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
            <div className="p-8 mx-auto space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h1 className="text-lg font-semibold text-center">
                        📊 Add Time Calculator
                    </h1>
                </div>

                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Add Time Calculator is an efficient and user-friendly
                    tool designed to effortlessly sum up multiple time entries.
                    This calculator shines in situations where you need to
                    calculate the total duration of various time intervals. For
                    instance, if you're trying to figure out the total time
                    spent on a series of tasks, such as 2 hours and 15 minutes
                    of meeting time plus 1 hour and 30 minutes of report writing
                    (02:15 + 01:30), the Add Time Calculator provides a quick
                    and accurate solution. Moreover, it offers the flexibility
                    to include or exclude seconds and milliseconds in your
                    calculations, catering to both general and more precise
                    time-keeping needs. Whether you're managing work schedules,
                    planning events, or logging exercise routines, this
                    calculator simplifies the process of adding up time, making
                    it an indispensable tool for professionals, organizers, and
                    anyone in need of tracking time efficiently.
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
                        How to Use the Add Time Calculator
                    </h2>
                    <p>
                        When you need to tally the total time spent on various
                        activities, be it for work, exercise, or personal
                        projects, manual calculations can be cumbersome and
                        error-prone. The Add Time Calculator is a perfect
                        solution for such situations, providing an easy and
                        accurate way to sum up hours, minutes, seconds, and even
                        milliseconds. Here’s how you can use this tool
                        effectively:
                    </p>
                    <Image
                        src={"/addTime.jpeg"}
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
                                Start by exploring the ⚙️ Display Settings at
                                the top of the calculator. Here, you can choose
                                to include or exclude specific time units in
                                your calculation – hours, minutes, seconds, and
                                milliseconds. This feature allows you to tailor
                                the calculator to your specific time-keeping
                                needs.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>Enter the First Time Entry</strong>{" "}
                                Proceed to the main section where you'll find
                                rows of input fields labeled as Hours, Minutes,
                                Seconds, and Milliseconds. Enter your first time
                                entry in the appropriate fields. For example, if
                                your first time entry is 2 hour and 10 minutes,
                                you would input '2' in the hours field and '10'
                                in the minutes field.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                <strong>Add Additional Time Entries</strong>{" "}
                                Next, add your second time entry in the second
                                row of input fields. Continuing from the
                                previous example, if you wish to add 43 minutes,
                                you would enter '43' in the minutes field of the
                                second row.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                <strong> Calculate the Total Time</strong> With
                                your time entries in place (e.g., 2 hour and 10
                                minutes in the first row, and 43 minutes in the
                                second), hit the 'Calculate' button. The
                                calculator will sum up these entries and display
                                the total time. In our example, the result
                                should be 2 hours and 53 minutes.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 5
                            </span>{" "}
                            <p>
                                <strong>Add or Remove Time Entries</strong> If
                                you need to add more time entries, simply click
                                the '+Add Row' button to include another set of
                                input fields. If you entered a row by mistake or
                                no longer need it, you can remove it using the
                                trash icon 🗑️ next to the row.
                            </p>
                        </li>{" "}
                    </ol>
                </div>
                <div className="space-y-2">
                    <div>
                        <h3 className="text-blue-500 text-center font-bold text-xl">
                            Add Time Logic
                        </h3>
                        <p className="mt-2">
                            Understanding the logic behind adding time can be
                            crucial, especially when dealing with multiple time
                            entries in the HH:MM format. Let's say you have the
                            following times to add: 10:20, 3:30, and 7:15. The
                            process involves handling minutes and hours
                            separately, then combining them into a standard time
                            format. Here’s a step-by-step breakdown:
                        </p>
                    </div>
                    <ol className="list-none">
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 1
                            </span>{" "}
                            <p>
                                <strong> Sum the Minutes</strong> Begin by
                                adding up all the minutes from your time
                                entries. In our case, it’s 20 + 30 + 15. This
                                equals 65 minutes.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>
                                    Convert Minutes to Hours and Minutes
                                </strong>{" "}
                                Next, convert the total minutes into hours and
                                minutes. Since 60 minutes make up an hour,
                                divide the total minutes by 60. From our total
                                of 65 minutes, this results in 1 hour and 5
                                minutes (since 65 divided by 60 is 1 hour with a
                                remainder of 5 minutes).
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                <strong>Add the Hours</strong> Now, add the
                                hours from your original time entries together.
                                For our example, it’s 10 + 3 + 7, which equals
                                20 hours. Then, add the hour we got from
                                converting the minutes. So, 20 + 1 = 21 hours.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                <strong>
                                    Combine Hours and Remaining Minutes
                                </strong>
                                Finally, combine the total hours with the
                                remaining minutes. In our example, this results
                                in 21 hours and 5 minutes.
                            </p>
                        </li>{" "}
                    </ol>
                    <p>
                        This method is straightforward but can become cumbersome
                        with large numbers or more complex time entries. The Add
                        Time Calculator simplifies this process by converting
                        all time entries into a common unit (like milliseconds)
                        first, then performing the addition. After summing up,
                        it converts the total back into the standard time
                        format. This approach ensures accuracy and ease,
                        especially when dealing with numerous and varied time
                        entries.
                    </p>
                </div>

                <div className="space-y-2">
                    <div>
                        <h3 className="text-blue-500 text-center font-bold text-xl">
                            How to Add Time
                        </h3>
                        <p className="mt-2">
                            Adding time manually might seem daunting, especially
                            with larger numbers, but it can be done quite simply
                            with a step-by-step approach. Let's take an example
                            where we need to add 9 hours and 45 minutes to 11
                            hours and 35 minutes. Here's how you can do it:
                        </p>
                    </div>
                    <ol className="list-none">
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 1
                            </span>{" "}
                            <p>
                                <strong> Start with Minutes:</strong> Begin by
                                adding the minutes from both time periods. In
                                our example, that's 45 minutes (from the first
                                period) plus 35 minutes (from the second
                                period). This gives us 80 minutes.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>
                                    Convert Excess Minutes to Hours:
                                </strong>{" "}
                                Since there are 60 minutes in an hour, divide
                                the total minutes by 60 to convert it into hours
                                and minutes. From our 80 minutes, this results
                                in 1 hour and 20 minutes.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                <strong>Add the Hours</strong>
                                Now, add the hours from both time periods. In
                                our case, it's 9 hours plus 11 hours, which
                                equals 20 hours.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                <strong>
                                    Combine Hours and Remaining Minutes
                                </strong>
                                Finally, add the extra hour obtained from
                                converting the minutes to the total hours. So,
                                we add 1 hour to our 20 hours, resulting in 21
                                hours. Combine this with the 20 minutes we got
                                earlier.
                            </p>
                        </li>{" "}
                    </ol>
                    <p>
                        Thus, the total time when adding 9 hours and 45 minutes
                        to 11 hours and 35 minutes is 21 hours and 20 minutes.
                        This method, although simple, can become cumbersome with
                        multiple or more complex time entries. It's always a
                        good idea to use a calculator for more efficient and
                        error-free calculations.
                    </p>
                </div>
            </div>
        </>
    );
}

export default page;
