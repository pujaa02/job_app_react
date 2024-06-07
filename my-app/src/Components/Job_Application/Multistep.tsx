import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Basic_Detail from "./Basic_Detail";
import Education from "./Education";
import Experience from "./Experience";
import Language from "./Language";
import Relation from "./Relation";
import Preferance from "./Preferences";
import "./form.css";
import { FormData } from "../interfacefile";
import axios from "axios";

// const schema = yup.object().shape({
//     fname: yup.string().required('FirstName is Required!!'),
//     lname: yup.string().required('LastName is Required!!'),
//     designa: yup.string().required('Designation is Required!!'),
//     bd: yup.string().required('Date is Required!!'),
//     email: yup.string().email("Invalid Email").required('Designation is Required!!'),
//     phone: yup.string().max(10, "Invalid Number").min(10, "Invalid Number").required('Designation is Required!!'),
//     zipcode: yup.string().required('Zipcode is Required!!'),
//     address1: yup.string().required('Address is Required!!'),
//     city: yup.string().required('City is Required!!'),
//     state: yup.string().required('State is Required!!'),
//     gender: yup.string().required('Gender is Required!!'),
//     notice: yup.string().required('Notice Period is Required!!'),
//     exctc: yup.string().required('Expected CTC is Required!!'),
//     curctc: yup.string().required('Current CTC is Required!!'),
//     name1: yup.string().required('FirstName is Required!!'),
//     mobileno1: yup.string().required('FirstName is Required!!') ,
//     rel1: yup.string().required('FirstName is Required!!') ,
//     board_name: yup.string().required('FirstName is Required!!') ,
//     py: yup.string().required('FirstName is Required!!'),
//     percentage: yup.string().required('FirstName is Required!!') ,
//     companyname: yup.string().required('FirstName is Required!!'),
//     designation: yup.string().required('FirstName is Required!!'),
//     from: yup.string().required('FirstName is Required!!'),
//     to: yup.string().required('FirstName is Required!!') ,
//     name: yup.string().required('FirstName is Required!!'),
//     mobileno: yup.string().required('FirstName is Required!!') ,
//     rel: yup.string().required('FirstName is Required!!') ,
// })
function Multistepform() {
    const [step, setStep] = useState<number>(1);
    const [formdata, setFormdata] = useState<FormData>({} as FormData);
    const method = useForm<FormData>({ mode: 'onBlur', defaultValues: formdata });

    const prevstep = () => {
        setFormdata((prev) => ({ ...prev, ...method.getValues() }))
        setStep(step - 1);
    }
    const nextstep = async () => {
        const isValid = await method.trigger();
        if (isValid) {
            setFormdata((prev) => ({ ...prev, ...method.getValues() }))
            setStep(step + 1);
        }
    }
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data, "data");
        const result = await axios.post(`http://localhost:3036/insertform`, data, { withCredentials: true });
    }
    return (
        <FormProvider {...method}>
            <form onSubmit={method.handleSubmit(onSubmit)} className="application-form">
                <div className="btn-div">
                    {step > 1 && <button type="button" onClick={prevstep} className="btn-of-form">Back</button>}
                    {step < 6 && <button type="button" onClick={nextstep} className="btn-of-form">Next</button>}
                    {step === 6 && <button type="submit" className="btn-of-form">Submit</button>}
                </div>
                {step === 1 && <Basic_Detail />}
                {step === 2 && <Education />}
                {step === 3 && <Experience />}
                {step === 4 && <Language />}
                {step === 5 && <Relation />}
                {step === 6 && <Preferance />}
            </form>
        </FormProvider>
    );
}

export default Multistepform;