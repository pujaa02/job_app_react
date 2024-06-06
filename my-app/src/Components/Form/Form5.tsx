import React, { useState, ChangeEvent, FormEvent } from "react";
import "./form.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApplicationFormData, validateformdata } from "../interfacefile";
import Cookies from "js-cookie";

const Form5: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ApplicationFormData>({
    fname: "",
    lname: "",
    designation: "",
    email: "",
    phone: "",
    gender: "",
    rel_status: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    bd: "",
  });
  const [validaterr, setValidateerr] = useState<validateformdata>({
    fn: "",
    ln: "",
    desig: "",
    mail: "",
    mobile: "",
    gen: "",
    rel: "",
    add1: "",
    add2: "",
    city: "",
    state: "",
    zip: "",
    dob: "",
  })
  const token = document.cookie
  if (token) {
    const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
    const validateform = (data: ApplicationFormData) => {
      const validaterr: validateformdata = {} as validateformdata;
      if (!data.fname.trim()) {
        validaterr.fn = "FirstName is Required!!"
      }
      if (!data.lname.trim()) {
        validaterr.ln = "LastName is Required!!"
      }
      if (!data.designation.trim()) {
        validaterr.desig = "Designation is required!"
      }
      if (!data.email.trim()) {
        validaterr.mail = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        validaterr.mail = 'Email is invalid';
      }
      if (!data.phone.trim()) {
        validaterr.mobile = "Number is Required!!"
      } else if (!/^\d{10}$/.test(data.phone)) {
        validaterr.mobile = "Please enter valid number!!"
      }
      if (!data.rel_status.trim()) {
        validaterr.rel = "Relation is required!"
      }
      if (!data.address1.trim()) {
        validaterr.add1 = "Address1 is required!"
      }
      if (!data.city.trim()) {
        validaterr.city = "City is required!"
      }
      if (!data.state.trim()) {
        validaterr.state = "state is required!"
      }
      if (!data.zipcode.trim()) {
        validaterr.zip = "Zipcode is required!"
      }
      if (!data.gender.trim()) {
        validaterr.gen = "Gender is Required!!"
      }
      if (!data.bd.trim()) {
        validaterr.dob = 'Birthday Date is Required!!'
      }
      return validaterr;
    }
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      const newerrors = validateform(formData);
      setValidateerr(newerrors);
      if ((Object.values(newerrors)).length === 0) {
        axios({
          url: "http://localhost:3036/submit",
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: JSON.stringify({
            formData
          }),
        })
          .then(async (res) => {
            const result = await res.data;
            if (result.msg === "success") {
              navigate('/fetchemp');
            }

          })
          .catch((err) => console.log(err));
      }
    };
    const logout = () => {
      const token = Cookies.remove("token");
      if (!document.cookie) {
        navigate("/login")
      }
    }
    return (
      <div className="application-form-container">
        <p className="logout" onClick={logout}>Log Out</p>
        <form onSubmit={handleSubmit} className="application-form">
          <fieldset className="fieldset form-control">
            <legend>Reference Contact</legend>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="fname">Name :</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.fn && <span className="error-message">{validaterr.fn}</span>} */}
              </div>
              <div className="col form-group">
                <label htmlFor="lname">Contact Number :</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.ln && <span className="error-message">{validaterr.ln}</span>} */}
              </div>
              <div className="col form-group">
                <label htmlFor="lname">Relation :</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.ln && <span className="error-message">{validaterr.ln}</span>} */}
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="fname">Name :</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.fn && <span className="error-message">{validaterr.fn}</span>} */}
              </div>
              <div className="col form-group">
                <label htmlFor="lname">Contact Number :</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.ln && <span className="error-message">{validaterr.ln}</span>} */}
              </div>
              <div className="col form-group">
                <label htmlFor="lname">Relation :</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.ln && <span className="error-message">{validaterr.ln}</span>} */}
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="fname">Name :</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.fn && <span className="error-message">{validaterr.fn}</span>} */}
              </div>
              <div className="col form-group">
                <label htmlFor="lname">Contact Number :</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.ln && <span className="error-message">{validaterr.ln}</span>} */}
              </div>
              <div className="col form-group">
                <label htmlFor="lname">Relation :</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.ln && <span className="error-message">{validaterr.ln}</span>} */}
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
  else {
    return (
      <div className="denied">
        <h1 >Access Denied!!</h1>
      </div>
    )
  }
};

export default Form5;
