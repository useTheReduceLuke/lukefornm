
import { isMobile } from 'react-device-detect';
import { NavLink } from "react-router-dom";
import Abq1 from "../assets/abq-1.jpg";
import Abq1Md from "../assets/abq-1-md.jpg";
import Abq1Sm from "../assets/abq-1-sm.jpg";
import Abq2 from "../assets/abq-2.jpg";
import Abq2Md from "../assets/abq-2-md.jpg";
import Abq2Sm from "../assets/abq-2-sm.jpg";
import {DoubleBackground} from "../components/DoubleBackground";
import ProgressiveImage from "../components/ProgressiveBGImage/ProgressiveImage";
import {BlockText} from "../components/BlockText";
import {Footer} from "./Root";
import {ScrollManager} from "../components/ScrollManager";

export const Home = () => {
	return (
		<ScrollManager>
			<div className={"flex flex-1 flex-col items-start w-full"}>
				<ProgressiveImage src={isMobile ? Abq2Md : Abq2} placeholder={Abq2Sm}>
					<div
						className={"flex flex-col items-center justify-between w-full border-b border-black/50 bg-gradient-to-b from-blue-50/60 to-blue-50 min-h-[90vh] md:min-h-[95vh]"}>
						<img className={"min-w-[360px] w-full md:w-[800px] p-4 md:p-12"} src={"/FinalLogo.png"}/>
						<span className={"flex flex-col-reverse md:flex-row items-end relative w-full"}>
							<p className={"pl-8 text-black text-xl md:text-3xl pb-4 md:pb-16 md:py-24 flex-1 z-10"}>
								Luke Jungmann is a Software Engineer and Native-Born New Mexican running as a Democrat for <b>New Mexico House District 60 in 2024</b> with the goals of:
							</p>
							<ProgressiveImage
								className={"flex-1 h-max w-full md:w-1/2 -scale-x-100 pointer-events-none"}
								src={"images/Luke-3214-med-res.png"}
								placeholderSrc={"images/Luke-3214-low-res.png"}
								alt=""/>
						</span>
					</div>
				</ProgressiveImage>
				<div className={"flex flex-col w-full items-start"}>
					<DoubleBackground upperBg={"from-black/50 to-black/70"}
					                  imageSrc={isMobile ? Abq1Md : Abq1}
					                  imageSrcSm={Abq1Sm}>
						<BlockText>
							<div
								className={"inline-flex text-xl md:text-2xl flex-col justify-center items-center py-8 min-h-[100vh]"}>
								<ul className={"flex flex-col gap-8 md:gap-24 list-disc ml-8"}>
									{/*<li>Lowering the <b>Cost of Living</b> in New Mexico, while also increasing our worker's wages, benefits, and more.</li>*/}
									<li>Safeguarding the <b>Right To Choose</b> in the New Mexico Constitution.</li>
									{/*<li>Converting New Mexico to <b>100% Renewable Energy</b> and making New Mexico carbon-neutral by 2040.</li>*/}
									<li>Fighting to improve New Mexico's healthcare.</li>
									<li>Protecting our water and environment through preservation actions and further
										smart investment in renewables.
									</li>
								</ul>
								<NavLink
									className={"border-b-2 pt-8 border-b-white/50 hover:border-b-white transition-colors max-w-max text-2xl text-sky-200 hover:text-white"}
									to={"/issues"}>And many more!</NavLink>
								<span className={"h-16 mt-24 flex flex-col items-center"}>
									Endorsed by:
									<span className={"flex"}>
										<img className={"h-16 mt-8"}
									        src={"/images/314EndorsementLogo.png"}
											alt="NM House Seat 60 Endorsement"/>
									</span>
								</span>
							</div>
						</BlockText>
					</DoubleBackground>
				</div>
				<Footer/>
			</div>
		</ScrollManager>
	)
}
