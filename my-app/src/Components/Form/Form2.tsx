import React, { useState, ChangeEvent, FormEvent } from "react";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApplicationFormData, validateformdata } from "../interfacefile";
import Cookies from "js-cookie";

const Form2: React.FC = () => {
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

  const token = document.cookie;
  if (!token) {
    const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      axios({
        url: "http://localhost:3036/submit",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          formData,
        }),
      })
        .then(async (res) => {
          const result = await res.data;
          if (result.msg === "success") {
            navigate("/fetchemp");
          }
        })
        .catch((err) => console.log(err));
    };
    const logout = () => {
      const token = Cookies.remove("token");
      if (!document.cookie) {
        navigate("/login");
      }
    };
    return (
      <div className="application-form-container">
        <p className="logout" onClick={logout}>
          Log Out
        </p>
        <form onSubmit={handleSubmit} className="application-form">
          <fieldset className="fieldset form-control">
            <legend>
              <b>Education_details</b>
            </legend>
            <div className="container">
              <h5>SSC result</h5>
              <div className="row">
                <div className="col">
                  <label htmlFor="board_name">Name of Board</label>
                  <input
                    type="text"
                    className="form-control"
                    id="board1"
                    name="board_name"
                  />
                  <p id="p14" className="ssc"></p>
                </div>
                <div className="col">
                  <label htmlFor="passing_year">Passing year</label>
                  <input
                    type="text"
                    className="form-control"
                    id="py1"
                    name="py"
                  />
                  <p id="p15" className="ssc"></p>
                </div>
                <div className="col">
                  <label htmlFor="pecentage">Percentage</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pecentage1"
                    name="percentage"
                  />
                  <p id="p16" className="ssc"></p>
                </div>
              </div>
              <hr />
              <h5>HSC result</h5>
              <div className="row">
                <div className="col">
                  <label htmlFor="board_name">Name of Board</label>
                  <input
                    type="text"
                    className="form-control"
                    id="board2"
                    name="board_name"
                  />
                  <p id="p17" className="hsc"></p>
                </div>
                <div className="col">
                  <label htmlFor="passing_year">Passing year</label>
                  <input
                    type="text"
                    className="form-control"
                    id="py2"
                    name="py"
                  />
                  <p id="p18" className="hsc"></p>
                </div>
                <div className="col">
                  <label htmlFor="pecentage">Percentage</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pecentage2"
                    name="percentage"
                  />
                  <p id="p19" className="hsc"></p>
                </div>
              </div>
              <hr />
              <h5>Bachelor degree</h5>
              <div className="row">
                <div className="col">
                  <label htmlFor="course_name">Cource Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="course1"
                    name="board_name"
                  />
                  <p id="p20" className="bachelor"></p>
                </div>
                <div className="col">
                  <label htmlFor="passing_year">Passing year</label>
                  <input
                    type="text"
                    className="form-control"
                    name="py"
                    id="py11"
                  />
                  <p id="p22" className="bachelor"></p>
                </div>
                <div className="col">
                  <label htmlFor="pecentage">Percentage</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pecentage11"
                    name="percentage"
                  />
                  <p id="p23" className="bachelor"></p>
                </div>
              </div>
              <hr />
              <h5>Master degree</h5>
              <div className="row">
                <div className="col">
                  <label htmlFor="course_name">Cource Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="course2"
                    name="board_name"
                  />
                  <p id="p24" className="master"></p>
                </div>
                <div className="col">
                  <label htmlFor="passing_year">Passing year</label>
                  <input
                    type="text"
                    className="form-control"
                    id="py22"
                    name="py"
                  />
                  <p id="p26" className="master"></p>
                </div>
                <div className="col">
                  <label htmlFor="pecentage">Percentage</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pecentage22"
                    name="percentage"
                  />
                  <p id="p27" className="master"></p>
                </div>
              </div>
            </div>
          </fieldset>
          <br />
        </form>
      </div>
    );
  } else {
    return (
      <div className="denied">
        <h1>Access Denied!!</h1>
      </div>
    );
  }
};

export default Form2;
