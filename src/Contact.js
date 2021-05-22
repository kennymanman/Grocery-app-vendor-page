import React from 'react'
import bar from "./Imaged/bar.jpg"
import Layout from "./Layout" 
import * as ReactBootStrap from "react-bootstrap"
import lut from "./Imaged/lut.png"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"


export default function Contact() {
return (



<div 
style={{ 
        backgroundImage: "url("+bar+ ")",
        backgroundSize: "cover",
        height: "95vh",}}
        >
            
<Layout>

<h1 style={{color:"white",
           paddingTop:50}}>
           Contact Us
           </h1>




<ReactBootStrap.Row>
<ReactBootStrap.Col  >
<h5 style={{color:"white",
            marginLeft:28,
            marginTop:90}}>
            <u>Stay in Touch</u>
            </h5>


<h1 style={{color:"white",
            marginTop:50}}>
    Email or visit us<br/>at our location,<br/>we would love to hear<br/>from you.
</h1>

</ReactBootStrap.Col>



<ReactBootStrap.Col style={{marginLeft:100}}  >

<h4 style={{color:"white",
            marginTop:120}}>
            Lagos, Nigeria
            </h4>

<h7 style={{color:"white"}}>
     92, Lanre Awolokun Gbagada Phase 2 <br/>Lagos, Nigeria.
</h7>
            <br/>
            <br/>
<h7 style={{color:"white"}}>Phone Number: +234 0000000098
</h7>
            <br/>
            <br/>
<a style={{color:"white"}} href='mailto:jack@semantic-ui.com'>Email Address: www.gardenapp.com</a>

</ReactBootStrap.Col>

</ReactBootStrap.Row>
     
</Layout>
<ReactBootStrap.Image src={lut} style={{marginTop:150,
                                       borderRadius:0,
                                       position:"absolute" ,
                                       width:1530,
                                       height:229}}
                                       fluid />
   




<Layout>
<ReactBootStrap.Row>
   
<ReactBootStrap.Col style={{paddingTop:180,
                           paddingLeft:40}}>

<h2 style={{position:"relative",  
           color:"black"}}>
               Garden.
</h2>


      <GrInstagram style={{color:"black", fontSize:20}} />
      <GrTwitter  style={{color:"black", fontSize:20, marginLeft:18}}  />
      <GrMail     style={{color:"black", fontSize:20, marginLeft:18}} />

<p style={{color:"black",
          paddingTop:40}}>
        © 2021 Garden <br/> Lagos, Nigeria
</p>

</ReactBootStrap.Col>
   
   
   <ReactBootStrap.Col style={{paddingTop:180}}>
       <h3 style={{color:"black"}}> Info</h3>
       <a style={{color:"black"}} href="/About">What to sell</a>
       <br/>
       <a style={{color:"black"}} href="/About">Meet the founder</a>
   </ReactBootStrap.Col>
   
   
   <ReactBootStrap.Col style={{paddingTop:186}}>
   <h3 style={{color:"black"}}> Contact Us</h3>
   <p style={{color:"black"}}>Phone Number: +234 0000000098  
   
   <br/>
   <a style={{color:"black"}} href='mailto:jack@semantic-ui.com'>Email Address: www.gardenapp.com</a>
   <br/>
   <p>Address: 92, Lanre Awolokun Gbagada phase 2<br/>Lagos, Nigeria.</p>
   <br/>
   
   </p>
   
   </ReactBootStrap.Col>
   
   
  </ReactBootStrap.Row>
   
   </Layout>




            </div>
    )
}
