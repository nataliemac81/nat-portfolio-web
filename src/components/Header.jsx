import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const HeaderContainer = styled("div")`
    padding-top: 2em;
    padding-bottom: 2em;
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 3em;
    justify-content: flex-end;
    width: 100%;
    max-width: 200px;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 2.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 1.5em;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 40%;
        padding-bottom: 1.25em;
        padding-top: 0.25em;
        display: block;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 18px;
            height: 3px;
            background: transparent;
            bottom: -3px;
            right: 50%;
            margin-right: -9px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: ${colors.yellow700};
                transition: 100ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: ${colors.yellow700};
                transition: 100ms ease-in-out background;
            }
        }
    }
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <Link to="/">
                <Logo/>
            </Link>
            <HeaderLinks>
                <Link
                    activeClassName="Link--is-active"
                    to="/work">
                    Projects
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/blog">
                    Writing
                </Link>
                <AnchorLink
                    activeClassName="Link--is-active"
                    to='/#about'>
                    About
                </AnchorLink>
                <Link
                    activeClassName="Link--is-active"
                    to="/contact">
                    Contact
                </Link>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;