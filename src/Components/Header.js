import React from 'react';
import { Container } from 'react-bootstrap';
import {Navbar ,Nav}from 'react-bootstrap';
import {BiMoon} from "react-icons/bi"
import {IoIosMoon} from "react-icons/io"
import { ThemeContext } from '../utility/theme_context';

function Header() {

  const handleClick = ()=>{
    window.scrollTo(0,0)
  }
  const {theme,setTheme} = React.useContext(ThemeContext)
  const handleModeChange = ()=>{
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <Navbar expand="lg" onClick={handleClick}>
      <Container >
        <Nav>
          <h3>Where in the World ? </h3>
        </Nav>
        <Nav onClick={handleModeChange}>
          <h5 className="darkmode-btn"  >{theme === "dark" ? <IoIosMoon/> : <BiMoon/>} Dark Mode</h5>
        </Nav>
        </Container>
    </Navbar>
  );
}

export default Header;