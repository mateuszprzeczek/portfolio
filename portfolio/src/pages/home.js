import React, { useState } from 'react'
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import {AboutData, ProjectsData, TechsData, ContactData} from '../components/About/Data'
import Projects from '../components/ProjectsSection/Projects';
import Techs from '../components/TechsSection/Techs';
import ContactForm from '../contact/index';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>   
         <Hero />
         <About { ...AboutData } />
        <Techs {...TechsData} />
         <Projects {...ProjectsData} />
         <ContactForm {...ContactData}/>
         <Footer />
        </>
    )
}

export default Home
