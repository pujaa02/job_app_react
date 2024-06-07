// import { createContext, useContext, useState } from "react";
// import { ApplicationFormData } from "../interfacefile";

// const FormContext = createContext<ApplicationFormData>({} as ApplicationFormData);

// export const useFormContext = () => {
//     return useContext(FormContext);
// };

// export const FormProvider = ({ children }) => {
//     const [formData, setFormData] = useState<ApplicationFormData>({} as ApplicationFormData);

//     const updateFormData = (updatedData: {}) => {
//         setFormData((prevData) => ({ ...prevData, ...updatedData }));
//     };

//     return (
//         <FormContext.Provider value={{ formData, updateFormData }}>
//             {children}
//         </FormContext.Provider>
//     );
// };