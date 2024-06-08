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
const database_1 = __importDefault(require("../models/database"));
const body_parser_1 = __importDefault(require("body-parser"));
route.use(body_parser_1.default.json());
route.use(body_parser_1.default.urlencoded({ extended: false }));
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
const insertform = async (req, res) => {
    const formData = req.body;
    let id;
    try {
        const values = [
            formData.fname,
            formData.lname,
            formData.designa,
            formData.email,
            formData.phone,
            formData.gender,
            formData.rel_status,
            formData.address1,
            formData.address2,
            formData.city,
            formData.state,
            formData.zipcode,
            formData.bd,
        ];
        const emp_detail = await database_1.default.insert(`INSERT INTO emp_details (fname, lname, designation, email, phone, gender, rel_status, address1, address2, city, state, zipcode, bd) VALUES (?)`, [values]);
        id = emp_detail;
        const edu = ["ssc", "hsc", "bachelor", "master"];
        let board = [];
        let board_percentage = [];
        let pass_year = [];
        board.push(formData.board_name1, formData.board_name2, formData.board_name3, formData.board_name4);
        board_percentage.push(formData.percentage1, formData.percentage2, formData.percentage3, formData.percentage4);
        pass_year.push(formData.py1, formData.py2, formData.py3, formData.py4);
        for (let i = 0; i < 4; i++) {
            const eduValues = [
                id,
                edu[i],
                board[i],
                pass_year[i],
                board_percentage[i],
            ];
            if (board[i] !== "") {
                await database_1.default.insert(`INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage) VALUES (?)`, [eduValues]);
            }
        }
        let company_name = [];
        let designation = [];
        let from_date = [];
        let to_date = [];
        company_name.push(formData.companyname1, formData.companyname2, formData.companyname3);
        designation.push(formData.designation1, formData.designation2, formData.designation3);
        from_date.push(formData.date11, formData.date21, formData.date31);
        to_date.push(formData.date12, formData.date22, formData.date32);
        for (let i = 0; i < 3; i++) {
            const workValues = [
                id,
                company_name[i],
                designation[i],
                from_date[i],
                to_date[i],
            ];
            if (company_name[i] !== "") {
                await database_1.default.insert(`INSERT INTO work_experience (emp_id, company_name, designation, from_date, to_date) VALUES (?)`, [workValues]);
            }
        }
        let language = [];
        let able = [];
        language.push(formData.hindi, formData.english, formData.gujarati);
        able.push((formData.read1 + ',' + formData.write1 + ',' + formData.speak1).toString(), (formData.read2 + ',' + formData.write2 + ',' + formData.speak2).toString(), (formData.read3 + ',' + formData.write3 + ',' + formData.speak3).toString());
        for (let i = 0; i < 3; i++) {
            const language_table = [
                id,
                language[i],
                able[i],
            ];
            if (language[i] !== false) {
                await database_1.default.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [language_table]);
            }
        }
        let tech = [];
        let level = [];
        tech.push(formData.php, formData.mysql, formData.laravel, formData.oracle);
        level.push(formData.level1, formData.level2, formData.level3, formData.level4);
        for (let i = 0; i < 4; i++) {
            const tech_table = [
                id,
                tech[i],
                level[i],
            ];
            if (tech[i] !== false) {
                await database_1.default.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech_table]);
            }
        }
        let name = [];
        let mobileno = [];
        let rel = [];
        name.push(formData.name1, formData.name2, formData.name3);
        mobileno.push(formData.mobileno1, formData.mobileno2, formData.mobileno3);
        rel.push(formData.rel1, formData.rel2, formData.rel3);
        for (let i = 0; i < 3; i++) {
            const relation = [
                id,
                name[i],
                mobileno[i],
                rel[i],
            ];
            if (name[i] !== "") {
                await database_1.default.insert(`insert into reference_contact(emp_id, name ,contact_number ,relation) values ( ? )`, [relation]);
            }
        }
        let pre = [id, formData.preloc, formData.notice, formData.exctc, formData.curctc, formData.depa];
        await database_1.default.insert(`insert into preferences(emp_id, prefered_location,notice_period , expected_ctc,current_ctc , department) values( ? )`, [pre]);
        res.json({ msg: "Success" });
    }
    catch (error) {
        res.json({ msg: "Failed" });
    }
};
exports.default = { insertform };
//# sourceMappingURL=ajaxform.js.map