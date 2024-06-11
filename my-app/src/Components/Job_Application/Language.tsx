import React, { useEffect, useState } from "react";
import { useFormContext, useWatch, FieldError } from "react-hook-form";
import { FormData } from "../interfacefile";
const Language: React.FC = () => {
    const {
        register,
        formState: { errors },
        setError,
        clearErrors,
        getValues,
    } = useFormContext<FormData>();

    const parentLanguages = useWatch<FormData>({ name: ["hindi", "english", "gujarati"] });
    const childOptions = useWatch<FormData>({ name: ["read1", "write1", "speak1", "read2", "write2", "speak2", "read3", "write3", "speak3"] });
    const technologies = useWatch<FormData>({ name: ["php", "mysql", "laravel", "oracle"] });
    const levels = useWatch<FormData>({ name: ["level1", "level2", "level3", "level4"] });

    useEffect(() => {
        const validateLanguage = (language: keyof FormData, reads: (keyof FormData)[], writes: (keyof FormData)[], speaks: (keyof FormData)[]) => {
            const isParentSelected = getValues(language);
            const isAnyChildSelected = reads.some((read) => getValues(read)) || writes.some((write) => getValues(write)) || speaks.some((speak) => getValues(speak));

            if (isParentSelected && !isAnyChildSelected) {
                setError(language, { type: "manual", message: "At least one child option must be selected" });
            } else if (isAnyChildSelected && !isParentSelected) {
                setError(language, { type: "manual", message: "Language must be Selected!!" });
            } else {
                clearErrors(language);
            }
        };

        validateLanguage("hindi", ["read1"], ["write1"], ["speak1"]);
        validateLanguage("english", ["read2"], ["write2"], ["speak2"]);
        validateLanguage("gujarati", ["read3"], ["write3"], ["speak3"]);
    }, [parentLanguages, childOptions, setError, clearErrors, getValues]);

    useEffect(() => {
        const validateTechnology = (tech: keyof FormData, level: keyof FormData) => {
            const isTechSelected = getValues(tech);
            const isLevelSelected = getValues(level);

            if (isTechSelected && !isLevelSelected) {
                setError(tech, { type: "manual", message: "Corresponding level must be selected" });
            } else if (isLevelSelected && !isTechSelected) {
                setError(tech, { type: "manual", message: "Corresponding technology must be selected" });
            } else {
                clearErrors(tech);

            }
        };

        validateTechnology("php", "level1");
        validateTechnology("mysql", "level2");
        validateTechnology("laravel", "level3");
        validateTechnology("oracle", "level4");
    }, [technologies, levels, setError, clearErrors, getValues]);


    return (
        <div className="application-form-container">
            <form>
                <table>
                    <tr>
                        <td>
                            <fieldset className="fieldset form-control" style={{ width: 400 }}>
                                <legend><b>Language Known</b></legend>
                                <div className="container_language">

                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="hindi" id="hindi" {...register("hindi")} />
                                                <label className="form-check-label">Hindi</label>
                                                {errors.hindi && <span className="error-message">{(errors.hindi as FieldError).message}</span>}
                                            </div>
                                        </div>
                                        <div className="col"><input className="form-check-input" type="checkbox" value="read" id="read1" {...register("read1")} /><label className="form-check-label">read</label></div>
                                        <div className="col"><input className="form-check-input" type="checkbox" value="write" id="write1" {...register("write1")} /><label className="form-check-label">write</label></div>
                                        <div className="col"><input className="form-check-input" type="checkbox" value="speak" id="speak1" {...register("speak1")} /><label className="form-check-label">Speak</label></div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="english" id="english" {...register("english")} />
                                                <label className="form-check-label">English</label>
                                                {errors.english && <span className="error-message">{(errors.english as FieldError).message}</span>}
                                            </div>
                                        </div>
                                        <div className="col"><input className="form-check-input" type="checkbox" value="read" id="read2" {...register("read2")} /><label className="form-check-label">read</label></div>
                                        <div className="col"><input className="form-check-input" type="checkbox" value="write" id="write2" {...register("write2")} /><label className="form-check-label">write</label></div>
                                        <div className="col"><input className="form-check-input" type="checkbox" value="speak" id="speak2" {...register("speak2")} /><label className="form-check-label">Speak</label></div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="gujarati" id="gujarati" {...register("gujarati")} />
                                                <label className="form-check-label">Gujarati</label>
                                                {errors.gujarati && <span className="error-message">{(errors.gujarati as FieldError).message}</span>}
                                            </div>
                                        </div>
                                        <div className="col"><input className="form-check-input" type="checkbox" value="read" id="read3" {...register("read3")} /><label className="form-check-label">read</label></div>
                                        <div className="col"><input className="form-check-input" type="checkbox" value="write" id="write3" {...register("write3")} /><label className="form-check-label">write</label></div>
                                        <div className="col"><input className="form-check-input" type="checkbox" value="speak" id="speak3" {...register("speak3")} /><label className="form-check-label">Speak</label></div>
                                    </div>
                                </div>
                            </fieldset>
                        </td>
                        <td>
                            <fieldset className="fieldset form-control" style={{ width: 500 }}>
                                <legend><b>Technologies you know</b></legend>
                                <div className="container_language_language">
                                    <div className="row">
                                        <div className="col">
                                            <input className="form-check-input" type="checkbox" value="php" id="php" {...register("php")} />
                                            <label className="form-check-label">Php</label>
                                            {errors.php && <span className="error-message">{(errors.php as FieldError).message}</span>}
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level1")} id="beg1" value="beginner" />
                                            <label className="form-check-label">Beginner</label>
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level1")} id="mid1" value="mideator" />
                                            <label className="form-check-label">Mideator</label>
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level1")} id="ex1" value="expert" />
                                            <label className="form-check-label">Expert</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <input className="form-check-input" type="checkbox" value="mysql" id="mysql" {...register("mysql")} />
                                            <label className="form-check-label">Mysql</label>
                                            {errors.mysql && <span className="error-message">{(errors.mysql as FieldError).message}</span>}
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level2")} id="beg2" value="beginner" />
                                            <label className="form-check-label">Beginner</label>
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level2")} id="mid2" value="mideator" />
                                            <label className="form-check-label">Mideator</label>
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level2")} id="ex2" value="expert" />
                                            <label className="form-check-label">Expert</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <input className="form-check-input" type="checkbox" value="laravel" id="laravel" {...register("laravel")} />
                                            <label className="form-check-label">laravel</label>
                                            {errors.laravel && <span className="error-message">{(errors.laravel as FieldError).message}</span>}
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level3")} id="beg3" value="beginner" />
                                            <label className="form-check-label">Beginner</label>
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level3")} id="mid3" value="mideator" />
                                            <label className="form-check-label">Mideator</label>
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level3")} id="ex3" value="expert" />
                                            <label className="form-check-label">Expert</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <input className="form-check-input" type="checkbox" value="oracle" id="oracle" {...register("oracle")} />
                                            <label className="form-check-label">Oracle</label>
                                            {errors.oracle && <span className="error-message">{(errors.oracle as FieldError).message}</span>}
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level4")} id="beg4" value="beginner" />
                                            <label className="form-check-label">Beginner</label>
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level4")} id="mid4" value="mideator" />
                                            <label className="form-check-label">Mideator</label>
                                        </div>
                                        <div className="col">
                                            <input className="form-check-input" type="radio" {...register("level4")} id="ex4" value="expert" />
                                            <label className="form-check-label">Expert</label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default Language;
