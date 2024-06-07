// import React, { useState, ChangeEvent, FormEvent } from "react";
// import "./form.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ApplicationFormData, validateformdata } from "../interfacefile";
// import Cookies from "js-cookie";

// const Form5: React.FC = () => {
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
//           <fieldset className="fieldset form-control">
//             <legend>
//               <b>Reference Contact</b>
//             </legend>
//             <div className="container_of_reference">
//               <div className="row">
//                 <div className="col">
//                   <label htmlFor="name"> Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name1"
//                     name="name"
//                   />
//                   <p className="ref1"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="mobile_no">Contact Number</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="mobileno1"
//                     name="mobileno"
//                   />
//                   <p className="ref1"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="rel">Relation</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="rel1"
//                     name="rel"
//                   />
//                   <p className="ref1"></p>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   <label htmlFor="name"> Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name2"
//                     name="name"
//                   />
//                   <p className="ref2"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="mobile_no">Contact Number</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="mobileno2"
//                     name="mobileno"
//                   />
//                   <p className="ref2"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="rel">Relation</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="rel2"
//                     name="rel"
//                   />
//                   <p className="ref2"></p>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   <label htmlFor="name"> Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name3"
//                     name="name"
//                   />
//                   <p className="ref3"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="mobile_no">Contact Number</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="mobileno3"
//                     name="mobileno"
//                   />
//                   <p className="ref3"></p>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="rel">Relation</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="rel3"
//                     name="rel"
//                   />
//                   <p className="ref3"></p>
//                 </div>
//               </div>
//             </div>
//           </fieldset>
//         </form>
//       </div>
//     );
// };

// export default Form5;
