import { Link } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';
import {FormattedMessage} from "react-intl";
import { Navbar, Nav ,NavDropdown} from 'react-bootstrap';
import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { Context } from "../pages/ContextWrapper";
function Navbar1(){
  const context = useContext(Context);
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return <Navbar expand="lg">
  <Navbar.Brand href="/"><img src = "./images/1.png" width={100} height={100}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link href="/about">About Us</Nav.Link>
    <Nav.Link href="/ourprogram">Our Program</Nav.Link>
    <Nav.Link href="/ourBoardOfTrustee">Our Board Of Trustee</Nav.Link>
    <Nav.Link href="/ourTeam">Our Team</Nav.Link>
    <Nav.Link href="/our">Acheivements</Nav.Link>
    <Nav.Link href="/faq">FAQ's</Nav.Link>
    <Nav.Link href="/ourSponserForm">Our Sponser Form</Nav.Link>
    <Nav.Link href="/contactus">Contact Us</Nav.Link>
    <Nav.Link href="/makeAnAppointment">Make An Appointment</Nav.Link>
    <NavDropdown title="Parent Stuff" id="basic-nav-dropdown">
      <NavDropdown.Item href="/addtestinomials">Add Testinomials</NavDropdown.Item>
      <NavDropdown.Item href="/New_Stories">Meetings</NavDropdown.Item>
      <NavDropdown.Item href="/scholarshipForm">Scholarship</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/Meeting">News and stories</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="/donatenow"><button style={{width:'100px',height:'50px',color:'white',backgroundColor:'red'}}>Donate</button></Nav.Link>
    <Nav.Link href="#"> 
      <select style={{width:'100px',height:'50px',color:'white',backgroundColor:'red'}} value={context.locale} onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="es">اردو</option>
</select></Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
   
}
export default Navbar1;