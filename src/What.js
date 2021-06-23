import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import veg from "./Imaged/veg.jpg"
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
//import med from "./Imaged/med.jpg"
//import kid from "./Imaged/kid.jpg"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import {LinkContainer} from 'react-router-bootstrap'






export default function What() {
return (



<div>

<div className="whatdiv">
<Layout>
<ReactBootStrap.Col>
<h4 className="whatheader">What<br/>To Sell<br/>On Garden<h8 className="whatdot">.</h8></h4>

<p className="whatsub">
Are you a grocery vendor, Supermarket owner, farm owner, 
 Instagram vendor trying to create awareness
for your grocery items and reach more customers while increasing
profit?, Then Garden is the right platform for you.
</p>
</ReactBootStrap.Col>


<ReactBootStrap.Row className="tinyrow">

<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={fruit} />
</div>
<h2 className="tinytext">   Fruits</h2>
</ReactBootStrap.Col>


<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={veg} />
</div>
<h2 className="tinytext">Vegetables</h2>
</ReactBootStrap.Col>



<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={meat} />
 </div> 
<h2 className="tinytext">Meat</h2>
</ReactBootStrap.Col>



<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={bread} />
</div>
<h2 className="tinytext">Bread </h2>
</ReactBootStrap.Col>

</ReactBootStrap.Row>




<ReactBootStrap.Row className="tinyrow">

<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={eggs} />
</div>
<h2 className="tinytext">Dairy</h2>
</ReactBootStrap.Col>



<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={cereal} />
</div>
<h2 className="tinytext">Cereal</h2>
</ReactBootStrap.Col>



<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={drinks} />
</div>
<h2 className="tinytext">drinks</h2>
</ReactBootStrap.Col>


<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={al} />
</div>
<h2 className="tinytext">Alcohol</h2>
</ReactBootStrap.Col>

</ReactBootStrap.Row>



<ReactBootStrap.Row className="tinyrow">

<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={snack} />
</div>
<h2 className="tinytext">Snacks</h2>
</ReactBootStrap.Col>



<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={spices} />
</div>
<h2 className="tinytext">Condiments</h2>
</ReactBootStrap.Col>


<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={pantry} />
</div>
<h2 className="tinytext">Pantry</h2>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
<div className="divimage">
<ReactBootStrap.Image className="tinyimage" src={house} />
</div>
<h2 className="tinytext">Household</h2>
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
<a className="footertext" href='mailto:jack@semantic-ui.com'>Email Address:  gardenapp@gmail.com</a>
<p className="footertext">Address: 92, Lanre Awolokun Gbagada Phase 2<br/>Lagos, Nigeria.</p>



</ReactBootStrap.Col>




</ReactBootStrap.Row>


</Layout>
</div>




</div>

    )

}