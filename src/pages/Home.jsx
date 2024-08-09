import {NavLink} from "react-router-dom";
import Abq1Md from "../assets/abq-1-md.jpg";
import Abq1Sm from "../assets/abq-1-sm.jpg";
import Abq2Md from "../assets/abq-2-md.jpg";
import Abq2Sm from "../assets/abq-2-sm.jpg";
import {DoubleBackground} from "../components/DoubleBackground";
import ProgressiveImage from "../components/ProgressiveBGImage/ProgressiveImage";
import {BlockText} from "../components/BlockText";
import {Footer} from "./Root";
import {ScrollManager} from "../components/ScrollManager";
import {useEffect, useState} from "react";

const ProChanger = () => {

	const proList = ["Choice", "Union", "Worker", "Increased Wages", "Rent Stabilization", "Democracy", "Ranked-Choice Voting", "Affordable Healthcare"];

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

export const Home = () => {
	return (
		<ScrollManager>
			<div className={"flex flex-1 flex-col items-start w-full"}>
				<ProgressiveImage src={Abq2Md} placeholder={Abq2Sm}>
					<div
						className={
							"flex flex-col items-center justify-between w-full border-b border-black/50 bg-gradient-to-b from-blue-50/60 to-blue-50 min-h-[90vh]"
						}
					>
						<img
							className={"min-w-[360px] w-full lg:w-[800px] p-4 lg:p-12"}
							src={"/FinalLogo.png"}
						/>
						<span
							className={
								"flex flex-col-reverse lg:flex-row items-end relative w-full"
							}
						>
              <p
	              className={
		              "text-black text-xl lg:text-3xl p-4 lg:pl-8 lg:pb-16 lg:py-24 flex-1 z-10 lg:min-w-[600px]"
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
	              And running on the goals of:
              </p>
              <ProgressiveImage
	              className={
		              "flex-1 h-max w-full lg:w-1/2 -scale-x-100 pointer-events-none"
	              }
	              src={"images/Luke-3214-med-res.png"}
	              placeholderSrc={"images/Luke-3214-low-res.png"}
	              alt=""
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
										"min-h-[60vh] flex flex-col justify-start gap-8 lg:gap-24 list-disc ml-8"
									}
								>
									{/*<li>Lowering the <b>Cost of Living</b> in New Mexico while also strengthening our workers and unions.</li>*/}
									<li>
										Safeguarding the <b>Right To Choose</b> in the New Mexico
										Constitution.
									</li>
									{/*<li>Converting New Mexico to <b>100% Renewable Energy</b> and making New Mexico carbon-neutral.</li>*/}
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
								<span className={"flex flex-col items-center"}>
                  Endorsed by:
                  <span
	                  className={
		                  "flex items-center flex-col p-4 h-max rounded gap-4"
	                  }
                  >
                  <img
	                  className={"w-40 lg:w-60 bg-white"}
	                  src={"/images/NEAEndorsementLogo.jpg"}
	                  alt="NEA NM Endorsement"
                  />
                    <img
	                    className={"w-40 lg:w-60 bg-white"}
	                    src={"/images/AFTEndorsementLogo.png"}
	                    alt="AFT NM Endorsement"
                    />
                    <img
	                    className={"w-40 lg:w-60 bg-white"}
	                    src={"/images/NMAFLCIO.jpg"}
	                    alt="NMAFLCIO Endorsement"
                    />
                    <img
	                    className={"w-40 lg:w-60 bg-white"}
	                    src={"/images/NM State Council of Machinists.png"}
	                    alt="NM State Council of Machinists Endorsement"
                    />
                    <img
	                    className={"w-40 lg:w-60 bg-white"}
	                    src={"/images/ActionFundLogo-FINAL.webp"}
	                    alt="NMVC Action Fund"
                    />
                  </span>
                  Other acknowledgements:
                    <img
	                    className={"w-32 lg:w-60 bg-white"}
	                    src={"/images/momsdemand.png"}
	                    alt="Moms Demand Endorsement"
                    />
                </span>
							</div>
						</BlockText>
					</DoubleBackground>
				</div>
				<Footer/>
			</div>
		</ScrollManager>
	);
};
