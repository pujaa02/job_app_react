// import * as express from "express";
// const route = express.Router();
// import { Request, Response } from "express";
// import { FormData, Ids } from "../interfacefile";
// // import checkAuth from "../middlewares/checkauth";
// import con from "../models/database";
// import { Result, ValidationError, check, validationResult } from "express-validator";
// import parser from "body-parser";
// import { ResultSetHeader, RowDataPacket } from "mysql2";
// route.use(parser.json());
// route.use(parser.urlencoded({ extended: false }));
// const urlencodedParser = parser.urlencoded({ extended: false });

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



// interface IStringArray extends Array<string | number | boolean> { }
// interface Idofparams {
//   id: number
// }

// route.get("/inuajax", checkAuth, (req: Request, res: Response) => {
//   res.render("ajaxinup/home");
// });
// route.get("/update", checkAuth, (req: Request, res: Response) => {
//   res.render("ajaxinup/fetchuser");
// });

// route.post(
//   "/submit", checkAuth,
//   urlencodedParser,
//   [
//     check("fname", "This username must me 3+ characters long")
//       .exists()
//       .isLength({ min: 3 }),
//     check("lname", "This lastname must me 3+ characters long")
//       .exists()
//       .isLength({ min: 3 }),
//     check("designa", "This designation must me 3+ characters long")
//       .exists()
//       .isLength({ min: 3 }),
//     check("dob", "Enter date-of-birth in yyyy-mm-dd formate").isDate(),
//     check("email", "Email is not valid").isEmail().normalizeEmail(),
//     // check("number", "Please enter valid Mobile Number").isMobilePhone(),
//     check("zipcode", "zipcode length should be 6 characters").isLength({
//       min: 6,
//       max: 6,
//     }),
//     check("add1", "address1 length should be 6 to 45 characters").isLength({
//       min: 6,
//       max: 45,
//     }),
//     check("add2", "address2 length should be 6 to 45 characters").isLength({
//       min: 6,
//       max: 45,
//     }),
//   ],
//   async (req: Request<{}, {}, FormData, {}>, res: Response) => {
//     const formData: FormData = req.body;
//     let id: number;

//     const errors: Result<ValidationError> = validationResult(req);
//     if (!errors.isEmpty()) {
//       const alert = errors.array();
//       return res.render("ajaxinup/home", { alert });
//     }

//     const {
//       fname,
//       lname,
//       designa: designation,
//       email,
//       number: phone,
//       gender,
//       relstatus: rel_status,
//       add1: address1,
//       add2: address2,
//       city,
//       state,
//       zipcode,
//       dob: bd,
//     } = formData;

//     const edu: IStringArray = ["ssc", "hsc", "bachelor", "master"];

//     const lan1: IStringArray = ["", "", ""];
//     const lan2: IStringArray = ["", "", ""];
//     const lan3: IStringArray = ["", "", ""];
//     lan1[1] = formData.lan1;
//     if (formData.able1) {
//       lan1[2] = formData.able1.toString();
//     }
//     lan2[1] = formData.lan2;
//     if (formData.able2) {
//       lan2[2] = formData.able2.toString();
//     }
//     lan3[1] = formData.lan3;
//     if (formData.able3) {
//       lan3[2] = formData.able3.toString();
//     }

//     const tech1: IStringArray = ["", "", ""];
//     const tech2: IStringArray = ["", "", ""];
//     const tech3: IStringArray = ["", "", ""];
//     const tech4: IStringArray = ["", "", ""];
//     tech1[1] = formData.tech1;
//     tech1[2] = formData.level1;
//     tech2[1] = formData.tech2;
//     tech2[2] = formData.level2;
//     tech3[1] = formData.tech3;
//     tech3[2] = formData.level3;
//     tech4[1] = formData.tech4;
//     tech4[2] = formData.level4;

