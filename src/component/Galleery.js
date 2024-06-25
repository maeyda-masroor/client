
import { Gallery } from "react-grid-gallery";
 
const images = [
   {
      src: "images/g1.jpg",
      width: 320,
      height: 174,
      caption: "At Meetings",
   },
   {
      src: "images/g2.jpg",
      width: 320,
      height: 212,
      tags: [
         { value: "meeting", title: "Parent Meetings" },
         { value: "2023", title: "2023" },
      ],
      alt: "meeting",
   },
   {
      src: "images/g3.jpg",
      width: 320,
      height: 212,
   },
   {
    src: "images/g4.jpg",
    width: 320,
    height: 174,
    caption: "Meeting time",
 },
 {
    src: "images/g5.jpg",
    width: 320,
    height: 212,
    alt: "Meeting",
 },
 {
    src: "images/g5.jpg",
    width: 320,
    height: 212,
 },
 {
    src: "images/g6.jpg",
    width: 320,
    height: 174,
    caption: "Discussion in Meeting",
 },
 
];
function Gallery1(){ 
return <div class="site-section"><div class="container"><Gallery images={images}/></div></div>
}
export default Gallery1;