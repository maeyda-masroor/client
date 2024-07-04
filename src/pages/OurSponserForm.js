import {db} from '../config/firebase';
import { useState } from 'react';
import {
  collection,
  addDoc
} from "firebase/firestore";
import swal from 'sweetalert';
function OurSponserForm(){
  const [name, setName] = useState("");
  const [designation,setDesignation] = useState("");
  const [review,setReview] = useState("");
  const testinomialsCollectionRef = collection(db,"SponserData");
  const submitTestinomials = async (e) => {
    e.preventDefault();
    try {
      await addDoc(testinomialsCollectionRef, {
        name: name,
        designation: designation,
        review:review
      });
      swal(" Sponsers Testinomial Data saved!", "Your data will be shown in main page", "success") 
    } catch (err) {
      console.error(err);
      console.log("err");
    }
  };
    return <div className="site-section">
      
    <div className="container">
    <h1>Add testinomials</h1>
   <div className="row">
          <div className="col-lg-8 mb-5" >
            <form onSubmit={submitTestinomials}>
              <div className="form-group row">
                <div className="col-md-6 mb-4 mb-lg-0">
                  <input type="text" className="form-control" placeholder="First name"onChange={(e)=>setName(e.target.value)} />
                </div>
                </div>
                <div className="form-group row">
                <div class="col-md-6 mb-4 mb-lg-0">
                    <input type="text" className="form-control"placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)}/>
                </div>
                </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <textarea name="" id="" className="form-control" placeholder="Write your testinomials." cols="30" rows="10" onChange={(e)=>setReview(e.target.value)}></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 mr-auto">
                  <button className="btn btn-block btn-primary text-white py-3 px-5 rounded-0"  onClick={submitTestinomials}>send Testinomials</button>
                </div>
              </div>
            </form>
          </div>
    </div>
    </div>
    </div>
}
export default OurSponserForm;