//     const ref1: IStringArray = ["", "", "", ""];
//     const ref2: IStringArray = ["", "", "", ""];
//     const ref3: IStringArray = ["", "", "", ""];
//     ref1[1] = formData.name1;
//     ref1[2] = formData.mobileno1;
//     ref1[3] = formData.rel1;
//     ref2[1] = formData.name2;
//     ref2[2] = formData.mobileno2;
//     ref2[3] = formData.rel2;
//     ref3[1] = formData.name3;
//     ref3[2] = formData.mobileno3;
//     ref3[3] = formData.rel3;

//     const pre: IStringArray = ["", "", "", "", "", ""];
//     pre[1] = formData.preloc;
//     pre[2] = formData.notice;
//     pre[3] = formData.exctc;
//     pre[4] = formData.curctc;
//     pre[5] = formData.depa;

//     const values: IStringArray = [
//       fname,
//       lname,
//       designation,
//       email,
//       phone,
//       gender,
//       rel_status,
//       address1,
//       address2,
//       city,
//       state,
//       zipcode,
//       bd,
//     ];

//     const emp_detail: number = await con.insert(`INSERT INTO emp_details (fname, lname, designation, email, phone, gender, rel_status, address1, address2, city, state, zipcode, bd) VALUES (?)`, [values]);

//     id = emp_detail;
//     const len: number = formData.board_name.length;

//     for (let i = 0; i < len; i++) {
//       const eduValues: IStringArray = [
//         id,
//         edu[i],
//         formData.board_name[i],
//         formData.py[i],
//         formData.percentage[i],
//       ];
//       if (formData.board_name[i]) {
//         const educationdata: number = await con.insert(`INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage) VALUES (?)`, [eduValues]);
//       }
//     }
//     const wklen: number = formData.companyname.length;
//     for (let i = 0; i < wklen; i++) {
//       const workValues: IStringArray = [
//         id,
//         formData.companyname[i],
//         formData.designation[i],
//         formData.from[i],
//         formData.to[i],
//       ];
//       if (formData.companyname[i]) {
//         const workdata: number = await con.insert(`INSERT INTO work_experience (emp_id, company_name, designation, from_date, to_date) VALUES (?)`, [workValues]);
//       }
//     }
//     if (formData.lan1) {
//       lan1[0] = id;
//       const landata1: number = await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [lan1]);
//     }
//     if (formData.lan2) {
//       lan2[0] = id;
//       const landata2: number = await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [lan2]);
//     }
//     if (formData.lan3) {
//       lan3[0] = id;
//       const landata3: number = await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [lan3]);
//     }
//     // ======  techno ===
//     tech1[0] = id;
//     if (formData.tech1) {
//       const techdata1: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech1]);
//     }
//     tech2[0] = id;
//     if (formData.tech2) {
//       const techdata2: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech2]);
//     }
//     tech3[0] = id;
//     if (formData.tech3) {
//       const techdata3: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech3]);
//     }
//     tech4[0] = id;
//     if (formData.tech4) {
//       const techdata4: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech4]);
//     }
//     //section ref
//     const reflen = formData.name;
//     for (let i = 0; i < reflen.length; i++) {
//       if (formData.name[i]) {
//         const refdata: number = await con.insert(`insert into reference_contact(emp_id, name ,contact_number ,relation) values('${id}','${formData.name[i]}','${formData.mobileno[i]}','${formData.rel[i]}')`);
//       }
//     }
//     //section ended
//     pre[0] = id;
//     const predata: number = await con.insert(`insert into preferences(emp_id, prefered_location,notice_period , expected_ctc,current_ctc , department) values( ? )`, [pre]);
//     res.json(id)
//   }
// );

// route.get("/update/:id", checkAuth, (req: Request<Idofparams, {}, {}, {}>, res: Response) => {
//   let id: number = req.params.id;
//   res.render("ajaxinup/home", { id });
// });

