import React, { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import Basic_Detail from "./Basic_Detail";
import Education from "./Education";
import Experience from "./Experience";
import Language from "./Language";
import Relation from "./Relation";
import Preferance from "./Preferences";
import "./form.css";
import { FormData, propState } from "../interfacefile";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Multistepform() {
    const location = useLocation();
    const [id, setid] = useState<string>("")
    const navigate = useNavigate();
    const [step, setStep] = useState<number>(1);
    const [formdata, setFormdata] = useState<FormData>({} as FormData);
    const method = useForm<FormData>({ mode: 'onBlur', defaultValues: formdata });

    useEffect(() => {
        if (location.state) {
            const { id } = location.state as propState;
            setid(id);
        }
    }, [location.state])
    useEffect(() => {
        if (id) {
            const getempdata = async () => {
                try {
                    console.log(id);
                    const response = await axios.get(`http://localhost:3036/fetchempdata/${id}`);
                    console.log(response);

                    // const emp = (response.data.result);
                    // setFormData(emp);
                } catch (error) {
                    console.log(error);
                }
            }
            getempdata();
        }
    }, [id])

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
        if (result.data.msg === "Success") {
            navigate("/fetchemp")
        }
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