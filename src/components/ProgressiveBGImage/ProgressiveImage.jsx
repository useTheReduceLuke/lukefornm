import { useState, useEffect } from "react";
import "./ProgressiveImage.css";
import cn from "classnames";

const ProgressiveImg = ({ placeholderSrc, src, className, children, id = 'progressive-image', ...props }) => {
	const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setImgSrc(src);
		};
	}, [src]);

	const customClass =
		placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

	return (
		<div id={id} className={cn(className)}>
			<img
				{...{ src: imgSrc, ...props }}
				alt={props.alt || ""}
				className={cn("block object-cover w-full h-full -z-10", children && "fixed", customClass)}
			/>
			{ children }
		</div>
	);
};
export default ProgressiveImg;
