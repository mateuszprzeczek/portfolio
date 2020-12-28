import React from 'react'

import { Button } from '../ButtonElement';
import { AboutContainer, AboutWrapper, AboutRow, Column, Column2, Column3, TextWrapper, TopLine, Subtitle, BtnWrap, ImgWrap, Img } from './AboutElements'


const About = (props) => {
    return (
        <>
         <AboutContainer lightBg={props.lightBg} id={props.id}>
             <AboutWrapper>
                 <AboutRow imgStart={props.imgStart}>
                     <Column3>
                     
                     <TopLine>{props.topLine}</TopLine>
                     
                     </Column3>
                     <Column>
                        <TextWrapper>
                             
                            <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                            <BtnWrap>
                        <Button to='techs'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            fontBig={props.fontBig}
                        >{props.buttonLabel}</Button>
                             </BtnWrap>
                         </TextWrapper>
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

export default About
