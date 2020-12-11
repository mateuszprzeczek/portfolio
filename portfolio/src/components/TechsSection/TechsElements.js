import styled from 'styled-components'
import {motion} from 'framer-motion'

export const TechsContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : 'rgb(5, 5, 5)')};

@media screen and (max-width: 768px) {
    padding: 230px 0;
}

@media (orientation: landscape) {
    padding: 0;
}
`;

export const TechsWrapper = styled.div`
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

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    text-align: center;
`;

export const TopLine = styled.p`
    color: gold;
    font-size: 32px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;

`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
    @media (orientation: landscape) { 
        margin-bottom: 0;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};

    @media (orientation: landscape) { 
        margin-bottom: 0;
    }
`;

export const Link = styled.a`
    margin: auto;
`

export const TechsRow = styled.div`
display: grid;
gap: 2%;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imgStart }) => imgStart ? ` ' col3 . ' 'col1  col4' 'col2  col5'` : ` 'col3 col2 col1'`};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => imgStart ? `'col3' 'col1' 'col4' 'col2' 'col5'` : `'col3 col3' 'col2 col2' `};
}

@media (max-width: 500px) and  (orientation: landscape) { 
    grid-template-areas: ' col3 . ' 'col1  col4' 'col2  col5';
    padding: 0;
}
`

export const Column = styled.div`
    grid-area: col1;
`;

export const Column2 = styled.div`
    grid-area: col2;
`;

export const Column3 = styled.div`
    grid-area: col3;

    @media (orientation: landscape) { 
        margin-bottom: 0;
        margin-top:80px
    }
`;

export const Column4 = styled.div`
    grid-area: col4;
`;

export const Column5 = styled.div`
    grid-area: col5;
`;

export const ImgWrap = styled(motion.div)`
    max-width: 555px;
    border-radius: 15px;

    @media (max-width: 768px) {
        max-width:400px;
    }  
`;

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
`;

export const VideoBg = styled(motion.video)`
    width: 100%;
    height: auto;
    border-radius: 15px;
    -o-object-fit: cover;
    object-fit: cover;
`
export const VideoBg2 = styled(motion.video)`
width: 100%;
height: auto;
border-radius: 15px;
    -o-object-fit: scale-down;
    object-fit: scale-down;
`
export const VideoBg3 = styled(motion.video)`
width: 100%;
height: auto;
border-radius: 15px;
    -o-object-fit: cover;
    object-fit: cover;

`