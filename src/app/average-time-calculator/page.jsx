"use client";

import RelatedLink from "@/components/RelatedLink";
import Image from "next/image";
import { useState } from "react";

function Page() {
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
    const [inputRows, setInputRows] = useState([
        { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 },
    ]);

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
    }

    function handleInput_2Change(e) {
        const { name, value } = e.target;
        setInput_2((prevState) => ({ ...prevState, [name]: +value }));
    }

    function addInputRow() {
        setInputRows((prevInputRows) => [
            ...prevInputRows,
            { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 },
        ]);
    }

    function handleInputRowChange(index, e) {
        const { name, value } = e.target;
        setInputRows((prevInputRows) => {
            const updatedRows = [...prevInputRows];
            updatedRows[index][name] = +value;
            return updatedRows;
        });
    }

    function calculateAverage() {
        const totalRows = inputRows.length;
        if (totalRows === 0) return;

        const sum = inputRows.reduce(
            (acc, row) => ({
                hours: acc.hours + row.hours,
                minutes: acc.minutes + row.minutes,
                seconds: acc.seconds + row.seconds,
                milliseconds: acc.milliseconds + row.milliseconds,
            }),
            { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
        );

        setHour(sum.hours / totalRows);
        setMinute(sum.minutes / totalRows);
        setSecond(sum.seconds / totalRows);
        setMilli(sum.milliseconds / totalRows);
    }

    function clearInputs() {
        setInputRows([{ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }]);
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
                        📊 Average Time Calculator
                    </h1>
                </div>

                <div>
                    <div className="border border-black border-dashed p-2 space-y-4">
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
                            {inputRows.map((row, index) => (
                                <div key={index} className="flex space-x-2">
                                    {showHour && (
                                        <div className="flex flex-col">
                                            <span>HOURS</span>
                                            <div>
                                                <input
                                                    type="number"
                                                    name="hours"
                                                    value={row.hours}
                                                    onChange={(e) =>
                                                        handleInputRowChange(
                                                            index,
                                                            e
                                                        )
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
                                                    onChange={handleInputChange}
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
                                                    onChange={handleInputChange}
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
                                                    onChange={handleInputChange}
                                                    className="p-2 border-solid border-2 border-gray-200
                                                focus:border-gray-300 focus:outline-none w-16 md:w-24"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                className="bg-blue-500 px-4 py-2 rounded text-white"
                                onClick={addInputRow}
                            >
                                Add Row
                            </button>
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
                                            onChange={handleInput_2Change}
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
                                            onChange={handleInput_2Change}
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
                                            onChange={handleInput_2Change}
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
                                            onChange={handleInput_2Change}
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
                                        {hour <= "10" ? `0${hour}` : `${hour}`}{" "}
                                        :
                                    </span>
                                    <span>hours</span>
                                </div>

                                <div className="space-x-2">
                                    <span className="font-bold">
                                        {minute <= "10"
                                            ? `0${minute}`
                                            : `${minute}`}{" "}
                                        :
                                    </span>
                                    <span>minutes</span>
                                </div>

                                <div className="space-x-2">
                                    <span className="font-bold">
                                        {second <= "10"
                                            ? `0${second}`
                                            : `${second}`}{" "}
                                        :
                                    </span>
                                    <span>seconds</span>
                                </div>

                                <div className="space-x-2">
                                    <span className="font-bold">
                                        {milli <= "10"
                                            ? `0${milli}`
                                            : `${milli}`}{" "}
                                        :
                                    </span>
                                    <span>milliseconds</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center space-x-4 mt-4 text-white">
                            <button
                                className="bg-blue-500 px-4 py-2 rounded"
                                onClick={calculateAverage}
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
                        How to Use the Average Time Calculator
                    </h2>
                    <p>
                        Suppose you're curious about how much time you're
                        spending on your math homework each day. To find out,
                        you can start by jotting down the amount of time you
                        spend each day - maybe Monday you spend 1 hour, Tuesday
                        1.5 hours, and so on. At the end of the week, take these
                        times and plug them into the Average Time Calculator.
                        Voila! Now you have an average of your daily time spent
                        on math homework. It could be a great way to see if
                        you're spending enough time or if you could manage your
                        homework time better!
                    </p>
                    <Image
                        src={"/av.png"}
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
                                You can do this by typing "Average Time
                                Calculator" into a search engine like Google,
                                and clicking on the relevant result.
                            </p>
                        </li>{" "}
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 2
                            </span>{" "}
                            <p>
                                Once you're on the calculator page, you'll see
                                some boxes where you can type numbers. These are
                                labelled 'HOURS', 'MINUTES', 'SECONDS', and
                                'MILLISECONDS'. You can fill in any or all of
                                these, depending on the level of detail you
                                want.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 3
                            </span>{" "}
                            <p>
                                Let's say you played a game for 2 hours and 30
                                minutes. In the 'HOURS' box, type '2'. In the
                                'MINUTES' box, type '30'. Leave the 'SECONDS'
                                and 'MILLISECONDS' boxes empty.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 4
                            </span>{" "}
                            <p>
                                Maybe you played another game for 1 hour and 45
                                minutes. You want to add this to your
                                calculations. To do this, look for a button or
                                link that says 'Add Row' or something similar.
                                Clicking on this will give you a new set of
                                boxes. Type '1' in the 'HOURS' box and '45' in
                                the 'MINUTES' box of this new row.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <div className="absolute top-0 left-0 ml-8 w-1 border-0 border-dashed border-l-2 border-l-gray-200 h-full z-0"></div>{" "}
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 5
                            </span>{" "}
                            <p>
                                If you've played more games and want to add
                                their times too, repeat step 4. Just remember to
                                add the hours to the 'HOURS' box, and minutes to
                                the 'MINUTES' box.
                            </p>
                        </li>
                        <li className="relative flex items-start justify-center pb-4">
                            <span className="h-16 w-16 p-2 rounded-full bg-gray-100 inline-flex flex-none items-center justify-center whitespace-nowrap text-xs relative z-10 mr-8 shadow">
                                Step 6
                            </span>{" "}
                            <p>
                                Once you've entered all your game times, it's
                                time to find out the average. Look for a button
                                that says 'Calculate' or something similar and
                                click on it. The calculator will then show you
                                the average time you spent playing.
                            </p>
                        </li>
                    </ol>
                    <div>
                        <p>
                            So, that's how you use the Average Time Calculator!
                            It's as simple as telling the calculator how long
                            you spent on each activity, and then letting it do
                            the math for you. Happy calculating!
                        </p>
                    </div>
                </div>
            </div>
            <RelatedLink />
        </>
    );
}

export default Page;
