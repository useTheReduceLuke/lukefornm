
import {useEffect, useRef, useState} from "react";
import {motion, useInView} from "framer-motion";

const endorsementList = [
	<img
		className={"w-40 lg:w-60 bg-white"}
		src={"/images/NEAEndorsementLogo.jpg"}
		alt="NEA NM Endorsement"
	/>,
	<img
		className={"w-40 lg:w-60 bg-white"}
		src={"/images/AFTEndorsementLogo.png"}
		alt="AFT NM Endorsement"
	/>,
	<img
		className={"w-40 lg:w-60 bg-white"}
		src={"/images/NMAFLCIO.jpg"}
		alt="NMAFLCIO Endorsement"
	/>,
	<img
		className={"w-40 lg:w-60 bg-white"}
		src={"/images/NM State Council of Machinists.png"}
		alt="NM State Council of Machinists Endorsement"
	/>,
	<img
		className={"w-40 lg:w-60 bg-white"}
		src={"/images/ActionFundLogo-FINAL.webp"}
		alt="NMVC Action Fund"
	/>,
	<img
		className={"w-40 lg:w-60 bg-white"}
		src={"/images/VeteransEndorsement2.jpg"}
		alt="Veterans"
	/>,
	<img
		className={"w-40 lg:w-60 bg-white"}
		src={"/images/SierraClubEndorsement.png"}
		alt="Sierra Club Endorsement"
	/>,
	<img
		className={"w-40 lg:w-60 bg-white"}
		src={"/images/PlannedParenthood.png"}
		alt="Planned Parenthood Endorsement"
	/>,
	<img
		className={"w-40 lg:w-60 bg-white"}
		src={"/images/EqualityNMEndorsement.png"}
		alt="Sierra Club Endorsement"
	/>,
	<img
		className={"w-40 lg:w-60 bg-white"}
		src={"/images/OLEendorsement.png"}
		alt="Ole NM Endorsement"
	/>
]

const Endorsement = ({element}) => {

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			whileInView="show"
			className={"bg-white w-[160px] h-[160px] flex items-center"}
			style={{
				willChange: "transform",
				transform:  isInView ? "scale(1)" : "scale(0)",
				transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1)",
			}}
			transition={{type: "spring", duration: 1}}>
			{element}
		</motion.div>
	)
}

const Endorsements = () => {

	return (
		<motion.div
		            className={
			            "grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 w-full overflow-hidden items-center justify-center flex-col p-4 pb-24 h-max rounded gap-4"
		            }>
			{
				endorsementList.map((element, index) =>
					<Endorsement element={element} key={`endorsement-${index}`}/>
				)
			}
		</motion.div>
	)
}



export const Home = () => {
{/*<div className={"flex flex-col items-center pt-32"}>
{/*	Endorsed by:*/}
{/*	<Endorsements/>*/}
{/*	Other acknowledgements:*/}
{/*	<img*/}
{/*		className={"w-[160px] h-[160px] bg-white"}*/}
{/*		src={"/images/momsdemand.png"}*/}
{/*		alt="Moms Demand Acknowledgement"*/}
{/*	/>*/}
{/*</div>*/}
}