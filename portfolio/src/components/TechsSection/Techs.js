import React from 'react'

import { TechsContainer, TechsWrapper, TechsRow, Column, Column2, ImgWrap, VideoBg, VideoBg2, VideoBg3, TextWrapper, TopLine, Column3, Column4, Column5, Link } from './TechsElements'
import olaVideo from '../../videos/olaM.mp4'
import maniekVideo from '../../videos/paragliding.mp4'
import questions from '../../videos/questions2.mp4'
import zlobek from '../../videos/zlobek.mp4'

const Techs = (props) => {
    return (
        <>
        <TechsContainer lightBg={props.lightBg} id={props.id}>
            <TechsWrapper>
                <TechsRow imgStart={props.imgStart}>
                    <Column3>
                    <TextWrapper>
                        <TopLine>{props.topLine}</TopLine>
                    </TextWrapper>
                    </Column3>
                    <Column4>
                    <ImgWrap>
                    <Link href="https://questions-69538.web.app/">
                    <VideoBg3 autoPlay loop muted src={questions} type='video/mp4' />
                    </Link>
                    </ImgWrap>
                    </Column4>
                    <Column>
                    <ImgWrap>
                    <Link href="https://mateuszprzeczek.github.io/Makeups/">
                    <VideoBg autoPlay loop muted src={olaVideo} type='video/mp4' media="(max-width:480px)" />
                    </Link>
                    </ImgWrap>
                    </Column>
                    <Column2>
                    <ImgWrap>
                    <Link href="https://github.com/mateuszprzeczek/Paraglider-eSchop">
                    <VideoBg2 autoPlay loop muted src={maniekVideo} type='video/mp4' />
                    </Link>
                    </ImgWrap>
                    </Column2>
                    <Column5>
                    <ImgWrap>
                    <Link href="https://mateuszprzeczek.github.io/zlobek-fabryczka/">
                    <VideoBg2 autoPlay loop muted src={zlobek} type='video/mp4' />
                    </Link>
                    </ImgWrap>
                    </Column5>
                </TechsRow>
            </TechsWrapper>
            </TechsContainer>   
       </>
    )
}

export default Techs
