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

const aboutList = [
	{
		imageSrc: Abq1,
		imageSrcSm: Abq1Sm,
		code: (<>
				<p className={"w-2/3 text-2xl md:text-3xl"}>Luke Jungmann is a New Mexico native, born and raised in Albuquerque, now residing in Rio Rancho where he lives with his wife, Dany Alfaro, their cats, and their dog Arie.</p>
				<img className={"absolute w-64 md:min-w-[360px] md:max-w-[400px] object-contain md:w-2/3 bottom-0 -right-12 md:right-0 -scale-x-100"} src={"images/Luke-3214.png"} alt="Luke Jungmann"/>
			</>
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
				<img className={"absolute w-32 md:min-w-[360px] md:max-w-[400px] object-contain md:w-2/3 bottom-0 right-0"} src={"images/Luke-3209.png"} alt="Luke Jungmann"/>
		</>
		)
	},
];

export const About = () => {
	return (<div className={"flex flex-col relative"}>
		{
			aboutList.map(({imageSrc, imageSrcSm, code}) =>
				(<DoubleBackground imageSrc={imageSrc} imageSrcSm={imageSrcSm} upperBg={"from-black/40 to-black/80"}>{code}</DoubleBackground>)
			)
		}
	</div>)
}
