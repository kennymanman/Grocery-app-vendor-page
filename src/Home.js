import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import {LinkContainer} from 'react-router-bootstrap'
import save from "./Imaged/save.jpg"




export default function Home() {
return (

<div>




<div className="homediv" >

<ReactBootStrap.Image 
  alt="loading"
  src={save}
  className="largestimage"
/>

<Layout>

<ReactBootStrap.Row className="toprow">

<ReactBootStrap.Col xs={7}>

<h2 className="sellyourtext">
Sell Your<br/>
Groceries With<br/>
Garden<h8 className="selldot">.</h8>
</h2>


</ReactBootStrap.Col>
</ReactBootStrap.Row>
</Layout>

</div>

<h5 className="aimstatement">  
Sell your groceries,<br/>
We get customers for you,<br/>
We deliver for you.

</h5>

<div className="centerdiv">
<LinkContainer  to="/Form">
<ReactBootStrap.Button size={"lg"}
variant="success">
Sign Up
</ReactBootStrap.Button>
</LinkContainer>
</div>


<div className="percentagediv" >
<h4 className="percentagetext">
  We only take <h8 style={{color:"yellow"}}>15% </h8>of each sale.<br/> Dont worry about getting customers or delivery.
</h4>

</div>



<div className="bottomdiv">

<Layout>

<ReactBootStrap.Row className="footerrow">

<ReactBootStrap.Col >
<h3 className="footertext">Garden.</h3>
<GrInstagram className="footericon" />
<GrTwitter   className="footericons"  />
<GrMail  className="footericons"  />

<p className="footertexter">© 2021 Garden<br/>Lagos, Nigeria</p>


</ReactBootStrap.Col>

<ReactBootStrap.Col >
<h3 className="footertext">Info</h3>

<LinkContainer to="/About">
<p className="footertext">What to sell</p>
</LinkContainer>

<p className="footertext"><a style={{color:"white"}} href="http://www.gardenstoreapp.com" target= "blank">Go to app website</a></p>


</ReactBootStrap.Col>


<ReactBootStrap.Col >
<h3 className="footertext">Contact Us</h3>

<p className="footertext">Phone Number: +234 0000000098</p>
<a className="footertext" href='mailto:gardenstoreapp@gmail.com'>Email Address: gardenstoreapp@gmail.com</a>
<p className="footertext">Address: 92, Lanre Awolokun Gbagada Phase 2<br/>Lagos, Nigeria.</p>



</ReactBootStrap.Col>




</ReactBootStrap.Row>


</Layout>
</div>


</div>

    )
}