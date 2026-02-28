import MailChimp from "../components/MailChimp";
import Birb from "../assets/BirbBG.png";
import {BlockText} from "../components/BlockText";

const ContactUs = () => {
	return (
		<div className={"bg-gray-300/50 backdrop-blur-sm p-4 rounded text-xl text-black flex flex-col gap-4"}>
			{/*<div className={"flex gap-2"}>*/}
			{/*	<b>Call/Text:</b>*/}
			{/*	<a className={"border-b-2 border-black/50"} href={"tel:575-265-0645"}>(575) 265-0645</a>*/}
			{/*</div>*/}
			<div className={"flex gap-2"}>
				<b>Email:</b>
				<a className={"border-b-2 border-black/50"} href={"mailto:lukefornm@gmail.com"}>lukefornm@gmail.com</a>
			</div>
		</div>
	)
}

export const Contact = () => {
	return (
		<div className={"flex flex-1 flex-col items-start w-full h-full"}>
			<img className={"w-full h-full object-cover fixed"} src={Birb} alt={"Birb"}/>
			<div className={"inline-flex text-white flex-col justify-start items-center p-8 mt-48 h-full w-full"}>
				<ContactUs/>
				{/*<div className={"bg-white/70 backdrop-blur-sm p-4 rounded text-xl text-black flex flex-col gap-4"}>*/}
				{/*	<MailChimp/>*/}
				{/*</div>*/}
			</div>
		</div>
	)
}
