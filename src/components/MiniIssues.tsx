import Solar from "../assets/solar-md.jpg";
import Apartments from "../assets/apartments-md.jpg";
import Rust from "../assets/rust-md.jpg";
import Voting from "../assets/voting.jpg";
import {FloatingList} from "../components/FloatingBar";
import * as React from "react";
import {NavLink} from "react-router-dom";

const issuesText = [
    {
        header:   "Healthcare",
        key:      "healthcare",
        imageSrc: Rust,
        text:     (<>
            Making New Mexico the first state in the country to
            have <b>Universal Healthcare</b>
            <div className="w-full flex justify-end">
                <NavLink
                    className={
                        "border-b-2 pb-1 border-b-white/10 hover:border-b-blue-800 transition-colors max-w-max text-xl text-sky-800 hover:text-blue-800"
                    }
                    to={"/issues"}
                >
                    Read More
                </NavLink>
            </div>
        </>),
    },
    {
        header:   "Affordable Housing",
        key:      "housing",
        imageSrc: Apartments,
        text:     (
            <>
                Lowering the cost of living by focusing on one of the largest costs for most New Mexicans:
                the <b>Cost of Housing</b>
                <div className="w-full flex justify-end">
                    <NavLink
                        className={
                            "border-b-2 pb-1 border-b-white/10 hover:border-b-blue-800 transition-colors max-w-max text-xl text-sky-800 hover:text-blue-800"
                        }
                        to={"/issues"}
                    >
                        Read More
                    </NavLink>
                </div>
            </>
        ),
    },
    {
        header:   "Environment",
        key:      "environment",
        imageSrc: Solar,
        text:     (
            <>Using our Sovereign Wealth Fund to fund <b>Renewable Energy Initiatives</b>,
                protect our wildlife and environment, and make New Mexico carbon-neutral
                <div className="w-full flex justify-end">
                    <NavLink
                        className={
                            "border-b-2 text-end w-full pb-1 border-b-white/10 hover:border-b-blue-800 transition-colors max-w-max text-xl text-sky-800 hover:text-blue-800"
                        }
                        to={"/issues"}
                    >
                        Read More
                    </NavLink>
                </div>
            </>
        ),
    },
    {
        header:   "",
        key:      "More",
        imageSrc: Voting,
        text: (
            <NavLink
                className={
                    "border-b-2 pb-2 border-b-white/50 hover:border-b-blue-400 transition-colors max-w-max text-2xl text-white/80 hover:text-blue-400"
                }
                to={"/issues"}
            >
                And many more!
            </NavLink>)
    },
];

const ListWithDepth = ({ textToIterate }: { textToIterate: React.ReactNode }) =>
    (
        <span className={"max-w-[600px] list-disc inline-block list-outside flex-col gap-2 min-h-max"} role="list">
            {
                (Array.isArray(textToIterate)) ?
                    textToIterate?.map((textOrArr, ind) =>
                        (typeof textOrArr === "string" ?
                            <p key={`text-${ ind }`} className={"text-sm md:text-lg py-2"}>{textOrArr}</p> :
                            <ListWithDepth textToIterate={textOrArr}/>),
                    )
                    :
                    (textToIterate)
            }
        </span>
    );


export const MiniIssues = () => {

    return (
        <>
            {
                issuesText.map((issue, ind) => {
                    return (<Issue issue={issue} ind={ind} key={issue.key}/>);
                },
                )
            }
        </>
    );
};

type IssueType = { header: string, text?: string | React.ReactNode, imageSrc: string, label?: string };

const Issue = ({ issue, ind }: { issue: IssueType, ind: number }) => {
    const { header, text, imageSrc } = issue;
    return (
        <div style={{backgroundImage: `url(${imageSrc})`}} className={"relative w-full h-[50vh] bg-cover bg-fixed bg-center bg-no-repeat"}>
            <div id={`scroll-${ ind }`}></div>
            <div
                className={"bg-gradient-to-b from-black/80 to-black/95 text-white flex flex-col justify-center items-center px-8  py-8 min-h-max h-[50vh] w-full z-10"}>
                <p className={"text-3xl md:text-5xl"}>{ind <= 2 && <b className={ind === 0 ? "text-4xl md:text-6xl" : ""}>{ind + 1}.</b>} {header}</p>
                <ListWithDepth textToIterate={text}/>
            </div>
        </div>
    );
};
