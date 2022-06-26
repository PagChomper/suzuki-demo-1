import React from "react"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Architect from "./components/Architect/Architect"
import BeforeAfter from "./components/BeforeAfter/BeforeAfter"
import Information from "./components/Information/Information"

import CTA from "./components/CTA/CTA"



export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Architect />
            <CTA />
            <BeforeAfter />
            <Information />
        </>
    )
}