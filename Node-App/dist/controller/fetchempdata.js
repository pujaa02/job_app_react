"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../models/database"));
async function get_user(req, res) {
    const query = await database_1.default.getall(`select emp_id,fname,lname from emp_details`);
    res.json(query);
}
async function emp_det(req, res) {
    const id = req.params.id;
    console.log(id, "id");
    const emp = await database_1.default.getall(`select * from emp_details where emp_id=${id}`);
    const edu = await database_1.default.getall(`select * from edu_detail where emp_id=${id} `);
    const workexp = await database_1.default.getall(`select * from work_experience where emp_id=${id}`);
    const language = await database_1.default.getall(`select * from language where emp_id=${id}`);
    const technology = await database_1.default.getall(`select * from know_techno where emp_id=${id}`);
    const referance = await database_1.default.getall(`select * from reference_contact where emp_id=${id}`);
    const preferance = await database_1.default.getall(`select * from preferences where emp_id=${id}`);
    console.log(emp, edu, workexp, language, technology, referance, preferance);
    let emp_data = emp[0];
    console.log(emp_data, "emp_data");
    let data = [];
    data.push(emp[0], preferance[0]);
    console.log(data, "dataaaaaaaaa");
    res.json({ result: "complete" });
}
exports.default = { get_user, emp_det };
//# sourceMappingURL=fetchempdata.js.map