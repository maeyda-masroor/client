function scholarshipForm2(){
    return <div class="container">
        <h1 class="text-cursive">Scholarship For Employee's Children</h1>
        <i><p class="text-cursive" style={{color:'red'}}><b>
        #Note : Before Applying For Noor Education and Healthcare Foundation Scholarship <br/>
        you should know that you are : <br/>
        1-You are PILL Employee , Remedial Hospital and Husain Remedies Employee<br/>
        2-You have been working here since 1 year  <br/>
        3-You are nor Consultant , Internee , Hourly based & other worker
        </b></p></i>
        <div class="row">
          <div class="col-lg-8 mb-5" >
          <h3 class="text-cursive">Employee Details</h3>
            <form action="#" method="post">
              <div class="form-group row">
                <div class="col-md-6 mb-4 mb-lg-0">
                  <label for = "date of issue">Date of Issue</label>
                  <input type="date" class="form-control" placeholder="First name"/>
                </div>
                <div class="col-md-6">
                  <label for="Employee Name">Student Father Name</label>
                  <input type="text" class="form-control" placeholder="Student Father Name"/>
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
              <h3 class="text-cursive">Student Details</h3>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="student name">Student Name</label>
                  <input type="text" name="" id="" class="form-control" placeholder="Student Naem"/>
                </div>
                <div class="col-md-6">
                <label for="student name">Father Name</label>
                  <input type="text" name="" id="" class="form-control" placeholder="Father name"/>
    
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                    <label for="residence_own_rented">Age of Student</label>
                    <input type="text" class="form-control" placeholder="Age of Stdent"/>
                    </div>
                <div class="col-md-6">
                  <label for="School Name">School Name</label>
                  <input type="text" class="form-control" placeholder="School Name"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="name of course">class and section</label>
                  <input type="text" name="" id="" class="form-control" placeholder="class and section"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="benefit">Address and current Detail of Schools</label>
                  <textarea name="" id="" class="form-control" placeholder="Current Details of School + Address" col="30" rows="10"></textarea>
                </div>
              </div>
             
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="recommendation">Last Result</label>
                  <textarea name="" id="" class="form-control" placeholder="Last Results" cols="30" rows="10"></textarea>
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
export default scholarshipForm2;