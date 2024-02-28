import cn from "classnames";
import ProgressiveImage from 'react-progressive-bg-image';
import {isMobile} from "react-device-detect";

export const DoubleBackground = ({imageSrc, imageSrcSm, upperBg, children}) => (
	<div className={cn("relative inline-block w-full text-5xl font-bold text-black clip-text h-max min-h-max")}>
		<ProgressiveImage src={imageSrc} placeholder={imageSrcSm}
		                  style={{
			                  backgroundSize: 'cover',
			                  backgroundAttachment: isMobile ? 'scroll' : 'fixed',
			                  backgroundPosition: 'center center',
		                  }}>
			<span className={cn("flex items-center justify-center w-full h-full md:min-w-[720px] bottom-0 right-0 min-h-max object-contain bg-gradient-to-b from-black/30 to-black/60 relative", upperBg)}>
				{ children }
			</span>
		</ProgressiveImage>
	</div>
)
