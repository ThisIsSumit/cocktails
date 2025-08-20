import React from 'react'
import {ScrollTrigger ,SplitText} from "gsap/all";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const App = () => {
    return (
        <div className='flex-center h-[100vh]'>
            <h1 className="text-3xl text-indigo-300 font-bold"> Hello my name is Sumit </h1>
        </div>
    )
}
