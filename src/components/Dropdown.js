import styled from "styled-components"
import { Link } from "react-router-dom"

// icons
import { FaTimes } from "react-icons/fa"

// data
import { menuData } from "../data/MenuData"

// components
import { Button } from "./Button"

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: ${({ isOpen }) => isOpen ? '0' : '-100%'};
    left: 0;
    transition: .3s all ease-in-out;
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`

const DropdownWrapper = styled.div``

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transition: .2s ease-in-out all;

    &:hover {
        color: #000d1a;
    }
`

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const Dropdown = ({ toggle, isOpen }) => {
    return (
        <DropdownContainer onClick={toggle} isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((menu, index) => (
                        <DropdownLink to={menu.link} key={index}>
                            {menu.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/contact">
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
