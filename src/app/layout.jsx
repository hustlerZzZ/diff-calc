import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Date Time Calculator",
    description:
        "Master time effortlessly! 🕰️ DateTimeCalculator: Your go-to tool for quick date & time computations. Never miscalculate again!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="NHFNgZEf9F0q0wD1JuHH_EnBL_dc1e54Y4st4KuXaTI"
                />
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2133327917732776"
                    crossorigin="anonymous"
                ></script>
                <meta
                    name="robots"
                    content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <link rel="shortcut icon" href="/fav.png" type="image/x-icon" />
            </head>
            <body className="h-screen grid grid-rows-[auto_1fr_auto] text-sm sm:text-base">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
