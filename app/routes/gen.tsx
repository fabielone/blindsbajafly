import { Outlet } from "@remix-run/react";
import Faq from "~/components/marketing/Faq";
import Reasons from "~/components/marketing/Reasons";
import LastCall from "~/components/marketing/lastCall";
import Reviews from "~/components/marketing/reviews";
import Subscribe from "~/components/marketing/subscribe";





export default function Gen(){


    return (
        <>
         <Outlet/>   
         <Subscribe></Subscribe>
        <Reasons></Reasons>
        <LastCall></LastCall>
        <Reviews></Reviews>
        <Faq></Faq>
        </>
    )

}