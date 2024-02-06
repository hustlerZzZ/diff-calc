import Link from "next/link";

function Cards({ data }) {
    const { title, desc, link } = data;
    return (
        <div className="bg-gray-100 p-4 border my-4 border-black rounded-lg space-y-3 flex w-96 text-center">
            <div className="space-y-3">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-base">{desc}</p>
                <Link
                    href={`/${link}`}
                    className="bg-green-500 text-white px-4 py-2 rounded flex justify-center w-32 mx-auto"
                >
                    Go to
                </Link>
            </div>
        </div>
    );
}

export default Cards;
