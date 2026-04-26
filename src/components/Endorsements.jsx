import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import DSALogo from "../assets/DSAlogo.png";

const endorsementList = [
  {
    img: (
      <img
        className={"w-40 lg:w-60 bg-white"}
        src={DSALogo}
        alt="Democratic Socialists of America - Albuquerque Endorsement"
      />
    ),
    link: "https://abqdsa.org/",
  },
  {
    img: (
      <img
        className={"w-40 lg:w-60 bg-white"}
        src={"/images/YDNM Logo_transparent.png"}
        alt="Young Democrats of NM Endorsement"
      />
    ),
    link: "https://www.youngdemsnm.com/",
  },
  {
    img: (
      <img
        className={"w-40 lg:w-60 bg-white"}
        src={"/images/AFTEndorsementLogo.png"}
        alt="AFT NM Endorsement"
      />
    ),
    link: "https://www.nmaft.org/",
  },
  {
    img: (
      <img
        className={"w-40 lg:w-60 bg-white"}
        src={"/images/EqualityNMEndorsement.png"}
        alt="Equality NM Endorsement"
      />
    ),
    link: "https://www.eqnm.org/",
  },
];

const Endorsement = ({ img, link }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="show"
      className={"bg-white w-[160px] h-[160px] flex items-center hover:scale-110 cursor-pointer"}
      style={{
        willChange: "transform",
        transform: isInView ? "" : "scale(0)",
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      onClick={() => window.open(link, "_blank")}
      transition={{ type: "spring", duration: 1 }}
    >
      {img}
    </motion.div>
  );
};

export default function Endorsements() {
  return (
    <motion.div
      className={
        "grid grid-flow-row-dense grid-cols-2 sm:grid-cols-4 w-full overflow-hidden items-center justify-center flex-col p-4 rounded gap-4 min-h-96 justify-items-center"
      }
    >
      {endorsementList.map((element, index) => (
        <Endorsement link={element.link} img={element.img} key={`endorsement-${index}`} />
      ))}
    </motion.div>
  );
}
