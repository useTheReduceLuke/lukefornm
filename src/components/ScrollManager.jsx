import {
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import classNames from "classnames";
import {useScroll} from "framer-motion";

const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}

		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
};

export const ScrollManager = ({scrollItems, className, children}) => {

	const scrollRef = useRef();
	const childrenRef = useRef();
	const topRef = useRef();

	const [showTop, setShowTop] = useState(false);
	const [width, height] = useWindowSize();

	useLayoutEffect(() => {
	}, [scrollItems, height]);

	const {scrollY} = useScroll();

	useLayoutEffect(() => {
		const setTop = scrollY > 1080;
		if (setTop !== showTop) setShowTop(setTop);
	}, [scrollY]);

	const scrollToTop = (smooth = true) => {
		topRef?.current?.scrollIntoView({behavior: smooth ? "smooth" : "auto"});
	};

	return (
		<>
			<div
				id={"topRef"}
				className={"opacity-0 w-0 h-[112px] lg:h-[96px] pointer-events-none"}
			>
				{showTop}
			</div>
			<div
				ref={scrollRef}
				className={classNames(
					className,
					"scroll-ref flex flex-1 w-full flex-col items-center overflow-y-auto relative overflow-x-hidden",
				)}
			>
				{showTop && (
					<span
						className={
							"pointer-events-none fixed z-50 text-white left-0 bottom-0 p-4 w-full h-max flex items-center justify-center"
						}
					>
            <button
	            onClick={() => scrollToTop()}
	            className={
		            "pointer-events-auto text-white/60 border-b border-b-white/50 hover:border-b-white hover:text-white transition-colors"
	            }
            >
              Back to Top
            </button>
          </span>
				)}
				<div className={"w-full"} ref={childrenRef}>
					{children}
				</div>
			</div>
		</>
	);
};
