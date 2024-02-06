import { data } from "@/data/data";
import Link from "next/link";

function RelatedLink() {
    const getRandomIndexes = () => {
        const indexes = [];
        while (indexes.length < 3) {
            const randomIndex = Math.floor(Math.random() * data.length);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    };

    const randomIndexes = getRandomIndexes();

    return (
        <div className="flex flex-col text-center space-y-2 bg-gray-300 mx-auto p-4 m-4">
            <h4 className="font-bold text-xl">Related Calculators:</h4>
            {randomIndexes.map((index) => (
                <Link key={index} href={`/${data[index].link}`}>
                    {data[index].title}
                </Link>
            ))}
        </div>
    );
}

export default RelatedLink;
