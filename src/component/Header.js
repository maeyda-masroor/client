import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const fadeImages = [
    "./images/I1.jpg",
    "./images/I2.jpg",
    "i3.jpg"
  ];
function Header(){

    return <div class="fh5co-hero">
			<div class="fh5co-overlay"></div>	
            <div id="carousel-slider" class="carousel slide" data-ride="carousel">
                <div class="slide-container">
            <Fade>
            <div class="each-fade">
            <img  src={'/images/l1.jpg'}width={'100%'} height={'500px'}/>
            </div>
            <div class="each-fade">
            <img src={'/images/l2.jpg'}  width={'100%'}  height={'500px'}/>
            </div> 
            <div class="each-fade">
            <img src={'/images/l3.jpg'}  width={'100%'} height={'500px'}/>
            </div>
            </Fade>
        </div>
        </div>
		</div>
}
export default Header;