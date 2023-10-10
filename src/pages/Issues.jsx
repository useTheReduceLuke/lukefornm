
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

export const newIssuesText = [
	"Universal Healthcare",
	[
		"Affordable and accessible are the key aspects of healthcare.",
		"Healthcare benefits are essential in attracting skilled workers to stay in and relocate to New Mexico.",
		"Private insurer costs are out of reach for many working New Mexicans.",
		"We need to work with the healthcare industry and insurers to create a single-payer system.",
		"We must also attract and retain doctors, nurses, and other healthcare professionals.",
		"Incentives for medical students to remain in New Mexico is an issue that needs to be enacted."
	],
	"Abortion Rights",
	[
		"New Mexico has been a safe haven for many seeking abortions, and I will work to keep it that way.",
		"Any person seeking an abortion in the state should be provided safe care and have their identity fully protected.",
		"We should further provide improved care for pregnant peoples in general.",
		"The state can subsidize condoms and other forms of sexual protection as well.",
	],
	"Education",
	[
		"Acquiring and retaining good teachers is essential. To do that, we must be competitive with other states in wages and working conditions.",
		"My spouse is a teacher at Rio Rancho’s Cleveland high school and I am aware of the challenges she and her students face. Money alone is not the answer.",
		"Parental involvement, community assistance, and forward-thinking administrators are all part of the solution.",
		"We are fortunate that Rio Rancho has a good public school system, but many areas of New Mexico are not as successful.",
		"I will work to ensure that we bring better educational opportunities to students around the State and continue to improve upon our existing successes."
	],
	"Renewable Energy",
	[
		"The oil and gas industry provides a significant amount of revenue to the State, but we must continue to move toward the use of more renewable energy sources.",
		"New Mexico’s energy companies are already moving in this direction because they know that renewable energy is more cost effective and has an unlimited future.",
		"The State must work with energy providers to move us forward in expanding the use of renewable, cheaper, and cleaner energy sources.",
		"Solar and wind can be placed throughout the state with limited impact to the environment to power the state completely.",
		"Subsidies can be made available for car chargers and for cars to first-time, lower-income electric car buyers on trade-in.",
		"Solar can be made a building requirement in every new home, installed by the state because the power is shared."
	],
	"The Environment",
	[
		"New Mexico is lucky in that it has a relatively small population, but we must work to preserve its natural beauty.",
		"We should work to prevent expansion of projects that can damage the environment, such as deforestation, drilling, and more.",
		"A naturally dry state and region, we should further limit usage of water in all sectors including agriculture."
	],
	"Smart Growth for Neighborhoods",
	[
		"We should provide more forgivable loans in local small businesses, food trucks, restaurants, and more to give neighborhoods stronger and more unique identities.",
		[
			"These loans should be forgiven on the basis the businesses provide consistent service and strong wages."
		],
		"Public transit investments to alleviate traffic, provide alternative options, and further benefit our environment.",
		"More parks and natural areas to encourage activity and places for our animals to enjoy themselves."
	],
	"Affordable Housing",
	[
		"Rising housing costs around the country are affecting New Mexico, as well.",
		"New Mexico land should be for New Mexicans.",
		"I will propose a combined scaling tax that applies to land ownership and property ownership by out-of-state landowners.",
		"I will propose a maximum limit to the increase in rent a landlord can impose on a rental and limit the increases to one per year.",
		"Home rentals such as AirBnB should be limited in number throughout the state."
	],
	"Stimulus",
	[
		"New Mexico has successfully provided stimulus for its citizens in the form of several delivered/deposited checks.",
		"With the incredible profits of the gas industry and cannabis industry we can provide stimulus to our citizens.",
		"I'd like to start with $500 monthly, a total of $6000 per year, which can bring more citizens out of food insecurity and poverty and stimulate our economy."
	],
	"Minimum Wage",
	[
		"New Mexico has kept its minimum wage up with many other similar states, but we can do one better.",
		"I believe now is the time to provide a higher wage while working fewer hours.",
		"I want full-time employment to be defined as 32 hours and the minimum wage set to $20 hourly.",
		"Importantly, salaried employees will also work 32 hours with no loss in salary.",
		"Finally, we will eliminate the tipped minimum wage (but not tipping) to ensure all employees are given a fair wage at a minimum, guaranteed.",
		"Fewer hours gives New Mexicans time to spend with family, friends, working on hobbies, skills, homes, and more, and has been shown to have little to no decrease in productivity."
	],
	"Gun Ownership",
	[
		"New Mexicans are some of the most heavily armed people in the country and there is no need for that to change dramatically.",
		"However, most gun owners can understand that not everyone should own a gun, and we should pass common-sense gun laws including assault weapon restrictions, waiting periods, and red flag laws.",
		"As well, we can look into subsidizing safe home storage and training class costs to encourage all owners to be able to safely handle their weapons."
	],
];

