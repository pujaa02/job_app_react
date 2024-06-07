"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const route = express.Router();
// import form from "../controller/form";
const userauthenticate_1 = __importDefault(require("../controller/userauthenticate"));
const ajaxform_1 = __importDefault(require("../controller/ajaxform"));
const fetchuser_1 = __importDefault(require("../controller/fetchuser"));
// import updateform from "../controller/updateform";
route.post("/register", userauthenticate_1.default.register);
route.get("/activatecheck/:user_id", userauthenticate_1.default.activatecheck);
route.get("/deleteuser/:id", userauthenticate_1.default.deleteuser);
route.post("/password/:user_id", userauthenticate_1.default.password);
route.get("/checkuser/:email/:pass", userauthenticate_1.default.checkuser);
route.get("/finduser/:email", userauthenticate_1.default.finduser);
//insert form
route.post("/insertform", ajaxform_1.default.insertform);
// route.post("/submit", form.submit);
route.get("/getallemp", fetchuser_1.default.getallemp);
// route.get("/findemp/:id", updateform.findemp);
// route.post("/updateemp/:id", updateform.updateemp);
// route.get("/deleteemp/:id", updateform.deletemp);
exports.default = route;
//# sourceMappingURL=router.js.map