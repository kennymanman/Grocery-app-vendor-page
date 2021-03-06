import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"



export default function Form() {
return (


<div className="formdiv">

<Layout>

<ReactBootStrap.Row>
<ReactBootStrap.Col>
<h2 className="formtitle" >
    Be the first to<br/> know about our app<br/> and full accessibility<br/> launch.</h2>
</ReactBootStrap.Col>



<ReactBootStrap.Col className="formtop">

<div className="inputdiv">
<ReactBootStrap.Form name="notify" method="POST" data-netlify="true" >
<input type="hidden" name="form-name" value="notify"  />

<Layout>

<ReactBootStrap.Form.Group  controlId="formName">
<ReactBootStrap.Form.Label style={{marginTop:50}}>Name</ReactBootStrap.Form.Label>
<ReactBootStrap.Form.Control input type="text"  name="name" placeholder="First name" />
</ReactBootStrap.Form.Group>





<ReactBootStrap.Form.Group  controlId="formBasicEmail">
<ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
<ReactBootStrap.Form.Control input type="text" name="email"   placeholder="Enter email" />
<ReactBootStrap.Form.Text className="text-muted">
      We'll never share your email with anyone else.
</ReactBootStrap.Form.Text>
</ReactBootStrap.Form.Group>

  


<ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
<ReactBootStrap.Form.Label>What Feature Would You Like To See On Our App?</ReactBootStrap.Form.Label>
<ReactBootStrap.Form.Control name="message" as="textarea" rows={3} />



</ReactBootStrap.Form.Group>
<ReactBootStrap.Button variant="primary" type="submit">
    Submit
</ReactBootStrap.Button>
</Layout>
</ReactBootStrap.Form> 



</div>




{/*

<div className="inputdiv">
<form name="notify" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="notify" />
  
<input type="text"  placeholder="Enter your name" name="name" /> 
  
<input type="text"  placeholder="Enter your email" name="email" /> 

  
    <label>What Feature would You Love Our App To Have: <textarea name="message"></textarea></label>
  
  <p>gg</p>

  <div style={{textAlign:"center"}}>
    <button  type="submit">Submit</button>
 </div> 
</form> 

</div>   */}


</ReactBootStrap.Col>


</ReactBootStrap.Row>



 </Layout>    

        </div>
    )
}
