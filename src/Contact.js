import React from 'react'
import Layout from "./Layout" 
import * as ReactBootStrap from "react-bootstrap"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import {GrPhone} from "react-icons/gr"
import {LinkContainer} from 'react-router-bootstrap'



export default function Contact() {
return (

<div>

<div className="contactdiv">


<Layout>
<ReactBootStrap.Row className="contactrow">

<ReactBootStrap.Col>
<h4 className="contactheader" >Contact<br/> Us</h4>

<h6 className="contactsubtitle">Email or visit us<br/>at our location,<br/>
we would love to hear from you.</h6>



</ReactBootStrap.Col>


<ReactBootStrap.Col>
<h4 className="addresstext">Lagos, Nigeria</h4>
<p>92, Lanre Awolokun Gbagada Phase 2<br/>Lagos, Nigeria.</p>

<GrPhone className="finalfix"  />  <h7> Phone Number: +234 0000000098 </h7><br/>
<GrMail  className="finalfix"  /> <a  className="finalfix"  href='mailto:jack@semantic-ui.com'> Email Address: gardenapp@gmail.com</a>

</ReactBootStrap.Col>

</ReactBootStrap.Row>
</Layout>
</div>





<div className="bottomdiv">


  <Layout>

<ReactBootStrap.Row className="footerrow">

<ReactBootStrap.Col>
<h3 className="footertext">Garden.</h3>
<GrInstagram className="footericon" />
<GrTwitter   className="footericons"  />
<GrMail  className="footericons"  />

<p className="footertexter">© 2021 Garden<br/>Lagos, Nigeria</p>


</ReactBootStrap.Col>

<ReactBootStrap.Col>
<h3 className="footertext">Info</h3>


<LinkContainer to="/About">
<p className="footertext">What to sell</p>
</LinkContainer>



<p className="footertext">Go to app download page</p>


</ReactBootStrap.Col>


<ReactBootStrap.Col>
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