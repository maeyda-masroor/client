import MultiStepForm from "./MultistepForm";
function DonateNow(){
    return <div class="site-section  overlay-primary" propsstyle="background-image: url('images/img_1.jpg');">
    <div class="container">
      <div class="row align-items-stretch">
        <div class="col-md-6">
            <h1 class="">Bank Details</h1>
            <p class="">BANK DETAIL OF ISHRAT HUSAIN PAKISTAN INSTITUTE OF LIVING
& LEARNING ALLIED BANK LTD<br/>
Account title......Ishrat Husain Pakistan PILL<br/>
Account Number........0010016878230010<br/>
IBAN....PK 47 ABPA0010016878230010<br/>
Branch Code.........0711<br/>
Branch Name......ABLK Block North Nazimabad Karachi</p>
        </div>
        <div class="col-md-6">
          <div class=" h-100 p-4 shadow">
            <h3 class="mb-4 text-cursive">Donate Now</h3>
            <MultiStepForm/>
          </div>
        </div>
      </div>
    </div>
  </div> 
}
export default DonateNow;