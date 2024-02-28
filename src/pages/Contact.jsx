
import MailChimp from "../components/MailChimp";
import { isMobile } from 'react-device-detect';
import Abq1 from "../assets/abq-1.jpg";
import Abq1Md from "../assets/abq-1-md.jpg";
import Abq1Sm from "../assets/abq-1-sm.jpg";
import ProgressiveImage from "react-progressive-bg-image";
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
			<ProgressiveImage className={"w-full h-full bg-cover"} src={isMobile ? Abq1Md : Abq1} placeholder={Abq1Sm}>
				<div className={"inline-flex text-white flex-col justify-center items-center p-8 h-full w-full"}>
					<BlockText className={"mt-8 md:mt-24 pb-2 text-3xl font-bold"}>Contact Us:</BlockText>
					<ContactUs/>
					<BlockText className={"mt-8 md:mt-24 pb-2 text-3xl font-bold"}>Stay updated:</BlockText>
					<div className={"bg-white/70 backdrop-blur-sm p-4 rounded text-xl text-black flex flex-col gap-4"}>
						<MailChimp/>
					</div>
				</div>
			</ProgressiveImage>
		</div>
	)
}
