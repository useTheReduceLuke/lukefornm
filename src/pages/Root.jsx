import {Outlet, useLocation} from "react-router-dom";
import {Header} from "../components/Header";
import {Information} from "../components/Information";
import {useEffect, useState} from "react";
import {Close} from "@mui/icons-material";


export const Footer = () => (
    <div className={"h-max w-full bg-gray-400 px-4 text-[8px] font-sans"}>
		LukeForNM.com was produced In-House.
    </div>
);

export const Popup = ({ children, inShow }) => {
    const [ show, setShow ] = useState(true);

    useEffect(() => {
        setShow(inShow);
    }, [ inShow ]);

    const toggleShow = () => setShow(!show);

    if (!show) return;

    return (
        <div
            className={
                "fixed z-[1000] w-full h-full flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            }
            onClick={toggleShow}
        >
            <span
                className={
                    "bg-white relative w-[600px] max-w-full max-h-full py-4 px-2 md:px-6 flex flex-col items-center pointer-events-auto"
                }
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    className={
                        "absolute z-10 right-2 top-2 p-2 rounded-full hover:bg-black/10 border-black/50 transition-all"
                    }
                    onClick={toggleShow}
                >
                    <Close className={"pointer-events-none"}/>
                </button>
                {children}
            </span>
        </div>
    );
};


export const Root = () => {
    const location = useLocation();

    const scrollToTop = (smooth = true) => {
        const scrollRef = document.getElementById("scrollRef");
        scrollRef?.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
    };

    useEffect(() => {
        scrollToTop(false);
    }, [ location ]);

    return (
        <>
            <span id={"scrollRef"} className={"h-0 w-full"}/>
            <Header/>
            <Outlet/>
             <Information/>
        </>
    );
};
