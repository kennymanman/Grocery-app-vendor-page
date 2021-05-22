import React from 'react'
import jename from "./Imaged/jename.jpg"
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import veg from "./Imaged/veg.jpg"
import lut from "./Imaged/lut.png"
import fruit from "./Imaged/fruit.jpg"
import meat from "./Imaged/meat.jpg"
import bread from "./Imaged/bread.jpg"
import eggs from "./Imaged/eggs.jpg"
import cereal from "./Imaged/cereal.jpg"
import drinks from "./Imaged/drinks.jpg"
import al from "./Imaged/al.jpg"
import snack from "./Imaged/snack.jpg"
import spices from "./Imaged/spices.jpg"
import pantry from "./Imaged/pantry.jpg"
import house from "./Imaged/house.jpg"
import med from "./Imaged/med.jpg"
import kid from "./Imaged/kid.jpg"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"





export default function What() {
return (


< div   
style={{ 
    backgroundImage: "url("+jename+ ")",
    backgroundSize: "cover",
    height: "250vh",
    }} >
            
        
<Layout>


<h1 style={{color:"white",
            paddingTop:70}}>
            What to Sell on Garden<h8 style={{color:"yellow"}}>.</h8>
</h1>

<p style={{color:"white"}}>
   Are you a groceries vendor, farm owner, fruits merchant, Instagram groceries vendor
   trying to create awareness for your grocery items and reach more customers while increasing
   your profit and benefits? , Garden is the right platform for you.  Garden is a new-generation
   grocery shopping platform that connects to thousands of customers in your city/state. Garden
   creates the awareness and provides delivery for you.
</p>



<ReactBootStrap.Row style={{marginTop:100}}> 



                                            
<ReactBootStrap.Col md={2}>                                                                 {/*Fruits*/}

<ReactBootStrap.Image src={fruit} style={{width:100,
                                         height:100,
                                         borderRadius:20}}
                                         fluid />

</ReactBootStrap.Col>

<ReactBootStrap.Col>
<h2 style={{color:"white"}}>Fruits</h2>
</ReactBootStrap.Col>




<ReactBootStrap.Col md={2}>                                                                  {/*Vegs*/}

<ReactBootStrap.Image src={veg} style={{width:100,
                                        height:100,
                                        borderRadius:20}}
                                        fluid />

</ReactBootStrap.Col>


<ReactBootStrap.Col>

    <h2 style={{color:"white"}}>Vegetables</h2>
</ReactBootStrap.Col>
</ReactBootStrap.Row>






<ReactBootStrap.Row style={{marginTop:90}}>                                     {/*Meat*/}

<ReactBootStrap.Col md={2}>

<ReactBootStrap.Image src={meat} style={{width:100,
                                         height:100,
                                         borderRadius:20}} 
                                          fluid />

</ReactBootStrap.Col>

<ReactBootStrap.Col>
<h2 style={{color:"white"}}>Meat, Seafood & Protein</h2>
</ReactBootStrap.Col>







<ReactBootStrap.Col md={2}>

<ReactBootStrap.Image src={bread} style={{width:100,
                                          height:100,
                                           borderRadius:20}} 
                                            fluid />

</ReactBootStrap.Col>

<ReactBootStrap.Col>
<h2 style={{color:"white"}}>Bread & Bakery</h2>
</ReactBootStrap.Col>

</ReactBootStrap.Row>




            




<ReactBootStrap.Row style={{marginTop:90}}>    
<ReactBootStrap.Col md={2}>

<ReactBootStrap.Image src={eggs} style={{width:100,
                                         height:100,
                                         borderRadius:20}}
                                           fluid />

</ReactBootStrap.Col>



<ReactBootStrap.Col>

<h2 style={{color:"white"}}>Dairy & Eggs</h2>
</ReactBootStrap.Col>







<ReactBootStrap.Col md={2}>

<ReactBootStrap.Image src={cereal} style={{width:100,
                                           height:100,
                                            borderRadius:20}}  fluid />

</ReactBootStrap.Col>


<ReactBootStrap.Col>

<h2 style={{color:"white"}}>Cereals</h2>
</ReactBootStrap.Col>

</ReactBootStrap.Row>









<ReactBootStrap.Row style={{marginTop:90}}>    


        <ReactBootStrap.Col md={2}>

        <ReactBootStrap.Image src={drinks} style={{width:100,
                                                   height:100,
                                                   borderRadius:20}}  fluid />

        </ReactBootStrap.Col>


        <ReactBootStrap.Col>

            <h2 style={{color:"white"}}>Drinks</h2>
        </ReactBootStrap.Col>






        <ReactBootStrap.Col md={2}>

<ReactBootStrap.Image src={al} style={{width:100,
                                       height:100,
                                       borderRadius:20}}  fluid />

</ReactBootStrap.Col>


<ReactBootStrap.Col>

    <h2 style={{color:"white"}}>Alcohol</h2>
</ReactBootStrap.Col>




 </ReactBootStrap.Row>














 <ReactBootStrap.Row style={{marginTop:90}}>    


        <ReactBootStrap.Col md={2}>

        <ReactBootStrap.Image src={snack} style={{width:100,
                                                  height:100,
                                                 borderRadius:20}}
                                                  fluid />

        </ReactBootStrap.Col>




        <ReactBootStrap.Col>

            <h2 style={{color:"white"}}>Snacks</h2>
        </ReactBootStrap.Col>

<ReactBootStrap.Col md={2}>

<ReactBootStrap.Image src={spices} style={{width:100,
                                           height:100,
                                            borderRadius:20}}  fluid />

</ReactBootStrap.Col>


<ReactBootStrap.Col>

    <h2 style={{color:"white"}}>Spices, Sauces & Condiments</h2>
</ReactBootStrap.Col>

</ReactBootStrap.Row>








<ReactBootStrap.Row style={{marginTop:90}}>    


        <ReactBootStrap.Col md={2}>

        <ReactBootStrap.Image src={pantry} style={{width:100,
                                                   height:100,
                                                   borderRadius:20}}
                                                   fluid />

        </ReactBootStrap.Col>


        <ReactBootStrap.Col>

            <h2 style={{color:"white"}}>Pantry, Canned & Dried items</h2>
        </ReactBootStrap.Col>

<ReactBootStrap.Col md={2}>

<ReactBootStrap.Image src={house} style={{width:100,
                                          height:100,
                                          borderRadius:20}}
                                          fluid />

</ReactBootStrap.Col>


<ReactBootStrap.Col>

    <h2 style={{color:"white"}}>Household Essentials</h2>
</ReactBootStrap.Col>

</ReactBootStrap.Row>






<ReactBootStrap.Row style={{marginTop:90}}>    
<ReactBootStrap.Col md={2}>

<ReactBootStrap.Image src={med} style={{width:100,
                                       height:100,
                                       borderRadius:20}}
                                       fluid />

</ReactBootStrap.Col>


<ReactBootStrap.Col>
<h2 style={{color:"white"}}>Health & Nutrition</h2>
</ReactBootStrap.Col>

<ReactBootStrap.Col md={2}>

<ReactBootStrap.Image src={kid} style={{width:100,
                                        height:100,
                                        borderRadius:20}}
                                        fluid />

</ReactBootStrap.Col>


<ReactBootStrap.Col>

<h2 style={{color:"white"}}>Kids & Babies</h2>
</ReactBootStrap.Col>

</ReactBootStrap.Row>









</Layout>

<ReactBootStrap.Image src={lut} style={{marginTop:50,
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
            color:"black"}}>
    Garden.</h2>


<GrInstagram style={{color:"black", fontSize:20}} />
<GrTwitter  style={{color:"black", fontSize:20, marginLeft:18}}  />
<GrMail     style={{color:"black", fontSize:20, marginLeft:18}} />


<p style={{color:"black", paddingTop:100}}>© 2021 Garden <br/> Lagos, Nigeria</p>
</ReactBootStrap.Col>
   
   
   <ReactBootStrap.Col style={{paddingTop:130}}>
       <h3 style={{color:"black"}}> Info</h3>
       <a style={{color:"black"}} href="/About">What to sell</a>
       <br/>
       <a style={{color:"black"}} href="/About">Meet the founder</a>
   </ReactBootStrap.Col>
   
   
   <ReactBootStrap.Col style={{paddingTop:126}}>
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