const issuesText = [
	{
		header: "Renewable Energy and the Environment",
		imageSrc: Solar,
		imageSrcSm: SolarSm,
		text: [
			"The oil and gas industry provides a significant amount of revenue to the State, but we must continue to move toward the use of more renewable energy sources.",
			"I would like solar and wind to be New Mexico's primary sources of energy production by 2030.",
			"Public transit can further help reduce the number of vehicles on the road, benefiting our environment and society.",
			"Homes and businesses can be given incentives to modernize their insulation, windows, etc. to be able to further save energy.",
			"Most importantly, New Mexico and the four corners must work together to preserve water - one of our most precious resources - and guarantee the future of the region."
		],
	},
	{
		header: "Smart Growth for Neighborhoods",
		imageSrc: Foodtruck,
		imageSrcSm: FoodtruckSm,
		text: [
			"We should invest in more local small businesses, food trucks, restaurants, and more to give neighborhoods stronger and more unique identities.",
			"Public transit investments to alleviate traffic, provide alternative options, and further benefit our environment.",
			"More parks and natural areas to encourage activity and places for our animals to enjoy themselves."
		],
	},
	{
		header: "Universal Healthcare",
		imageSrc: Rust,
		imageSrcSm: RustSm,
		text: [
			"Affordable and accessible are the key aspects of healthcare.",
			"Healthcare benefits are essential in attracting skilled workers to stay in and relocate to New Mexico.",
			"Private insurer costs are out of reach for many working New Mexicans.",
			"We need to work with the healthcare industry and insurers to create a single-payer system, modeled on Medicare and Medicaid, but designed for working people.",
			"We must also attract and retain doctors, nurses, and other healthcare professionals.",
			"Incentives for medical students to remain in New Mexico is an issue that needs to be enacted."
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
			"My spouse is a teacher at Rio Rancho’s Cleveland high school and I am aware of the challenges she and her students face. Money alone is not the answer.",
			"Parental involvement, community assistance, and forward-thinking administrators are all part of the solution.",
			"We are fortunate that Rio Rancho has a good public school system, but many areas of New Mexico are not as successful.",
			"I will work to ensure that we bring better educational opportunities to students around the State and continue to improve upon our existing successes."
		],
	},
];

const ListWithDepth = ({textToIterate}) =>
	(
		<span className={"list-disc inline-block list-outside ml-4 flex-col gap-2"} role="list">
			{
				textToIterate.map(textOrArr =>
					(typeof textOrArr === "string" ? <p className={"text-sm md:text-2xl py-2"}>{textOrArr}</p> : <ListWithDepth textToIterate={textOrArr}/>)
				)
			}
		</span>
	)


export const Issues = () => {
	return (
			issuesText.map(({header, text, imageSrc, imageSrcSm}, ind) =>
				(
					<DoubleBackground ind={ind} imageSrc={imageSrc} imageSrcSm={imageSrcSm} upperBg={"from-black/50 to-black/90"}>
						<span className={"inline-flex flex-col py-8"}>
							<p className={"text-3xl md:text-6xl"}>{header}</p>
							<ListWithDepth textToIterate={text}/>
						</span>
					</DoubleBackground>
				)
			)
	)
}
