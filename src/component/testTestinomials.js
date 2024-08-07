
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from 'react-star-ratings';
import Slider from "react-slick";
import React, { useState } from 'react';
import {db} from '../config/firebase';
import Firebase from '../config/firebase';
import './Testinomials.css';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { StarRating } from "star-ratings-react";
export default function CompanyLogo () {
  
  const [Test,setTest]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const testinomialsCollectionRef = collection(db,"NoorFoundations");
  const getTestList = async()=>{
    try{
      setIsLoading(true);
      const data = await getDocs(testinomialsCollectionRef);
      const filterdata = data.docs.map((doc)=>({
        ...doc.data(),id:doc.id
      }))
      setTest(filterdata);
      setIsLoading(false);
   
    }
    catch(err){
      console.log("eer");
    }
  };
  useEffect(()=>{
    getTestList();
  },[]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
    <div style={{padding:'50px'}}>
    <center><h1>Testinomials of Parents and students</h1></center>
    {isLoading? <center><div class="dot-elastic"></div></center>:null}
      <Slider {...settings}>
        {Test.map(record => {
          return (
            <div><h3 style={{backgroundColor:'white',color:'black',margin:'10px'}} class="">{record.name}<br/>{record.designation}<br/> 
            <StarRating rating={record.rating} size={20} maxRating={5}/>
            </h3></div>
          );
        })}
      </Slider>
    
    </div>
  );
}
