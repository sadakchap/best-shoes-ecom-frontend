import React from 'react';
import { 
    StyledFooter,
    FooterContainer,
    FooterSection,
    FooterHeaderText,
    FooterPText,
    FooterSocialIcons,
    FooterLinkList,
    CopyRightContainer,
    CopyRightText
} from './FooterElements';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { BsCodeSlash  } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <FooterContainer>
                    <FooterSection className="aboutus">
                        <FooterHeaderText> About Us </FooterHeaderText>
                        <FooterPText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae quaerat 
                            veniam dolores consequatur deserunt. Dolor, nulla repellat ipsa sequi quis facilis ratione! Qui nulla 
                            ratione deserunt, assumenda quaerat eum.</FooterPText>
                        <FooterSocialIcons>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/sadakchap/"> <AiOutlineGithub /> </a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/prerna-mehra/"> <AiFillLinkedin /> </a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/prerna_mehraa/"> <AiOutlineInstagram /> </a></li>
                            <li><a href="mailto:contact@prerna.com"> <AiOutlineMail /> </a></li>
                        </FooterSocialIcons>
                    </FooterSection>

                    <FooterSection className="quicklink">
                        <FooterHeaderText>Tech Stack</FooterHeaderText>
                        <FooterLinkList>
                            <li><a target="_blank" rel="noreferrer" href="https://reactjs.org/docs/getting-started.html">React</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://nodejs.org/en/docs/">Node</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://docs.mongodb.com/manual/">MongoDB Atlas</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://expressjs.com/en/starter/installing.html">Express</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://firebase.google.com/docs/storage">Firebase Storage</a></li>
                        </FooterLinkList>
                    </FooterSection>
                    <FooterSection className="contact">
                        <FooterHeaderText>Code Info</FooterHeaderText>
                        <FooterLinkList className="info">
                            <li>
                                <span><BsCodeSlash /></span>
                                <p><a href="#!">Frontend Code - GitHub</a></p> 
                            </li>
                            <li>
                                <span><BsCodeSlash /></span>
                                <p><a href="#!">Backend Code - GitHub</a></p> 
                            </li>
                            <li>
                                <span><IoIosRocket /></span>
                                <p><a href="#!">Hosted On - Netlify  & Heroku</a></p> 
                            </li>
                        </FooterLinkList>
                    </FooterSection>
                </FooterContainer>
            </StyledFooter>
            <CopyRightContainer>
                <CopyRightText>Copyright © 2020 Prerna Mehra. All rights reserved</CopyRightText>
            </CopyRightContainer>
        </>
    )
}

export default Footer
