import React from 'react';
import  MyPieChart  from '../component/ThePieChart';
import { Link } from 'react-router-dom';
import './TheImpact.css'; // Assuming you put the CSS code above in App.css
import { FormattedMessage } from 'react-intl';
function TheImpact() {
    
        return <div class="container"><div class="row mb-5 align-items-st">
        <div class="col-md-4">
          <div class="heading-20219">
            <h2 class="title "><FormattedMessage id= "theimpact" defaultMessage={"The Impact"}/></h2>
          </div>
        </div>
        <div class="col-md-8">
          <p class=""style={{color:'red'}}><FormattedMessage id="percentage" defaultMessage={"Following percentage are define for the usage of Funds"}/></p>
        </div>
        <div class="col-lg-12 text-center">
                <center><MyPieChart/></center>    
            </div>
            <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
            <p class=""><FormattedMessage id = "program_info" defaultMessage={"Uptil now program like education program and nutrition program are introduced but it is planed to introduced also another programs such as Noor technical program  Noor Healthcare program and Noor earlychildhood program"}/></p>
            <button style={{color:'white',backgroundColor:'red'}}><Link to = "/donateNow">Donate</Link></button>
            </div>  
      </div>
      </div>
       
    }
export default TheImpact;
