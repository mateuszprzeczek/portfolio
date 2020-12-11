import React, { useState } from 'react'

import Video from '../../videos/video3.mp4'
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
                <HeroH1
                initial={{ opacity: 0 , fontSize: '38px'}}
                animate={{opacity: 1, fontSize: '48px'}}
                transition={{duration: 2}}
                >Mateusz Przęczek
                </HeroH1>
                <HeroP
                initial={{ opacity: 0 , marginTop: '-200px'}}
                animate={{opacity: 1 , marginTop: '24px'}}
                transition={{duration: 4}}
                >Front-end Developer with Html, Css, Javascript, React js, Redux, Node js</HeroP>
                <HeroBtnWrapper
                initial={{ opacity: 0 }}
                animate={{opacity: 1 }}
                transition={{duration: 10}}
                >
                    <Button to="projects" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>
                        Zobacz moje projekty {hover ? <ArrowFoward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
