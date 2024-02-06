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
        const { hours, minutes, seconds, milliseconds } = inputs;
        setHour(+hours / +multiply);
        setMinute(+minutes / +multiply);
        setSecond(+seconds / +multiply);
        setMilli(+milliseconds / +multiply);
    }

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
                    🕗 Divide Time Calculator
                </h1>
                <p className="w-[20rem] md:w-[40rem] md:text-xl">
                    Ever watched a 2-hour movie and wondered how long each part
                    would be if you split it into 4 equal parts? Or maybe you
                    ran for 60 minutes and wanted to know the time for each of
                    your 5 laps? That's what the{" "}
                    <em>"Divide Time Calculator"</em> is for! Input a duration
                    and decide how many times you want to divide it, and the
                    calculator tells you the time for each segment.
                </p>
            </div>
            <div className="mx-auto p-8 space-y-6">
                <div className="bg-gray-300 p-4 rounded">
                    <h2 className="text-lg font-bold text-center">
                        🕗 Divide Time Calculator
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
                                ➗
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
                        How to Use the 🕗 Divide Time Calculator
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
                                Make sure all the inputs that you provide are
                                numbers & fields are clear to ensure accurate
                                calculations.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                You'll notice four boxes: Hours, Minutes,
                                Seconds, and Milliseconds. Fill in your total
                                time here. Real-life example: You ran for 60
                                minutes and want to split this time into equal
                                parts for each lap. Input "60" in the "Minutes"
                                field.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                Below the time boxes, there's a space with a '÷'
                                symbol. This is where you decide how many
                                segments you want to divide your time into.
                                Real-life example: If you did 5 laps during your
                                run, type '5' here.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                This is the magic moment! Push that button and
                                watch the calculator work its magic and divide
                                your time!
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 5
                            </span>{" "}
                            <p>
                                You'll be presented with something like: ✍
                                Result 12 :minutes, 0 :seconds, 0 :milliseconds
                            </p>
                        </li>
                    </ol>
                    <div className="space-y-4">
                        <Image
                            src={"/divide.png"}
                            width={300}
                            height={300}
                            className="mx-auto my-4"
                        />
                        <p>
                            For our run, 60 minutes divided by 5 laps means each
                            lap took you 12 minutes. Now you're all set to
                            divide any chunk of time! Want to divide a 3-hour
                            movie into 6 parts to watch over several days? Use
                            the calculator and find out how long each part will
                            be. Happy dividing! 🕒➗🎬🏃‍♂️🎉
                        </p>
                    </div>
                </div>
            </div>
            <RelatedLink />
        </>
    );
}

export default page;
