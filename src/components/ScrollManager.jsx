import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import classNames from "classnames";
import cn from "classnames";

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


const FloatingItem = ({item, scrollHeight, clientHeight, ind}) => {

	const { header, height } = item;

	if (!height) return <span></span>

	const goToIssue = (ind) => {
		document.getElementById(`scroll-${ind}`)?.scrollIntoView({behavior: "smooth"});
	}

	const relativeHeight = Math.round(height / (scrollHeight - clientHeight) * clientHeight) * 3 / 4;
	const heightObj = { height: `${relativeHeight}px` };

	return (
		<button key={`scrollTo-${ind}`} onClick={() => goToIssue(ind)}
		        style={heightObj}
		        className={cn("text-xs md:text-sm text-white/50 hover:text-white transition-colors text-end")}>
			{header}
		</button>
	)
}

const FloatingList = ({scrollItems, scroll = 0, scrollHeight = 1080, clientHeight = 900}) => {

	const floatingRef = useRef(null);
	const [floatingListHeight, setListHeight] = useState(0);
	const [barStyle, setBarStyle] = useState({
		top: `0%`,
		height: `0px`
	});

	useEffect(() => {
		updateListHeight();
		makeBarTopStyle();
		makeBarHeightStyle();
	}, []);

	useLayoutEffect(() => {
		updateListHeight();
		makeBarTopStyle();
		makeBarHeightStyle();
	}, [clientHeight]);

	useLayoutEffect(() => {
		makeBarTopStyle();
	}, [scroll]);

	const updateListHeight = () => {
		if (clientHeight) {
			setListHeight(clientHeight);
		}
	};

	const makeBarTopStyle = () => {
		const percentage = Math.round((scroll / (scrollHeight)) * 100) ?? 0;
		if (!isNaN(percentage)) {
			const topStyle = Object.assign({}, barStyle);
			topStyle.top = `${percentage}%`;
			setBarStyle(topStyle);
		}
	}

	const makeBarHeightStyle = () => {
		const barHeight = Math.round(clientHeight / scrollHeight * floatingListHeight);
		if (!isNaN(barHeight)) {
			const heightStyle = Object.assign({}, barStyle);
			heightStyle.height = `${barHeight}px`;
			setBarStyle(heightStyle);
		}
	}

	return (
		<span ref={floatingRef} className={"flex flex-col items-start pt-[102px] md:pt-20 justify-center w-28 md:w-40 pr-2 fixed z-30 left-0 top-0 h-full"}>
			<span className={"flex flex-col items-end text-end gap-0 md:gap-4 px-2 py-2 md:py-3 opacity-100 md:opacity-50 hover:opacity-100 transition-all relative bg-gradient-to-r from-transparent to-transparent hover:to-black/40 overflow-hidden"}>
				{
					scrollItems.map((item, ind) =>
						<FloatingItem item={item} scrollHeight={scrollHeight} clientHeight={clientHeight} ind={ind} key={item.key}/>
					)
				}
				<span className={"border-r-2 border-r-white/25 absolute right-0 top-0 w-0 h-full"}></span>
				<span className={"border-r-2 border-r-white absolute right-0 w-0"} style={barStyle}></span>
			</span>
		</span>
	)
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
		<div ref={scrollRef} onScroll={onRootScroll} className={classNames(className, "flex flex-1 w-full flex-col items-center overflow-y-auto relative overflow-x-hidden")}>
			{scrollItems?.length && (<FloatingList scrollItems={scrollItems} scroll={scroll} scrollHeight={scrollHeight} clientHeight={clientHeight}></FloatingList>)}
			<span className={"opacity-0 w-0 h-0 pointer-events-none"} ref={topRef}>{showTop}</span>
			{showTop && (
				<span className={"pointer-events-none fixed z-50 text-white left-0 bottom-0 p-4 w-full h-max flex items-center justify-center"}>
					<button onClick={() => scrollToTop()} className={"pointer-events-auto text-white/60 border-b border-b-white/50 hover:border-b-white hover:text-white transition-colors"}>Back to Top</button>
				</span>
			)}
			<div ref={childrenRef}>
				{children}
			</div>
		</div>
	)
}
