import mainImg from '../../images/about.png';
import reactImg from '../../images/react.svg'
import htmlImg from '../../images/html.svg'

export const AboutData = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About me',
    headline: 'Mateusz Przęczek',
    description: 'Hi, if you are looking for someone with enthusiasm for work, using the latest technology, then I look forward to hearing from you.',
    buttonLabel: 'Utilities',
    fontBig: true,
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
    topLine: 'Projects',
    headline: 'Mateusz Przęczek',
    description: 'Hi, if you are looking for someone with enthusiasm for work, using the latest technology, then I look forward to hearing from you.',
    buttonLabel: 'Utilities',
    
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
    topLine: 'Hi, if you are looking for someone with enthusiasm for work, using the latest technology, then I look forward to hearing from you.',
    headline: 'Mateusz Przęczek',
    description: ['ES6',  'Html5','Bootstrap','React-Router','styled-components','React Redux',   'JavaScript', 'React.js', 'RWD', 'Css3'],
    buttonLabel: 'Utilities',
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