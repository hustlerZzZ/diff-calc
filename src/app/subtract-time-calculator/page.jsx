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

        result.hours = parseInt(inputs.hours, 10) - parseInt(input_2.hours, 10);
        result.minutes =
            parseInt(inputs.minutes, 10) - parseInt(input_2.minutes, 10);
        result.seconds =
            parseInt(inputs.seconds, 10) - parseInt(input_2.seconds, 10);
        result.milliseconds =
            parseInt(inputs.milliseconds, 10) -
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
                        📊 Subtract Time Calculator
                    </h1>
                </div>

                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    The Subtract Time Calculator is an essential tool for
                    accurately determining the difference between two time
                    values. This can be incredibly useful in various real-life
                    scenarios. For instance, if you're trying to calculate the
                    remaining time left on a task after working on it for a
                    certain duration, like subtracting 5 hours and 30 minutes
                    from an allotted 12 hours, this calculator can quickly
                    provide you with the answer.
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
                        How to Use the Subtract Time Calculator
                    </h2>
                    <p>
                        The Subtract Time Calculator is an incredibly useful
                        tool, particularly beneficial in scenarios where
                        precision down to the milliseconds is required, such as
                        in athletic training or for meticulous work time
                        tracking. Here’s a step-by-step guide on how to
                        effectively use this calculator:
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
                                <strong> Adjust Display Settings</strong>{" "}
                                Initially, determine the level of precision you
                                require for your calculation. The calculator
                                includes options for hours, minutes, seconds,
                                and even milliseconds. You can customize your
                                calculation by selecting only the units you need
                                in the ⚙️ Display Settings. This is especially
                                useful if your calculation doesn't require the
                                level of detail down to milliseconds.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>Enter the Base Time (Minuend)</strong>
                                Start by inputting the base time, or the
                                minuend, in the first row of the time input
                                fields. This is the time you'll be subtracting
                                from. For example, if your base time is 40
                                hours, simply enter '40' in the hours field of
                                the first row.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                <strong> Input the Subtrahend </strong> Next,
                                you'll enter the time you want to subtract (the
                                subtrahend) in the second row of input fields.
                                Continuing the example, if you need to subtract
                                1 hour and 15 minutes, you would input '1' in
                                the hours field and '15' in the minutes field of
                                the second row.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                <strong> Perform the Calculation</strong> Once
                                all the values are correctly entered, press the
                                'Calculate' button. The calculator will process
                                the input and display the result at the bottom
                                of the interface. This result represents the
                                difference between your base time and the
                                subtracted time.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 5
                            </span>{" "}
                            <p>
                                <strong>Add Additional Subtrahends</strong> If
                                your calculation requires subtracting multiple
                                time intervals from the base time, utilize the
                                '+Add Row' button to include additional
                                subtrahends. Each new row you add can be filled
                                with different time values as needed. To remove
                                any unnecessary rows, simply click on the
                                adjacent trash icon.
                            </p>
                        </li>{" "}
                    </ol>
                </div>
                <div className="space-y-2">
                    <div>
                        <h3 className="text-blue-500 text-center font-bold text-xl">
                            Subtract Time Calculator Inputs and Outputs
                        </h3>
                        <p className="mt-2">
                            The Subtract Time Calculator is designed to provide
                            the mathematical difference between two or more time
                            inputs, offering a straightforward interface
                            complemented by customizable options. Here's a
                            breakdown of its inputs, outputs, and additional
                            features:
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Display Settings
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The calculator includes checkboxes for Hours,
                                Minutes, Seconds, and Milliseconds in the
                                Display Settings.
                            </li>
                            <li>
                                These options are checked by default but can be
                                adjusted according to your needs. Unchecking any
                                of these will hide that particular time unit
                                from the input fields, allowing you to tailor
                                the calculator to your specific requirements.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Inputs
                        </h3>
                        <ul className="list-disc">
                            <li>
                                There are two default time input rows on the
                                calculator. These rows include fields for hours,
                                minutes, seconds, and milliseconds.
                            </li>
                            <li>
                                The first row is designated for your base time
                                (the minuend), which is the time you'll be
                                subtracting from.
                            </li>
                            <li>
                                The second row is for the time you wish to
                                subtract (the subtrahend).
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Outputs
                        </h3>
                        <ul className="list-disc">
                            <li>
                                The result of your calculation is displayed
                                immediately below the input fields, labeled as
                                ✍ Result.
                            </li>
                            <li>
                                This shows the mathematical difference between
                                your base time and the subtracted time.
                            </li>
                            <li>
                                The inclusion of milliseconds ensures that the
                                calculator can provide results with high
                                precision, making it suitable for applications
                                where detailed time measurements are crucial.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-500  font-bold text-xl">
                            Additional Rows
                        </h3>
                        <ul className="list-disc">
                            <li>
                                In case you have multiple time entries to
                                subtract, the calculator allows you to add as
                                many rows as needed, either as subtrahends or
                                additional minuends.
                            </li>
                            <li>
                                You can delete any unnecessary rows using the 🗑️
                                trash icon next to each row.
                            </li>
                            <li>
                                The calculator adapts to your inputs, providing
                                either a positive or negative time result based
                                on the calculation.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-2">
                    <div>
                        <h3 className="text-blue-500 text-center font-bold text-xl">
                            How to Subtract Time
                        </h3>
                        <p className="mt-2">
                            Subtracting time manually is a straightforward
                            process, although it requires careful attention to
                            detail. Let's take an example where we need to
                            subtract 23 hours and 45 minutes from 48 hours and
                            30 minutes. Here's how you can do it step by step:
                        </p>
                    </div>
                    <ol className="list-none">
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 1
                            </span>{" "}
                            <p>
                                <strong> Start with Minutes:</strong>
                                <ul className="list-disc">
                                    <li>
                                        In our example, we have 30 minutes (from
                                        48:30) and need to subtract 45 minutes.
                                        Since we can't subtract a larger number
                                        from a smaller one in this column, we
                                        need to borrow an hour from the hours
                                        column.
                                    </li>
                                    <li>
                                        So, we convert one hour into 60 minutes
                                        and add it to our 30 minutes, making it
                                        90 minutes.
                                    </li>
                                    <li>
                                        Now, subtract 45 minutes from 90
                                        minutes, which leaves us with 45
                                        minutes.
                                    </li>
                                </ul>
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                <strong>Subtract the Hours</strong>
                                <ul className="list-disc">
                                    <li>
                                        After borrowing an hour for the minutes,
                                        our hours are reduced by one. So instead
                                        of subtracting from 48 hours, we
                                        subtract from 47 hours (48 hours - 1
                                        hour borrowed).
                                    </li>
                                    <li>
                                        Subtract 23 hours from 47 hours, which
                                        gives us 24 hours.
                                    </li>
                                </ul>
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                <strong>Combine the Results</strong>
                                <ul className="list-disc">
                                    <li>
                                        Now combine the results of the hours and
                                        minutes subtraction. We have 24 hours
                                        from the hours column and 45 minutes
                                        from the minutes column.
                                    </li>
                                    <li>
                                        So, the final answer is 24 hours and 45
                                        minutes.
                                    </li>
                                </ul>
                            </p>
                        </li>{" "}
                    </ol>
                    <p>
                        This manual process of time subtraction, like in our
                        example of subtracting 23 hours and 45 minutes from 48
                        hours and 30 minutes, results in 24 hours and 45
                        minutes. While manual calculation is doable, it can be
                        prone to errors, especially with more complex time
                        differences or when including seconds and milliseconds.
                        The Subtract Time Calculator automates this process,
                        ensuring accuracy and saving time.
                    </p>
                </div>
            </div>
        </>
    );
}

export default page;
