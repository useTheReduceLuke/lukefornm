
import {DoubleBackground} from "../components/DoubleBackground";
import Solar from "../assets/solar.jpg";
import SolarSm from "../assets/solar-sm.jpg";
import Apartments from "../assets/apartments.jpg";
import ApartmentsSm from "../assets/apartments-sm.jpg";
import School from "../assets/school.jpg";
import SchoolSm from "../assets/school-sm.jpg";
import Rust from "../assets/rust.jpg";
import RustSm from "../assets/rust-sm.jpg";
import Foodtruck from "../assets/foodtruck.jpg";
import FoodtruckSm from "../assets/foodtruck-sm.jpg";
import Law from "../assets/law.jpg";
import LawSm from "../assets/law-sm.jpg";
import Workers from "../assets/workers.jpg";
import WorkersSm from "../assets/workers-sm.jpg";
import OldTown from "../assets/oldtown.jpg";
import OldTownSm from "../assets/oldtown-sm.jpg";
import {BlockText} from "../components/BlockText";
import {ScrollManager} from "../components/ScrollManager";

const issuesText = [
	{
		header: "Abortion Rights",
		imageSrc: OldTown,
		imageSrcSm: OldTownSm,
		text: [
			"Countrywide, abortion rights are under attack, and thankfully New Mexico has laws in place to protect those rights.",
			"However, we must also enshrine the right for a pregnant person to choose permanently in the State's Constitution.",
 			"We also must safeguard the anonymity of anyone traveling to New Mexico to get an abortion or anything else our state protects.",
		],
	},
	{
		header: "Healthcare",
		imageSrc: Rust,
		imageSrcSm: RustSm,
		text: [
			"If even one New Mexican is putting off a necessary surgery or appointment or going into bankruptcy because of cost, that's too many.",
			"We will make healthcare affordable or even free for all New Mexicans and cover dental, vision, and most importantly mental health.",
			"We must also attract and retain medical students, doctors, nurses, assistants, EMTS, and other healthcare professionals through staffing minimums, overtime protections, and wage increases across the board.",
		],
	},
	{
		header: "Renewable Energy and the Environment",
		imageSrc: Solar,
		imageSrcSm: SolarSm,
		text: [
			"The oil and gas industry provides a significant amount of revenue to the State, but we must continue to move toward the use of more renewable energy sources.",
			"Public transit can further help reduce the number of vehicles on the road, benefiting our environment and society.",
			"Homes and businesses can be given incentives to modernize their insulation, windows, etc. to be able to further save energy.",
			"New construction can be built with state-funded solar panels and storage to further drive our energy independence.",
			"",
			"We should work to stop new projects that can damage the environment, such as deforestation, drilling, and more.",
			"Most importantly, New Mexico and the four corners must work together to preserve water - one of our most precious resources - and guarantee the future of the region."
		],
	},
	{
		header: "Smart Growth for Neighborhoods",
		imageSrc: Foodtruck,
		imageSrcSm: FoodtruckSm,
		text: [
			"Connected, healthier, happier societies are safer societies, proven time and time again.",
			"We should invest in more local small businesses, food trucks, restaurants, and more to give neighborhoods stronger and more unique identities.",
			"More parks and natural areas to encourage activity and places for New Mexicans and their pets to enjoy themselves.",
			"Implementing safe, modern road design including roundabouts and other safety measures to lower driving speeds in neighborhoods throughout the state.",
		],
	},
	{
		header: "Affordable Housing",
		imageSrc: Apartments,
		imageSrcSm: ApartmentsSm,
		text: [
			"Rising housing costs around the country are affecting New Mexico, as well.",
			"I will propose a scaling tax that applies to land and property ownership by out-of-state landowners, scaling with location and area.",
			"The change in rent a landlord can impose on a rental (not the tenant) should be capped to match inflation and limit the increases to one per year.",
			"Home rentals such as AirBnB should be limited in number throughout the state."
		],
	},
	{
		header: "Education",
		imageSrc: School,
		imageSrcSm: SchoolSm,
		text: [
			"Acquiring and retaining good teachers is essential. To do that, we must be competitive with other states in wages and working conditions.",
			"My wife is a teacher at Rio Rancho High School and I am aware of the challenges she, her fellow teachers and her students face.",
			"Parental involvement, community assistance, and forward-thinking administrators are all part of the solution.",
			"I will work to ensure that we bring better educational opportunities, funding, and support to students around the State and continue to improve upon our existing successes."
		],
	},
	{
		label: "Workforce",
		header: "New Mexican Workforce",
		imageSrc: Workers,
		imageSrcSm: WorkersSm,
		text: [
			"New Mexico should join the front of recognizing the worth of our hard-working citizens.",
			"New Mexico's median salary is just under $25/hour, which means half our citizens make less than that.",
			"Our minimum wage should be increased to make it possible for any New Mexican to live here.",
			"Our tipped wage should be eliminated, with it up to restaurants to decide how to handle tipping at the individual restaurant.",
			"Small, local businesses can be provided a forgivable loan that is distinctly to cover a portion of wages, promoting wage growth.",
			"Unions should be given further protections for their current or prospective members from any threats or coercion."
		],
	},
];

