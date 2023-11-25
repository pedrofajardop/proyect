import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #0e2b53;
    height: 50px;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.4rem calc((100vw - 1000px) / 2);
    z-index: 12;
    /* Third Nav */
    /* justify-content: flex-start; */
    border-radius: 0px;
`;
 
export const NavLink = styled(Link)`
    color: #f08080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 2rem;
        cursor: pointer;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
    font-size: 1.2em;

`;
 
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    border-radius: 25px;

    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }

`;
 
export const NavBtnLink = styled(Link)`
    border-radius: 25px;
    background: #f43080;
    padding: 9px 20px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 100px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff00;
        color: #808080;
    }
    font-size: 1.2em;
`;