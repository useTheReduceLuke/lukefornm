import {NavLink, useLocation} from "react-router-dom";
import {useEffect} from "react";
import cn from "classnames";
import Instagram from "@mui/icons-material/Instagram"
import Facebook from "@mui/icons-material/Facebook"

export const Donate = ({className: inClass}) => {

	return (
		<a
			href="https://secure.actblue.com/donate/luke-for-nm"
			target="_blank"
			className={cn("text-white bg-[#00a9e0] w-max flex text-xl gap-1 items-center px-4 py-0 lg:py-1 rounded transition hover:scale-105", inClass)}>
			Donate
			<img style={{width: "46px", objectFit: "contain"}} src="AB.png" alt={"AB"}/>
		</a>
	)
}
export const Header = () => {

	const location = useLocation();

	const routes = [
		{url: '/', text: 'Home'},
		{url: '/about', text: 'About'},
		{url: '/issues', text: 'Issues'},
		{url: '/district', text: 'NM District 60'},
		{url: '/contact', text: 'Contact'}
	]

	useEffect(() => {
	}, [location]);

	return (
		<div
			className={cn("fixed top-0 bg-white z-[100] h-[112px] lg:h-[96px] flex flex-col-reverse lg:flex-row w-full gap-0 lg:gap-8 justify-evenly px-2 md:px-4 py-1 md:py-2 text-xl items-center overflow-hidden border-b")}>
			<div className={"flex w-full lg:gap-4 flex-row justify-evenly items-center flex-1"}>
				{
					routes.map(route => {
						return <NavLink
							key={'link-to-' + route.text}
							to={route.url}
							className={cn("w-min min-w-max p-2 cursor-pointer transition-colors hover:text-black font-bold sm:font-normal text-sm sm:text-xl", (location.pathname === route.url) ? "text-black" : "text-black/50")}>
							{route.text}
						</NavLink>
					})
				}
			</div>
			<div
				className={"flex flex-1 items-center justify-evenly lg:justify-center flex-row w-full lg:w-max gap-1 lg:gap-8 flex-shrink "}>
				<Donate/>
				<span className={"flex"}>
					<img className={"p-0 transition-all object-contain h-8 sm:h-10 lg:h-12"}
					     src={"/FinalLogo.png"}/>
				</span>
				<span className={"flex"}>
					<span className={"Instagram-Icon relative"}>
						<span className={"absolute w-full h-full left-0 top-0 z-10 rounded-full"}></span>
						<a href={"https://www.instagram.com/luke_for_nm/"} target="_blank"
						   className={"relative flex z-10 transition-all text-black/70 cursor-pointer p-2 w-max rounded-full"}>
							<Instagram/>
						</a>
					</span>
					<a href={"https://www.facebook.com/profile.php?id=100095797740167"} target="_blank"
					   className={"relative flex z-10 transition-all text-black/70 cursor-pointer p-2 w-max rounded-full hover:bg-blue-500 hover:text-white"}>
						<Facebook/>
					</a>
				</span>
			</div>
		</div>
	)
}
