import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../interfacefile";
const Preferance: React.FC = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<FormData>();
    const locationvalue = [
        { value: '0', label: 'Ahmedabad' },
        { value: '1', label: 'Rajkot' },
        { value: '2', label: 'Gandhinagar' },
        { value: '3', label: 'Vadodara' }
    ]
    return (
        <div className="application-form-container">
            <form>
                <fieldset className="fieldset form-control">
                    <legend>Preferances</legend>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="rel_status">Prefered Location :</label>
                            <select
                                id="pre_loc"
                                {...register("preloc", {
                                    required: "Required",
                                })}
                            >
                                <option value="ahmedabad">Ahmedabad</option>
                                <option value="gandhinagar">Gandhinagar</option>
                                <option value="rajkot">Rajkot</option>
                            </select>
                            {errors.preloc && <p className="red">{errors.preloc.message}</p>}
                        </div>
                        <div className="col">
                            <label htmlFor="lname">Notice Period :</label>
                            <input
                                type="text"
                                id="notice"
                                className="form-control"
                                {...register("notice", {
                                    required: "Required",
                                })}
                            />
                            {errors.notice && <p className="red">{errors.notice.message}</p>}
                            <label htmlFor="lname">Expected CTC :</label>
                            <input
                                type="number"
                                id="expect"
                                className="form-control"
                                {...register("exctc", {
                                    required: "Required",
                                })}
                            />
                            {errors.exctc && <p className="red">{errors.exctc.message}</p>}
                            <label htmlFor="lname">Current CTC:</label>
                            <input
                                type="number"
                                id="current"
                                className="form-control"
                                {...register("curctc", {
                                    required: "Required",
                                })}
                            />
                            {errors.curctc && <p className="red">{errors.curctc.message}</p>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="depa">Department :</label>
                            <select
                                id="depa"
                                {...register("depa", {
                                    required: "Required",
                                })}
                            >
                                <option value="development">Development</option>
                                <option value="design">Design</option>
                                <option value="marketing">Marketing</option>
                            </select>
                            {errors.depa && <p className="red">{errors.depa.message}</p>}
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Preferance;
