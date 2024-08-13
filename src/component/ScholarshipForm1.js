import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function scholarshipForm1(){
  const [errorMessaagre, setErrorMessage] = React.useState("");
    const [EmployeeName,setEmployeeName] = useState('');
    const [EmployeeCode,setEmployeeCode] = useState('');
    const [EmployeeEmail,setEmployeeEmail] = useState('');
    const [PresentOrExEmployee,setPresentOrEx] = useState('');
    const [DateofJoiningatPILL,setDateOfJoiningAtPill] = useState('');
    const [Designation,setDesignation] = useState('');
    const [Department,setDepartment] = useState('');
    const [HusbandName,sethusbandName] = useState('');
    const [HouseAddresofEmployee,setHouseAddressOfEmp] = useState('');
    const [officialphonenumber,setofficalphonenumber] = useState('');
    const [DetailsofAlreadyavailedscholarshipsfromPILL,setdetailofScholarshipPill] = useState('');
    const [DetailsofavailedscholarshipsfromotherthanPILL,setdetailofScholarshipOfPillotherthanPill] = useState('');
    const [Workplaceaddress,setworkplaceAddress] = useState('');
    const [MonthlyIncome,setMonthlyIncome] = useState('');
    const [OthersourcesofIncome,setOtherSourceOfincome]= useState('');
    const [Father_Husband_Wifemonthlyincome,setfather_husband_wife_monthly_income] = useState('');
    const [Detailoffamilymember,setdetailoffamilymember] = useState(''); 
    const [residenceown_rented,setresidenceown_rented] = useState('');
    const [Name_of_Institute_taking_Admission, setnameofinstitutetakingadmission] = useState('');
    const [Nameofcourse,setnameofcourse] =useState('');
    const [AddressofInstitute_Websiteofinstitute,setAddressofInstitute] = useState('');
    const [Benefitstoorganizationfromthecourse,setbenefittoorganizationfromthecourse] = useState('');
    const [RecommendationfromHR_Headofthedepartment,setRecommendationFormHR] =useState('');
    const [dateofIssue,setDateOfIssue] = useState('');
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
         const objt = {EmployeeName,EmployeeCode,EmployeeEmail,PresentOrExEmployee,
        DateofJoiningatPILL,Designation,Department,HusbandName,HouseAddresofEmployee,
    officialphonenumber,DetailsofAlreadyavailedscholarshipsfromPILL,
    DetailsofavailedscholarshipsfromotherthanPILL,Workplaceaddress,
    MonthlyIncome,OthersourcesofIncome,Father_Husband_Wifemonthlyincome,
    AddressofInstitute_Websiteofinstitute,Detailoffamilymember,residenceown_rented,Name_of_Institute_taking_Admission,
    Nameofcourse,Benefitstoorganizationfromthecourse,RecommendationfromHR_Headofthedepartment
    ,dateofIssue};	
        axios.post('https://sheet.best/api/sheets/19c28d68-27d7-4b45-a162-29897d059e69',objt)
        .then(response => {
            console.log(response);
        })
  
    };
    return <div class="container">
        <h1 class="text-cursive">Scholarship For Employee Themselves</h1>
        <i><p class="text-cursive" style={{color:'red'}}><b>
        #Note : Before Applying For Noor Education and Healthcare Foundation Scholarship <br/>
        you should know that you are : <br/>
        1-You are PILL Employee , Remedial Hospital and Husain Remedies Employee<br/>
        2-You have been working here since 1 year  <br/>
        3-You are nor Consultant , Internee , Hourly based & other worker
        </b></p></i>
        <div class="row">
          <div class="col-lg-8 mb-5" >
            <form action="#" method="post">
              <div class="form-group row">
                <div class="col-md-6 mb-4 mb-lg-0">
                  <label for = "date of issue">Date of Issue</label>
                  <input type="date" class="form-control" placeholder="First name"/>
                </div>
                <div class="col-md-6">
                  <label for="Employee Name">Employee Name</label>
                  <input type="text" class="form-control" placeholder="Employee name"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                <label for="Employee Code">Employee Code</label>  
                <input type="text" class="form-control"placeholder="Employee Code"/>
                </div>
                <div class="col-md-6">
                  <label for="Employee Email">Employee Email</label>
                  <input type="text" class="form-control" placeholder="Employee Email"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                <label for="Present or Ex">Present Or Ex</label>
                <select class="form-control">
                  <option>Present</option>
                  <option>Ex</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="date of Joining">Date of Joining</label>
                <input type="date" class="form-control" placeholder="Date of Joining"/>
              </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                <label for="Designation">Designation</label>  
                <input type="text" class="form-control"placeholder="designation"/>
                </div>
                <div class="col-md-6">
                  <label for="department">department </label>
                  <input type="text" class="form-control" placeholder="department"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                <label for="HusbandName">Husband Name</label>  
                <input type="text" class="form-control"placeholder="Husband Name"/>
                </div>
                <div class="col-md-6">
                  <label for="Official Phone Number">Official PhoneNumber</label>
                  <input type="text" class="form-control" placeholder="Phone Number"/>
                </div>
              </div>         
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="Details of Otheer scholarship Other than Pill">Detail of scholarship Other than Pill</label>
                  <textarea name="" id="" class="form-control" placeholder="Details of Other Scholarship Other than Pill"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="Monthly income">Monthly Income</label>
                  <input type="text" class="form-control"placeholder="Monthly Income"/>
                </div>              
                </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="Workplace Address">Workplace Address</label>
                  <input type="text" class="form-control" placeholder="Workplace Address"/>
                </div>
                <div class="col-md-6">
                  <label for="webiste / address of insitute">Website Address of Institute</label>
                  <input type="text" class="form-control" placeholder="Website Address of Institute"/>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <label for="Father_Wife_Husband Monthly Income">Father / Husband / Wife Monthly Income</label>
                  <textarea name="" id="" class="form-control" placeholder="Father / Husband / wife Monthly Income"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="Other Source of Income">Other Source of Income</label>
                  <textarea name="" id="" class="form-control" placeholder="Other Source of income"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="details of family member">Detail of Family Member</label>
                  <textarea name="" id="" class="form-control" placeholder="Detail of Family Member"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                    <label for="residence_own_rented">Residence Own or Rented</label>
                    <select class="form-control">
                      <option>Own</option>
                      <option>Rented</option>
                    </select>
                </div>
                <div class="col-md-6">
                  <label for="Name of Institute taking Admission">Name of Institute taking Admission</label>
                  <input type="text" class="form-control" placeholder="name of institute taking admission"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="name of course">Name of Course</label>
                  <textarea name="" id="" class="form-control" placeholder="Name of Course"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="benefit">Benefit from this course to organisation</label>
                  <textarea name="" id="" class="form-control" placeholder="Write what benefit you will be providing organization with this course" col="30" rows="10"></textarea>
                </div>
              </div>
             
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="recommendation">Recommendation from HR Head of the department</label>
                  <textarea name="" id="" class="form-control" placeholder="write recommendation given by HR-Head of the department" cols="30" rows="10"></textarea>
                </div>
              </div>
              <div class="form group row">
                <div class="col-md-12">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" required/>
                <label for="vehicle1"> I here by decalre that all the provided information is true</label>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6 mr-auto">
                  <input type="submit" class="btn btn-block btn-primary text-white py-3 px-5 rounded-0" value="Submit Form"/>
                </div>
              </div>
            </form>
          </div>
          </div>
          </div>
}
export default scholarshipForm1;