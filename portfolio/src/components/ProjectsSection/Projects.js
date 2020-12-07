import React from 'react'

import { AboutContainer, AboutWrapper, AboutRow, Column, Column2, ImgWrap, Img } from '../About/AboutElements'

const Projects = (props) => {
    return (
        <>
        <AboutContainer lightBg={props.lightBg} id={props.id}>
            <AboutWrapper>
                <AboutRow imgStart={props.imgStart}>
                    <Column>
                    <ImgWrap>
                    <Img src={props.img2} alt={props.alt} />
                    </ImgWrap>
                    </Column>
                    <Column2>
                    <ImgWrap>
                    <Img src={props.img} alt={props.alt} />
                    </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
            </AboutContainer>   
       </>
    )
}

export default Projects
