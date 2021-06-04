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




export default function Fome() {


    //const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'

    //const androidUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8'


    return (
        <div
        
        style={{ 
            backgroundImage: "url("+xun+ ")",
            backgroundSize: "cover",
            height: "85vh"}}
        >
        
        
<Layout>





<p style={{position:"relative",
           color:"white",
           paddingTop:100,
           fontSize:85,
           fontFamily:'Inter'}}>
            Sell your <br/>groceries with<br/>Garden<h7 style={{color:"yellow"}}>.</h7></p>

{/*< ReactBootStrap.Button  style={{marginLeft:30,position:"relative"}} variant="success">Sign Up</ReactBootStrap.Button> */}








<ReactBootStrap.Row>

      
<ReactBootStrap.Col md={6}>
<h1 style={{textAlign:"left",
            color:"black",
            paddingTop:200,
            paddingLeft:0,
            position:"relative" }}>
            Garden creates a platform to reach a wide audience to market your groceries.
            </h1>
            
</ReactBootStrap.Col>


<ReactBootStrap.Col  >
<ReactBootStrap.Image style={{height:325, 
                             marginTop:190,
                             width:430}}
                              src={uul}
                             fluid />
      
</ReactBootStrap.Col>

</ReactBootStrap.Row>



<ReactBootStrap.Row>

<ReactBootStrap.Col  >
<ReactBootStrap.Image style={{height:325,
                             marginTop:130,
                             width:439}}
                              src={oac}
                             fluid />
</ReactBootStrap.Col>



<ReactBootStrap.Col md={6}>
<h1 style={{textAlign:"left",
            color:"black",
            paddingTop:150,
            paddingLeft:0, 
            position:"relative" }}>
            Make more sales & benefits through selling on 
            <h1 style={{color:"green"}}>Garden.</h1></h1>
            
        </ReactBootStrap.Col>


        

       </ReactBootStrap.Row>


</Layout>

<ReactBootStrap.Image src={aoal} style={{marginTop:90,
                                         borderRadius:0,
                                         position:"absolute" ,
                                         width:1530,
                                          height:310}}
                                           fluid />

<Layout>

<h1 style={{position:"relative",
            color:"white",
            marginTop:150,
            marginLeft:120}}>
            Want to just buy groceries instead of selling?
            </h1>

<p style={{position:"relative",
           color:"white",
           fontSize:19,
           marginLeft:235,
           marginTop:30}}>
           Just want to shop groceries and have them delivered to your doorstep?
           </p>

<p style={{position:"relative",
          color:"white",
          fontSize:19,
          marginLeft:275}}>
         Click the link below to direct you to the app download link.
         </p>



<FaAppStoreIos style={{position:"absolute",
                       fontSize:50,
                        marginTop:8,
                        color:"white",
                         marginLeft:420}} />

<FaGooglePlay   style={{position:"absolute",
                        fontSize:40,
                         marginTop:13,
                         color:"white",
                          marginLeft:550}}/>











{/*<MobileStoreButton
                 
                  style={{position:"absolute", marginTop:20,height:200, width:536,  paddingLeft:390}}
                  store="ios"
                  url={iOSUrl}
                  linkProps={{ title: 'iOS Store Button' }}

/>
                  

<MobileStoreButton
                  style={{position:"absolute", marginTop:13, height:200, width:710, paddingLeft:550}}
                  store="android"
                  url={androidUrl}
                  linkProps={{ title: 'android Store Button' }}
/>   */} 



<ReactBootStrap.Row>

      
<ReactBootStrap.Col md={6}>
 <h1 style={{textAlign:"left",
             color:"black",
             paddingTop:300,
             paddingLeft:0 }}>
            Meet Our Founder
            </h1>

<p style={{color:"black",
           fontSize:19,
           marginTop:30, 
           paddingLeft:99}}>
               Okafor Ekene <br/>
<p style={{fontSize:15}}>C.E.O of Garden</p></p>
</ReactBootStrap.Col>



<ReactBootStrap.Col  >
<ReactBootStrap.Image style={{height:325,
                              marginTop:190,
                              width:350, 
                              marginBottom:160}}
                               src={pase}
                              fluid />
      
</ReactBootStrap.Col>
</ReactBootStrap.Row>

</Layout>


<ReactBootStrap.Image src={put} 
style={{marginTop:50,
        borderRadius:0,
        position:"absolute" ,
        width:1530,
        height:330}}
        fluid />
   


<Layout>

<ReactBootStrap.Row>
   
<ReactBootStrap.Col style={{paddingTop:150,
                           paddingLeft:40}}>

<h2 style={{position:"relative", 
            color:"white"}}>
            Garden.
</h2>


<GrInstagram style={{color:"white", fontSize:20}} />
<GrTwitter  style={{color:"white", fontSize:20, marginLeft:18}}  />
<GrMail     style={{color:"white", fontSize:20, marginLeft:18}} />

 <p style={{color:"white", paddingTop:100}}>© 2021 Garden <br/> Lagos, Nigeria</p>
</ReactBootStrap.Col>
   
   
   <ReactBootStrap.Col style={{paddingTop:130}}>
       <h3 style={{color:"white"}}> Info</h3>
       <a style={{color:"white"}} href="/About">What to sell</a>
       <br/>
       <a style={{color:"white"}} href="/About">Meet the founder</a>
   </ReactBootStrap.Col>
   
   
   <ReactBootStrap.Col style={{paddingTop:126}}>
   <h3 style={{color:"white"}}> Contact Us</h3>
   <p style={{color:"white"}}>Phone Number: +234 0000000098  
   
   <br/>
   <a style={{color:"white"}} href='mailto:jack@semantic-ui.com'>Email Address: www.gardenapp.com</a>
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
