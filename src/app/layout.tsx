import { Inter } from "next/font/google";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./globals.css";

const inter = Inter({
    display: "swap",
    weight: ["100", "500", "600", "700"],
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "Ecom-Games",
    description: "A Ecommerce for Games created for study",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`bg-slate-900 antialiased ${inter.className}`}>
                <Header />
                <main className="max-w-[1200px] mx-auto">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
