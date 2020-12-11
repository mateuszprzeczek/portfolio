import React from 'react'

import { FooterContainer, FooterWrapper, FooterLinksWrapper, FooterLinksContainer, FooterLink, FooterLinksItems, FooterLinkTitle, SocialMedia, SocialMediaWrapper, SocialIcons, SocialLogo, SocialIconLink, WebsiteRights } from './FooterElements'
import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Moje projekty</FooterLinkTitle>
                                <FooterLink to="https://questions-69538.web.app/">Questions</FooterLink>
                                <FooterLink to="https://mateuszprzeczek.github.io/Makeups/">MakeUps</FooterLink>
                                <FooterLink to="https://github.com/mateuszprzeczek/Paraglider-eSchop">ParaE-Shop</FooterLink>
                                <FooterLink to="https://mateuszprzeczek.github.io/zlobek-fabryczka/">Żłobek Fabryczka</FooterLink>
                                <FooterLink to="https://github.com/mateuszprzeczek/Movie-Theater">Movie-Theater</FooterLink>
                                <FooterLink to="https://github.com/mateuszprzeczek/PizzaDeliveryApp">PizzaDeliveryApp</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Technologie</FooterLinkTitle>
                                <FooterLink to="https://www.javascript.com/">JavaScript</FooterLink>
                                <FooterLink to="https://pl.reactjs.org/">React.js</FooterLink>
                                <FooterLink to="https://react-redux.js.org/">React Redux</FooterLink>
                                <FooterLink to="https://developer.mozilla.org/pl/docs/HTML/HTML5">Html5</FooterLink>
                                <FooterLink to="https://developer.mozilla.org/en-US/docs/Web/CSS">Css/Scss</FooterLink>
                                <FooterLink to="https://www.oracle.com/java/">Java8</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="https://www.facebook.com/mateusz.przeczek">Facebook</FooterLink>
                                <FooterLink to="https://github.com/mateuszprzeczek">Github</FooterLink>
                                <FooterLink to="https://www.linkedin.com/in/mateusz-prz%C4%99czek-b32b761b0/">Linkedin</FooterLink>
                                <FooterLink to="/">Gmail</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                                <FooterLink to="/">StackOverflow</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Zobacz również</FooterLinkTitle>
                                <FooterLink to="https://getbootstrap.com/">Bootstrap</FooterLink>
                                <FooterLink to="https://fontawesome.com/">Font Awesome</FooterLink>
                                <FooterLink to="https://animate.style/">Animate.css</FooterLink>
                                <FooterLink to="https://www.codewars.com/">Code Wars</FooterLink>
                                <FooterLink to="https://www.freecodecamp.org/learn/">freeCodeCamp</FooterLink>
                                <FooterLink to="https://git-scm.com/">git</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to='/' >
                            Portfolio
                        </SocialLogo>
                        <WebsiteRights>Portfolio {new Date().getFullYear()} </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com/mateusz.przeczek' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/mateusz-prz%C4%99czek-b32b761b0/' target="_blank" aria-label="Linkedin">
                                <FaLinkedinIn />
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/mateuszprzeczek' target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
