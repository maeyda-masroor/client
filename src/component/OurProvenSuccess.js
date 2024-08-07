import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { useState } from "react";
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
	const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
function OurProvenSuccess(){
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

    return <section class="py-3 py-md-5" style={{backgroundColor:'#c21809'}}>
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
          <div class="col-12 col-lg-6">
          <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
            <img class="img-fluid rounded" loading="lazy" src="./images/s.jpg" alt="" width={'250px'} height={'100px'}onLoad={() => setIsLoaded(true)}/>
          </motion.div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="row justify-content-xl-end">
              <div class="col-12 col-xl-11">
                <div class="row gy-4 gy-sm-0 overflow-hidden">
                  <div class="col-12 col-sm-6">
                    <div class="card border-0 border-bottom border-primary shadow-sm mb-4">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class=""><CountUp delay={2} end={80} /></h3>
                        <p class="">Students</p>
                      </div>
                    </div>
                    <div class="card border-0 border-bottom border-primary shadow-sm">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class=""><CountUp delay={2} end={5} /></h3>
                        <p class="">Programs</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="card border-0 border-bottom border-primary shadow-sm mt-lg-6 mt-xxl-8 mb-4">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class=""><CountUp delay={2} end={10} /></h3>
                        <p class="">Team Members</p>
                      </div>
                    </div>
                    <div class="card border-0 border-bottom border-primary shadow-sm">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class=""><CountUp delay={2} end={2} /></h3>
                        <p class="">Meetings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
}
export default OurProvenSuccess;