// const issuesText = [
// 	{
// 		label: "Healthcare",
// 		header: "Healthcare and Abortion Access",
// 		imageSrc: Rust,
// 		imageSrcSm: RustSm,
// 		text: [
// 			"If even one New Mexican is putting off a necessary surgery or appointment or going into bankruptcy because of cost, that's too many. We need to work with the healthcare industry to create a single-payer system.",
// 			"Our system will make healthcare free or affordable for all New Mexicans and must also cover teeth, eyes, skin, and most importantly mental health in order to be truly Universal.",
// 			"We must also attract and retain medical students, doctors, nurses, and other healthcare professionals through staffing minimums and wage increases across the board.",
// 			"",
// 			"Abortion should be protected (and largely is, in New Mexico), but we can also enshrine the right for a pregnant person to choose permanently within the New Mexico State Constitution.",
// 			"We also must safeguard the anonymity of anyone traveling to New Mexico to get an abortion or anything else our state protects."
// 		],
// 	},
// 	{
// 		label: "Environment",
// 		header: "Renewable Energy and the Environment",
// 		tags: ["renewable", "energy", "renewable energy", "environment"],
// 		imageSrc: Solar,
// 		imageSrcSm: SolarSm,
// 		text: [
// 			"The oil and gas industry provides a significant amount of revenue to the State, but we must continue to move toward the use of more renewable energy sources.",
// 			"I would like solar, wind, and geothermal to be New Mexico's primary sources of energy production by 2030.",
// 			"Public transit can further help reduce the number of vehicles on the road, benefiting our environment and society.",
// 			"Homes and businesses can be given incentives to modernize their insulation, windows, etc. to be able to further save energy.",
// 			"New construction can be built with state-funded solar panels and storage to further drive our energy independence.",
// 			"",
// 			"We should work to stop new projects that can damage the environment, such as deforestation, drilling, and more.",
// 			"Most importantly, New Mexico and the four corners must work together to preserve water - one of our most precious resources - and guarantee the future of the region."
// 		],
// 	},
// 	{
// 		label: "Neighborhoods",
// 		header: "Safer, Smarter Neighborhoods",
// 		imageSrc: Foodtruck,
// 		imageSrcSm: FoodtruckSm,
// 		text: [
// 			"We should invest in more local small businesses, food trucks, restaurants, and more to give neighborhoods stronger and more unique identities.",
// 			"More parks and natural areas to encourage activity and places for New Mexicans and their pets to enjoy themselves.",
// 			"Implement safe, modern road design including roundabouts and other safety measures to lower driving speeds in neighborhoods throughout the state.",
// 			"Connected, healthier, happier societies are safer societies, proven time and time again."
// 		],
// 	},
// 	{
// 		label: "Housing",
// 		header: "Affordable Housing",
// 		imageSrc: Apartments,
// 		imageSrcSm: ApartmentsSm,
// 		text: [
// 			"Rising housing costs around the country are affecting New Mexico, as well.",
// 			"I will propose a scaling tax that applies to land and property ownership by out-of-state landowners, scaling with location and area.",
// 			"The change in rent a landlord can impose on a rental (not the tenant) should be capped to match inflation and limit the increases to one per year.",
// 			"Home rentals such as AirBnB should be limited in number throughout the state."
// 		],
// 	},
// 	{
// 		label: "Workforce",
// 		header: "New Mexican Workforce",
// 		imageSrc: Workers,
// 		imageSrcSm: WorkersSm,
// 		text: [
// 			"New Mexico should join the front of recognizing the worth of our hard-working citizens.",
// 			"New Mexico's median salary is just under $25/hour, which means half our citizens make less than that.",
// 			"Our minimum wage should be increased, and I'm targeting $20/hour to make it possible for any New Mexican to live here.",
// 			"Our tipped wage should be eliminated, with it up to restaurants to decide how to handle tipping at the individual restaurant.",
// 			"Small, local businesses can be provided a forgivable loan that is distinctly to cover a portion wages and provide a small amount of support.",
// 			"Unions should be given further protections for their current or prospective members from any threats or coercion."
// 		],
// 	},
// 	{
// 		label: "Economy",
// 		header: "New Mexican Economy",
// 		imageSrc: OldTown,
// 		imageSrcSm: OldTownSm,
// 		text: [
// 			"To keep our cities and towns thriving, we must get people visiting and boosting their economies.",
// 			"Connecting our train network to Denver - a major airport - and towns within New Mexico can further drive tourism, local and foreign.",
// 			"Ensuring our citizens have more discretionary spending is essential.",
// 			"Increasing salaries across the board to reflect productivity gains in addition to Universal Basic Income can guarantee this.",
// 			"Keeping housing, food, medical, and transportation costs down will further benefit every New Mexican."
// 		],
// 	},
// 	{
// 		label: "Education",
// 		header: "Education",
// 		imageSrc: School,
// 		imageSrcSm: SchoolSm,
// 		text: [
// 			"Acquiring and retaining good teachers is essential. To do that, we must be competitive with other states in wages and working conditions.",
// 			"My spouse is a teacher at Rio Rancho’s Cleveland high school and I am aware of the challenges she and her students face.",
// 			"Parental involvement, community assistance, and forward-thinking administrators are all part of the solution.",
// 			"I will work to ensure that we bring better educational opportunities, funding, and support to students around the State and continue to improve upon our existing successes."
// 		],
// 	},
// 	{
// 		label: "Crime",
// 		header: "Crime",
// 		imageSrc: Law,
// 		imageSrcSm: LawSm,
// 		text: [
// 			"Since the pandemic, crime has - overall - been on the decline year over year.",
// 			"We must expand preventative measures including better mental health treatment and other resources.",
// 			"City, town, and even neighborhood community safety organizations have also proven very effective, as well as common-sense gun laws.",
// 		],
// 	}
// ];

