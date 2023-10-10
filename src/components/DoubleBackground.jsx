import cn from "classnames";
import ProgressiveImage from 'react-progressive-bg-image';

export const DoubleBackground = ({imageSrc, imageSrcSm, upperBg, ind, children}) => (
	<div key={`issue-${ind}`} className={cn("relative inline-block w-full text-5xl font-bold text-black clip-text bg-fixed bg-cover bg-center h-max min-h-[100vh]")}>
		<ProgressiveImage src={imageSrc} placeholder={imageSrcSm}
		                  style={{
			                  backgroundSize: 'cover',
			                  backgroundAttachment: 'fixed',
			                  backgroundPosition: 'center center',
		                  }}>
			<span className={cn("flex items-center justify-center w-full h-full md:min-w-[720px] bottom-0 right-0 min-h-max object-contain bg-gradient-to-b from-transparent to-black/60 relative", upperBg)}>
				<span className={"px-4 md:px-8 box-border inline-block text-white text-3xl md:text-5xl min-h-max [text-shadow:_0_1px_0_black,_0_-1px_0_black,_1px_0_0_black,_-1px_0_0_black]"}>
					{ children }
				</span>
			</span>
		</ProgressiveImage>
	</div>
)
