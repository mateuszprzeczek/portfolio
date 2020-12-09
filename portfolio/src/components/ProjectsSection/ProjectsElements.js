import styled from 'styled-components'
import {motion} from 'framer-motion'

export const ProjectsContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : 'rgb(5, 5, 5)')};

@media screen and (max-width: 768px) {
    padding: 30px 0;
}
`;

export const ProjectsWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`;

export const ProjectsRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imgStart }) => imgStart ? ` 'col4' 'col2 col3 col1'` : ` 'col4 col3 col2' 'col1 col3 col2' `};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => imgStart ? `'col4' 'col1' 'col3' 'col2'` : `'col4 col4' 'col1 col1' 'col3 col3' 'col2 col2' `};
}
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const TopLine = styled.p`
    color: gold;
    font-size: 32px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const Column = styled.div`

    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 50px;

    grid-area: col2;
`;

export const Column3 = styled.div`

    padding: 0 15px;
    grid-area: col3;
`;
export const Column4 = styled.div`

    padding: 0 15px;
    grid-area: col4;
`;

export const ImgWrap = styled(motion.div)`
    max-width: 555px;
    height: 100%;
    
`;

export const Img = styled(motion.img)`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;