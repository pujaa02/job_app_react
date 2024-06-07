// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { useForm, Resolver } from "react-hook-form"
// import "./form.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ApplicationFormData } from "../interfacefile";
// import Cookies from "js-cookie";

// const Form1: React.FC = () => {
//     const navigate = useNavigate();
//     const {
//         register,
//         formState: { errors }
//     } = useForm();
//     const [formData, setFormData] = useState<ApplicationFormData>({} as ApplicationFormData);
//     const handleChange = (
//         e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//     ) => {
//         const { name, value } = e.target;
//         setFormData((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         axios({
//             url: "http://localhost:3036/submit",
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             data: JSON.stringify({
//                 formData,
//             }),
//         })
//             .then(async (res) => {
//                 const result = await res.data;
//                 if (result.msg === "success") {
//                     navigate("/fetchemp");
//                 }
//             })
//             .catch((err) => console.log(err));
//     };
//     return (
//         <div className="application-form-container">
//             <form onSubmit={handleSubmit} className="application-form">
//                 <fieldset className="fieldset form-control">
//                     <legend>Basic Detail</legend>
//                     <div className="row">
//                         <div className="col form-group">
//                             <label htmlFor="fname">First Name:</label>
//                             <input
//                                 type="text"
//                                 id="fname"
//                                 value={formData.fname}
//                                 // onChange={handleChange}
//                                 className="form-control"
//                                 {...register("fname", {
//                                     required: "firstname is required"
//                                 })}
//                             />
//                         </div>
//                         <div className="col form-group">
//                             <label htmlFor="lname">Last Name:</label>
//                             <input
//                                 type="text"
//                                 id="lname"
//                                 // name="lname"
//                                 value={formData.lname}
//                                 // onChange={handleChange}
//                                 className="form-control"
//                                 {...register("lname", {
//                                     required: true
//                                 })}
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col form-group">
//                             <label htmlFor="designation">Designation:</label>
//                             <input
//                                 type="text"
//                                 id="designation"
//                                 name="designation"
//                                 value={formData.designation}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="col form-group">
//                             <label htmlFor="email">Email:</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col form-group">
//                             <label htmlFor="phone">Phone:</label>
//                             <input
//                                 type="text"
//                                 id="phone"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="col form-group">
//                             <label htmlFor="bd">DOB:</label>
//                             <input
//                                 type="date"
//                                 id="bd"
//                                 name="bd"
//                                 value={formData.bd}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col form-group">
//                             <label htmlFor="address1">Address1:</label>
//                             <input
//                                 type="text"
//                                 id="address1"
//                                 name="address1"
//                                 value={formData.address1}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="col form-group">
//                             <label htmlFor="address2">Address2:</label>
//                             <input
//                                 type="text"
//                                 id="address2"
//                                 name="address2"
//                                 value={formData.address2}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col form-group">
//                             <label htmlFor="city">City:</label>
//                             <input
//                                 type="text"
//                                 id="city"
//                                 name="city"
//                                 value={formData.city}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="col form-group">
//                             <label htmlFor="state">State:</label>
//                             <input
//                                 type="text"
//                                 id="state"
//                                 name="state"
//                                 value={formData.state}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="col form-group">
//                             <label htmlFor="zipcode">zipcode : </label>
//                             <input
//                                 type="text"
//                                 id="zipcode"
//                                 name="zipcode"
//                                 value={formData.zipcode}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col">
//                             <div className="form-gender">
//                                 <label>Gender:</label>
//                                 <input
//                                     type="radio"
//                                     id="male"
//                                     name="gender"
//                                     value="male"
//                                     checked={formData.gender === "male"}
//                                     onChange={handleChange}
//                                     className="form-check-input"
//                                 />
//                                 <label htmlFor="male">Male</label>
//                                 <input
//                                     type="radio"
//                                     id="female"
//                                     name="gender"
//                                     value="female"
//                                     onChange={handleChange}
//                                     checked={formData.gender === "female"}
//                                     className="form-check-input"
//                                 />
//                                 <label htmlFor="female">Female</label>
//                                 <input
//                                     type="radio"
//                                     id="other"
//                                     name="gender"
//                                     value="other"
//                                     onChange={handleChange}
//                                     checked={formData.gender === "other"}
//                                     className="form-check-input"
//                                 />
//                                 <label htmlFor="other">Other</label>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className=" form-group">
//                                 <label htmlFor="rel_status">Relationship Status:</label>
//                                 <select
//                                     name="rel_status"
//                                     id="rel_status"
//                                     value={formData.rel_status}
//                                     onChange={handleChange}
//                                 >
//                                     <option value="married">Married</option>
//                                     <option value="unmarried">Unmarried</option>
//                                     <option value="widow">Widow</option>
//                                     <option value="divorced">Divorced</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 </fieldset>{" "}
//                 <br />
//             </form>
//         </div>
//     );
// };

// export default Form1;
