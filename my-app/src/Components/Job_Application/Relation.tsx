import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../interfacefile";
const Relation: React.FC = () => {
    const { register, formState: { errors } } = useFormContext<FormData>();
    return (
        <div className="application-form-container">
            <form >
                <fieldset className="fieldset form-control">
                    <legend>
                        <b>Reference Contact</b>
                    </legend>
                    <div className="container_of_reference">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name1"> Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name1"
                                    {...register("name1", {
                                        required: "Required"
                                    })}
                                />
                                {errors.name1 && <p className="red">{errors.name1.message}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="mobile_no1">Contact Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobileno1"
                                    {...register("mobileno1", {
                                        required: "Required"
                                    })}
                                />
                                {errors.mobileno1 && <p className="red">{errors.mobileno1.message}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="rel1">Relation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="rel1"
                                    {...register("rel1", {
                                        required: "Required"
                                    })}
                                />
                                {errors.rel1 && <p className="red">{errors.rel1.message}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name2"> Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name2"
                                    {...register("name2", {
                                        required: false
                                    })}
                                />

                            </div>
                            <div className="col">
                                <label htmlFor="mobile_no2">Contact Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobileno2"
                                    {...register("mobileno2", {
                                        required: false
                                    })}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="rel2">Relation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="rel2"
                                    {...register("rel2", {
                                        required: false
                                    })}
                                />
                               
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name3"> Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name3"
                                    {...register("name3", {
                                        required: false
                                    })}
                                />
                              
                            </div>
                            <div className="col">
                                <label htmlFor="mobile_no3">Contact Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobileno3"
                                    {...register("mobileno3", {
                                        required: false
                                    })}
                                />
                               
                            </div>
                            <div className="col">
                                <label htmlFor="rel3">Relation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="rel3"
                                    {...register("rel3", {
                                        required: false
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Relation;