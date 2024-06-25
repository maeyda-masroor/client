
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import React, { useState } from 'react';
import {db} from '../config/firebase';
import './Testinomials.css';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
export default function CompanyLogo () {
  const [Test,setTest]= useState([]);
  const testinomialsCollectionRef = collection(db,"SponserData");
  const getTestList = async()=>{
    try{
      const data = await getDocs(testinomialsCollectionRef);
      const filterdata = data.docs.map((doc)=>({
        ...doc.data(),id:doc.id
      }))
      setTest(filterdata);
      console.log(filterdata);
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
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div style={{padding:'50px'}}>
    <Slider {...settings}>
    <div style={{width:'100%',height:'10px',backgroundColor:'#FF0000'}}>
    {Test.map((record, index) => (
        <h3 style={{backgroundColor:'green',color:'white'}} class="">{record.name}<br/>{record.designation}<br/>{record.review}</h3>

    ))}
    </div>
    </Slider>
    </div>
  );
}
