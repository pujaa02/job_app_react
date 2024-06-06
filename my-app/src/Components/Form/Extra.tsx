import React from "react";
import ReactDOM from "react-dom";
import MultiStep from "react-multistep";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";
function Extra() {
  const steps = [
    { name: "basic_detail", component: <Form1 /> },
    { name: "education", component: <Form2 /> },
    { name: "work_experience", component: <Form3 /> },
    { name: "language", component: <Form4 /> },
    { name: "relation", component: <Form5 /> },
    { name: "preferance", component: <Form6 /> },
  ];
  return (
    <div>
      <MultiStep steps={steps} />
    </div>
  );
}

export default Extra;
