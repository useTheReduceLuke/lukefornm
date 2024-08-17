import React, {useRef} from "react";
import {motion, useInView, useScroll, useTransform} from "framer-motion";

import AbqBack from "../assets/Abq-Float-Back.jpg";
import AbqFront from "../assets/Abq-Float-Front.png";
import AbqCenter from "../assets/Abq-Float-Center.png";
import Arie from "../assets/Arie.jpg";
import LukeDany from "../assets/LukeDany.jpg";
import LukeGraduation from "../assets/LukeGraduation.jpg";
import LukeGraduationUPenn from "../assets/LukeGraduationUPenn.jpg";
import LukeMapware2018 from "../assets/LukeMapware2018.jpg";
import Pride from "../assets/pride.jpg";
import {Donate} from "../components/Header";

function useParallax(value, distance) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

console.clear();

const Background = () => {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll();
	const y1 = useParallax(scrollYProgress, -10);
	const y2 = useParallax(scrollYProgress, -20);
	const y3 = useParallax(scrollYProgress, -100);
	const x = useParallax(scrollYProgress, 10);
	const imgList = [
		{img: AbqBack, style: {y: y1, top: "-10px"}},
		{img: AbqCenter, style: {y: y2, top: "-20px"}},
		{img: AbqFront, style: {x, y: y3, top: "-100px"}}
	];

	return (
		<section ref={ref} className={"fixed w-full h-full pointer-events-none"}>
			{imgList.map(({img, style}, index) => (
				<motion.div className={"absolute h-[150vh] w-[150vw] -left-[25vw]"} style={style}>
					<img className={"w-full h-full object-cover"} src={img}/>
				</motion.div>
			))}
		</section>
	);
}

const CrossImages = ({img1Src, img2Src}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: true});

	return (
		<section className={"flex justify-center gap-8 p-8"} ref={ref}>
			<div
				className={"max-h-[600px] w-1/3"}>
				<motion.div
					style={{
						width: "100%",
						height: "100%",
						transform: isInView ? "none" : "translateX(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
					}}>
					<img
						style={leftBoxStyle}
						className={
							"w-full h-full object-cover -scale-x-100"
						}
						src={img1Src}
						alt="LukeGraduation"
					/>
				</motion.div>
			</div>
			<div
				className={"max-h-[600px] w-1/3"}>
				<motion.div
					style={{
						width: "100%",
						height: "100%",
						transform: isInView ? "none" : "translateX(-200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.65, 1) 0.8s"
					}}>
					<img
						style={rightBoxStyle}
						className={
							"h-full w-full object-cover -scale-x-100"
						}
						src={img2Src}
						alt="LukeGraduationUpenn"
					/>
				</motion.div>
			</div>
		</section>
	);
}

const PopIn = ({
	               children
               }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: true});

	return <div ref={ref}
	            className={"flex flex-col items-center justify-center"}
	            style={{
		            transform: isInView ? "none" : "translateX(-200px)",
		            opacity: isInView ? 1 : 0,
		            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
	            }}>
		{children}
	</div>
}

const leftBoxStyle = {boxShadow: " rgba(0, 0, 0, 0.6) 16px 16px"};
const rightBoxStyle = {boxShadow: " rgba(0, 0, 0, 0.6) -16px 16px"};

const ColorBlock = (props) => {
	const {blockColor = "bg-white", left = true} = props;
	return (
		<span style={left ? leftBoxStyle : rightBoxStyle} className={"flex relative m-8"}>
      <p
	      className={
		      "max-w-[1000px] text-xl text-black z-10 p-4 mx-4 backdrop-blur"
	      }
      >
        {props.children}
      </p>
      <span className={"w-full h-full absolute top-0 right-0 " + blockColor}/>
    </span>
	);
};

const imgClass =
	"w-[80vw] max-w-[540px] max-h-[60vh] object-cover shadow-xl shadow-black/50 scale-x-100";

export function About() {
	return (
		<main className={"w-full h-full"} style={{background: "#253237"}}>
			<Background/>
			<div
				className={
					"scroll-block z-10 flex flex-col justify-center items-center min-h-[100vh] pt-[112px] lg:pt-[96px] w-full gap-4"
				}
			>
				<PopIn>
					<div className={"h-12 w-full"}/>
					<img
						style={leftBoxStyle}
						className={
							imgClass
						}
						src={LukeDany}
						alt="Luke and Dany"
					/>
					<ColorBlock>
						Luke Jungmann is a New Mexico native, born and raised in
						Albuquerque, now residing in Rio Rancho where he lives with his
						wife, Dany Alfaro, their cats, and their dog Arie.
					</ColorBlock>

					<img
						style={leftBoxStyle}
						className={
							imgClass + " scale-x-100"
						}
						src={Arie}
						alt="Arie"
					/>
				</PopIn>
			</div>

			<div
				className={
					"scroll-block flex flex-col justify-center items-center min-h-[100vh] top-0 left-0"
				}
			>
				<PopIn>
					<ColorBlock blockColor={"bg-blue-200"} left={false}>
						After attending the Albuquerque public schools, Luke received a
						Bachelor’s in Mechanical Engineering from New Mexico Tech and a
						Master's in Robotics Engineering from the University of Pennsylvania.
					</ColorBlock>
				</PopIn>
				<CrossImages img1Src={LukeGraduation} img2Src={LukeGraduationUPenn}/>
			</div>

			<div
				className={
					"scroll-block flex flex-col justify-center items-center min-h-[100vh] top-0 left-0"
				}
			>
				<PopIn>
					<ColorBlock blockColor={"bg-orange-200"}>
						Luke works as a Senior Software Engineer for a photogrammetry product
						company called Mapware, where he has worked at for the last 6 years.
					</ColorBlock>
					<img
						style={leftBoxStyle}
						className={
							imgClass + " -scale-x-100"
						}
						src={LukeMapware2018}
						alt="LukeMapware2018"
					/>
				</PopIn>

				<PopIn>

					<ColorBlock blockColor={"bg-green-100"} left={false}>
						Luke Jungmann will bring his extensive knowledge and experience to the
						public sector, with the intent to benefit New Mexico’s economy,
						environment, and people. As a young Millennial, he understands the
						challenges facing the State and wants to make New Mexico better for
						his generation and the generations to follow.
					</ColorBlock>
					<img
						style={leftBoxStyle}
						className={
							imgClass
						}
						src={Pride}
						alt="Pride"
					/>
				</PopIn>
			</div>
			<div className={"pb-8 w-full flex justify-center"}>
				<div
					className={"flex flex-col md:flex-row gap-5 text-center items-center z-100 h-max w-max relative justify-center bg-white m-8 px-8 py-2 rounded"}>
					<span>
					Every donation helps us fight for <b>New Mexican workers and unions, healthcare, abortion rights, and more.</b>
					</span>
					<Donate/>
				</div>
			</div>
		</main>
	);
}
