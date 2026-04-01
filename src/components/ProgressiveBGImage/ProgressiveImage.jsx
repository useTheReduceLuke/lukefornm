import {useEffect, useState} from "react";
import "./ProgressiveImage.css";
import cn from "classnames";

const ProgressiveImg = ({ placeholderSrc, src, className, children, ...props }) => {
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
		<div className={cn("relative", className)}>
			<img
				{...{ src: imgSrc, ...props }}
				alt={props.alt || ""}
				className={cn("flex -z-10 w-full h-full object-cover", children && "fixed", customClass)}
			/>
			{ children }
		</div>
	);
};
export default ProgressiveImg;
