import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../interfacefile";

const Education: React.FC = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormData>();

  const boardNames = watch("board_name") || [];
  const py = watch("py") || [];
  const percentages = watch("percentage") || [];

  const validateYear = (py: number) => {
    const date = new Date();
    const curyear = date.getFullYear();
    if (py > curyear) {
      return "Please enter a valid year";
    }
    return true;
  };

  const validateRow = (boardName: string, py: number, percentage: number) => {
    const filled = [boardName, py, percentage].filter(
      (value) => value !== undefined && value !== ""
    ).length;
    if (filled === 0) return true; // Empty row is valid
    if (filled === 3) {
      const date = new Date();
      const curyear = date.getFullYear();
      if (py > curyear) {
        return "Please enter a valid year";
      }
      return true; // Fully filled row is valid
    }
    return "Fill all fields in this row if any is filled"; // Partially filled row is invalid
  };

  return (
    <div className="application-form-container">
      <form>
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
                  {...register("board_name.0", {
                    validate: () => validateRow(boardNames[0], py[0], percentages[0]),
                  })}
                />
                {errors.board_name && errors.board_name[0] && (
                  <p className="red">{errors.board_name[0].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="passing_year">Passing year</label>
                <input
                  type="text"
                  className="form-control"
                  id="py1"
                  {...register("py.0", {
                    validate: validateYear,
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: "Passing year must be a 4-digit number",
                    },
                  })}
                />
                {errors.py && errors.py[0] && (
                  <p className="red">{errors.py[0].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="percentage">Percentage</label>
                <input
                  type="text"
                  className="form-control"
                  id="percentage1"
                  {...register("percentage.0", {
                    validate: () => validateRow(boardNames[0], py[0], percentages[0]),
                    pattern: {
                      value: /^[0-9]{2}$/,
                      message: "Percentage must be a 2-digit number",
                    },
                  })}
                />
                {errors.percentage && errors.percentage[0] && (
                  <p className="red">{errors.percentage[0].message}</p>
                )}
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
                  {...register("board_name.1", {
                    validate: () => validateRow(boardNames[1], py[1], percentages[1]),
                  })}
                />
                {errors.board_name && errors.board_name[1] && (
                  <p className="red">{errors.board_name[1].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="passing_year">Passing year</label>
                <input
                  type="text"
                  className="form-control"
                  id="py2"
                  {...register("py.1", {
                    validate: validateYear,
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: "Passing year must be a 4-digit number",
                    },
                  })}
                />
                {errors.py && errors.py[1] && (
                  <p className="red">{errors.py[1].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="percentage">Percentage</label>
                <input
                  type="text"
                  className="form-control"
                  id="percentage2"
                  {...register("percentage.1", {
                    validate: () => validateRow(boardNames[1], py[1], percentages[1]),
                    pattern: {
                      value: /^[0-9]{2}$/,
                      message: "Percentage must be a 2-digit number",
                    },
                  })}
                />
                {errors.percentage && errors.percentage[1] && (
                  <p className="red">{errors.percentage[1].message}</p>
                )}
              </div>
            </div>
            <hr />
            <h5>Bachelor degree</h5>
            <div className="row">
              <div className="col">
                <label htmlFor="course_name">Course Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="course1"
                  {...register("board_name.2", {
                    validate: () => validateRow(boardNames[2], py[2], percentages[2]),
                  })}
                />
                {errors.board_name && errors.board_name[2] && (
                  <p className="red">{errors.board_name[2].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="passing_year">Passing year</label>
                <input
                  type="text"
                  className="form-control"
                  id="py3"
                  {...register("py.2", {
                    validate: validateYear,
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: "Passing year must be a 4-digit number",
                    },
                  })}
                />
                {errors.py && errors.py[2] && (
                  <p className="red">{errors.py[2].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="percentage">Percentage</label>
                <input
                  type="text"
                  className="form-control"
                  id="percentage3"
                  {...register("percentage.2", {
                    validate: () => validateRow(boardNames[2], py[2], percentages[2]),
                    pattern: {
                      value: /^[0-9]{2}$/,
                      message: "Percentage must be a 2-digit number",
                    },
                  })}
                />
                {errors.percentage && errors.percentage[2] && (
                  <p className="red">{errors.percentage[2].message}</p>
                )}
              </div>
            </div>
            <hr />
            <h5>Master degree</h5>
            <div className="row">
              <div className="col">
                <label htmlFor="course_name">Course Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="course2"
                  {...register("board_name.3", {
                    validate: () => validateRow(boardNames[3], py[3], percentages[3]),
                  })}
                />
                {errors.board_name && errors.board_name[3] && (
                  <p className="red">{errors.board_name[3].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="passing_year">Passing year</label>
                <input
                  type="text"
                  className="form-control"
                  id="py4"
                  {...register("py.3", {
                    validate: validateYear,
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: "Passing year must be a 4-digit number",
                    },
                  })}
                />
                {errors.py && errors.py[3] && (
                  <p className="red">{errors.py[3].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="percentage">Percentage</label>
                <input
                  type="text"
                  className="form-control"
                  id="percentage4"
                  {...register("percentage.3", {
                    validate: () =>
                      validateRow(boardNames[3], py[3], percentages[3]) ||
                      "Fill all fields in this row if any is filled",
                    pattern: {
                      value: /^[0-9]{2}$/,
                      message: "Percentage must be a 2-digit number",
                    },
                  })}
                />
                {errors.percentage && errors.percentage[3] && (
                  <p className="red">{errors.percentage[3].message}</p>
                )}
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Education;