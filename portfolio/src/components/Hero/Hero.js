import React, { useState } from 'react'

import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, HeroP, ArrowFoward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement'

const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Mateusz Przęczek
                </HeroH1>
                <HeroP>Front-end Developer with Html, Css, Javascript, React js, Redux, Node js</HeroP>
                <HeroBtnWrapper>
                    <Button to="projects" onMouseEnter={onHover}
                    onMouseLeave={onHover}>
                        Zobacz moje projekty {hover ? <ArrowFoward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
