import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

// data
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Nav = styled.nav`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    background: red;
`

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-75%, 50%);
        color: #fff;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavMenuLinks = styled(Link)`
    ${NavLink}
`

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">ELIXR</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((menu, index) => (
                    <NavMenuLinks to={menu.link} key={index}>
                        {menu.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true" >
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar