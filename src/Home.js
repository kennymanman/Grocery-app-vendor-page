import React from 'react'
import xun from "./Imaged/xun.png"
import uul from "./Imaged/uul.jpg"
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
import pase from "./Imaged/pase.jpg"
import put from "./Imaged/put.png"
import aoal from "./Imaged/aoal.png"
import oac from "./Imaged/oac.jpg"
//import MobileStoreButton from 'react-mobile-store-button'
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import { FaAppStoreIos } from "react-icons/fa"
import { FaGooglePlay } from "react-icons/fa"
import vapa from "./Imaged/vapa.jpg"
import {GiAvocado} from "react-icons/gi";
import brag from "./Imaged/brag.jpg"
import {LinkContainer} from 'react-router-bootstrap'
import far from "./Imaged/far.jpg"
import sago from "./Imaged/sago.jpg"
import xotii from "./Imaged/xotii.jpg"


export default function Home() {
    return (
        <div>




  <div style={{height:721, backgroundColor:"#f6e4df", marginBottom:20}}>

  <Layout>

      <ReactBootStrap.Row className="toprow">

<ReactBootStrap.Col xs={7}>
    {/*<h3 className="topgardentext" >Garden<h8 className="topdot">.</h8></h3>*/}

    <h2 className="sellyourtext">
        Sell Your<br/>
        Groceries With<br/>
        Garden<h8 className="selldot">.</h8>
    </h2>


</ReactBootStrap.Col>

<ReactBootStrap.Col xs={5}>

<img alt="I'm loading"
className="topimage"
fluid src={xotii} />


</ReactBootStrap.Col>



</ReactBootStrap.Row>
</Layout>

</div>








<h5 className="aimstatement">  
Sell your groceries,<br/>
We get customers for you,<br/>
We deliver for you.

 </h5>

<div style={{textAlign:"center", marginBottom:40}}>
 <ReactBootStrap.Button size={"lg"}  variant="success">Sign Up</ReactBootStrap.Button>
 </div>

 <div style={{backgroundColor: "#2a6049", height:450, margin:20}} >
<h4 className="percentagetext">We only take 15% of each sale.<br/> Dont worry about getting customers or delivery.</h4>

</div>





<div style={{height:300,backgroundColor: "black"}}>

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
<a className="footertext" href='mailto:jack@semantic-ui.com'>Email Address: www.gardenapp@gmail.com</a>
<p className="footertext">Address: 92, Lanre Awolokun Gbagada Phase 2<br/>Lagos, Nigeria.</p>



</ReactBootStrap.Col>




</ReactBootStrap.Row>


  </Layout>
</div>


</div>

    )
}