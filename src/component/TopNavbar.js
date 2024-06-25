import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { Context } from "../pages/ContextWrapper";
function TopNavbar(){
  const context = useContext(Context);
  const { i18n } = useTranslation();




  const changeLanguage = (language) => {

    i18n.changeLanguage(language);

  };
    return <div>
        <div class="bg-primary py-3 top-bar shadow d-none d-md-block">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-md-left pl-0">
              <Link to="/scholarshipForm" class=" pr-3 pl-0">Scholarship Forms</Link>
              <Link to="/Meeting" class="p-3">Meeting</Link>
             
              <Link to="/addTestinomials" class="p-3">Add Testinomials</Link>
            </div>
            <div class="col-md-6 text-md-right">
            <select value={context.locale} onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="es">اردو</option>
</select>
            <div>

      {/* Add more buttons for other languages */}

    </div>

            </div>
          </div>
        </div>
      </div>
    </div>
}
export default TopNavbar;