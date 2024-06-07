// // src/steps/PersonalInfo.js
// import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
// import { useFormContext } from "../FormContext";

// export const Basic_detail = () => {
//     const { register, handleSubmit } = useForm();
//     const { updateFormData } = useFormContext();
//     const history = useHistory();

//     const onSubmit = (data) => {
//         updateFormData(data);
//         history.push("/employment");
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 <label htmlFor="name">Name</label>
//                 <input {...register("name")} id="name" required />
//             </div>
//             <div>
//                 <label htmlFor="email">Email</label>
//                 <input {...register("email")} id="email" required />
//             </div>
//             <button type="submit">Next</button>
//         </form>
//     );
// };
