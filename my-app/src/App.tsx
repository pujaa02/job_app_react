import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Activate from "./Components/Password/Activate";
import Password from "./Components/Password/Password";
import Fetchemp from "./Components/EmployessShow/Fetchemp";
// import Updateform from "./Components/UpdateForm/Updateform";
import Wrong from "./Components/wrongurl/Wrong";
import ForgetPass from "./Components/forgetpassword/ForgetPass";
import Multistepform from "./Components/Job_Application/Multistep";


const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Register />}></Route>
        {/* {cookie ? <Route path="/fetchemp" element={<Fetchemp />}></Route> : <Route path="/login" element={<Login />}></Route>} */}
        <Route path="/fetchemp" element={<Fetchemp />}></Route>
        {/* <Route path="/updateform" element={<Updateform />}></Route> */}
        <Route path="/activate/:actcode" element={<Activate />}></Route>
        <Route path="/password" element={<Password />}></Route>
        <Route path="/forget" element={<ForgetPass />}></Route>
        <Route path="*" element={<Wrong />}></Route>
        {/* <Route path="form" element={<Multistepform />}></Route> */}
        <Route path="/form" element={<Multistepform />}></Route>
      </Routes>
    </div>
  );
};

export default App;