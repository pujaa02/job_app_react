import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../interfacefile";
const Education: React.FC = () => {
    const { register, formState: { errors } } = useFormContext<FormData>();
    return (
        <div className="application-form-container">
            <form >
                <fieldset className="fieldset form-control">
                    <legend>
                        <b>Education_details</b>
                    </legend>
                    <div className="container_of_education">
                        <h5>SSC result</h5>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="board_name">Name of Board</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="board1"
                                    {...register("board_name1", {
                                        required: "Required!!"
                                    })}
                                />
                                {errors.board_name1 && <p className="red">{errors.board_name1.message}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="passing_year">Passing year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="py1"
                                    {...register("py1", {
                                        required: "Required!!"
                                    })}
                                />
                                {errors.py1 && <p className="red">{errors.py1.message}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="pecentage">Percentage</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="pecentage1"
                                    {...register("percentage1", {
                                        required: "Required!!"
                                    })}
                                />
                                {errors.percentage1 && <p className="red">{errors.percentage1.message}</p>}
                            </div>
                        </div>
                        <hr />
                        <h5>HSC result</h5>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="board_name2">Name of Board</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="board2"
                                    {...register("board_name2", {
                                        required: "Required!!"
                                    })}
                                />
                                {errors.board_name2 && <p className="red">{errors.board_name2.message}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="passing_year">Passing year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="py2"
                                    {...register("py2", {
                                        required: "Required!!"
                                    })}
                                />
                                {errors.py2 && <p className="red">{errors.py2.message}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="pecentage">Percentage</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="pecentage2"
                                    {...register("percentage2", {
                                        required: "Required!!"
                                    })}
                                />
                                {errors.percentage2 && <p className="red" >{errors.percentage2.message}</p>}
                            </div>
                        </div>
                        <hr />
                        <h5>Bachelor degree</h5>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="course_name">Cource Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="course1"
                                    {...register("board_name3", {
                                        required: "Required!!"
                                    })}
                                />
                                {errors.board_name3 && <p className="red" >{errors.board_name3.message}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="passing_year">Passing year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="py11"
                                    {...register("py3", {
                                        required: "Required!!"
                                    })}
                                />
                                {errors.py3 && <p className="red">{errors.py3.message}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="pecentage">Percentage</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="pecentage11"
                                    {...register("percentage3", {
                                        required: "Required!!"
                                    })}
                                />
                                {errors.percentage3 && <p className="red">{errors.percentage3.message}</p>}
                            </div>
                        </div>
                        <hr />
                        <h5>Master degree</h5>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="course_name">Cource Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="course2"
                                    {...register("board_name4", {
                                        required: false
                                    })}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="passing_year">Passing year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="py22"
                                    {...register("py4", {
                                        required: false
                                    })}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="pecentage">Percentage</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="pecentage22"
                                    {...register("percentage4", {
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

export default Education;