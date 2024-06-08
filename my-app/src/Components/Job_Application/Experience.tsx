import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../interfacefile";
const Experience: React.FC = () => {
    const { register, formState: { errors } } = useFormContext<FormData>();
    return (
        <div className="application-form-container">
            <form >
                <fieldset className="fieldset form-control" >
                    <legend>
                        <b>Work Experience</b>
                    </legend>
                    <div className="container_of_experience">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="company_name">Company name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="companyname1"
                                    {...register("companyname1", {
                                        required: false
                                    })}
                                />

                            </div>
                            <div className="col">
                                <label htmlFor="designation">Designation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="designation1"
                                    {...register("designation1", {
                                        required: false
                                    })}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="date">From</label>
                                <input
                                    type="date"
                                    className="duration form-control"
                                    id="date11"
                                    {...register("date11", {
                                        required: false
                                    })}
                                />

                            </div>
                            <div className="col">
                                <label htmlFor="date">To</label>
                                <input
                                    type="date"
                                    id="date12"
                                    {...register("date12", {
                                        required: false
                                    })}
                                    className="duration form-control"
                                />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="company_name">Company name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="companyname2"
                                    {...register("companyname2", {
                                        required: false
                                    })}
                                />

                            </div>
                            <div className="col">
                                <label htmlFor="designation">Designation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="designation2"
                                    {...register("designation2", {
                                        required: false
                                    })}
                                />

                            </div>
                            <div className="col">
                                <label htmlFor="date">From</label>
                                <input
                                    type="date"
                                    id="date21"
                                    {...register("date21", {
                                        required: false
                                    })}
                                    className="duration form-control"
                                />

                            </div>
                            <div className="col">
                                <label htmlFor="date">To</label>
                                <input
                                    type="date"
                                    id="date22"
                                    {...register("date22", {
                                        required: false
                                    })}
                                    className="duration form-control"
                                />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="company_name">Company name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="companyname3"
                                    {...register("companyname3", {
                                        required: false
                                    })}
                                />

                            </div>
                            <div className="col">
                                <label htmlFor="designation">Designation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="designation3"
                                    {...register("designation3", {
                                        required: false
                                    })}
                                />

                            </div>
                            <div className="col">
                                <label htmlFor="date">From</label>
                                <input
                                    type="date"
                                    id="date31"
                                    {...register("date31", {
                                        required: false
                                    })}
                                    className="duration form-control"
                                />

                            </div>
                            <div className="col">
                                <label htmlFor="date">To</label>
                                <input
                                    type="date"
                                    id="date32"
                                    {...register("date32", {
                                        required: false
                                    })}
                                    className="duration form-control"
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Experience;