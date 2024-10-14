import {useState} from "react";
import MailChimp from "./MailChimp";
import {Popup} from "../pages/Root";

export const Support = () => {
    const [ show, setShow ] = useState(true);

    const toggleShow = () => setShow(!show);

    const [ showVolunteer, setShowVolunteer ] = useState(false);

    const toggleShowVolunteer = () => setShowVolunteer(!showVolunteer);

    return (
        <Popup inShow={show}>
            <img
                className={"w-[480px] max-w-full px-4 md:px-12 border-b pb-2"}
                src={"/FinalLogo.png"}
            />
            {showVolunteer ? (
                <MailChimp backAction={toggleShowVolunteer}/>
            ) : (
                <>
                    <span className={"flex flex-col w-full items-center px-4 gap-2"}>
                        <p>
              Luke is working diligently to ensure New Mexico{" "}
                            <b>preserves Abortion Rights</b>, <b>protects our Environment</b>,
              and <b>implements Universal Healthcare</b>.
                        </p>
                        <p>To help support, you can</p>
                        <span
                            className={
                                "flex flex-col md:flex-row items-center justify-center w-full text-xl gap-2"
                            }
                        >
                            <a
                                href="https://secure.actblue.com/donate/luke-for-nm"
                                target="_blank"
                                className={
                                    "font-bold w-max text-white bg-[#00a9e0] shadow-sm hover:shadow-md hover:shadow-black/40 shadow-black/30 flex gap-1 items-center mx-1.5 py-1.5 px-4 rounded transition"
                                } rel="noreferrer"
                            >
                Donate on ActBlue
                            </a>
              or
                            <button
                                onClick={toggleShowVolunteer}
                                className={
                                    "font-bold w-max shadow-sm hover:shadow-md hover:shadow-black/40 shadow-black/30 hover:border-black text-black/80 hover:text-black flex gap-1 items-center mx-1.5 py-1.5 px-4 rounded transition"
                                }
                            >
                Sign up to Volunteer
                            </button>
                        </span>
                    </span>
                </>
            )}
        </Popup>
    );
};
