// import React, { useState, ChangeEvent, FormEvent } from "react";
// import "./form.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ApplicationFormData, validateformdata } from "../interfacefile";
// import Cookies from "js-cookie";

// const Form6: React.FC = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState<ApplicationFormData>({
//         fname: "",
//         lname: "",
//         designation: "",
//         email: "",
//         phone: "",
//         gender: "",
//         rel_status: "",
//         address1: "",
//         address2: "",
//         city: "",
//         state: "",
//         zipcode: "",
//         bd: "",
//     });

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
//                     <legend>Preferances</legend>
//                     <div className="row">
//                         <div className="col form-group">
//                             <label htmlFor="rel_status">Prefered Location :</label>
//                             <select
//                                 name="pre_loc"
//                                 id="pre_loc"
//                                 value={formData.rel_status}
//                                 onChange={handleChange}
//                             >
//                                 <option value="ahmedabad">Ahmedabad</option>
//                                 <option value="gandhinagar">Gandhinagar</option>
//                                 <option value="rajkot">Rajkot</option>
//                             </select>
//                         </div>
//                         <div className="col">
//                             <label htmlFor="lname">Notice Period :</label>
//                             <input
//                                 type="text"
//                                 id="notice"
//                                 name="notice"
//                                 value={formData.lname}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                             <label htmlFor="lname">Expected CTC :</label>
//                             <input
//                                 type="text"
//                                 id="expect"
//                                 name="expect"
//                                 value={formData.lname}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                             <label htmlFor="lname">Current CTC:</label>
//                             <input
//                                 type="text"
//                                 id="current"
//                                 name="current"
//                                 value={formData.lname}
//                                 onChange={handleChange}
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="col form-group">
//                             <label htmlFor="depa">Department :</label>
//                             <select
//                                 name="depa"
//                                 id="depa"
//                                 value={formData.rel_status}
//                                 onChange={handleChange}
//                             >
//                                 <option value="development">Development</option>
//                                 <option value="design">Design</option>
//                                 <option value="marketing">Marketing</option>
//                             </select>
//                         </div>
//                     </div>
//                 </fieldset>
//                 <button type="submit" className="btn btn-primary">
//                     Submit Application
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Form6;
