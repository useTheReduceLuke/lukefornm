import {useState} from "react";
import {Popup} from "../pages/Root";
import ImageGallery from "react-image-gallery";
import MayFundraiser from "../assets/MayFundraiser.png";
import LukeVolunteer from "../assets/LukeVolunteer.png";

const images = [{ original: LukeVolunteer }, { original: MayFundraiser }];

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
				    <p className={"text-blue-800"}>Event</p>
				    <p className={"text-orange-600 pl-2"}>Information</p>
			    </h3>
			    <ul className={"list-disc w-full items-center py-2 px-4 gap-2"}>
			    </ul>
			    <div className={"border-2 max-w-full max-h-full mx-2"}>
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
