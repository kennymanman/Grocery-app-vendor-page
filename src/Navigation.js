import React from 'react'
import icon from "./Imaged/icon.png"
import * as ReactBootStrap from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import Layout from "./Layout"






export default function Navigation() {
return (


        
<div>
<Layout>
<ReactBootStrap.Navbar expand="lg" fixed="top"  >

<LinkContainer to="/">
<ReactBootStrap.Navbar.Brand >
<img
  alt=""
  src={icon}
  className="topicon"
  
  
  />
</ReactBootStrap.Navbar.Brand>
</LinkContainer>




<LinkContainer to="/">
<ReactBootStrap.Nav.Link >
<p className="vendorhead">
Garden Vendor<h8 className="vendordot">.</h8>
</p></ReactBootStrap.Nav.Link>
</LinkContainer>


< ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />

<ReactBootStrap.Navbar.Collapse className="justify-content-center">


<LinkContainer to="/About">
<ReactBootStrap.Nav.Link > 
<p className="whathead">What To Sell</p></ReactBootStrap.Nav.Link>
</LinkContainer>


<LinkContainer  to="/Contact">
<ReactBootStrap.Nav.Link  >
 <p className="contacthead">Contact Us</p>
</ReactBootStrap.Nav.Link>
</LinkContainer>

</ReactBootStrap.Navbar.Collapse>


<ReactBootStrap.Navbar.Collapse className="justify-content-end">



< ReactBootStrap.Button variant="success">Sign In</ReactBootStrap.Button>


</ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>


</Layout>





        </div>
    )
}
