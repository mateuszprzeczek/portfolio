import React from 'react'

import { ProjectsContainer, ProjectsWrapper, ProjectsRow, Column, Column2, ImgWrap, Img, TextWrapper, TopLine, Column3, Column4, Ul, Li } from '../ProjectsSection/ProjectsElements'

const Projects = (props) => {
    const listOfTechs = props.description.map(desc => <Li>{desc}</Li>)
    return (
        <>
        <ProjectsContainer lightBg={props.lightBg} id={props.id}>
            <ProjectsWrapper>
                <ProjectsRow imgStart={props.imgStart}>
                    <Column4>
                    <TextWrapper>
                        <TopLine>Technologie</TopLine>
                    </TextWrapper>
                    </Column4>
                    <Column>
                    <ImgWrap>
                    <Img 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2 }}
                    src={props.img2} alt={props.alt} />
                    </ImgWrap>
                    </Column>
                    <Column3>
                    <TextWrapper>
                        <Ul>{listOfTechs}</Ul>
                    </TextWrapper>
                    </Column3>
                    <Column2>
                    <ImgWrap>
                    <Img src={props.img} alt={props.alt} />
                    </ImgWrap>
                    </Column2>
                </ProjectsRow>
            </ProjectsWrapper>
            </ProjectsContainer>   
       </>
    )
}

export default Projects
