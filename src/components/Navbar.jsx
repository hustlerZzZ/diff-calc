import Link from "next/link";

function Navbar() {
    return (
        <div className="p-4 bg-blue-500  font-semibold flex justify-between">
            <logo-text className="my-auto">
                <Link href="/" className="text-white font-pacifico">
                    Date Time Calculator
                </Link>
            </logo-text>
            <ul className="flex space-x-8">
                <li className="bg-white px-6 py-2 rounded">
                    <Link href="/">Home</Link>
                </li>
                <li className="bg-white px-6 py-2 rounded">
                    <Link href="/calculators">Calculators</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
