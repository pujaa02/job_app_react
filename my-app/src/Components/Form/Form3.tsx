// import React, { useState, ChangeEvent, FormEvent } from "react";
// import "./form.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ApplicationFormData, validateformdata } from "../interfacefile";
// import Cookies from "js-cookie";

// const Form3: React.FC = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<ApplicationFormData>({
//     fname: "",
//     lname: "",
//     designation: "",
//     email: "",
//     phone: "",
//     gender: "",
//     rel_status: "",
//     address1: "",
//     address2: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     bd: "",
//   });

//     const handleChange = (
//       e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//     ) => {
//       const { name, value } = e.target;
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     };

//     const handleSubmit = (e: FormEvent) => {
//       e.preventDefault();

//       axios({
//         url: "http://localhost:3036/submit",
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         data: JSON.stringify({
//           formData,
//         }),
//       })
//         .then(async (res) => {
//           const result = await res.data;
//           if (result.msg === "success") {
//             navigate("/fetchemp");
//           }
//         })
//         .catch((err) => console.log(err));
//     };
//     return (
//       <div className="application-form-container">
//         <form onSubmit={handleSubmit} className="application-form">
//           <fieldset className="fieldset form-control" >
//             <legend>
//               <b>Work Experience</b>
//             </legend>
//             <div className="container_of_experience">
//               <div className="row">
//                 <div className="col">
//                   <label htmlFor="company_name">Company name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="companyname1"
//                     name="companyname"
//                   />
//                   <p id="p28" className="workerr1"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="designation">Designation</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="designation1"
//                     name="designation"
//                   />
//                   <p id="p29" className="workerr1"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="date">From</label>
//                   <input
//                     type="text"
//                     className="duration form-control"
//                     id="date11"
//                     name="from"
//                   />
//                   <p id="p30" className="workerr1"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="date">To</label>
//                   <input
//                     type="text"
//                     id="date12"
//                     name="to"
//                     className="duration form-control"
//                   />
//                   <p id="p31" className="workerr1"></p>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   <label htmlFor="company_name">Company name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="companyname2"
//                     name="companyname"
//                   />
//                   <p id="p32" className="workerr2"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="designation">Designation</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="designation2"
//                     name="designation"
//                   />
//                   <p id="p33" className="workerr2"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="date">From</label>
//                   <input
//                     type="text"
//                     id="date21"
//                     name="from"
//                     className="duration form-control"
//                   />
//                   <p id="p34" className="workerr2"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="date">To</label>
//                   <input
//                     type="text"
//                     id="date22"
//                     name="to"
//                     className="duration form-control"
//                   />
//                   <p id="p35" className="workerr2"></p>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   <label htmlFor="company_name">Company name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="companyname3"
//                     name="companyname"
//                   />
//                   <p id="p36" className="workerr3"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="designation">Designation</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="designation3"
//                     name="designation"
//                   />
//                   <p id="p37" className="workerr3"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="date">From</label>
//                   <input
//                     type="text"
//                     id="date31"
//                     name="from"
//                     className="duration form-control"
//                   />
//                   <p id="p38" className="workerr3"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="date">To</label>
//                   <input
//                     type="text"
//                     id="date32"
//                     name="to"
//                     className="duration form-control"
//                   />
//                   <p id="p39" className="workerr3"></p>
//                 </div>
//               </div>
//             </div>
//           </fieldset>
//           <br />
//         </form>
//       </div>
//     );
// };

// export default Form3;
