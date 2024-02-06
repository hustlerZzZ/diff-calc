import Link from "next/link";

function Footer() {
    return (
        <div className="bg-black text-center p-4 space-y-4">
            <div>
                <span className="font-bold text-white">
                    Copyright © by DateTimeCalculators.com - 
                </span>
                <toc className="text-white">Terms & Conditions apply</toc>
            </div>
            <ul className="flex space-x-5 justify-center">
                <li className="bg-white px-3 py-1 rounded">
                    <Link href="/about-us">About Us</Link>
                </li>
                <li className="bg-white px-3 py-1 rounded">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
