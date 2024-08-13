import AddAcheivement from './pages/AddAcheivement';
import Contact from './component/contact';
import FourzeroFour from './component/fourzerofour';
import OurAdmin from './pages/OurAdmin';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './component/TopNavbar';
import Navbar from './component/Navbar';
import React from 'react'
import Confetti from 'react-confetti'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import ScholarshipForm1 from './component/ScholarshipForm1';
import ScholarshipForm2 from './component/ScholarshipForm2';
import ScholarshipForm from './pages/ScholarshipForms';
import Meeting from './pages/Meeting';
import News_Stories from './pages/News_Stories';
import Footer from './component/Footer';
import OurProgram from './pages/OurProgram';
import About from './pages/About';
import Contactus from './pages/ContactUs';
import MakeAnAppoitment from './pages/MakeAnAppointment';
import Addtestinomials from './pages/AddTestinomials';
import Acheivements from './component/Acheivement';
import Privacy_Policy from './pages/privacy_policy';
import DonateNow from './component/DonateNow';
import Gallery from './component/Galleery';
import OurTeam from './pages/OurTeam';
import OurBoardOfTrustee from './pages/OurBoardOfTrustee';
import FAQs from './pages/FAQ';
import One from './pages/one';
import OurSponserForm from './pages/OurSponserForm';
import { useState } from 'react';

import DeleteSponsers from './pages/DeleteSponsers';
import DeleteTestinomials from './pages/DeleteTestinomials';
function App() {
 
  const [isLoading, setIsLoading] = useState(true);
  const centerDivStyle = {
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
    paddingTop:'170px',
    paddingLeft:'10px'
  
  };
    setTimeout(() => {
        setIsLoading(false);
    }, 5000);
    return (
        <div> 
        {isLoading ? (
        <div>
        <Confetti/>
        <div style={centerDivStyle}>
        <h1 style={{fontFamily:'serif',color:'green'}}> Welcome to Noor Education and Healthcare foundation </h1>
        <br/>
        </div>
        </div>
      ):(
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/addAcheivement" element={<AddAcheivement/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<FourzeroFour/>}/>
        <Route path='/DeleteTestParent' element={<DeleteTestinomials/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/one' element={<One/>}/>
        <Route path='/OurSponserForm' element={<OurSponserForm/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/scholarshipForm' element={<ScholarshipForm/>}/>
        <Route path='/scholarshipForm1' element={<ScholarshipForm1/>}/>
        <Route path='/scholarshipForm2' element={<ScholarshipForm2/>}/>
        <Route path='/New_Stories' element={<News_Stories/>}/>
        <Route path='/addtestinomials' element={<Addtestinomials/>}/>
        <Route path='/ourprogram' element={<OurProgram/>}/>
        <Route path='/adminForNoorFoundation' element={<OurAdmin/>}/>
        <Route path='/deleteSponserData' element={<DeleteSponsers/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/makeAnAppointment' element={<MakeAnAppoitment/>}/>
        <Route path='/our' element={<Acheivements/>}/>
        <Route path='/privacy_Policy' element={<Privacy_Policy/>}/>
        <Route path='/donatenow' element={<DonateNow/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/ourBoardOfTrustee' element={<OurTeam/>}/>
        <Route path='/ourTeam' element={<OurBoardOfTrustee/>}/>
        <Route path='/faq' element={<FAQs/>}/>
        <Route path='/contact' element={<Contactus/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )  
};
</div>
    );
}
 

export default App;
