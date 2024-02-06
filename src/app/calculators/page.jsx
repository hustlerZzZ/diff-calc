import Cards from "@/components/Cards";
import { data } from "@/data/data";

function page() {
    return (
        <div className="p-8 mx-auto space-y-6">
            <h1 className="text-lg font-semibold text-center">
                Checkout our different types of Calculators 😉
            </h1>
            <div className="grid md:grid-cols-2 gap-4">
                {data.map((el) => (
                    <Cards data={el} key={el.key} />
                ))}
            </div>
        </div>
    );
}

export default page;
