import React from 'react'
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const SERVICE_ID = "service_4vhir4e"; //Enter your Service ID
const TEMPLATE_ID = "template_og36h0t"; //Enter your Template ID
const PUBLIC_KEY = "tZXb-s3LhPK7rPFM6"; //Enter your Public Key

const ContactForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            swal('Email send to iosattbsoft2021@gmail.com','Message Sent Successfully',"success")
          }, (error) => {
            console.log(error.text);
            swal("email not send to iosattbsoft2021@gmail.com",'Something went wrong!',"error")
          });
        e.target.reset()
      };
    return (
        <div style={{width:'100vw', height: '100vh', display:'flex'}}>
            <form class="formContainer" onSubmit={handleOnSubmit}>
                <h2>Send me a message. Let's have a chat!</h2>
                <div class="formElement">
                    <label for="from_name">Name</label>
                    <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
                </div>

                <div class="formElement">
                    <label>E-mail</label>
                    <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
                </div>

                <div class="formElement">
                    <label for="message">Message</label>
                    <textarea name="message" rows="8" cols="30" placeholder="Your message.." required />
                </div>
                <button type='submit' className='formButton'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;