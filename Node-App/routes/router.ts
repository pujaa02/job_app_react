import * as express from "express";
const route = express.Router();
import userauthenticate from "../controller/userauthenticate";
import Ajaxform from "../controller/ajaxform";
import fetchempdata from "../controller/fetchempdata";

route.post("/register", userauthenticate.register);
route.get("/activatecheck/:user_id", userauthenticate.activatecheck);
route.get("/deleteuser/:id", userauthenticate.deleteuser);
route.post("/password/:user_id", userauthenticate.password);
route.get("/checkuser/:email/:pass", userauthenticate.checkuser);
route.get("/finduser/:email", userauthenticate.finduser);

//insert form
route.post("/insertform", Ajaxform.insertform);

//fetchallempdata

route.get("/employees", fetchempdata.get_user);
route.get("/fetchempdata/:id", fetchempdata.emp_det);

export default route;
