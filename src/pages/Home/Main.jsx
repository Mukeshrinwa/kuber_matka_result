import GameRates from "./GameRates";
import GamesSection from "./GamesSection";
import Home from "./Home";
import JackpotResults from "./JackpotResults";
import StarlineResults from "./StarlineResults";
import DownloadAppSection from "./DownloadAppSection";
import WhatNew from "./WhatNew";
import Blog from "../Blog/Blog";
import FAQSection from "./FAQSection";

export default function Main() {
  return (
    <>
      <Home />
      <GameRates />
      <GamesSection />
      <Blog />
      {/* <StarlineResults/> */}
      {/* <JackpotResults/> */}
      {/* <WhatNew /> */}
      <FAQSection/>
      {/* <DownloadAppSection /> */}
    </>
  );
}

/* FLOATING CIRCLE STYLE */
