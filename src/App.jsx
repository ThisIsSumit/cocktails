import React from 'react'
import {ScrollTrigger ,SplitText} from "gsap/all";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import {Cocktails} from "./components/Cocktails.jsx";

gsap.registerPlugin(ScrollTrigger);

export const App = () => {
    return (
       <main>
           <Navbar></Navbar>
           <Hero></Hero>
           <Cocktails></Cocktails>

       </main>
    )
}
