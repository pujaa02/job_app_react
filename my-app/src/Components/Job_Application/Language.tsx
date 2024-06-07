import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../interfacefile";
const Language: React.FC = () => {
    const { register, formState: { errors } } = useFormContext<FormData>();
    return (
        <div className="application-form-container">
            <form>
                <table>
                    <tr>
                        <td>
                            <fieldset
                                className="fieldset form-control"
                                style={{ width: 400 }}
                            >
                                <legend>
                                    <b>Language Known</b>
                                </legend>
                                <div className="container_language">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="hindi"
                                                    id="hindi"
                                                    {...register("hindi", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">Hindi</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="read"
                                                    id="read1"
                                                    {...register("read1", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">read</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="write"
                                                    id="write1"
                                                    {...register("write1", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">write</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="speak"
                                                    id="speak1"
                                                    {...register("speak1", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">Speak</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="english"
                                                    id="english"
                                                    {...register("english", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">English</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="read"
                                                    id="read2"
                                                    {...register("read2", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">read</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="write"
                                                    id="write2"
                                                    {...register("write2", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">write</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="speak"
                                                    id="speak2"
                                                    {...register("speak2", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">Speak</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="gujarati"
                                                    id="gujarati"
                                                    {...register("gujarati", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">Gujarati</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="read"
                                                    id="read3"
                                                    {...register("read3", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">read</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="write"
                                                    id="write3"
                                                    {...register("write3", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">write</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="speak"
                                                    id="speak3"
                                                    {...register("speak3", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">Speak</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p id="print"></p>
                                </div>
                            </fieldset>
                        </td>
                        <td>
                            <fieldset
                                className="fieldset form-control"
                                style={{ width: 500 }}
                            >
                                <legend>
                                    <b>Technologies you know</b>
                                </legend>
                                <div className="container_language_language">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="php"
                                                    id="php"
                                                    {...register("php", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">Php</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level1", {
                                                        required: false
                                                    })}
                                                    id="beg1"
                                                    value="beginner"
                                                />
                                                <label className="form-check-label">Beginner</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level1", {
                                                        required: false
                                                    })}
                                                    id="mid1"
                                                    value="mideator"
                                                />
                                                <label className="form-check-label">Mideator</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level1", {
                                                        required: false
                                                    })}
                                                    id="ex1"
                                                    value="expert"
                                                />
                                                <label className="form-check-label">Expert</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="mysql"
                                                    id="mysql"
                                                    {...register("mysql", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">Mysql</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level2", {
                                                        required: false
                                                    })}
                                                    id="beg2"
                                                    value="beginner"
                                                />
                                                <label className="form-check-label">Beginner</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level2", {
                                                        required: false
                                                    })}
                                                    id="mid2"
                                                    value="mideator"
                                                />
                                                <label className="form-check-label">Mideator</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level2", {
                                                        required: false
                                                    })}
                                                    id="ex2"
                                                    value="expert"
                                                />
                                                <label className="form-check-label">Expert</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="laravel"
                                                    id="laravel"
                                                    {...register("laravel", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">laravel</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level3", {
                                                        required: false
                                                    })}
                                                    id="beg3"
                                                    value="beginner"
                                                />
                                                <label className="form-check-label">Beginner</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level3", {
                                                        required: false
                                                    })}
                                                    id="mid3"
                                                    value="mideator"
                                                />
                                                <label className="form-check-label">Mideator</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level3", {
                                                        required: false
                                                    })}
                                                    id="ex3"
                                                    value="expert"
                                                />
                                                <label className="form-check-label">Expert</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value="oracle"
                                                    id="oracle"
                                                    {...register("oracle", {
                                                        required: false
                                                    })}
                                                />
                                                <label className="form-check-label">Oracle</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level4", {
                                                        required: false
                                                    })}
                                                    id="beg4"
                                                    value="beginner"
                                                />
                                                <label className="form-check-label">Beginner</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level4", {
                                                        required: false
                                                    })}
                                                    id="mid4"
                                                    value="mideator"
                                                />
                                                <label className="form-check-label">Mideator</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    {...register("level4", {
                                                        required: false
                                                    })}
                                                    id="ex4"
                                                    value="expert"
                                                />
                                                <label className="form-check-label">Expert</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p id="showmsg"></p>
                                </div>
                            </fieldset>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Language;