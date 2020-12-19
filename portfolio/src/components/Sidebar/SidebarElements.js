import styled from 'styled-components/macro'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

    @media (min-width: 768px) {
        opacity: 0;
        top: -100%;
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    right: 0;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 20px);
    text-align: center;
    margin-left: -40px;

    @media screen and (max-width: 792px) {
        grid-template-rows: repeat(6, 12px);
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 'col1' 'col2' 'col3' 'col4';
    }

    @media (orientation: landscape) { 
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 'col1 col2' 'col3 col4';
    }
`

export const SidebarLink = styled(LinkS)`
    grid-area: col1;
    display: flex;
    alignItems: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    margin-bottom: 40px;

    &:hover {
        color: gold;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarLink2 = styled(LinkS)`
    grid-area: col2;
    display: flex;
    alignItems: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    

    &:hover {
        color: gold;
        transition: 0.2s ease-in-out;
    }
`
export const SidebarLink3 = styled(LinkS)`
    grid-area: col3;
    display: flex;
    alignItems: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    margin-bottom: 40px;

    &:hover {
        color: gold;
        transition: 0.2s ease-in-out;
    }
`
export const SidebarLink4 = styled(LinkS)`
    grid-area: col4;
    display: flex;
    alignItems: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    margin-bottom: 40px;
    &:hover {
        color: gold;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const GithubLink = styled.a`
    border-radius: 50px;
    background: white;
    white-space: nowrap;
    padding: 19px 24px;
    margin-right: 20px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #fff;
        color: gold;
    }
`
export const LinkedinLink = styled.a`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 16px 24px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: gold;
        color: white;
    }
`