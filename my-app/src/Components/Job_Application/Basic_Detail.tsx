import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormData, State, City } from "../interfacefile";
import axios from "axios";

const Basic_Detail: React.FC = () => {
    const [state, setState] = useState([]);
    const {
        register,
        formState: { errors }, watch
    } = useFormContext<FormData>();
    const phoneValidationPattern = /^[7-9][0-9]{9}$/;
    const emailValidationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const enteredDate = watch("bd") || "string";

    const checkValidDate = (bd: string | Date) => {
        const validyear: number = 2005;
        const applieddate: Date = new Date(bd);
        const appliedyear: number = applieddate.getFullYear();
        if (appliedyear > validyear) {
            return "Your Age must be greater then 18 years";
        } else {
            return true;
        }
    }
    const fetchstate = async () => {
        const result = await axios.get(`http://localhost:3036/state`, { withCredentials: true });
        setState(result.data);
    }
    const changecity = async () => {
        console.log(state.values);
    }
    useEffect(() => {
        fetchstate();
    }, []);
    return (
        <div className="application-form-container">
            <form>
                <fieldset className="fieldset form-control">
                    <legend>Basic Detail</legend>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="fname">First Name:</label>
                            <input
                                type="text"
                                id="fname"
                                className="form-control"
                                {...register("fname", {
                                    required: "First Name is Required!!",
                                })}
                            />
                            {errors.fname && <p className="red">{errors.fname.message}</p>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="lname">Last Name:</label>
                            <input
                                type="text"
                                id="lname"
                                className="form-control"
                                {...register("lname", {
                                    required: "Last Name is Required!!",
                                })}
                            />
                            {errors.lname && <p className="red">{errors.lname.message}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="designa">Designation:</label>
                            <input
                                type="text"
                                id="designa"
                                className="form-control"
                                {...register("designa", {
                                    required: "Designation is Required!!",
                                })}
                            />
                            {errors.designa && (
                                <p className="red">{errors.designa.message}</p>
                            )}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                {...register("email", {
                                    required: "Email is Required!!",
                                    pattern: {
                                        value: emailValidationPattern,
                                        message: "Invalid email format",
                                    },
                                })}
                            />
                            {errors.email && <p className="red">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="text"
                                id="phone"
                                className="form-control"
                                {...register("phone", {
                                    required: "Mobile Number is Required!!",
                                    pattern: {
                                        value: phoneValidationPattern,
                                        message: "Number Should be Start with [7-9] ",
                                    },
                                })}
                            />
                            {errors.phone && <p className="red">{errors.phone.message}</p>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="bd">DOB:</label>
                            <input
                                type="date"
                                id="bd"
                                className="form-control"
                                {...register("bd", {
                                    required: "Birthday Date is Required!!",
                                    validate: () => checkValidDate(enteredDate) || "Please Enter Valid Date!!"
                                })}
                            />
                            {errors.bd && <p className="red">{errors.bd.message}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="address1">Address1:</label>
                            <input
                                type="text"
                                id="address1"
                                className="form-control"
                                {...register("address1", {
                                    required: "Address is Required!!",
                                })}
                            />
                            {errors.address1 && (
                                <p className="red">{errors.address1.message}</p>
                            )}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="address2">Address2:</label>
                            <input
                                type="text"
                                id="address2"
                                className="form-control"
                                {...register("address2", {
                                    required: false,
                                })}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="state">State:</label>
                            <select id="state" className="form-control" name="state" onChange={changecity}
                            >
                                {state.map((data: State) => (
                                    <option value={data.id}>{data.name}</option>
                                ))}
                            </select>
                            {errors.state && <p className="red">{errors.state.message}</p>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                className="form-control"
                                {...register("city", {
                                    required: "City is Required!!",
                                })}
                            />
                            {errors.city && <p className="red">{errors.city.message}</p>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="zipcode">Zipcode:</label>
                            <input
                                type="text"
                                id="zipcode"
                                className="form-control"
                                {...register("zipcode", {
                                    required: "Zipcode is Required!!",
                                })}
                            />
                            {errors.zipcode && (
                                <p className="red">{errors.zipcode.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-gender">
                                <label>Gender:</label>
                                <input
                                    type="radio"
                                    id="male"
                                    value="male"
                                    className="form-check-input"
                                    {...register("gender", {
                                        required: "Gender is Required!!",
                                    })}
                                />
                                <label htmlFor="male">Male</label>
                                <input
                                    type="radio"
                                    id="female"
                                    value="female"
                                    checked={true}
                                    className="form-check-input"
                                    {...register("gender", {
                                        required: "Gender is Required!!",
                                    })}
                                />
                                <label htmlFor="female">Female</label>
                                <input
                                    type="radio"
                                    id="other"
                                    {...register("gender", {
                                        required: "Gender is Required!!",
                                    })}
                                    value="other"
                                />
                                <label htmlFor="other">Other</label>
                            </div>
                            {errors.gender && <p className="red">{errors.gender.message}</p>}
                        </div>
                        <div className="col">
                            <div className=" form-group">
                                <label htmlFor="rel_status">Relationship Status:</label>
                                <select
                                    id="rel_status"
                                    {...register("rel_status", {
                                        required: "Relationship Status is Required!!",
                                    })}
                                >
                                    <option value="married">Married</option>
                                    <option value="unmarried">Unmarried</option>
                                    <option value="widow">Widow</option>
                                    <option value="divorced">Divorced</option>
                                </select>
                                {errors.rel_status && (
                                    <p className="red">{errors.rel_status.message}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Basic_Detail;
