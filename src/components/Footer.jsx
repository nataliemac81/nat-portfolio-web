import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";
import spooch from "images/nat-icon.png"


const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 0.5em;

     &:hover {
         color: ${colors.blue900};

        .FooterSpooch {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`

const FooterSpooch = styled("img")`
    max-width: 150px;
    margin-top: 1.25em;
`

const Footer = () => (
    <FooterContainer>
        <Link to="/">
            <Logo />
        </Link>
        <FooterAuthor href="https://www.gatsbyjs.org/starters/margueriteroth/gatsby-prismic-starter-prist/">
            © 2020 — Built with Gatsby + Prist 
            <FooterSpooch className="FooterSpooch" src={spooch} width="50" height="50"/>
        </FooterAuthor>
    </FooterContainer>
)

export default Footer;
