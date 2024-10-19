import {NavLink} from "react-router-dom";
import Abq1Md from "../assets/abq-1-md.jpg";
import Abq1Sm from "../assets/abq-1-sm.jpg";
import Abq2Md from "../assets/abq-2-md.jpg";
import Abq2Sm from "../assets/abq-2-sm.jpg";
import {DoubleBackground} from "../components/DoubleBackground";
import ProgressiveImage from "../components/ProgressiveBGImage/ProgressiveImage";
import {BlockText} from "../components/BlockText";
import {Footer} from "./Root";
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

const logos = ['red', 'blue', 'green', 'yellow'];

const proList = ["Choice", "Union", "Worker", "Increased Wages", "Rent Stabilization", "Democracy", "Ranked-Choice Voting", "Affordable Healthcare"];

const TestLogos = () => ( <div className="flex items-center">
	<div className="top-16 -z-10 grid text-4xl">
		{proList.map((logo, index) => { return (
			<motion.div key={index}
			            className="col-start-1 row-start-1 h-24 w-44 justify-center p-4"
			            initial={{ opacity: 0, translateY: '75%' }}
			            animate={{ opacity: [null, 1, 0], translateY: [null, '0%', '-75%'] }}
			            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, delay: index * 1.5, repeatDelay: logos.length * 1.5 - 3, // `total delay - duration` (the time the first item should return back to initial style)
			            }} >
				<div className="h-full w-full text-lg">{logo}</div>
			</motion.div> ) })}
	</div>
	<div>+33 more</div>
</div> );

const ProChanger = () => {

	const [val, setVal] = useState(0);
	const [prevVal, setPrevVal] = useState(0);

	useEffect(() => {
		const loop = setInterval(() => {
			setVal((val) => {
				let newVal = val + 1;
				setPrevVal(() => newVal - 1);
				if (newVal >= proList.length) newVal = 0;
				return newVal;
			});
		}, 2000);

		// Stops the old timer when umount the component.
		return function stopTimer() {
			clearInterval(loop)
		}
	}, []);

	return (<b>
		Pro-
		<span className={"relative"}>
			<span className={"absolute min-w-max transition-transform"}
			      style={{transform: "translateY(-24px)"}}>{proList[prevVal]}</span>
			<span className={"max-content"}>{proList[val]}</span>
		</span>
	</b>)
}

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
	return (
		<div className={"flex flex-1 flex-col overflow-x-hidden items-start w-full pt-[112px] lg:pt-[96px]"}>
			{/*<TestLogos/>*/}
			<ProgressiveImage src={Abq2Md} placeholderSrc={Abq2Sm}>
				<div
					className={
						"flex flex-col items-center justify-between w-full border-b border-black/50 bg-gradient-to-b from-blue-50/60 to-blue-50 min-h-[90vh]"
					}
				>
					<img
						className={"max-w-full w-[500px] md:w-[700px] p-4"}
						src={"/FinalLogo.png"}
					/>
					<span
						className={
							"flex flex-col-reverse lg:flex-row items-end relative w-full"
						}
					>
              <p
	              className={
		              "text-black text-xl md:text-3xl p-4 lg:pl-8 pb-16 lg:py-24 flex-1 z-10 lg:min-w-[600px]"
	              }
              >
                Luke Jungmann is a Senior Software Engineer and Native-Born New
                Mexican running as a Democrat for{" "}
	              <b>New Mexico House District 60 on Nov. 5, 2024</b>.
	              <br/>
	              <br/>
	              {/*Luke is: <ProChanger/>*/}
	              {/*<br/>*/}
	              {/*<br/>*/}
	              Running on the goals of:
              </p>
              <ProgressiveImage
	              className={
		              "flex-1 h-max w-full max-w-[600px] lg:w-1/2 -scale-x-100 pointer-events-none"
	              }
	              src={"images/Luke-3214-med-res.png"}
	              placeholderSrc={"images/Luke-3214-low-res.png"}
	              alt="Luke"
              />
            </span>
				</div>
			</ProgressiveImage>
			<div className={"flex flex-col w-full items-start"}>
				<DoubleBackground
					upperBg={"from-black/50 to-black/70"}
					imageSrc={Abq1Md}
					imageSrcSm={Abq1Sm}
				>
					<BlockText>
						<div
							className={
								"inline-flex text-xl lg:text-2xl flex-col justify-center items-center py-8 min-h-[100vh]"
							}
						>
							<ul
								className={
									"min-h-[60vh] flex flex-col justify-start gap-8 lg:gap-24 list-disc ml-8 pt-32"
								}
							>
								{/*<li>Lowering the <b>Cost of Living</b> in New Mexico while also strengthening our workers and unions.</li>*/}
								<li>
									Safeguarding the <b>Right To Choose</b> in the New Mexico
									Constitution.
								</li>
								{/*<li>Converting New Mexico to <b>100% Renewable Energy</b> and making New Mexico carbon-neutral by 2040.</li>*/}
								<li>Fighting to improve New Mexico's healthcare.</li>
								<li>
									Protecting our water and environment through preservation
									actions and further smart investment in renewables.
								</li>
								<NavLink
									className={
										"border-b-2 pt-8 border-b-white/50 hover:border-b-white transition-colors max-w-max text-2xl text-sky-200 hover:text-white"
									}
									to={"/issues"}
								>
									And many more!
								</NavLink>
							</ul>
							<div className={"flex flex-col items-center pt-32"}>
								Endorsed by:
								<Endorsements/>
								Other acknowledgements:
								<img
									className={"w-[160px] h-[160px] bg-white"}
									src={"/images/momsdemand.png"}
									alt="Moms Demand Acknowledgement"
								/>
							</div>
						</div>
					</BlockText>
				</DoubleBackground>
			</div>
			<Footer/>
		</div>
	);
};
