import * as express from "express";
const route = express.Router();
import { Request, Response } from "express";
import { FormData, Ids } from "../interfacefile";
// import checkAuth from "../middlewares/checkauth";
import con from "../models/database";
import { Result, ValidationError, check, validationResult } from "express-validator";
import parser from "body-parser";
route.use(parser.json());
route.use(parser.urlencoded({ extended: false }));
const urlencodedParser = parser.urlencoded({ extended: false });

// import get_user from "./ajaxinsertupdate/get_user";
// import get_emp from "./ajaxinsertupdate/get_emp_det"
// import edu_det from "./ajaxinsertupdate/get_edu_det";
// import work_exp from "./ajaxinsertupdate/work_exp";
// import lan from "./ajaxinsertupdate/language";
// import techno from "./ajaxinsertupdate/techno";
// import ref from "./ajaxinsertupdate/ref";
// import pre from "./ajaxinsertupdate/pre";

// route.get("/users", checkAuth, get_user);
// route.get("/emp", checkAuth, get_emp);
// route.get("/edu", checkAuth, edu_det);
// route.get("/work", checkAuth, work_exp);
// route.get("/lan", checkAuth, lan);
// route.get("/tech", checkAuth, techno);
// route.get("/ref", checkAuth, ref);
// route.get("/pre", checkAuth, pre);



interface IStringArray extends Array<string | number | boolean> { }
interface Idofparams {
    id: number
}

const insertform = async (req: Request, res: Response) => {
    console.log("hwello");

    console.log(req.body.fname, "body");
    console.log(req.body);

    const formData: FormData = req.body;
    // let id: number;

    // const {
    //     fname,
    //     lname,
    //     designa: designation,
    //     email,
    //     number: phone,
    //     gender,
    //     relstatus: rel_status,
    //     add1: address1,
    //     add2: address2,
    //     city,
    //     state,
    //     zipcode,
    //     dob: bd,
    // } = formData;

    // const edu: IStringArray = ["ssc", "hsc", "bachelor", "master"];

    // const lan1: IStringArray = ["", "", ""];
    // const lan2: IStringArray = ["", "", ""];
    // const lan3: IStringArray = ["", "", ""];
    // lan1[1] = formData.lan1;
    // if (formData.able1) {
    //     lan1[2] = formData.able1.toString();
    // }
    // lan2[1] = formData.lan2;
    // if (formData.able2) {
    //     lan2[2] = formData.able2.toString();
    // }
    // lan3[1] = formData.lan3;
    // if (formData.able3) {
    //     lan3[2] = formData.able3.toString();
    // }

    // const tech1: IStringArray = ["", "", ""];
    // const tech2: IStringArray = ["", "", ""];
    // const tech3: IStringArray = ["", "", ""];
    // const tech4: IStringArray = ["", "", ""];
    // tech1[1] = formData.tech1;
    // tech1[2] = formData.level1;
    // tech2[1] = formData.tech2;
    // tech2[2] = formData.level2;
    // tech3[1] = formData.tech3;
    // tech3[2] = formData.level3;
    // tech4[1] = formData.tech4;
    // tech4[2] = formData.level4;

    // const ref1: IStringArray = ["", "", "", ""];
    // const ref2: IStringArray = ["", "", "", ""];
    // const ref3: IStringArray = ["", "", "", ""];
    // ref1[1] = formData.name1;
    // ref1[2] = formData.mobileno1;
    // ref1[3] = formData.rel1;
    // ref2[1] = formData.name2;
    // ref2[2] = formData.mobileno2;
    // ref2[3] = formData.rel2;
    // ref3[1] = formData.name3;
    // ref3[2] = formData.mobileno3;
    // ref3[3] = formData.rel3;

    // const pre: IStringArray = ["", "", "", "", "", ""];
    // pre[1] = formData.preloc;
    // pre[2] = formData.notice;
    // pre[3] = formData.exctc;
    // pre[4] = formData.curctc;
    // pre[5] = formData.depa;

    // const values: IStringArray = [
    //     fname,
    //     lname,
    //     designation,
    //     email,
    //     phone,
    //     gender,
    //     rel_status,
    //     address1,
    //     address2,
    //     city,
    //     state,
    //     zipcode,
    //     bd,
    // ];

    // const emp_detail: number = await con.insert(`INSERT INTO emp_details (fname, lname, designation, email, phone, gender, rel_status, address1, address2, city, state, zipcode, bd) VALUES (?)`, [values]);

    // id = emp_detail;
    // const len: number = formData.board_name.length;

    // for (let i = 0; i < len; i++) {
    //     const eduValues: IStringArray = [
    //         id,
    //         edu[i],
    //         formData.board_name[i],
    //         formData.py[i],
    //         formData.percentage[i],
    //     ];
    //     if (formData.board_name[i]) {
    //         const educationdata: number = await con.insert(`INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage) VALUES (?)`, [eduValues]);
    //     }
    // }
    // const wklen: number = formData.companyname.length;
    // for (let i = 0; i < wklen; i++) {
    //     const workValues: IStringArray = [
    //         id,
    //         formData.companyname[i],
    //         formData.designation[i],
    //         formData.from[i],
    //         formData.to[i],
    //     ];
    //     if (formData.companyname[i]) {
    //         const workdata: number = await con.insert(`INSERT INTO work_experience (emp_id, company_name, designation, from_date, to_date) VALUES (?)`, [workValues]);
    //     }
    // }
    // if (formData.lan1) {
    //     lan1[0] = id;
    //     const landata1: number = await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [lan1]);
    // }
    // if (formData.lan2) {
    //     lan2[0] = id;
    //     const landata2: number = await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [lan2]);
    // }
    // if (formData.lan3) {
    //     lan3[0] = id;
    //     const landata3: number = await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [lan3]);
    // }
    // // ======  techno ===
    // tech1[0] = id;
    // if (formData.tech1) {
    //     const techdata1: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech1]);
    // }
    // tech2[0] = id;
    // if (formData.tech2) {
    //     const techdata2: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech2]);
    // }
    // tech3[0] = id;
    // if (formData.tech3) {
    //     const techdata3: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech3]);
    // }
    // tech4[0] = id;
    // if (formData.tech4) {
    //     const techdata4: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech4]);
    // }
    // //section ref
    // const reflen = formData.name;
    // for (let i = 0; i < reflen.length; i++) {
    //     if (formData.name[i]) {
    //         const refdata: number = await con.insert(`insert into reference_contact(emp_id, name ,contact_number ,relation) values('${id}','${formData.name[i]}','${formData.mobileno[i]}','${formData.rel[i]}')`);
    //     }
    // }
    // //section ended
    // pre[0] = id;
    // const predata: number = await con.insert(`insert into preferences(emp_id, prefered_location,notice_period , expected_ctc,current_ctc , department) values( ? )`, [pre]);
    // res.json(id)
}

export default { insertform };
