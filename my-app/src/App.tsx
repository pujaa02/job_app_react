import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Form from "./Components/Form/Form";
import Activate from "./Components/Password/Activate";
import Password from "./Components/Password/Password";
import Fetchemp from "./Components/EmployessShow/Fetchemp";
import Updateform from "./Components/UpdateForm/Updateform";
import Wrong from "./Components/wrongurl/Wrong";
import ForgetPass from "./Components/forgetpassword/ForgetPass";
import Form1 from "./Components/Form/Form1";
import Form2 from "./Components/Form/Form2";
import Form3 from "./Components/Form/Form3";
import Form4 from "./Components/Form/Form4";
import Form5 from "./Components/Form/Form5";
import Form6 from "./Components/Form/Form6";
import Extra from "./Components/Form/Extra";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Register />}></Route>
        <Route path="/fetchemp" element={<Fetchemp />}></Route>
        <Route path="/updateform" element={<Updateform />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/activate/:actcode" element={<Activate />}></Route>
        <Route path="/password" element={<Password />}></Route>
        <Route path="/forget" element={<ForgetPass />}></Route>
        <Route path="*" element={<Wrong />}></Route>
        <Route path="basic_detail" element={<Form1 />}></Route>
        <Route path="education" element={<Form2 />}></Route>
        <Route path="work_experience" element={<Form3 />}></Route>
        <Route path="language" element={<Form4 />}></Route>
        <Route path="relation" element={<Form5 />}></Route>
        <Route path="preferance" element={<Form6 />}></Route>
        <Route path="extra" element={<Extra />}></Route>
      </Routes>
    </div>
  );
};

export default App;
