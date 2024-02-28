import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import classNames from "classnames";
import cn from "classnames";

const FloatingList = ({scrollItems, scroll = 0, scrollHeight = 1080}) => {

	const goToIssue = (ind) => {
		console.log(document.getElementById(`scroll-${ind}`));
		document.getElementById(`scroll-${ind}`)?.scrollIntoView({behavior: "smooth"});
	}

	const makeStyle = () => {
		const percentage = ((scroll / scrollHeight) * 100).toFixed(2) ?? 0;
		return {
			top: `${percentage}%`
		};
	}

	return (
		<span className={"flex flex-col items-start pt-24 md:pt-20 justify-center w-28 md:w-40 pr-2 fixed z-30 left-0 top-0 h-full"}>
			<span className={"flex flex-col items-end text-end gap-0 md:gap-4 px-2 py-2 md:py-3 opacity-100 md:opacity-50 hover:opacity-100 transition-all relative bg-gradient-to-r from-transparent to-transparent hover:to-black/40 overflow-hidden"}>
				{
					scrollItems.map(({ header, text }, ind) =>
						{
							const height = Math.max(54, text.length * 8);
							const heightObj = { height: `${height}px` };
							return (
								<button key={`scrollTo-${ind}`} onClick={() => goToIssue(ind)}
								        style={heightObj}
				                                         className={cn("text-xs md:text-sm text-white/50 hover:text-white transition-colors text-end")}>
									{header}
								</button>
							)
						}
					)
				}
				<span className={"border-r-2 border-r-white/25 absolute right-0 top-0 w-0 h-full"}></span>
				<span className={"border-r-2 border-r-white absolute right-0 w-0 h-16"} style={makeStyle()}></span>
			</span>
		</span>
	)
}


export const ScrollManager = ({scrollItems, className, children}) => {

	const location = useLocation();

	const scrollRef = useRef();
	const topRef = useRef();

	const [showTop, setShowTop] = useState(false);
	const [scroll, setScroll] = useState(0);
	const [scrollHeight, setScrollHeight] = useState(0);

	useEffect(() => {
		scrollToTop(false);
		updateScrollHeight();
	}, [location]);

	const updateScrollHeight = () => {
		const scrollHeight = scrollRef?.current?.scrollHeight;
		setScrollHeight(scrollHeight);
	}

	const onRootScroll = (e) => {
		updateScrollHeight();
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
			{scrollItems?.length && (<FloatingList scrollItems={scrollItems} scroll={scroll} scrollHeight={scrollHeight}></FloatingList>)}
			<span className={"opacity-0 w-0 h-0 pointer-events-none"} ref={topRef}>{showTop}</span>
			{showTop && (
				<span className={"pointer-events-none fixed z-50 text-white left-0 bottom-0 p-4 w-full h-max flex items-center justify-center"}>
					<button onClick={() => scrollToTop()} className={"pointer-events-auto text-white/60 border-b border-b-white/50 hover:border-b-white hover:text-white transition-colors"}>Back to Top</button>
				</span>
			)}
			{children}
		</div>
	)
}
