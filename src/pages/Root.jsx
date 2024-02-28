import {Outlet} from "react-router-dom";
import {Header} from "../components/Header";
import {useEffect, useState} from "react";
import {Close} from "@mui/icons-material";
import MailChimp from "../components/MailChimp";

export const Footer = () => (
	<div className={"h-max w-full bg-gray-400 px-4 text-[8px] font-sans"}>
		LukeForNM.com was produced In-House.
	</div>
)

export const Popup = ({children, inShow}) => {

	const [show, setShow] = useState(true);

	useEffect(() => {
		setShow(inShow);
	}, [inShow]);

	const toggleShow = () => setShow(!show);

	if (!show) return;

	return (

		<div className={"fixed z-[1000] w-full h-full flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"}
		     onClick={toggleShow}>
			<span
				className={"bg-white relative w-[600px] max-w-full max-h-full py-6 px-2 md:px-6 flex flex-col items-center gap-6 pointer-events-auto"}
				onClick={(event) => event.stopPropagation()}>
				<button className={"absolute z-10 right-2 top-2 p-2 rounded-full hover:shadow-md shadow-black transition-all"} onClick={toggleShow}>
					<Close className={"pointer-events-none"}/>
				</button>
				{ children }
			</span>
		</div>
	)

}

export const Support = () => {

	const [show, setShow] = useState(true);

	const toggleShow = () => setShow(!show);

	const [showVolunteer, setShowVolunteer] = useState(false);

	const toggleShowVolunteer = () => setShowVolunteer(!showVolunteer);

	return (
		<Popup inShow={show}>
			<img className={"w-[480px] max-w-full px-4 md:px-12 border-b pb-2"} src={"/FinalLogo.png"}/>
			{
			showVolunteer ? <MailChimp backAction={toggleShowVolunteer}/> : (
			<>
				<span className={"flex flex-col w-full items-center px-4 gap-2"}>
					<p>Luke is working diligently to ensure New Mexico <b>preserves Abortion Rights</b>, <b>protects our
						Environment</b>, and <b>implements Universal Healthcare</b>.</p>
					<p>To help support, you can</p>
					<span className={"flex flex-col md:flex-row items-center justify-center w-full text-xl gap-2"}>
						<a
							href="https://secure.actblue.com/donate/luke-for-nm"
							target="_blank"
							className={"font-bold w-max text-white bg-[#00a9e0] shadow-sm hover:shadow-md hover:shadow-black/40 shadow-black/30 flex gap-1 items-center mx-1.5 py-1.5 px-4 rounded transition"}>
							Donate on ActBlue
						</a>
							or
						<button onClick={toggleShowVolunteer}
							className={"font-bold w-max shadow-sm hover:shadow-md hover:shadow-black/40 shadow-black/30 hover:border-black text-black/80 hover:text-black flex gap-1 items-center mx-1.5 py-1.5 px-4 rounded transition"}>
							Sign up to Volunteer
						</button>
					</span>
				</span>
			</>
		)}
		</Popup>
	)
}

export const Root = () => {

	return (
		<>
			<Header/>
			<main className={"flex flex-1 flex-col items-center overflow-y-auto overflow-hidden relative"}>
				<Outlet/>
			</main>
			<Support/>
		</>
	)
}
