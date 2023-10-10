import {NavLink, useLocation} from "react-router-dom";
import {useEffect} from "react";
import cn from "classnames";
import Instagram from "@mui/icons-material/Instagram"
import Facebook from "@mui/icons-material/Facebook"

const Donate = ({className: inClass}) => {

	return (
		<a
		   href="https://secure.actblue.com/donate/luke-for-nm"
		   target="_blank"
		   className={cn("text-white bg-[#00a9e0] min-w-max flex text-2xl gap-1 items-center px-4 py-0 md:py-1 rounded transition hover:scale-105", inClass)}>
			Donate
			<img style={{width: "46px", objectFit: "contain"}} src="AB.png" alt={"AB"}/>
		</a>
	)
}
export const Header = () => {

	const location = useLocation();

	const routes = [
		{ url: '/', text: 'Home' },
		{ url: '/about', text: 'About' },
		{ url: '/issues', text: 'Issues' },
		{ url: '/district', text: 'NM District 60' },
	]

	useEffect(() => {
	}, [location]);

	return (
		<div className={cn("flex flex-col-reverse md:flex-row w-full gap-2 md:gap-3 justify-evenly px-4 py-2 h-max text-xl items-center overflow-hidden border-b")}>
			<div className={"flex w-full md:w-max md:gap-4 flex-row justify-evenly items-center"}>
				{
					routes.map(route => {
						return <NavLink
							key={'link-to-' + route.text}
							to={route.url}
							className={cn("w-min min-w-max px-2 cursor-pointer transition-colors hover:text-black font-bold sm:font-normal text-sm sm:text-xl", (location.pathname === route.url) ? "text-black" : "text-black/50")}>
								{route.text}
							</NavLink>
					})
				}
				<a href={"https://secure.actblue.com/donate/lukekickoff"} target="_blank" className={"relative flex z-20 transition-colors text-black/50 hover:text-black font-bold sm:font-normal text-sm sm:text-xl px-2"}>
					Events
				</a>
			</div>
			<div className={"flex items-center justify-between w-full md:w-max gap-8"}>
				<Donate/>
				<span className={"flex"}>
					<span className={"Instagram-Icon relative"}>
						<span className={"absolute w-full h-full left-0 top-0 z-10 rounded-full"}></span>
						<a href={"https://www.instagram.com/luke_for_nm/"} target="_blank" className={"relative flex z-20 transition-all text-black/70 cursor-pointer p-2 w-max rounded-full"}>
							<Instagram />
						</a>
					</span>
					<a href={"https://www.facebook.com/profile.php?id=100095797740167"} target="_blank" className={"relative flex z-20 transition-all text-black/70 cursor-pointer p-2 w-max rounded-full hover:bg-blue-500 hover:text-white"}>
						<Facebook />
					</a>
				</span>
			</div>
		</div>
	)
}
