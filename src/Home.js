import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
//import MobileStoreButton from 'react-mobile-store-button'
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import { FaAppStoreIos } from "react-icons/fa"
import { FaGooglePlay } from "react-icons/fa"
import {LinkContainer} from 'react-router-bootstrap'
import sago from "./Imaged/sago.jpg"
import xotii from "./Imaged/xotii.jpg"
import move from "./Imaged/move.jpg"
import save from "./Imaged/save.jpg"
import xave from "./Imaged/xave.jpg"

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
 <ReactBootStrap.Button size={"lg"}  variant="success">Sign Up</ReactBootStrap.Button>
 </div>

 <div className="percentagediv" >
<h4 className="percentagetext">We only take <h8 style={{color:"yellow"}}>15% </h8>of each sale.<br/> Dont worry about getting customers or delivery.</h4>

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

<p className="footertext">Go to app download page</p>


</ReactBootStrap.Col>


<ReactBootStrap.Col >
<h3 className="footertext">Contact Us</h3>

<p className="footertext">Phone Number: +234 0000000098</p>
<a className="footertext" href='mailto:jack@semantic-ui.com'>Email Address: gardenapp@gmail.com</a>
<p className="footertext">Address: 92, Lanre Awolokun Gbagada Phase 2<br/>Lagos, Nigeria.</p>



</ReactBootStrap.Col>




</ReactBootStrap.Row>


  </Layout>
</div>


</div>

    )
}