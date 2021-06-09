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
import Load from "./Load"




export default function Home() {
    return (
        <div>


< img  alt="loading"
  className="homebackground"
  fluid src={vapa}  />

  <Layout>

      <ReactBootStrap.Row className="toprow">

<ReactBootStrap.Col>
    {/*<h3 className="topgardentext" >Garden<h8 className="topdot">.</h8></h3>*/}

    <h2 className="sellyourtext">
        Sell Your<br/>
        Groceries With<br/>
        Garden<h8 className="selldot">.</h8>
    </h2>


</ReactBootStrap.Col>


<ReactBootStrap.Col>

<h5 className="aimstatement">The aim of Garden is creating a platform of awareness for various grocery sellers,
farm owners, food merchants in respective cities to connect to customers 
in the same city they reside in at affordable prices and rates.
Sign up today as a customer or groceries vendor and enjoy buying & selling of
groceries at affordable and beneficial rates at your convenience .
</h5>


<ReactBootStrap.Row className="signuprow">
<h6 className="aimbelow">
Sign Up now and start<br/>
making gains, begin to <br/>
enjoy garden now.
</h6>


< ReactBootStrap.Button  className="signupbutton" variant="success">Sign Up</ReactBootStrap.Button> 



</ReactBootStrap.Row>



</ReactBootStrap.Col>
</ReactBootStrap.Row>
</Layout>


{/*
  < img  alt="loading"
  className="nextbackground"
  fluid src={brag}  />

<Layout>

<h3 className="benefittext">Benefits of selling on Garden<h8 className="benefitdot">.</h8></h3>

<GiAvocado className="icon" /> <h6>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</h6>

    </Layout>

  <GiAvocado />

*/}

< img  alt="loading"
  className="footer"
  fluid src={put}  />


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

    )
}