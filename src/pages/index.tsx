import { Inter } from "next/font/google";
import { ModeToggle } from "@/components/toogle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const handleclick = () => {};
	return (
		<>
			<title>NGL</title>

			<div className="flex items-center justify-center w-100vw h-screen flex-col gap-10">
				{/* <ModeToggle /> */}
				<span className="text-center">
					<h1 className="font-extrabold text-9xl">NGL</h1>
					<p className="text-lg">Anonymous comment, Buat dan sebarkan ke temen kamu!</p>
				</span>

				{/* LINK */}
				<Link
					href={"/link"}
					className="py-3 px-10 font-semibold bg-white text-black rounded-lg hover:bg-black hover:border hover:text-white transition-all duration-200 ease-linear">
					Mulai !
				</Link>
			</div>
		</>
	);
}
