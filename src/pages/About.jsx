import {DoubleBackground} from "../components/DoubleBackground";
import cn from "classnames";

import Abq1 from "../assets/abq-1.jpg";
import Abq1Sm from "../assets/abq-1-sm.jpg";
import Abq2 from "../assets/abq-2.jpg";
import Abq2Sm from "../assets/abq-2-sm.jpg";
import Drone from "../assets/drone.jpg";
import DroneSm from "../assets/drone-sm.jpg";
import VLA from "../assets/vla.jpg";
import VLASm from "../assets/vla-sm.jpg";
import {BlockText} from "../components/BlockText";
import ProgressiveImage from "../components/ProgressiveBGImage/ProgressiveImage";
import {ScrollManager} from "../components/ScrollManager";

const aboutList = [
	{
		imageSrc: Abq1,
		imageSrcSm: Abq1Sm,
		code: (<div className={"flex flex-col justify-end items-end min-h-[90vh] md:min-h-[95vh]"}>
				<p className={"w-2/3 text-2xl md:text-3xl"}>Luke Jungmann is a New Mexico native, born and raised in Albuquerque, now residing in Rio Rancho where he lives with his wife, Dany Alfaro, their cats, and their dog Arie.</p>
				<ProgressiveImage
					className={"absolute w-64 md:min-w-[360px] md:max-w-[400px] object-contain md:w-2/3 bottom-0 -right-12 md:right-0 -scale-x-100"}
					src={"images/Luke-3214-med-res.png"}
					placeholderSrc={"images/Luke-3214-low-res.png"}
					alt="Luke Jungmann"/>
			</div>
		)
	},
	{
		imageSrc: VLA,
		imageSrcSm: VLASm,
		code: (<>
				<p className={"text-2xl md:text-3xl"}>After attending the Albuquerque public schools, Luke received a Bachelor’s in Mechanical Engineering from New Mexico Tech and a Master's in Robotics Engineering from the University of Pennsylvania.</p>
			</>
		)
	},
	{
		imageSrc: Drone,
		imageSrcSm: DroneSm,
		code: (<>
				<p className={"text-2xl md:text-3xl"}>Luke works as a Software Engineer for a startup called Mapware, where he works on the user interface for a photogrammetry engine, which he has done for close to 6 years.</p>
			</>
		)
	},
	{
		imageSrc: Abq2,
		imageSrcSm: Abq2Sm,
		code: (<>
				<p className={"w-2/3 text-2xl md:text-3xl"}>Luke Jungmann will bring his extensive knowledge and experience to the public sector, with the intent to benefit New Mexico’s economy, environment, and people. As a young Millennial, he understands the challenges facing the State and wants to make New Mexico better for his generation and the generations to follow.</p>
		</>
		)
	},
];

export const About = () => {
	return (
		<ScrollManager className={"flex flex-col relative"}>
			{
				aboutList.map(({imageSrc, imageSrcSm, code}, index) =>
					(<DoubleBackground key={`about-${index}`} imageSrc={imageSrc} imageSrcSm={imageSrcSm} upperBg={"from-black/40 to-black/80"}>
						<BlockText>
							<div className={"inline-flex flex-col justify-center items-start min-h-[90vh] md:min-h-[95vh]"}>
								{code}
							</div>
						</BlockText>
					</DoubleBackground>)
				)
			}
		</ScrollManager>
	)
}
