import {NavLink} from "react-router-dom";
import ProgressiveImage from "../components/ProgressiveBGImage/ProgressiveImage";
import {BlockText} from "../components/BlockText";
import {Footer} from "./Root";


const logos = ['red', 'blue', 'green', 'yellow'];

const proList = ["Choice", "Union", "Worker", "Increased Wages", "Rent Stabilization", "Democracy", "Ranked-Choice Voting", "Affordable Healthcare"];

export const Home = () => {
    return (
        <div className={"flex flex-1 flex-col overflow-x-hidden items-start w-full pt-[112px] lg:pt-[96px]"}>
            <div
                className={
                    "relative min-h-max flex flex-col items-center justify-between w-full border-b border-black/50 bg-gradient-to-b bg-blue-200"
                }
            >
                <div
                    className={
                        "text-black text-xl md:text-3xl p-4 lg:pl-8 pb-16 pt-8 lg:py-24 flex-1 z-10 lg:min-w-[600px] justify-center"
                    }
                >
                    <div className="text-5xl"> Luke Jungmann</div>
                    <div>Democrat + Democratic Socialist</div>
                    <div className="text-base md:text-xl">Running for:</div>
                    <b>New Mexico House of Representatives District 60 in Rio Rancho</b>
                    <ProgressiveImage
                        className={
                            "flex-1 pt-8 absolute bottom-0 right-0 h-max w-auto max-w-[600px] -scale-x-100 pointer-events-none"
                        }
                        src={"images/Luke-3214-med-res.png"}
                        placeholderSrc={"images/Luke-3214-low-res.png"}
                        alt="Luke"
                    />
                </div>
                <div className="text-4xl">Luke's Priorities:</div>
                <ul
                    className={
                        "flex flex-col justify-start gap-8 lg:gap-24 list-disc ml-8 mr-4 pt-8 text-2xl"
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
