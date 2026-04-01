import {NavLink} from "react-router-dom";
import ProgressiveImage from "../components/ProgressiveBGImage/ProgressiveImage";
import {BlockText} from "../components/BlockText";
import {Footer} from "./Root";
import Abq2Md from "../assets/abq-2-md.jpg";
import Abq2Sm from "../assets/abq-2-sm.jpg";
import {MiniIssues} from "../components/MiniIssues";

const logos = ['red', 'blue', 'green', 'yellow'];

const proList = ["Choice", "Union", "Worker", "Increased Wages", "Rent Stabilization", "Democracy", "Ranked-Choice Voting", "Affordable Healthcare"];

export const Home = () => {
    return (
        <div className={"flex flex-1 flex-col overflow-x-hidden items-start w-full pt-[112px] lg:pt-[96px]"}>
            <ProgressiveImage src={Abq2Md} placeholderSrc={Abq2Sm} className="w-full h-[100vh]">
                <div
                    className={
                        "flex flex-col items-center justify-between w-full bg-gradient-to-b from-blue-50/60 to-blue-50 min-h-[90vh]"
                    }
                >
                    <img
                        className={"max-w-full w-[500px] md:w-[700px] p-4"}
                        src={"/FinalLogo.png"}
                    />
                    <span
                        className={
                            "flex flex-col-reverse lg:flex-row items-end relative w-full"
                        }
                    >
                        <p
                            className={
                              "text-black text-xl md:text-4xl p-4 lg:pl-8 pb-16 lg:py-24 flex-1 z-10 lg:min-w-[600px]"
                            }
                        >
                            <div className="text-4xl md:text-6xl border-b-2 border-b-black/80"> Luke Jungmann</div>
                            <div>Democrat + Democratic Socialist</div>
                            <div className="text-base md:text-xl">Running for:</div>
                            <b>New Mexico House of Representatives District 60 in Rio Rancho</b>
                        </p>
                        <img
                        className={
                          "flex-1 h-max w-full max-w-[600px] lg:w-1/2 -scale-x-100 pointer-events-none rounded-b-full overflow-hidden"
                        }
                        src={"images/Luke-3214-med-res.png"}
                        alt="Luke"
                        />
                    </span>
                </div>
            </ProgressiveImage>
            <div
                className={
                    "relative min-h-max flex flex-col items-center pt-32 pb-16 align-bottom w-full bg-blue-50"
                }
            >
                <div className="text-5xl md:text-6xl">Luke's Priorities:</div>
            </div>
            <MiniIssues/>
            <Footer/>
        </div>
    );
};