// route.post(
//   "/update/:id", checkAuth,
//   urlencodedParser,
//   [
//     check("fname", "This username must me 3+ characters long")
//       .exists()
//       .isLength({ min: 3 }),
//     check("lname", "This lastname must me 3+ characters long")
//       .exists()
//       .isLength({ min: 3 }),
//     check("designa", "This designation must me 3+ characters long")
//       .exists()
//       .isLength({ min: 3 }),
//     check("dob", "Enter date-of-birth in yyyy-mm-dd formate").isDate(),
//     check("email", "Email is not valid").isEmail().normalizeEmail(),
//     // check("number", "Please enter valid Mobile Number").isMobilePhone(),
//     check("zipcode", "zipcode length should be 6 characters").isLength({
//       min: 6,
//       max: 6,
//     }),
//     check("add1", "address1 length should be 6 to 45 characters").isLength({
//       min: 6,
//       max: 45,
//     }),
//     check("add2", "address2 length should be 6 to 45 characters").isLength({
//       min: 6,
//       max: 45,
//     }),
//   ],
//   async (req: Request<Idofparams, {}, FormData, {}>, res: Response) => {
//     const id: number = req.params.id;
//     const errors: Result<ValidationError> = validationResult(req);
//     if (!errors.isEmpty()) {
//       const alert = errors.array();
//       return res.render("ajaxinup/home", {
//         alert,
//       });
//     }
//     const formData: FormData = req.body;

//     if (req.params.id) {
//       // Section 1
//       const {
//         fname,
//         lname,
//         designa,
//         email,
//         number,
//         gender,
//         relstatus,
//         add1,
//         add2,
//         city,
//         state,
//         zipcode,
//         dob,
//       } = formData;
//       await con.update(`UPDATE emp_details
//       SET fname='${fname}', lname='${lname}', designation='${designa}', email='${email}', phone='${number}', gender='${gender}',
//       rel_status='${relstatus}', address1='${add1}', address2='${add2}', city='${city}', state='${state}', zipcode='${zipcode}', bd='${dob}'
//       WHERE emp_id='${id}';`) as unknown as Array<ResultSetHeader>;

//       // Section 2
//       const edu: IStringArray = ["ssc", "hsc", "bachelor", "master"];
//       const len: number = formData.board_name.length;
//       const eduDetails: Ids[] = await con.getall(`SELECT edu_id FROM edu_detail WHERE emp_id IN (${id});`)

//       for (let i = 0; i < len; i++) {
//         if (eduDetails[i]) {
//           await con.update(`UPDATE edu_detail
//             SET Name_of_board_or_course='${formData.board_name[i]}', Passing_year='${formData.py[i]}', Percentage='${formData.percentage[i]}'
//             WHERE emp_id='${id}' AND type_of_result='${edu[i]}' AND edu_id='${eduDetails[i].edu_id}';`) as unknown as Array<ResultSetHeader>;
//         } else {
//           if (formData.board_name[i]) {
//             await con.update(`INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage)
//               VALUES ('${id}', '${edu[i]}', '${formData.board_name[i]}', '${formData.py[i]}', '${formData.percentage[i]}');`) as unknown as Array<ResultSetHeader>;
//           }
//         }
//       }

//       // Section 3

//       const workExperience: Ids[] = await con.getall(`SELECT id AS work_id FROM work_experience WHERE emp_id IN (${id});`);
//       const wklen: number = formData.companyname.length;
//       for (let i = 0; i < wklen; i++) {
//         if (workExperience[i]) {
//           await con.update(`UPDATE work_experience
//             SET company_name='${formData.companyname[i]}', designation='${formData.designation[i]}', from_date='${formData.from[i]}', to_date='${formData.to[i]}'
//             WHERE emp_id='${id}' AND id='${workExperience[i].work_id}';`) as unknown as Array<ResultSetHeader>;
//         } else {
//           if (formData.companyname[i]) {
//             await con.update(`INSERT INTO work_experience (emp_id, company_name, designation, from_date, to_date)
//               VALUES ('${id}', '${formData.companyname[i]}', '${formData.designation[i]}', '${formData.from[i]}', '${formData.to[i]}');`) as unknown as Array<ResultSetHeader>;
//           }
//         }
//       }

