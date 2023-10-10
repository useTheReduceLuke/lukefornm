
import MailChimp from "../components/MailChimp";
import Abq from "../assets/abq-2.jpg";
import AbqSm from "../assets/abq-2-sm.jpg";
import Solar from "../assets/solar.jpg";
import SolarSm from "../assets/solar-sm.jpg";
import Wind from "../assets/wind.jpg";
import WindSm from "../assets/wind-sm.jpg";
import Rust from "../assets/rust.jpg";
import RustSm from "../assets/rust-sm.jpg";
import Foodtruck from "../assets/foodtruck.jpg";
import FoodtruckSm from "../assets/foodtruck-sm.jpg";
import {DoubleBackground} from "../components/DoubleBackground";
import ProgressiveImage from "react-progressive-bg-image";
import Apartments from "../assets/apartments.jpg";
import ApartmentsSm from "../assets/apartments-sm.jpg";

const shortIssuesList = [
	{
		imageSrc: Solar,
		imageSrcSm: SolarSm,
		code: (
				<>Solidifying <b>Solar, Wind, and Other Renewables</b> as the state's primary sources of energy by 2030.</>
		)
	},
	{
		imageSrc: Foodtruck,
		imageSrcSm: FoodtruckSm,
		code: (<>
				Investments in <b>public transit, modern infrastructure, and local small businesses.</b>
			</>
		)
	},
	{
		imageSrc: Rust,
		imageSrcSm: RustSm,
		code: (<>
				Enshrining a pregnant person's <b>Right to Choose</b> in the NM Constitution, and
				making NM the first state in the U.S. with <b>Universal Healthcare.</b>
			</>
		)
	},
	// {
	// 	imageSrc: Apartments,
	// 	imageSrcSm: ApartmentsSm,
	// 	code: (<>
	// 			Lowering the <b>Cost of Living</b> in New Mexico with <b>rent control, high-density housing development</b>, and <b>more.</b>
	// 		</>
	// 	)
	// },
	{
		imageSrc: Wind,
		imageSrcSm: WindSm,
		code: (<>
				<p className={"pb-2"}>Stay updated:</p>
				<MailChimp/>
			</>
		)
	},
];

export const Home = () => {
	return (
		<div className={"flex flex-1 flex-col items-start w-full bg-cover bg-fixed"}>
			<ProgressiveImage src={Abq} placeholder={AbqSm}
			                  style={{
				                  backgroundSize: 'cover',
				                  backgroundAttachment: 'fixed',
				                  backgroundPosition: 'center center',
				                  moz
			                  }}>
				<div className={"flex flex-col items-center justify-between w-full border-b border-black/50 bg-gradient-to-b from-transparent to-blue-100 min-h-[90vh] md:min-h-[95vh]"}>
					<img className={"min-w-[360px] w-full md:w-[800px] p-4 md:p-12"} src={"/FinalLogo.png"}/>
					<span className={"flex flex-col-reverse md:flex-row items-end relative w-full"}>
						<p className={"text-black text-xl md:text-3xl px-4 md:pl-16 pb-4 md:pb-16 md:py-24 flex-1 z-10"}>
							Luke is a Native-Born New Mexican and Software Engineer, running for the New Mexico House District 60 in 2024 with the goals of:
						</p>
						<img className={"flex-1 object-cover w-full md:w-1/2 -scale-x-100 translate-x-12 pointer-events-none"} src={"images/Luke-3214-med-res.png"} alt="Luke Jungmann"/>
					</span>
				</div>
			</ProgressiveImage>
			<div className={"flex flex-col w-full items-start"}>
				{
					shortIssuesList.map((issue, ind) => (
						<DoubleBackground imageSrc={issue.imageSrc} imageSrcSm={issue.imageSrcSm} ind={ind}>
							{issue.code}
						</DoubleBackground>))
				}
			</div>
		</div>
	)
}
