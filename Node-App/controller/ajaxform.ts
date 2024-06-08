import * as express from "express";
const route = express.Router();
import { Request, Response } from "express";
import { FormData, Ids } from "../interfacefile";

import con from "../models/database";
import { Result, ValidationError, check, validationResult } from "express-validator";
import parser from "body-parser";
route.use(parser.json());
route.use(parser.urlencoded({ extended: false }));
const urlencodedParser = parser.urlencoded({ extended: false });


interface IStringArray extends Array<string | number | Date | boolean> { }

const insertform = async (req: Request, res: Response) => {
    const formData: FormData = req.body;
    let id: number;


    try {
        const values: IStringArray = [
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
        const emp_detail: number = await con.insert(`INSERT INTO emp_details (fname, lname, designation, email, phone, gender, rel_status, address1, address2, city, state, zipcode, bd) VALUES (?)`, [values]);

        id = emp_detail;

        const edu: IStringArray = ["ssc", "hsc", "bachelor", "master"];
        let board: Array<string> = [];
        let board_percentage: Array<number> = [];
        let pass_year: Array<number> = [];
        board.push(formData.board_name1, formData.board_name2, formData.board_name3, formData.board_name4);
        board_percentage.push(formData.percentage1, formData.percentage2, formData.percentage3, formData.percentage4);
        pass_year.push(formData.py1, formData.py2, formData.py3, formData.py4);

        for (let i = 0; i < 4; i++) {
            const eduValues: IStringArray = [
                id,
                edu[i],
                board[i],
                pass_year[i],
                board_percentage[i],
            ];
            if (board[i] !== "") {
                await con.insert(`INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage) VALUES (?)`, [eduValues]);
            }
        }
        let company_name: Array<string> = [];
        let designation: Array<string> = [];
        let from_date: Array<Date> = [];
        let to_date: Array<Date> = [];


        company_name.push(formData.companyname1, formData.companyname2, formData.companyname3);
        designation.push(formData.designation1, formData.designation2, formData.designation3);
        from_date.push(formData.date11, formData.date21, formData.date31);
        to_date.push(formData.date12, formData.date22, formData.date32);

        for (let i = 0; i < 3; i++) {
            const workValues: IStringArray = [
                id,
                company_name[i],
                designation[i],
                from_date[i],
                to_date[i],
            ];
            if (company_name[i] !== "") {
                await con.insert(`INSERT INTO work_experience (emp_id, company_name, designation, from_date, to_date) VALUES (?)`, [workValues]);
            }
        }

        let language: Array<string | boolean> = [];
        let able: Array<string> = [];
        language.push(formData.hindi, formData.english, formData.gujarati);

        able.push((formData.read1 + ',' + formData.write1 + ',' + formData.speak1).toString(), (formData.read2 + ',' + formData.write2 + ',' + formData.speak2).toString(), (formData.read3 + ',' + formData.write3 + ',' + formData.speak3).toString());

        for (let i = 0; i < 3; i++) {
            const language_table: IStringArray = [
                id,
                language[i],
                able[i],
            ];
            if (language[i] !== false) {
                await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [language_table]);
            }
        }

        let tech: Array<string | boolean> = [];
        let level: Array<string | boolean> = [];

        tech.push(formData.php, formData.mysql, formData.laravel, formData.oracle);
        level.push(formData.level1, formData.level2, formData.level3, formData.level4);

        for (let i = 0; i < 4; i++) {
            const tech_table: IStringArray = [
                id,
                tech[i],
                level[i],
            ];
            if (tech[i] !== false) {
                await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech_table]);
            }
        }

        let name: Array<string> = [];
        let mobileno: Array<string | number> = [];
        let rel: Array<string> = [];

        name.push(formData.name1, formData.name2, formData.name3);
        mobileno.push(formData.mobileno1, formData.mobileno2, formData.mobileno3);
        rel.push(formData.rel1, formData.rel2, formData.rel3);

        for (let i = 0; i < 3; i++) {
            const relation: IStringArray = [
                id,
                name[i],
                mobileno[i],
                rel[i],
            ];
            if (name[i] !== "") {
                await con.insert(`insert into reference_contact(emp_id, name ,contact_number ,relation) values ( ? )`, [relation]);
            }
        }
        let pre: Array<string | number> = [id, formData.preloc, formData.notice, formData.exctc, formData.curctc, formData.depa]
        await con.insert(`insert into preferences(emp_id, prefered_location,notice_period , expected_ctc,current_ctc , department) values( ? )`, [pre]);

        res.json({ msg: "Success" })
    } catch (error) {
        res.json({ msg: "Failed" })
    }

}

export default { insertform };
