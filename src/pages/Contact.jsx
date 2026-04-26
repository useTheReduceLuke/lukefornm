import MailChimp from "../components/MailChimp";
import Birb from "../assets/BirbBG.png";
import LukeVolunteer from "../assets/LukeVolunteer.png";
import {Donate} from "../components/Header";

const ContactUs = () => {
	return (
		<div className={"bg-gray-300/50 backdrop-blur-sm p-4 rounded text-xl text-black flex flex-col gap-4"}>
			<div className={"flex gap-2"}>
				<b>Email:</b>
				<a className={"border-b-2 border-black/50"} href={"mailto:lukefornm@gmail.com"}>lukefornm@gmail.com</a>
			</div>
		</div>
	)
}

export const Contact = () => {
	return (
    <div className={"flex flex-1 flex-col items-start w-full h-full gap-12"}>
      <img
        className={"w-full h-full object-cover fixed"}
        src={Birb}
        alt={"Birb"}
      />
      <div
        className={
          "inline-flex text-white flex-col justify-start items-center p-8 mt-48 h-full w-full"
        }
      >
        <div
          className={
            "bg-white/70 backdrop-blur-sm p-4 rounded text-xl text-black flex flex-col gap-4"
          }
        >
          <MailChimp />
        </div>
      </div>
      <div className={"flex items-center justify-center w-full"}>
        <img
          className={"w-full h-full max-h-[60vh] max-w-full object-contain z-10"}
          src={LukeVolunteer}
          alt={"Volunteer"}
        />
      </div>
      <div className={"pb-8 w-full flex justify-center"}>
        <div
          className={
            "flex flex-col md:flex-row gap-5 text-center items-center z-100 h-max w-max relative justify-center bg-white m-8 px-8 py-2 rounded"
          }
        >
          <span>
            Every donation helps us fight for{" "}
            <b>
              New Mexican Universal Healthcare, Affordable Housing, Protecting
              our Environment, and more.
            </b>
          </span>
          <Donate />
        </div>
      </div>
    </div>
  );
}
