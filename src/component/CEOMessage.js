import { motion} from "framer-motion";
import { Wave, Random } from "react-animated-text";
import { useSpring, animated } from "react-spring";
function OurProvenSuccess(){
  const fade = useSpring({
    from:{opacity:0},
    to:{opacity:1},
  })
    return <section class="py-3 py-md-5" style={{backgroundColor:'white'}}>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h3 class="fs-6  mb-2 text-cursive text-center" style={{color:'white'}}>Our Success</h3>
            <h2 class="mb-4 display-5 text-center text-cursive text-white">We have a proven track record of success.</h2>
            <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
          </div>
        </div>
      </div>
    
      <div class="container">
        <div class="row gy-4 gy-lg-0 align-items-lg-center">
          <motion.div animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"]}} class="col-12 col-lg-6">
            <img width='500px' height='500px' style={{borderRadius:'50%'}}  src="./images/45.png" alt=""/>
          </motion.div>
          <div class="col-12 col-lg-6">
            <div class="row justify-content-xl-end">
              <div class="col-12 col-xl-11">
                <div class="row gy-4 gy-sm-0 overflow-hidden">
                  <h1 class="" style={{color:'white',backgroundColor:'red'}}> <Random
      text="CEO Message"
      effect="jump"
      effectChange={2.0}
      effectDuration={0.3}
    /></h1>
                  <animated.div style={fade}><animated.p style={fade} class=""><i>Dear friends</i><br/>
            In the heart of our mission at Noor Education & Healthcare Foundation is a commitment to leave <b>no one behind,</b> blending <b>education and healthcare</b> into a tapestry of support for the underprivileged. <b>Our vision is ambitious yet grounded in the belief that sustainable upliftment in education and health can transform communities from the inside out.</b>
Through our work, we strive to light the way for those in need, connecting them with essential services and inspiring a wave of support from donors, volunteers, and advocates. Our initiatives, from enhancing children's nutrition to advocating for the education of frontline workers' children and promoting girls' education, are more than programs; they are lifelines to a brighter future..

I invite you to join us in this noble cause. Your support, whether through donations, volunteering, or simply spreading the word, is invaluable. Together, we are not just dreaming of a better tomorrow; we are actively building it, one life at a time. Thank you for standing with us, for believing in our mission, and for being an integral part of our story of hope and transformation.
with deepest appreciation</animated.p>
<b><h1 class="">MS.humaira Shahid</h1></b>
</animated.div>
           
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
       
      
    </section>
}

export default OurProvenSuccess;