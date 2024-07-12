import React, { useState, useEffect } from 'react';
// Import Firebase and Firestore functionality (replace with your setup)
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'; // Replace with your imports
import './scorecard.css'
import {db} from '../config/firebase';
import firebase from 'firebase/app';
import { ProgressBar } from 'react-bootstrap';
function ScoreCard(){
  const [reviews, setReviews] = useState([]); // Store retrieved reviews
  const [totalReviews, setTotalReviews] = useState(0);
  const db = getFirestore(); // Initialize Firestore instance
  const [rating4,setRating4] = useState([]);
  const filteredReviewsWithRating5 = [];
  const [overallAverage, setOverallAverage] = useState(0);
  const reviewData = [];
  const [filteredReviews, setFilteredReviews] = useState({
    oneStar: [],
    twoStar: [],
    threeStar: [],
    fourStar: [],
    fiveStar: [],
  });
  const [averageRatings, setAverageRatings] = useState({
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
  });
  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollectionRef = collection(db, "NoorFoundations");
      const querySnapshot = await getDocs(reviewsCollectionRef);
      
      querySnapshot.forEach((doc) => {
        reviewData.push({ ...doc.data(), id: doc.id });
      });
      if(reviewData){
        setTotalReviews(reviewData.length);
      }
      setFilteredReviews({
        oneStar: reviewData.filter((review) => review.rating === 1),
        twoStar: reviewData.filter((review) => review.rating === 2),
        threeStar: reviewData.filter((review) => review.rating === 3),
        fourStar: reviewData.filter((review) => review.rating === 4),
        fiveStar: reviewData.filter((review) => review.rating === 5),
      });
      
      setReviews(filteredReviews);
      const calculateAverages = (ratingArray, ratingValue) => {
        const average = ratingArray.length > 0 ? ratingArray.reduce((sum, review) => sum + review.rating, 0) / ratingArray.length : 0;
        setAverageRatings({ ...averageRatings, [ratingValue]: average });
      };

      calculateAverages(filteredReviews.oneStar, filteredReviews.oneStar.length);
      calculateAverages(filteredReviews.twoStar, filteredReviews.twoStar.length);
      calculateAverages(filteredReviews.threeStar, filteredReviews.threeStar.length);
      calculateAverages(filteredReviews.fourStar, filteredReviews.fourStar.length);
      calculateAverages(filteredReviews.fiveStar, filteredReviews.fiveStar.length);

      // Calculate and set overall average
      const totalRatings = reviewData.length;
      const totalScore = reviewData.reduce((sum, review) => sum + review.rating, 0);
      const overallAvg = totalRatings > 0 ? totalScore / totalRatings : 0;
      setOverallAverage(overallAvg);
    };

    fetchReviews();
  },[reviewData]);
  
  return <div>
    <div>
  </div>
 <div class="box-sizing"><span class="heading">User Rating</span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star"></span>
 <p>{overallAverage.toFixed(1)} average based on {totalReviews}  reviews.</p>
 <hr propstyle="border:3px solid #f1f1f1"/>
 
 <div class="row">
   <div class="side">
     <div>5 star</div>
   </div>
   <div class="middle">
     <div class="bar-container">
       <div class="bar-5"style={{width:`${filteredReviews.fiveStar.length * 20}px`}}></div>
     </div>
   </div>
   <div class="side right">
     <div>{filteredReviews.fiveStar.length}</div>
   </div>
   <div class="side">
     <div>4 star</div>
   </div>
   <div class="middle">
     <div class="bar-container">
     <div class="bar-5"style={{width:`${filteredReviews.fourStar.length * 20}px`}}></div>
     </div>
   </div>
   <div class="side right">
     <div>{filteredReviews.fourStar.length}</div>
   </div>
   <div class="side">
     <div>3 star</div>
   </div>
   <div class="middle">
     <div class="bar-container">
     <div class="bar-5"style={{width:`${filteredReviews.threeStar.length * 20}px`}}></div>
     </div>
   </div>
   <div class="side right">
     <div>{filteredReviews.threeStar.length}</div>
   </div>
   <div class="side">
     <div>2 star</div>
   </div>
   <div class="middle">
     <div class="bar-container">
     <div class="bar-5"style={{width:`${filteredReviews.twoStar.length * 20}px`}}></div>
     </div>
   </div>
   <div class="side right">
     <div>{filteredReviews.twoStar.length}</div>
   </div>
   <div class="side">
     <div>1 star</div>
   </div>
   <div class="middle">
     <div class="bar-container">
     <div class="bar-5"style={{width:`${filteredReviews.oneStar.length * 20}px`}}></div>
     </div>
   </div>
   <div class="side right">
     <div>{filteredReviews.oneStar.length}</div>
 </div>
   </div>
 </div>
 </div>
 
 
}
export default ScoreCard;