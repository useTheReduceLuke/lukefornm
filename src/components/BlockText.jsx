import cn from "classnames";


export const BlockText = ({ className, children }) => (
<span className={cn(className, "px-2 md:px-8 box-border inline-block text-white text-3xl md:text-4xl min-h-max [text-shadow:_0_1px_0_black,_0_-1px_0_black,_1px_0_0_black,_-1px_0_0_black]")}>
	{ children }
</span>
)
