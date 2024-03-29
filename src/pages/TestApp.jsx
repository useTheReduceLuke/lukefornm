import './TestApp.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const TestApp = () => {
	let canvasRef = useRef(null);

	const tween = useRef();

	useGSAP(() => {
		gsap.set(canvasRef.current, { scaleX: 0 });
		ScrollTrigger.create({
			trigger: "#scroll",
			scroller: "#scroll",
			start: 'top top',
			end: 'max',
			pin: true,
			pinSpacing: false,
		});

		tween.current = gsap
			.timeline({
				scrollTrigger: {
					trigger: canvasRef.current,
					scroller: "#scroll",
					start: 'top 75%',
					end: 'bottom bottom',
					scrub: 0.78,
				},
			})
			.to(canvasRef.current, {
				scaleX: 1,
				duration: 0.8,
				ease: 'easeIn',
			});
		ScrollTrigger.refresh();
	});

	return (
		<>
			<div className="spacer">spacer</div>
			<div className="canvas" ref={canvasRef}>
				CANVAS
			</div>
			<div className="spacer">spacer</div>
			<div className="spacer">spacer</div>
		</>
	);
}
