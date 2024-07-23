import { motion } from 'framer-motion';
import './belowHeader.css';
function BelowHeader(){
    return <div class="container">
      <div class="feature-29192-wrap d-md-flex" style={{marginTop: `-20px`, position: `relative`,zIndex: 1}}>
        <motion.div whileHover={{scale:1.2}} whileTap={{scale:0.8}} class="feature-29192 overlay-danger" propstyle="background-image: url('images/img_3_gray.jpg');">
         
          <div class="text" >
            <span class="meta">Aim</span>
            <p class=" text-black p"> The NOOR education and Health care Foundation is currently working in Pakistan and Kenya and has a vision to expand this scheme globally.
            </p>
            </div>
          </motion.div>

        <motion.div whileHover={{scale:1.2}} whileTap={{scale:0.8}} class="feature-29192 overlay-success">
          <div class="text">
            <span class="meta">Vision</span>
            <p class=" text-black p"> To build a close knit community of academia, health care professionals, guardians and students with special e
mphasis on mental & physical health, special education, capacity building, & to implement education in underprivileged communities so that no one is left behind.

</p>
          </div>
        </motion.div>

        <motion.div whileHover={{scale:1.2}} whileTap={{scale:0.8}} class="feature-29192 overlay-warning" propstyle="background-image: 'images/img_1_gray.jpg';">
          <div class="text">
            <span class="meta">Goal</span>
            <p class="text-black p">     Raise awareness of the organisation and clarify its mission. • Connect the organisation's services with people who need them. • Activate possible donors and volunteers. • Engage followers with ongoing news and events. • Raise awareness of the organisation

</p>
          </div>
        </motion.div>
        
    </div>
    </div>
  
}
export default BelowHeader;