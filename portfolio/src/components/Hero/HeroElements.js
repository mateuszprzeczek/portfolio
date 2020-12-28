import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'
import {motion} from 'framer-motion'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 860px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(5,5,5,0) 0%,
        rgba(5,5,5,1) 100%), linear-gradient(180deg, rgba(5,5,5,0) 0%, transparent 100%);
        z-index: 1;
    }
    
    @media (max-width: 768px) {
        height: 660px;
    }
    @media (max-width: 768px) and (orientation: landscape) {
        height: 400px;
    }
    
   
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled(motion.h1)`
    color: #fff;
    font-size: 22px;
    text-align: center;
    font-family: 'Quantico', sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 768px) {
        font-size: 22px; 
    }
`

export const HeroP = styled(motion.p)`
    margin-top 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    font-family: 'Quantico', sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled(motion.div)`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items:center;
    font-family: 'Quantico', sans-serif;

`

export const ArrowFoward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`