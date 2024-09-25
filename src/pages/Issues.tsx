import Solar from "../assets/solar-md.jpg";
import Apartments from "../assets/apartments-md.jpg";
import School from "../assets/school-md.jpg";
import Rust from "../assets/rust-md.jpg";
import ElVado from "../assets/el-vado-md.jpg";
import Law from "../assets/law-md.jpg";
import Foodtruck from "../assets/foodtruck-md.jpg";
import Pride from "../assets/pride-flag.jpg";
import Workers from "../assets/workers-md.jpg";
import OldTown from "../assets/oldtown-md.jpg";
import Voting from "../assets/voting.jpg";
import Veterans from "../assets/veterans.jpg";
import {FloatingList} from "../components/FloatingBar";
import * as React from "react";

const issuesText = [
    {
        header:   "Affordable Housing",
        key:      "housing",
        imageSrc: Apartments,
        text:     (
            <ul className={"text-sm md:text-lg font-light flex flex-col gap-1"}>
                <li>New Mexicans, especially those renting, are spending record amounts of their paychecks on housing.
                </li>
                <li>I will propose a scaling tax that applies to the land and property of out-of-state
                    land/property-owners.
                </li>
                <li>The change in rent a landlord can impose on a rental (not the tenant) yearly should be capped to
                    match inflation.
                </li>
                <li>Short-term home rentals such as AirBnB should be limited in density throughout the state.</li>
                <li>While we are in a housing shortage, we should consider <a className={"text-blue-400 underline"}
                    href={"https://www.strongtowns.org/journal/2018/12/12/what-does-incrementalism"}
                    target="_blank" rel="noreferrer">incremental housing</a> in areas lacking affordable housing.</li>
            </ul>
        ),
    },
    {
        header:   "Education",
        key:      "education",
        imageSrc: School,
        text:     [
            "Acquiring and retaining good teachers is essential. To do that, we must be competitive with other states in wages and working conditions.",
            "My wife is a teacher at Rio Rancho High School and I am aware of the challenges she, her fellow teachers and her students face.",
            "I'd like to increase teachers' salaries and index their salaries to inflation, in an effort to further bring teachers here.",
            "Students learn best in smaller class sizes, we should aim for 20 students per classroom",
            "Rio Rancho has an incredible school system, and I'd like to provide more state funding for electives such as cooking, arts, woodworking, programming, and more.",
        ],
    },
    {
        header:   "Environment",
        key:      "environment",
        imageSrc: Solar,
        text:     [
            "The oil and gas industry provides a significant amount of revenue to the State, but we must continue to move toward the use of more renewable energy sources.",
            "Public transit can further help reduce the number of vehicles on the road, benefiting our environment and society.",
            "Homes and businesses can be given incentives to modernize their insulation, windows, etc. to be able to further save energy.",
            "New construction can be built with state-funded solar panels and storage to further drive our energy independence.",
            "",
            "We should work to stop new projects that can damage the environment, such as deforestation, drilling, and more.",
            "Most importantly, New Mexico and the four corners must work together to preserve water - one of our most precious resources - and guarantee the future of the region.",
        ],
    },
    {
        header:   "Healthcare",
        key:      "healthcare",
        imageSrc: Rust,
        text:     [
            "If even one New Mexican is putting off a necessary surgery or appointment or going into bankruptcy because of cost, that's too many.",
            "We will make healthcare affordable or even free for all New Mexicans and cover dental, vision, and most importantly mental health.",
            "We must also attract and retain medical students, doctors, nurses, assistants, EMTS, and other healthcare professionals through staffing minimums, overtime protections, and wage increases across the board.",
            "As well, medical malpractice caps should be lowered and medicare reimbursement rates increased to make our state more competitive.",
        ],
    },
    {
        header:   "LGBTQIA+",
        key:      "lgbtqia",
        imageSrc: Pride,
        text:     [
            "New Mexico should expand its non-discrimination laws to state family leave policies and also to adoption laws, to ensure as few children are left without a home as possible.",
            "Our state curricular standards should join Colorado, Washington, and more and explicitly require LGBTQ inclusion.",
            "Private health insurance must be forbidden from discriminating and our state policies (including Medicaid) should be inclusive to LGBTQIA+ people and peoples of any gender or nationality.",
        ],
    },
    {
        header:   "Neighborhoods",
        key:      "neighborhoods",
        imageSrc: Foodtruck,
        text:     [
            "Our neighborhoods should feel more like neighborhoods, and I'd like to make sure they're all connected by safe, quality roads, proper sidewalks, and meet in communal third areas like parks.",
            "We should look at permitting restrictions for small, local businesses to setup food trucks or have locations closer to neighborhoods to limit food deserts",
            "We should build more parks and natural areas for New Mexicans and their pets to get out and relax.",
            "Implementing safe, modern road design including roundabouts and other safety measures to lower driving speeds in neighborhoods throughout the state.",
        ],
    },
    {
        header:   "Public Safety",
        key:      "safety",
        imageSrc: Law,
        text:     [
            "Crime has been steadily decreasing since the pandemic, but poverty and the flood of opioids and other drugs into our society is straining our prisons, hospitals, and people.",
            "We will work to address the epidemic of overdoses and addiction through preventative measures, including getting drugs off the streets and treatment for our addicted.",
            "Constructing more centers for treatment is essential, especially for our youth and other at-risk groups.",
            "Providing housing for all New Mexicans and implementing societal measures such as public safety can lower crime and make the jobs of our police easier.",
        ],
    },
    {
        header:   "Reproductive Rights",
        key:      "reproductive",
        imageSrc: OldTown,
        text:     [
            "Countrywide, the Right to Choose is under attack, and thankfully New Mexico has laws in place to protect that right.",
            "However, we must also enshrine that right permanently in our State's Constitution.",
            "We also must safeguard the anonymity of anyone traveling to New Mexico to get an abortion or anything else our state protects.",
        ],
    },
    {
        label:    "Small Business",
        key:      "business",
        header:   "Small Business",
        imageSrc: ElVado,
        text:     [
            "Small businesses like food trucks, local restaurants, shops, boutiques, and more are a major part of what makes New Mexico, New Mexico.",
            "I want to support our small businesses as much as possible, and I’d like to propose a forgivable loan with the purpose of supplementing wages and the record-high rent our local small businesses face.",
            "I also want to increase the number of mixed-use zones - particularly in food and shopping deserts - to allow small, local businesses to be placed closer to where people live.",
            "Passing FMLA (the paid Family & Medical Leave Act) will make small businesses more competitive in terms of benefits, and I will fight to reduce the burden on local small business as much as possible.",
        ],
    },
    {
        header:   "Veterans",
        key:      "veterans",
        imageSrc: Veterans,
        text:     [
            "Our veterans deserve the best treatment we can offer, and we should further increase funding for the VA.",
            "We must ensure that our veterans are given healthcare that includes mental health, vision, dental, and more.",
            "Disability support should match the Veteran's disability rating (there is a ballot measure for this, please vote Nov 5!).",
        ],
    },
    {
        header:   "Voting Rights",
        key:      "voting",
        imageSrc: Voting,
        text:     [
            "Voting is an inalienable right guaranteed by our constitution.",
            "As such, I will work to protect voting for all New Mexicans, especially our Native American population.",
            "I will work to open primaries to independents, expand mail-in voting, and also propose Ranked-Choice voting, so every vote truly matters.",
        ],
    },
    {
        label:    "Workforce",
        key:      "workforce",
        header:   "Our Workforce",
        imageSrc: Workers,
        text:     [
            "New Mexico should join the front of recognizing the worth of our hard-working citizens.",
            "New Mexico's median salary is just under $25/hour, which means half our citizens make less than that.",
            "Our minimum wage should be increased to make it possible for any New Mexican to live here.",
            "All workers should be provided guaranteed Paid Family and Medical Leave, and additional vacation time on top of that.",
            "Unions should be given further protections for their current or prospective members from any threats or coercion.",
        ],
    },
];

