import CreateLinkView from "@/view/createLinkView";
import ReactNode from "react";

const Link = () => {
	const [username, setUsername] = ReactNode.useState("");

	const handleClick = () => {
		console.log(username);
	};
	return (
		<>
			<title>NGL - Buat Link</title>

			<CreateLinkView />
		</>
	);
};

export default Link;
