import React, { useState, Suspense } from 'react'

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Spinner from '../components/utility/Spinner/Spinner';
import {AboutData, ProjectsData, TechsData, ContactData} from '../components/About/Data'

const About = React.lazy(() => {
    return import("../components/About/About.js");
})

const Hero = React.lazy(() => {
    return import("../components/Hero/Hero.js");
})

const Techs = React.lazy(() => {
    return import("../components/TechsSection/Techs.js");
})
const Projects = React.lazy(() => {
    return import("../components/ProjectsSection/Projects.js");
})

const ContactForm = React.lazy(() => {
    return import("../contact/index.js");
})

const Footer = React.lazy(() => {
    return import("../components/Footer/Footer.js");
})

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>   
         <Suspense fallback={<Spinner />}>
         <Hero />
         <About { ...AboutData } />
        <Techs {...TechsData} />
         <Projects {...ProjectsData} />
         <ContactForm {...ContactData}/>
         <Footer />
         </Suspense>
        </>
    )
}

export default Home
