import React from 'react';
import { useState } from 'react';

function Contactus(){
  const CHARACTER_LIMIT = 1000;
  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    emailAddress_phonenumber:'',
    date:'',
    message: ""
  });
  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);
  const { firstname,lastname,emailAddress_phonenumber,date,message} = formData;
  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (emailAddress_phonenumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    }
      else {
      
          // Regex expression to remove all characters which are NOT alphanumeric 
            //let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");
      
          // Appending the phone number to the URL
            let url = `https://web.whatsapp.com/send?phone=03197134823`;
            url += `&text=${encodeURI("firstname:"+firstname+'<br/>'+"lastname"+lastname+"emailaddress/phonenumber"+emailAddress_phonenumber+"date"+date+"message"+message)}&app_absent=0`;
            window.open(url);
          }
        };
     
   return <div>
       <div class="site-section">
      <div class="container">
        
        <div class="row">
          <div class="col-lg-8 mb-5" >
            <form>
              <div class="form-group row">
                <div class="col-md-6 mb-4 mb-lg-0">
                  <input type="text" class="form-control" placeholder="First name" value={firstname}/>
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="First name" value={lastname}/>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Email address" value={emailAddress_phonenumber}/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                    <input type="date" class="form-control" placeholder="Date" value={date}/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <textarea name="" id="" class="form-control" placeholder="Write your message." cols="30" rows="10" maxLength={CHARACTER_LIMIT}></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6 mr-auto">
                  <input type="submit" class="btn btn-block btn-primary text-white py-3 px-5 rounded-0" value="Send Message"/>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4 ml-auto">
            <div class="bg-white p-3 p-md-5">
              <h3 class="text-cursive mb-4">Reach For Help - Make An Appointment With</h3>
              <ul class="list-unstyled footer-link">
                <li class="d-block mb-3">
                  <span class="d-block text-muted small text-uppercase font-weight-bold">Name:</span>
                  <span>34 Street Name, City Name Here, United States</span></li>
                <li class="d-block mb-3"><span class="d-block text-muted small text-uppercase font-weight-bold">Phone:</span><span>+1 242 4942 290</span></li>
                <li class="d-block mb-3"><span class="d-block text-muted small text-uppercase font-weight-bold">Email:</span><span>info@yourdomain.com</span></li>
                <li class="d-block mb-3"><span class="d-block text-muted small text-uppercase font-weight-bold">Designation</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

     
    </div>
}
export default Contactus;