import AnnualReport from '../component/AnnualReport';
import DonateBox from '../component/DonateBox';
import Header from "../component/Header";
import BelowHeader from "../component/BelowHeader";
import TheImpact from './TheImpact';
import CEOMessage from '../component/CEOMessage';
import OurProvenSuccess from '../component/OurProvenSuccess';
import Testinomials from '../component/Testinomials';
import CompanyLogo from '../component/CompanyLogo';
function Home(){
    return <div>
        <Header/>
        <BelowHeader/>
        <CEOMessage/>
        <DonateBox/>
        <TheImpact/>
        <OurProvenSuccess/>
        <AnnualReport/>
        <Testinomials/>
        <CompanyLogo/>
    </div>
}
export default Home;