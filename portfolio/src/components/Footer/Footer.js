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
                                <FooterLink target="_blank"  href="https://questions-69538.web.app/">Questions</FooterLink>
                                <FooterLink target="_blank"  href="https://mateuszprzeczek.github.io/Makeups/">MakeUps</FooterLink>
                                <FooterLink target="_blank"  href="https://github.com/mateuszprzeczek/Paraglider-eSchop">ParaE-Shop</FooterLink>
                                <FooterLink target="_blank"  href="https://mateuszprzeczek.github.io/zlobek-fabryczka/">Żłobek Fabryczka</FooterLink>
                                <FooterLink target="_blank"  href="https://github.com/mateuszprzeczek/Movie-Theater">Movie-Theater</FooterLink>
                                <FooterLink target="_blank"  href="https://github.com/mateuszprzeczek/PizzaDeliveryApp">PizzaDeliveryApp</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Technologie</FooterLinkTitle>
                                <FooterLink target="_blank"  href="https://www.javascript.com/">JavaScript</FooterLink>
                                <FooterLink target="_blank"  href="https://pl.reactjs.org/">React.js</FooterLink>
                                <FooterLink target="_blank"  href="https://react-redux.js.org/">React Redux</FooterLink>
                                <FooterLink target="_blank"  href="https://developer.mozilla.org/pl/docs/HTML/HTML5">Html5</FooterLink>
                                <FooterLink target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">Css/Scss</FooterLink>
                                <FooterLink target="_blank"  href="https://www.oracle.com/java/">Java8</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink target="_blank"  href="https://www.facebook.com/mateusz.przeczek">Facebook</FooterLink>
                                <FooterLink target="_blank"  href="https://github.com/mateuszprzeczek">Github</FooterLink>
                                <FooterLink target="_blank"  href="https://www.linkedin.com/in/mateusz-prz%C4%99czek-b32b761b0/">Linkedin</FooterLink>
                                <FooterLink target="_blank"  href="/">Gmail</FooterLink>
                                <FooterLink target="_blank"  href="/">Twitter</FooterLink>
                                <FooterLink target="_blank"  href="/">StackOverflow</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Zobacz również</FooterLinkTitle>
                                <FooterLink target="_blank"  href="https://getbootstrap.com/">Bootstrap</FooterLink>
                                <FooterLink target="_blank"  href="https://fontawesome.com/">Font Awesome</FooterLink>
                                <FooterLink target="_blank"  href="https://animate.style/">Animate.css</FooterLink>
                                <FooterLink target="_blank"  href="https://www.codewars.com/">Code Wars</FooterLink>
                                <FooterLink target="_blank"  href="https://www.freecodecamp.org/learn/">freeCodeCamp</FooterLink>
                                <FooterLink target="_blank"  href="https://git-scm.com/">git</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo target="_blank"  href='/' >
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