const ListWithDepth = ({textToIterate}) =>
	(
		<span className={"list-disc inline-block list-outside flex-col gap-2"} role="list">
			{
				textToIterate.map((textOrArr, ind) =>
					(typeof textOrArr === "string" ? <p key={`text-${ind}`} className={"text-sm md:text-xl py-2"}>{textOrArr}</p> : <ListWithDepth textToIterate={textOrArr}/>)
				)
			}
		</span>
	);


export const Issues = () => {

	return (
		<ScrollManager scrollItems={issuesText}>

			{
				issuesText.map(({header, text, imageSrc, imageSrcSm}, ind) =>
					(
						<div key={`issue-${ind}`} className={"contents"}>
							<span id={`scroll-${ind}`}></span>
							<DoubleBackground ind={ind} imageSrc={imageSrc} imageSrcSm={imageSrcSm} upperBg={"from-black/70 to-black/90"}>
								<BlockText>
									<span className={"inline-flex max-w-[600px] ml-[6.5rem] md:ml-36 flex-col justify-center items-center py-8 min-h-[100vh]"}>
										<p className={"text-3xl md:text-5xl"}>{header}</p>
										<ListWithDepth textToIterate={text}/>
									</span>
								</BlockText>
							</DoubleBackground>
						</div>
					)
				)
			}
		</ScrollManager>
	)
}
