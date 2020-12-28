import styled from 'styled-components/macro'

export const AboutContainer = styled.div`
    color: #fff;
    
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : 'rgb(5, 5, 5)')};

    @media screen and (max-width: 768px) {
        padding: 40px 0 240px 0;
    }
`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 500px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media (max-width: 900px) and (orientation: landscape) {
        height: 600px
    }
    @media (max-width: 900px) and (orientation: portrait) {
        height: 600px
    }
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? `'col3 col2 col1'` : `'col3 col3 col2' 'col1 col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col3' 'col2' 'col1'` : `'col3 col3' 'col2 col2' 'col1 col1' `};
    }
`;

export const Column = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    
    grid-area: col2;
`;

export const Column3 = styled.div`
grid-area: col3;

@media (min-width: 769px) {
        align-self: end;
        margin-bottom: -65px;
        
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom:60px;
    margin: 0 auto;
`;

export const TopLine = styled.p`
    display: block;
    
    color: gold;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 5px;
    text-transform: uppercase;
    
    filter: drop-shadow(0 0 0.2rem #000);
    text-shadow: 2px 2px 0px #010606;

    @media (min-width: 769px) {
        font-size: 42px;
        text-align: center;
    }
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
`;

export const Subtitle = styled.p`
    max-width: 320px;
    margin-bottom: 35px;
    font-size: 24px;
    line-height: 24px;
    text-align: justify;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    margin: 0 auto 35px auto;

    @media (max-width: 500px) {
        font-size: 18px
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
   

    

    @media (max-width: 500px)  {
        margin-top: 48px;
    }
`;

export const ImgWrap = styled.div`
    max-width: 400px;
    height: 100%;

    @media (max-width: 768px) and (orientation: landscape) {
        width: 60%;
        margin-left: 60px;
    }
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    object-fit: contain;
    margin-left: 0px;

    @media (max-width: 500px) {
        margin-left: 0;
    }


`;