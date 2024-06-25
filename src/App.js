import logo from './logo.svg';
import './App.css';
import TopNavbar from './component/TopNavbar';
import Navbar from './component/Navbar';
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
import OurSponserForm from './pages/OurSponserForm';
import React, { Suspense } from 'react';
function App() {
  return (
    <Suspense fallback="loading">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/OurSponserForm' element={<OurSponserForm/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/scholarshipForm' element={<ScholarshipForm/>}/>
        <Route path='/scholarshipForm1' element={<ScholarshipForm1/>}/>
        <Route path='/scholarshipForm2' element={<ScholarshipForm2/>}/>
        <Route path='/New_Stories' element={<News_Stories/>}/>
        <Route path='/addtestinomials' element={<Addtestinomials/>}/>
        <Route path='/ourprogram' element={<OurProgram/>}/>
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
    </Suspense>
  );
}

export default App;
