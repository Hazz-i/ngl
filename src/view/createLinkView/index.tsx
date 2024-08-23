import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateLinkView = () => {
	return (
		<main className="flex items-center justify-center h-screen flex-col gap-5">
			<h1 className="text-xl font-semibold">Buat Link</h1>
			<span>
				<form className="flex gap-2">
					<Input type="text" placeholder="Tuliskan Username Anda" />
					<Button
						type="submit"
						className=" hover:bg-black hover:border hover:text-white transition-all duration-200 ease-linear">
						Buat Link!
					</Button>
				</form>
			</span>
		</main>
	);
};

export default CreateLinkView;
