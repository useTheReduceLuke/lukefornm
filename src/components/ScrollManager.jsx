import {forwardRef, useEffect, useLayoutEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import classNames from "classnames";
import {FloatingList} from "./FloatingBar";

const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

const getScrollItemById = (scrollItems, textToCheck) =>
	scrollItems.find(item => textToCheck.includes(item.key));

export const ScrollManager = ({scrollItems, className, children}) => {

	const location = useLocation();

	const scrollRef = useRef();
	const childrenRef = useRef();
	const topRef = useRef();

	const [showTop, setShowTop] = useState(false);
	const [scroll, setScroll] = useState(0);
	const [scrollHeight, setScrollHeight] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);
	const [width, height] = useWindowSize();

	useLayoutEffect(() => {
		if (scrollItems) {
			childrenRef.current?.childNodes.forEach((node) => {
				const height = node?.clientHeight;
				const item = getScrollItemById(scrollItems, node?.id);
				if (item) item.height = height;
			});
		}
	}, [scrollItems, height]);

	useEffect(() => {
		scrollToTop(false);
		if (scrollRef?.current) {
			updateScrollHeight();
		}
	}, [location]);

	useEffect(() => {
		if (scrollRef?.current) {
			updateScrollHeight();
		}
	}, [height]);

	const updateScrollHeight = () => {
		const currentRef = scrollRef?.current;
		setScrollHeight(currentRef?.scrollHeight);
		setClientHeight(currentRef?.clientHeight);
	}

	const onRootScroll = (e) => {
		const scrollTop = Math.round(scrollRef?.current?.scrollTop);
		setScroll(scrollTop);
		const setTop = scrollRef?.current?.scrollTop > 1080;
		if (setTop !== showTop) setShowTop(setTop);
	};

	const scrollToTop = (smooth = true) => {
		topRef?.current?.scrollIntoView({behavior: smooth ? 'smooth' : 'auto'});
	}

	return (
		<div ref={scrollRef} onScroll={onRootScroll} className={classNames(className, "scroll-ref flex flex-1 w-full flex-col items-center overflow-y-auto relative overflow-x-hidden")}>
			{scrollItems?.length && (<FloatingList scrollItems={scrollItems} scroll={scroll} scrollHeight={scrollHeight} clientHeight={clientHeight}></FloatingList>)}
			<span className={"opacity-0 w-0 h-0 pointer-events-none"} ref={topRef}>{showTop}</span>
			{showTop && (
				<span className={"pointer-events-none fixed z-50 text-white left-0 bottom-0 p-4 w-full h-max flex items-center justify-center"}>
					<button onClick={() => scrollToTop()} className={"pointer-events-auto text-white/60 border-b border-b-white/50 hover:border-b-white hover:text-white transition-colors"}>Back to Top</button>
				</span>
			)}
			<div className={"w-full"} ref={childrenRef}>
				{children}
			</div>
		</div>
	)
}