const ListWithDepth = ({ textToIterate }: { textToIterate: React.ReactNode }) =>
    (
        <span className={"max-w-[600px] list-disc inline-block list-outside flex-col gap-2"} role="list">
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


export const Issues = () => {

    return (
        <>
            {issuesText?.length && (<FloatingList scrollItems={issuesText}></FloatingList>)}
            {
                issuesText.map((issue, ind) => {
                    return (<Issue issue={issue} ind={ind} key={issue.key}/>);
                },
                )
            }
        </>
    );
};

type IssueType = { header: string, text: string | React.ReactNode, imageSrc: string, label?: string };

const Issue = ({ issue, ind }: { issue: IssueType, ind: number }) => {
    const { header, text, imageSrc } = issue;
    return (
        <div style={{backgroundImage: `url(${imageSrc})`}} className={"relative w-full h-[100vh] bg-cover bg-fixed bg-center bg-no-repeat"}>
            <div id={`scroll-${ ind }`}></div>
            <div
                className={"bg-gradient-to-b from-black/80 to-black/95 text-white flex flex-col justify-center items-start pl-[7rem] md:pl-40 pr-2  py-8 min-h-[100vh] w-full z-10"}>
                <p className={"text-3xl md:text-5xl"}>{header}</p>
                <ListWithDepth textToIterate={text}/>
            </div>
        </div>
    );
};
