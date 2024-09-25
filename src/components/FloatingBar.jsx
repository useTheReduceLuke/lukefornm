import cn from "classnames";
import {useRef} from "react";
import {motion, useScroll} from "framer-motion";

const FloatingItem = ({ item, ind }) => {

    const { header, height } = item;

    const goToIssue = (ind) => {
        document.getElementById(`scroll-${ ind }`)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <button key={`scrollTo-${ ind }`} onClick={() => goToIssue(ind)}
		        className={cn("text-[11px] h-10 max-h-full py-0.5 md:text-sm text-white/50 hover:text-white transition-colors text-end")}>
            {header}
        </button>
    );
};

const FloatingListScrollBar = ({ inRef }) => {

    const { scrollYProgress } = useScroll();

    return (
        <div className={"flex flex-col h-full w-max absolute right-0 top-0"}>
            <span className={"border-r-2 border-r-white/25 absolute right-0 top-0 w-0 h-full"}/>
            <div className={"w-[2px] bg-white/75 relative h-5"}/>
            <motion.div
                className={"w-[2px] bg-white/75 origin-top"}
                style={{ scaleY: scrollYProgress, height: "calc(100% - 2.5rem)" }}>
            </motion.div>
        </div>
    );
};

export const FloatingList = (props) => {

    const { scrollItems } = props;

    const floatingRef = useRef(null);

    return (
        <span
            className={"flex flex-col items-start pt-[112px] lg:pt-[96px] justify-center w-28 md:w-40 pr-2 fixed z-30 left-0 top-0 h-full"}>
            <span ref={floatingRef}
                className={"h-max max-h-full flex flex-col items-end text-end gap-0 px-2 opacity-100 md:opacity-50 hover:opacity-100 transition-all relative bg-gradient-to-r from-transparent to-transparent hover:to-black/40 overflow-y-auto"}>
                {
	                scrollItems.map((item, ind) =>
		                <FloatingItem item={item} ind={ind}
		                              key={item.key}/>,
	                )
                }
	            <FloatingListScrollBar inRef={floatingRef}/>
            </span>
        </span>
    );
};
