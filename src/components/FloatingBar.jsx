import cn from "classnames";
import {useLayoutEffect, useRef, useState} from "react";

const FloatingItem = ({item, scrollHeight, clientHeight, ind}) => {

	const { header, height } = item;

	if (!height) return <span></span>

	const goToIssue = (ind) => {
		document.getElementById(`scroll-${ind}`)?.scrollIntoView({behavior: "smooth"});
	}

	const relativeHeight = Math.round(height / (scrollHeight) * clientHeight) * 3 / 4;
	const heightObj = { height: `${relativeHeight}px` };

	return (
		<button key={`scrollTo-${ind}`} onClick={() => goToIssue(ind)}
		        style={heightObj}
		        className={cn("text-[11px] md:text-sm text-white/50 hover:text-white transition-colors text-end")}>
			{header}
		</button>
	)
}

const FloatingListScrollBar = (props) => {

	const {scroll = 0, scrollHeight = 1080, clientHeight = 900, floatingListHeight} = props;

	const [percentage, setPercentage] = useState(0);

	const [barStyle, setBarStyle] = useState({
		top: `0%`,
		height: `0px`
	});

	useLayoutEffect(() => {
		makeBarTopStyle();
	}, [scroll]);

	useLayoutEffect(() => {
		makeBarTopStyle();
		makeBarHeightStyle();
	}, [floatingListHeight]);

	const makeBarTopStyle = () => {
		const calcPercent = (scroll / (scrollHeight) * 100).toFixed(3) ?? 0;

		if (!isNaN(calcPercent) && (calcPercent !== percentage)) {
			setPercentage(calcPercent);
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
		<>
			<span className={"border-r-2 border-r-white/25 absolute right-0 top-0 w-0 h-full"}></span>
			<span className={"border-r-2 border-r-white absolute right-0 w-0"} style={barStyle}></span>
		</>
	)
}

export const FloatingList = (props) => {

	const {scrollItems, scroll = 0, scrollHeight = 1080, clientHeight = 900} = props;

	const floatingRef = useRef(null);
	const [floatingListHeight, setFloatingListHeight] = useState(0);

	useLayoutEffect(() => {
		updateListHeight();
	}, [clientHeight]);

	const updateListHeight = () => {
		if (floatingRef?.current?.clientHeight) {
			setFloatingListHeight(floatingRef?.current?.clientHeight);
		}
	};

	return (
		<span className={"flex flex-col items-start pt-[96px] lg:pt-[102px] justify-center w-28 md:w-40 pr-2 fixed z-30 left-0 top-0 h-full"}>
			<span ref={floatingRef} className={"flex flex-col items-end text-end gap-0 px-2 py-2 md:py-3 opacity-100 md:opacity-50 hover:opacity-100 transition-all relative bg-gradient-to-r from-transparent to-transparent hover:to-black/40 overflow-hidden"}>
				{
					scrollItems.map((item, ind) =>
						<FloatingItem item={item} scrollHeight={scrollHeight} clientHeight={clientHeight} ind={ind} key={item.key}/>
					)
				}
				<FloatingListScrollBar scrollItems={scrollItems} scroll={scroll} scrollHeight={scrollHeight} clientHeight={clientHeight} floatingListHeight={floatingListHeight}/>
			</span>
		</span>
	)
}
