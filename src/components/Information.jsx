import {useState} from "react";
import {Popup} from "../pages/Root";
import ImageGallery from "react-image-gallery";

const images = [
	{
		original: "images/VeteransYes.jpg"
	},
	{
		original: "images/yesCA1.jpg"
	},
	{
		original: "images/yesCA2.jpg"
	},
];

export const Information = () => {
    const [ show, setShow ] = useState(true);

    return (
	    <Popup inShow={show}>
		    <div className={"flex flex-col items-center w-full overflow-x-hidden overflow-y-auto border-b-2"}>
			    <img
				    className={"w-[360px] md:w-[480px] max-w-full px-4 md:px-12 border-b pb-2"}
				    src={"/FinalLogo.png"}
			    />
			    <h3 className={"text-3xl w-full flex flex-col md:flex-row items-center justify-center border-b uppercase p-2"}>
				    <p className={"text-blue-800"}>Voting</p>
				    <p className={"text-orange-600 pl-2"}>Information</p>
			    </h3>
			    <ul className={"list-disc w-full items-center py-2 px-4 gap-2"}>
				    <p className={"text-2xl"}>Vote Today!</p>
				    <li>
					    Early voting is available from <b>Oct. 8th</b> until Election Day, <b>Nov. 5th</b> at your
					    <a className={"text-blue-800 underline pl-1"} target={"_blank"}
					       href={"https://www.sos.nm.gov/voting-and-elections/voter-information-portal-nmvote-org/county-clerk-information/"}
					       rel="noreferrer">
						    County Clerk's Office
					    </a>.
				    </li>
				    <li className={"w-full"}>
					    Beginning <b>Oct. 19</b>, voting locations and times will be expanded.
				    </li>
				    <li className={"w-full"}>
					    <b>Same-day registration and voting</b> is available now until Nov. 2nd and on Election Day, <b>Nov.
					    5th</b>!
				    </li>
			    </ul>
			    <div className={"border-2 max-w-[360px] md:w-[480px] mx-2"}>
				    <ImageGallery items={images}/>
			    </div>
		    </div>
		    <button
			    onClick={() => setShow(false)}
			    className={"border-2 mt-3 border-black/50 text-black text-lg px-4 py-1 rounded disabled:text-gray-400 disabled:border-gray-300"}>
			    To LukeForNM
		    </button>
	    </Popup>
    );
};
