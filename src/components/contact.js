import React from 'react';
import '../stylesheets/contact.css';
function Contact(){
    return(
        <section className="contact" id="contact">       
    <div className="heading">
    <h2 className="head">Contact</h2>
<div className="row body">
    <form action="#">
      
        
    
          <p className="left">
            <label className="t"for="first_name">Name</label>
            <input type="text" name="first_name" placeholder="John Smith" />
          </p>
          {/* <p className="pull-right"> */}
            {/* <label className="tt"for="last_name">last name</label> */}
            {/* <input type="text" name="last_name" placeholder="Smith" />       */}
          {/* </p> */}
    
    
          <p className="right">
            <label className="ttt"for="email">Email <span className="req"></span></label>
            <input type="email" name="email" placeholder="john.smith@gmail.com" />
          </p>
               
        <div className="divider"></div>
        
          <label className="ttttt"for="comments">comments</label>
          <textarea className="tttt"cols="46" rows="3" type="text" name="comments"></textarea>
    
        
        
          <input className="btn" type="submit" value="Submit" />
          {/* <small>or press <strong>enter</strong></small> */}
        
        
      
    </form>  
  </div>
  </div>
  </section>

    )
}
export default Contact;