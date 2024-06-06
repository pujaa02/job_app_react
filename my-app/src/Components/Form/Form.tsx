import React, { useState, ChangeEvent, FormEvent } from "react";
import "./form.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApplicationFormData, validateformdata } from "../interfacefile";
import Cookies from "js-cookie";

const Form: React.FC = () => {
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
            <legend>Basic Detail</legend>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="fname">First Name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className="form-control"
                />
                {validaterr.fn && <span className="error-message">{validaterr.fn}</span>}
              </div>
              <div className="col form-group">
                <label htmlFor="lname">Last Name:</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {validaterr.ln && <span className="error-message">{validaterr.ln}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="designation">Designation:</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="form-control"
                />
                {validaterr.desig && <span className="error-message">{validaterr.desig}</span>}
              </div>
              <div className="col form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
                {validaterr.mail && <span className="error-message">{validaterr.mail}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                />
                {validaterr.mobile && <span className="error-message">{validaterr.mobile}</span>}
              </div>
              <div className="col form-group">
                <label htmlFor="bd">DOB:</label>
                <input
                  type="date"
                  id="bd"
                  name="bd"
                  value={formData.bd}
                  onChange={handleChange}
                  className="form-control"
                />
                {validaterr.dob && <span className="error-message">{validaterr.dob}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="address1">Address1:</label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  className="form-control"
                />
                {validaterr.add1 && <span className="error-message">{validaterr.add1}</span>}
              </div>
              <div className="col form-group">
                <label htmlFor="address2">Address2:</label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-control"
                />
                {validaterr.city && <span className="error-message">{validaterr.city}</span>}
              </div>
              <div className="col form-group">
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="form-control"
                />
                {validaterr.state && <span className="error-message">{validaterr.state}</span>}
              </div>
              <div className="col form-group">
                <label htmlFor="zipcode">zipcode : </label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="form-control"
                />
                {validaterr.zip && <span className="error-message">{validaterr.zip}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-gender">
                  <label >Gender:</label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={formData.gender === "female"}
                    className="form-check-input"
                  />
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                    checked={formData.gender === "other"}
                    className="form-check-input"
                  />
                  <label htmlFor="other">Other</label>
                </div>
                {validaterr.gen && <span className="error-message">{validaterr.gen}</span>}
              </div>
              <div className="col">
                <div className=" form-group">
                  <label htmlFor="rel_status">Relationship Status:</label>
                  <select name="rel_status" id="rel_status" value={formData.rel_status} onChange={handleChange}>
                    <option value="married">Married</option>
                    <option value="unmarried">Unmarried</option>
                    <option value="widow">Widow</option>
                    <option value="divorced">Divorced</option>
                  </select>
                </div>
                {validaterr.rel && <span className="error-message">{validaterr.rel}</span>}
              </div>
            </div>
          </fieldset> <br />
          <fieldset className="fieldset form-control">
            <legend>Education Detail</legend>
            <div className="row">
              <p><u>SSC Result</u></p>
              <div className="col form-group">
                <label htmlFor="fname">Board Name :</label>
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
                <label htmlFor="lname">Passing Year :</label>
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
                <label htmlFor="lname">Percentage :</label>
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
            <hr />
            {/* second row */}
            <div className="row">
              <p><u>HSC Result</u> </p>
              <div className="col form-group">
                <label htmlFor="fname">Board Name :</label>
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
                <label htmlFor="lname">Passing Year :</label>
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
                <label htmlFor="lname">Percentage :</label>
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
            <hr />
            <div className="row">
              <p><u> Bachelor Degree</u></p>
              <div className="col form-group">
                <label htmlFor="fname">Cource Name :</label>
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
                <label htmlFor="fname">Univercity :</label>
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
                <label htmlFor="lname">Passing Year :</label>
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
                <label htmlFor="lname">Percentage :</label>
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
            <hr />
            <div className="row">
              <p><u> Master Degree</u></p>
              <div className="col form-group">
                <label htmlFor="fname">Cource Name :</label>
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
                <label htmlFor="fname">Univercity :</label>
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
                <label htmlFor="lname">Passing Year :</label>
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
                <label htmlFor="lname">Percentage :</label>
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
          </fieldset> <br />

          <fieldset className="fieldset form-control">
            <legend>Work Experience</legend>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="fname">Company Name :</label>
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
                <label htmlFor="lname">Designation :</label>
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
                <label htmlFor="lname">From :</label>
                <input
                  type="date"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.ln && <span className="error-message">{validaterr.ln}</span>} */}
              </div>
              <div className="col form-group">
                <label htmlFor="lname">to :</label>
                <input
                  type="date"
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
                <label htmlFor="fname">Company Name :</label>
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
                <label htmlFor="lname">Designation :</label>
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
                <label htmlFor="lname">From :</label>
                <input
                  type="date"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.ln && <span className="error-message">{validaterr.ln}</span>} */}
              </div>
              <div className="col form-group">
                <label htmlFor="lname">to :</label>
                <input
                  type="date"
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
                <label htmlFor="fname">Company Name :</label>
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
                <label htmlFor="lname">Designation :</label>
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
                <label htmlFor="lname">From :</label>
                <input
                  type="date"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.ln && <span className="error-message">{validaterr.ln}</span>} */}
              </div>
              <div className="col form-group">
                <label htmlFor="lname">to :</label>
                <input
                  type="date"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                {/* {validaterr.ln && <span className="error-message">{validaterr.ln}</span>} */}
              </div>
            </div>
          </fieldset> <br />
          <table>
            <tr>
              <td>
                <fieldset className="fieldset form-control" style={{ width: 400 }}>
                  <legend><b>Language Known</b></legend>
                  <div className="container_language">
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="hindi"
                            id="hindi"
                            name="lan1"
                          />
                          <label className="form-check-label">Hindi</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="read"
                            id="read1"
                            name="able1"
                          />
                          <label className="form-check-label">read</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="write"
                            id="write1"
                            name="able1"
                          />
                          <label className="form-check-label">write</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="speak"
                            id="speak1"
                            name="able1"
                          />
                          <label className="form-check-label">Speak</label >
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="english"
                            id="english"
                            name="lan2"
                          />
                          <label className="form-check-label" >English</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="read"
                            id="read2"
                            name="able2"
                          />
                          <label className="form-check-label" >read</label >
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="write"
                            id="write2"
                            name="able2"
                          />
                          <label className="form-check-label" >write</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="speak"
                            id="speak2"
                            name="able2"
                          />
                          <label className="form-check-label">Speak</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="gujarati"
                            id="gujarati"
                            name="lan3"
                          />
                          <label className="form-check-label" >Gujarati</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="read"
                            id="read3"
                            name="able3"
                          />
                          <label className="form-check-label" >read</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="write"
                            id="write3"
                            name="able3"
                          />
                          <label className="form-check-label">write</label >
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="speak"
                            id="speak3"
                            name="able3"
                          />
                          <label className="form-check-label" >Speak</label >
                        </div>
                      </div>
                    </div>
                    <p id="print"></p>
                  </div>
                </fieldset>
              </td>
              <td>
                <fieldset className="fieldset form-control" style={{ width: 500 }}>
                  <legend><b>Technologies you know</b></legend>
                  <div className="container_language_language">
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="php"
                            id="php"
                            name="tech1"
                          />
                          <label className="form-check-label">Php</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level1"
                            id="beg1"
                            value="beginner"
                          />
                          <label className="form-check-label" >Beginner</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level1"
                            id="mid1"
                            value="mideator"
                          />
                          <label className="form-check-label">Mideator</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level1"
                            id="ex1"
                            value="expert"
                          />
                          <label className="form-check-label">Expert</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="mysql"
                            id="mysql"
                            name="tech2"
                          />
                          <label className="form-check-label">Mysql</label>

                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level2"
                            id="beg2"
                            value="beginner"
                          />
                          <label className="form-check-label" >Beginner</label>

                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level2"
                            id="mid2"
                            value="mideator"
                          />
                          <label className="form-check-label" >Mideator</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level2"
                            id="ex2"
                            value="expert"
                          />
                          <label className="form-check-label" >Expert</label >
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="laravel"
                            id="laravel"
                            name="tech3"
                          />
                          <label className="form-check-label" >laravel</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level3"
                            id="beg3"
                            value="beginner"
                          />
                          <label className="form-check-label">Beginner</label >
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level3"
                            id="mid3"
                            value="mideator"
                          />
                          <label className="form-check-label" >Mideator</label >
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level3"
                            id="ex3"
                            value="expert"
                          />
                          <label className="form-check-label">Expert</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="oracle"
                            id="oracle"
                            name="tech4"
                          />
                          <label className="form-check-label" >Oracle</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level4"
                            id="beg4"
                            value="beginner"
                          />
                          <label className="form-check-label" >
                            Beginner
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level4"
                            id="mid4"
                            value="mideator"
                          />
                          <label className="form-check-label" >Mideator</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level4"
                            id="ex4"
                            value="expert"
                          />
                          <label className="form-check-label" >
                            Expert
                          </label>
                        </div>
                      </div>
                    </div>
                    <p id="showmsg"></p>
                  </div>
                </fieldset>
              </td>
            </tr>
          </table>
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
          </fieldset> <br />
          <fieldset className="fieldset form-control">
            <legend>Preferances</legend>
            <div className="row">
              <div className="col form-group">
                <label htmlFor="rel_status">Prefered Location :</label>
                <select name="rel_status" id="rel_status" value={formData.rel_status} onChange={handleChange}>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="gandhinagar">Gandhinagar</option>
                  <option value="rajkot">Rajkot</option>
                </select>
                {/* {validaterr.rel && <span className="error-message">{validaterr.rel}</span>} */}
              </div>
              <div className="col">

                <label htmlFor="lname">Notice Period :</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                <label htmlFor="lname">Expected CTC :</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="form-control"
                />
                <label htmlFor="lname">Current CTC:</label>
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
                <label htmlFor="rel_status">Department :</label>
                <select name="rel_status" id="rel_status" value={formData.rel_status} onChange={handleChange}>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                </select>
                {/* {validaterr.rel && <span className="error-message">{validaterr.rel}</span>} */}
              </div>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
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

export default Form;
