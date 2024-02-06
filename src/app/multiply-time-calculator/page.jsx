"use client";

import RelatedLink from "@/components/RelatedLink";
import Image from "next/image";
import { useState } from "react";

function page() {
    const [showHour, setShowHour] = useState(true);
    const [showMinute, setShowMinute] = useState(true);
    const [showSecond, setShowSecond] = useState(true);
    const [showMilli, setShowMilli] = useState(true);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [milli, setMilli] = useState(0);

    const [multiply, setMultiply] = useState(0);

    const [inputs, setInputs] = useState({
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

    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputs((prevState) => ({ ...prevState, [name]: +value }));
        console.log(inputs);
    }

    function calcHandler() {
        // const { hours, minutes, seconds, milliseconds } = inputs;

        const adjustedTime = adjustTime(inputs, multiply);
        setHour(adjustedTime.getHours());
        setMinute(adjustedTime.getMinutes());
        setSecond(adjustedTime.getSeconds());
        setMilli(adjustedTime.getMilliseconds());
    }

    const adjustTime = (
        { hours, minutes, seconds, milliseconds },
        multiply
    ) => {
        const date = new Date();
        date.setHours(hours * multiply);
        date.setMinutes(minutes * multiply);
        date.setSeconds(seconds * multiply);
        date.setMilliseconds(milliseconds * multiply);

        return date;
    };

    function clearHandler() {
        setInputs({
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
        setMultiply(0);
        setHour(0);
        setMilli(0);
        setMinute(0);
        setSecond(0);
    }

    return (
        <>
            <div className="mt-8 mx-auto space-y-2">
                <h1 className="text-center font-bold text-lg md:text-2xl">
                    🕗 Multiply Time Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    Imagine you're baking cookies and the recipe says it takes
                    10 minutes in the oven. If you wanted to bake 3 batches, how
                    long would it take? Or, you practice piano for 30 minutes
                    every day. How long would you practice if you played 5 days
                    straight? The <em>"Multiply Time Calculator"</em> is the
                    hero that solves these mysteries! Input any duration (in
                    hours, minutes, seconds, or milliseconds) and multiply it by
                    a number to see your total time.
                </p>
            </div>
            <div className="mx-auto p-8 space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-bold text-center">
                        🕗 Multiply Time Calculator
                    </h2>
                </div>
                <div className="space-y-4">
                    <div className="border border-black border-dashed p-2 space-y-4 ">
                        <h2 className="text-center mx-auto">
                            ⚙️ Display Settings
                        </h2>
                        <div className="flex space-x-4 justify-center">
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
                    <div>
                        <div className="flex space-x-4 text-center justify-between">
                            {showHour && (
                                <div>
                                    <span>HOURS</span>
                                    <div>
                                        <input
                                            type="number"
                                            value={inputs.hours}
                                            onChange={handleInputChange}
                                            name="hours"
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
                                            value={inputs.minutes}
                                            onChange={handleInputChange}
                                            name="minutes"
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
                                            value={inputs.seconds}
                                            onChange={handleInputChange}
                                            name="seconds"
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
                                            value={inputs.milliseconds}
                                            onChange={handleInputChange}
                                            name="milliseconds"
                                            className="p-2 border-solid border-2 border-gray-200
                                        focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex space-x-6 justify-end text-center mt-4">
                            <div className="my-auto font-bold text-amber-900 text-2xl">
                                x
                            </div>
                            <div>
                                <input
                                    type="number"
                                    value={multiply}
                                    onChange={(e) =>
                                        setMultiply(e.target.value)
                                    }
                                    className="p-2 border-solid border-2 border-gray-200
                                focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                />
                            </div>
                        </div>

                        <div>
                            <hr className="border-2 mt-4" />
                        </div>

                        <div className="text-center mt-4 space-y-6">
                            <div>
                                <h2>✍ Result</h2>
                            </div>

                            <div className="flex space-x-4 text-center justify-center">
                                <div className="space-x-1">
                                    <span className="font-bold">{hour} :</span>
                                    <span>hours</span>
                                </div>

                                <div className="space-x-2">
                                    <span className="font-bold">
                                        {minute} :
                                    </span>
                                    <span>minutes</span>
                                </div>

                                <div className="space-x-2">
                                    <span className="font-bold">
                                        {second} :
                                    </span>
                                    <span>seconds</span>
                                </div>

                                <div className="space-x-2">
                                    <span className="font-bold">{milli} :</span>
                                    <span>milliseconds</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4 text-white">
                        <button
                            className="bg-blue-500 px-4 py-2 rounded"
                            onClick={calcHandler}
                        >
                            Calculate
                        </button>
                        <button
                            className="bg-red-500 px-4 py-2 rounded"
                            onClick={clearHandler}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-[20rem] md:w-[40rem] space-y-4 mb-8 p-2">
                <div>
                    <h2 className="font-bold text-blue-500 text-center text-base md:text-xl">
                        How to Use the 🕗 Multiply Time Calculator
                    </h2>
                </div>
                <div className="space-y-2">
                    <ol className="list-none">
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 1
                            </span>{" "}
                            <p>
                                Before you start, know the current time. Ensure
                                all the input fields are clear to start a new
                                calculation.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                You'll see four options: Hours, Minutes,
                                Seconds, and Milliseconds. Fill in whichever you
                                need. Real-life example: You practice piano for
                                30 minutes every day. Enter "30" in the
                                "Minutes" field.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                There's a space with an 'x' below. That's where
                                you'll enter how many times you want to multiply
                                the time. Real-life example: If you decide to
                                practice for 5 days in a row, type '5' here.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                {" "}
                                This is the magic moment! Push that button and
                                watch the calculator work its magic.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 5
                            </span>{" "}
                            <p>
                                Once calculated, you'll see something like: 2
                                :hours, 30 :minutes, 0 :seconds, 0 :milliseconds
                            </p>
                        </li>
                    </ol>
                    <div className="space-y-4">
                        <Image
                            src={"/multi.png"}
                            width={300}
                            height={300}
                            className="mx-auto my-4"
                        />
                        <p>
                            For our piano practice, 30 minutes for 5 days
                            becomes a total of 2 hours and 30 minutes. Now
                            you're set to figure out any time-related questions!
                            Like, if a movie is 2 hours long and you watch it 4
                            times, how much time did you spend? Dive in and
                            multiply away! 🍿🎥🔢🕰
                        </p>
                    </div>
                </div>
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
