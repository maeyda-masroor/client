import React, { useState } from 'react';
import {db} from '../config/firebase';
import './Testinomials.css';
import TestimonCard from "./TestimonCard";
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testinomials = () => {
  
  const [Test,setTest]= useState([]);
  const testinomialsCollectionRef = collection(db,"NoorFoundations");
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
  const responsive = {
    // Define breakpoints and items to show at each breakpoint
    // Adjust these values based on your design and preferences
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4, slidesToSlide: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };
  return (
    <div className="w-full bg-slate-100">
    {/* Carousel title */}
          <h2 className="text-2xl sm:text-3xl font-medium text-center pb-2 pt-16">
            What our associates say about us
          </h2>
          <div className="max-w-[1140px] mx-auto px- sm:px-6 text-center mt-10">
    {/* Carousel component */}
    {/* The word itself says what each prop means, play with the values */}
            <Carousel
              ssr={true}
              className="z-[1]"
              centerMode={true}
              keyBoardControl={true}
              infinite={true}
              draggable={false}
              responsive={responsive}
              swipeable={false}
            >
    {/* Mapping over records to render TestimonCard components */}
              {Test.map((record, index) => (
                <div>
                <TestimonCard
                  key={index}
                  title={record.name}
                  description={record.designation}
                  name={record.review}
                />
                 <TestimonCard
                  key={index}
                  title={record.name}
                  description={record.designation}
                  name={record.designation}
                />
                 <TestimonCard
                  key={index}
                  title={record.name}
                  description={record.designation}
                  name={record.name}
                />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
  );
};

export default Testinomials;