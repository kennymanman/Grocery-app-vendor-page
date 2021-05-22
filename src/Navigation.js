import React from 'react'
import icon from "./Imaged/icon.png"
import * as ReactBootStrap from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import Layout from "./Layout"






export default function Navigation() {
return (


        
<div>
<Layout>
<ReactBootStrap.Navbar style={{marginTop:43,
                               backgroundColor:"#ffffff"}} >

<ReactBootStrap.Navbar.Brand style={{marginLeft:0}}>
<img
  alt=""
  src={icon}
  width="60"
  height="60"
  className="d-inline-block align-top"
  />
</ReactBootStrap.Navbar.Brand>





<LinkContainer to="/">
<ReactBootStrap.Nav.Link style={{fontSize:30, textDecoration:"none"}}>
<p style={{fontSize:29, marginRight:30, color:"black"}}>
Garden Vendor<h8 style={{color:"orange"}}>.</h8>
</p></ReactBootStrap.Nav.Link>
</LinkContainer>



<ReactBootStrap.Navbar.Collapse className="justify-content-left">


<LinkContainer to="/About">
<ReactBootStrap.Nav.Link style={{textDecoration:"none"}}> 
<p style={{color:"black", paddingTop:10}}>What To Sell</p></ReactBootStrap.Nav.Link>
</LinkContainer>


<LinkContainer style={{marginLeft:50}} to="/Contact">
<ReactBootStrap.Nav.Link  style={{ textDecoration:"none"}}>
 <p style={{color:"black", paddingTop:11}}>Contact Us</p>
</ReactBootStrap.Nav.Link>
</LinkContainer>

</ReactBootStrap.Navbar.Collapse>


<ReactBootStrap.Navbar.Collapse className="justify-content-end">



{/*< ReactBootStrap.Button variant="success">Sign In</ReactBootStrap.Button>{' '} */}


</ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>


</Layout>


        </div>
    )
}
