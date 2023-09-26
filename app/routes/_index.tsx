// import { Grid, GridItem } from "@chakra-ui/react";
// import Footer from "~/components/FooterComp";
// import ContComp from "~/components/ContComp";
// import DescComp from "~/components/DescComp";
// import HeaderComp from "~/components/HeaderComp";
// import PicComp from "~/components/PicComp";
import { Box } from "@chakra-ui/react";
import type { V2_MetaFunction } from "@remix-run/node";
//import { root } from "postcss";
import React, { useEffect } from "react";
import Faq from "~/components/marketing/Faq";
import Hero from "~/components/marketing/Hero";
import Reasons from "~/components/marketing/Reasons";
import LastCall from "~/components/marketing/lastCall";
import OurProcessMini from "~/components/marketing/processMini";
import Reviews from "~/components/marketing/reviews";
import Subscribe from "~/components/marketing/subscribe";
import LSection from "~/components/section/lsection";
import RSection from "~/components/section/rsection";

export const meta: V2_MetaFunction = () => [{ title: "Fabiel" }];


export default function Index() {
  
  const rootRef = React.useRef(null);
  

  useEffect(() => {
    // You can also assign a DOM element to the ref here, e.g., using document.getElementById("root")
    // rootRef.current = document.getElementById("root");
    // Alternatively, you can assign it to some other DOM element

    // Ensure that rootElement is always up to date with the ref's current value
   
  }, []);

  return (
    <Box id="root" ref={rootRef}>
      <Hero></Hero>
      <OurProcessMini></OurProcessMini>
      <LSection></LSection>
      <Subscribe></Subscribe>
      <RSection></RSection>
    
    
      <Reasons></Reasons>
      <LastCall></LastCall>
      <Reviews></Reviews>
      <Faq></Faq>
      </Box>
  );
}
