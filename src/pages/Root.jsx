import {Outlet, useLocation} from "react-router-dom";
import {Header} from "../components/Header";
import {useEffect, useRef} from "react";

const Footer = () => (
	<div className={"h-max w-full bg-black/50 px-4 text-[8px] font-sans"}>
		LukeForNM.com was produced In-House.
	</div>
)

export const Root = () => {

	const location = useLocation();

	const scrollRef = useRef();

	useEffect(() => {
		console.log(scrollRef?.current);
		scrollRef?.current?.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<Header/>
			<main ref={scrollRef} className={"flex flex-1 flex-col items-center overflow-y-auto relative overflow-x-hidden"}>
				<Outlet/>
				<Footer/>
			</main>
		</>
	)
}
