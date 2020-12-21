import mainImg from '../../images/about.webp';
import reactImg from '../../images/react.svg'
import htmlImg from '../../images/html.svg'

export const AboutData = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'O mnie',
    headline: 'Mateusz Przęczek',
    description: 'Web Developer, programista Java, samouk. Na codzień freelancer, który tworzy responsywne strony internetowe wykorzystując framework React.',
    buttonLabel: 'Technologie',
    imgStart: false,
    img: mainImg,
    alt: 'Mateusz Przęczek',
    dark: true,
    primary: true,
    darkText: false
}

export const TechsData = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Projekty',
    headline: 'Mateusz Przęczek',
    description: 'Web Developer, programista Java, samouk. Na codzień freelancer, który tworzy responsywne strony internetowe wykorzystując framework React.',
    buttonLabel: 'Technologie',
    imgStart: true,
    alt: 'Mateusz Przęczek',
    dark: true,
    primary: true,
    darkText: true
}

export const ProjectsData = {
    id: 'techs',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Web Developer, programista Java, samouk. Na codzień freelancer, który tworzy responsywne strony internetowe wykorzystując framework React.',
    headline: 'Mateusz Przęczek',
    description: ['Css3', 'Html5', 'RWD', 'JavaScript', 'ES5', 'React.js','React-Router', 'Redux', 'Bootstrap', 'styled-components'],
    buttonLabel: 'Technologie',
    imgStart: false,
    img: reactImg,
    img2:  htmlImg,
    alt: 'Mateusz Przęczek',
    dark: true,
    primary: true,
    darkText: false
}

export const ContactData = {
    id: 'contact'
}