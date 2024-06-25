import { Link } from "react-router-dom";
function Footer(){
    return  <footer class="site-footer bg-primary" >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-7">
                <h2 class="footer-heading mb-4 text-white ">About Us</h2>
                <p class="text-cursive text-white"> The NOOR education and Health Care Foundation has been developed to improve access and opportunity for all children of front line health workers, to education, health and wellbeing.NOOR education and Health Care Foundation believes in the equal opportunities for all children irrespective of their circumstances.
                </p>
                <br/>
                <p class="" style={{color:'red'}}>
                    #Note <br/> 
                    do you want to update or add data to website , are you a new admin , please contact this number
                </p>

              </div>
              <div class="col-md-4 ml-auto">
                <h2 class="footer-heading mb-4">QuickLinks</h2>
                <ul class="list-unstyled">
                  <li><Link to="/privacy_policy">Privacy & Policy</Link></li>
                  <li><Link to="/donateNow">Donate Now</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/scholarshipForm1">Scholarship form For Empolyee Themselves</Link></li>
                 <li><Link to="/scholarshipForm2">Scholarship Form For Emp Children</Link></li>
                </ul>
              </div>

            </div>
          </div>
          <div class="col-md-4 ml-auto">

            <div class="mb-5">
              <h2 class="footer-heading mb-4">Subscribe to Newsletter</h2>
              <form action="#" method="post" class="footer-suscribe-form">
                <div class="input-group mb-3">
                  <input type="text" class="form-control rounded-0 border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                  <div class="input-group-append">
                    <button class="btn btn-primary text-white" type="button" id="button-addon2">Subscribe</button>
                  </div>
                </div>
                </form>
            </div>


            <h2 class="footer-heading mb-4">Follow Us</h2>
            <a href="#about-section" class="smoothscroll pl-0 pr-3"><span class="icon-facebook"></span></a>
            <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
            <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
            <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
          </div>
        </div>
      </div>
    </footer>

}
export default Footer;