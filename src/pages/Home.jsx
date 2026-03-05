import {NavLink} from "react-router-dom";
import ProgressiveImage from "../components/ProgressiveBGImage/ProgressiveImage";
import {BlockText} from "../components/BlockText";
import {Footer} from "./Root";
import Abq2Md from "../assets/abq-2-md.jpg";
import Abq2Sm from "../assets/abq-2-sm.jpg";


const logos = ['red', 'blue', 'green', 'yellow'];

const proList = ["Choice", "Union", "Worker", "Increased Wages", "Rent Stabilization", "Democracy", "Ranked-Choice Voting", "Affordable Healthcare"];

export const Home = () => {
    return (
        <div className={"flex flex-1 flex-col overflow-x-hidden items-start w-full pt-[112px] lg:pt-[96px]"}>
            <ProgressiveImage src={Abq2Md} placeholderSrc={Abq2Sm}>
                <div
                    className={
                        "flex flex-col items-center justify-between w-full border-b border-black/50 bg-gradient-to-b from-blue-50/60 to-blue-50 min-h-[90vh]"
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
                      "text-black text-xl md:text-3xl p-4 lg:pl-8 pb-16 lg:py-24 flex-1 z-10 lg:min-w-[600px]"
                  }
              >
                <div className="text-5xl"> Luke Jungmann</div>
                <div>Democrat + Democratic Socialist</div>
                <div className="text-base md:text-xl">Running for:</div>
                <b>New Mexico House of Representatives District 60 in Rio Rancho</b>
              </p>
              <ProgressiveImage
                  className={
                      "flex-1 h-max w-full max-w-[600px] lg:w-1/2 -scale-x-100 pointer-events-none"
                  }
                  src={"images/Luke-3214-med-res.png"}
                  placeholderSrc={"images/Luke-3214-low-res.png"}
                  alt="Luke"
              />
            </span>
                </div>
            </ProgressiveImage>
            <div
                className={
                    "relative min-h-max flex flex-col items-center pt-8 justify-between w-full border-b border-black/50 bg-gradient-to-b bg-blue-200"
                }
            >
                <div className="text-4xl">Luke's Priorities:</div>
                <ul
                    className={
                        "flex flex-col max-w-[800px] justify-start gap-8 lg:gap-12 list-disc ml-8 mr-4 pt-8 text-2xl"
                    }
                >
                    <li>Making New Mexico the first state in the country to
                        have <b>Universal Healthcare</b>
                        <div>
                            <NavLink
                                className={
                                    "border-b-2 pb-1 border-b-white/10 hover:border-b-blue-800 transition-colors max-w-max text-xl text-sky-800 hover:text-blue-800"
                                }
                                to={"/issues"}
                            >
                                Read More
                            </NavLink>
                        </div>
                    </li>
                    <li>
                        Lowering the cost of living by focusing on one of the largest costs for most New Mexicans:
                        the <b>Cost of Housing</b>
                        <div>
                            <NavLink
                                className={
                                    "border-b-2 pb-1 border-b-white/10 hover:border-b-blue-800 transition-colors max-w-max text-xl text-sky-800 hover:text-blue-800"
                                }
                                to={"/issues"}
                            >
                                Read More
                            </NavLink>
                        </div>
                    </li>
                    <li>Using our Sovereign Wealth Fund to fund <b>Renewable Energy Initiatives</b>,
                        protect our wildlife and environment, and make New Mexico carbon-neutral
                        <div>
                            <NavLink
                                className={
                                    "border-b-2 pb-1 border-b-white/10 hover:border-b-blue-800 transition-colors max-w-max text-xl text-sky-800 hover:text-blue-800"
                                }
                                to={"/issues"}
                            >
                                Read More
                            </NavLink>
                        </div>
                    </li>
                    <NavLink
                        className={
                            "border-b-2 pb-12 border-b-white/50 hover:border-b-blue-800 transition-colors max-w-max text-2xl text-sky-800 hover:text-blue-800"
                        }
                        to={"/issues"}
                    >
                        And many more!
                    </NavLink>
                </ul>
            </div>
            <Footer/>
        </div>
    );
};
