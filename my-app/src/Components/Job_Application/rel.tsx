import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { FormData } from "../interfacefile";
const Relation: React.FC = () => {
    const { register, control, } = useForm({
        defaultValues: {
            test: [{ name: "", mobileno: "", rel: "" }]
        }
    });

    const { fields, remove, insert, } = useFieldArray({ control, name: "test" });

    return (
        <div className="application-form-container">
            <form>
                <fieldset className="fieldset form-control">
                    <legend>
                        <b>Reference Contact</b>
                    </legend>
                    <div className="container_of_reference">
                        {fields.map((item, index) => (
                            <div className="row">
                                <div className="col">
                                    <label htmlFor={`test.${index}.name`}>CompanyName</label>
                                    <Controller
                                        render={({ field }) => <input {...field} />}
                                        name={`test.${index}.name`}
                                        control={control}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor={`test.${index}.mobileno`}>Mobile No </label>
                                    <Controller
                                        render={({ field }) => <input {...field} />}
                                        name={`test.${index}.mobileno`}
                                        control={control}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor={`test.${index}.rel`}>Relation</label>
                                    <Controller
                                        render={({ field }) => <input {...field} />}
                                        name={`test.${index}.rel`}
                                        control={control}
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
                            type="button"
                            id="insertbtn"
                            onClick={() =>
                                insert(2, {
                                    name: "",
                                    mobileno: "",
                                    rel: "",
                                })
                            }
                        >
                            Add Row
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Relation;
