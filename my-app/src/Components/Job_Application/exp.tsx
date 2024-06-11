import React from "react";
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { FormData } from "../interfacefile";

const Experience: React.FC = () => {
    const { register, control, formState: { errors } } = useForm<FormData>({
        mode: "onBlur", defaultValues: {
            experience: [{
                companyname: "", designation: "", from: "", to: ""
            }]
        },
    });

    const { fields, remove, append } = useFieldArray({ control, name: "experience" });
    console.log(fields);


    return (
        <div className="container_of_experience_form">
            <form>
                <fieldset className="fieldset form-control">
                    <legend>
                        <b>Work Experience</b>
                    </legend>
                    <div className="container_of_experience">
                        {fields.map((field, index) => (
                            <div className="row">
                                <div className="col">
                                    <label htmlFor={`test.${index}.companyname`}>CompanyName</label>
                                    <input

                                        {...register(`experience.${index}.companyname` as const, {
                                            required: true
                                        })}
                                        className={errors?.experience?.[index]?.companyname ? "error" : ""}
                                        defaultValue={field.companyname}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor={`test.${index}.designation`}>Designation</label>
                                    <input

                                        {...register(`experience.${index}.designation` as const, {
                                            required: true
                                        })}
                                        className={errors?.experience?.[index]?.designation ? "error" : ""}
                                        defaultValue={field.designation}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor={`test.${index}.from`}>From</label>
                                    <input

                                        {...register(`experience.${index}.from` as const, {
                                            required: true
                                        })}
                                        className={errors?.experience?.[index]?.from ? "error" : ""}
                                        defaultValue={field.from}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor={`test.${index}.to`}>To</label>
                                    <input

                                        {...register(`experience.${index}.to` as const, {
                                            required: true
                                        })}
                                        className={errors?.experience?.[index]?.to ? "error" : ""}
                                        defaultValue={field.to}
                                    />
                                </div>
                                <div className="col">

                                    <button id="del_btn" type="button" onClick={() => remove(index)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}

                        <button
                            id="insertbtn"
                            type="button"
                            onClick={() =>
                                append({
                                    companyname: "",
                                    designation: "",
                                    from: "",
                                    to: ""
                                })
                            }
                        >
                            APPEND
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Experience;
