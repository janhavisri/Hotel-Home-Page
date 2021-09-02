import React from 'react';
import '../stylesheets/model.css';
const options=[
  {label:'Standard',value:'standard'},
  {label:'Luxury',value:'luxury'},
  {label:'Royal',value:'royal'},
]

function Form({setOpenModal}) {
      return(
    
    <div className="bg-modal">
    <div className="modal-content">
    <div className="titleclosebtn">
              <button  className="close" onClick={() => {
                  setOpenModal(false);
              }}>
                  +
              </button>
          </div>
        <div className="title">
      <h4 style={{color:"#c5953c",textAlign:"center"}}>Enquiry Form</h4>
      <p className="txt">To book a room or to enquire about an existing booking please fill in our enquiry form and tell us what you require.</p>
        </div>
      <form action="#">
         
        <div className="user-details">
          <div className="input-box">
          
            <input type="text" placeholder="Full Name*" required/>
          </div>
          <div className="input-box">
           
            <input type="email"  placeholder="Email*" required/>
          </div>
          <div className="input-box">
            
            <input type="digits"  placeholder="Contact Number*" required/>
          </div>
          <div className="input-box">
            
            <input type="text" placeholder="Street Address" required/>
          </div>
          <div className="input-box">
            
            <input type="text"  placeholder="City"required/>
          </div>
          <div className="input-box">
      
            <input type="text"  placeholder="Pincode" required/>
          </div>
          <div className="input-box">
          
          <input type="text" placeholder="Enter booking no.if enquiry is related to an existing booking" />
        </div>
   
          <div className="input-box">
        
            <input type="number"  placeholder="No. of Adults"required/>
          </div>
          <div className="input-box">
            
            <input type="number" placeholder="No. of Rooms" />
          </div>
          <div className="input-box">
            
            <input type="number"  placeholder="Room Type"/>
          </div>
          <div className="input-box">
      
            <input type="number"  placeholder="No. of Child" />
          </div>
          <div className="input-box">
    
            <input type="number" placeholder="Age of Child 1 , Child 2 . . ." />
          </div>
          <div className="input-box">

            <input type="date" />
          </div>
          <div className="input-box">
        
            <input type="date" placeholder="Check in"/>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="SUBMIT"/>
        </div>
            </form>
    </div>
  </div>
  

)}
export default Form;