//       // Languages
//       const languages: IStringArray = [];
//       const rws = [];
//       if (formData.lan1) {
//         languages.push(formData.lan1);
//         rws.push(formData.able1);
//       }
//       if (formData.lan2) {
//         languages.push(formData.lan2);
//         rws.push(formData.able2);
//       }
//       if (formData.lan3) {
//         languages.push(formData.lan3);
//         rws.push(formData.able3);
//       }
//       await con.delete(`DELETE FROM language WHERE emp_id='${id}';`) as unknown as Array<ResultSetHeader>;
//       for (let i = 0; i < languages.length; i++) {
//         await con.insert(`INSERT INTO language (emp_id, language_know, rws)
//           VALUES ('${id}', '${languages[i]}', '${rws[i]}');`) as unknown as Array<ResultSetHeader>;
//       }

//       // Technologies
//       const tech: IStringArray = [];
//       const level: IStringArray = [];
//       if (formData.tech1) {
//         tech.push(formData.tech1);
//         level.push(formData.level1);
//       }
//       if (formData.tech2) {
//         tech.push(formData.tech2);
//         level.push(formData.level2);
//       }
//       if (formData.tech3) {
//         tech.push(formData.tech3);
//         level.push(formData.level3);
//       }
//       if (formData.tech4) {
//         tech.push(formData.tech4);
//         level.push(formData.level4);
//       }
//       const technoDetails: Ids[] = await con.getall(
//         `SELECT id AS tech_id FROM know_techno WHERE emp_id IN (${id});`
//       );
//       for (let i = 0; i < tech.length; i++) {
//         if (technoDetails[i]) {
//           await con.update(`UPDATE know_techno
//             SET tech_know='${tech[i]}', level_of_technology='${level[i]}'
//             WHERE emp_id='${id}' AND id='${technoDetails[i].tech_id}';`) as unknown as Array<ResultSetHeader>;
//         } else {
//           if (tech[i]) {
//             await con.insert(`INSERT INTO know_techno (emp_id, tech_know, level_of_technology)
//               VALUES ('${id}', '${tech[i]}', '${level[i]}');`) as unknown as Array<ResultSetHeader>;
//           }
//         }
//       }

//       // References
//       const references: Ids[] = await con.getall(
//         `SELECT ref_id FROM reference_contact WHERE emp_id IN (${id});`
//       );
//       const refLen: number = formData.name.length;
//       for (let i = 0; i < refLen; i++) {
//         if (references[i]) {
//           await con.update(`UPDATE reference_contact
//             SET name='${formData.name[i]}', contact_number='${formData.mobileno[i]}', relation='${formData.rel[i]}'
//             WHERE emp_id='${id}' AND ref_id='${references[i].ref_id}';`) as unknown as Array<ResultSetHeader>;
//         } else {
//           if (formData.name[i]) {
//             await con.insert(`INSERT INTO reference_contact (emp_id, name, contact_number, relation)
//               VALUES ('${id}', '${formData.name[i]}', '${formData.mobileno[i]}', '${formData.rel[i]}');`) as unknown as Array<ResultSetHeader>;
//           }
//         }
//       }

//       // Preferences
//       const { preloc, notice, exctc, curctc, depa } = formData;
//       await con.update(`UPDATE preferences
//         SET prefered_location='${preloc}', notice_period='${notice}', expected_ctc='${exctc}', current_ctc='${curctc}', department='${depa}'
//         WHERE emp_id='${id}';`) as unknown as Array<ResultSetHeader>;
//     }
//     res.json("data updated");
//   }
// );
// route.get("/showupdate", checkAuth, (req: Request, res: Response) => {
//   res.send("Data is Succesfully Updated!!");
// });

// export default route;
