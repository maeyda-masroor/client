import { Link } from "react-router-dom";
function ScholarshipForm(){
    return <div class="container" style={{padding:'10px',marginTop:'10px'}}>
        <h1>Scholarship Forms</h1>
        <p>There aree two type of Scholarship avaiable 
            <br/>
        <Link to = "/scholarshipForm1" >
                Scholarship Form For Employee Themselves 
        </Link>
        <br/>
        <Link to = "/scholarshipForm2" >
                Scholarship Form For Employee Kids 
        </Link>
        </p>
    </div>
}
export default ScholarshipForm;