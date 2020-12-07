import React from 'react'

import { TechsContainer, TechsWrapper, TechsRow, Column, Column2, ImgWrap, VideoBg, VideoBg2 } from './TechsElements'
import olaVideo from '../../videos/ola.mp4'
import maniekVideo from '../../videos/maniek.mp4'

const Techs = (props) => {
    return (
        <>
        <TechsContainer lightBg={props.lightBg} id={props.id}>
            <TechsWrapper>
                <TechsRow imgStart={props.imgStart}>
                    <Column>
                    <ImgWrap>
                    <VideoBg autoPlay loop muted src={olaVideo} type='video/mp4' />
                    </ImgWrap>
                    </Column>
                    <Column2>
                    <ImgWrap>
                    <VideoBg2 autoPlay loop muted src={maniekVideo} type='video/mp4' />
                    </ImgWrap>
                    </Column2>
                </TechsRow>
            </TechsWrapper>
            </TechsContainer>   
       </>
    )
}

export default Techs
