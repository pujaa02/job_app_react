import * as express from "express";
const route = express.Router();
import { Request, Response } from "express";
import { FormData, Ids, getIds } from "../interfacefile";
import con from "../models/database";
import parser from "body-parser";
route.use(parser.json());
route.use(parser.urlencoded({ extended: false }));

interface IStringArray extends Array<string | number | Date | boolean> { };


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
        const emp_detail: number = await con.insert(
            `INSERT INTO emp_details (fname, lname, designation, email, phone, gender, rel_status, address1, address2, city, state, zipcode, bd) VALUES (?)`,
            [values]
        );

        id = emp_detail;

        const edu: IStringArray = ["ssc", "hsc", "bachelor", "master"];

        for (let i = 0; i < 4; i++) {
            const eduValues: (string | number | boolean | Date)[] = [
                id,
                edu[i],
                formData.board_name[i],
                formData.py[i],
                formData.percentage[i],
            ];
            if (formData.board_name[i] !== "") {
                await con.insert(
                    `INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage) VALUES (?)`,
                    [eduValues]
                );
            }
        }

        for (let i = 0; i < 3; i++) {
            const workValues: (string | number | Date)[] = [
                id,
                formData.companyname[i],
                formData.designation[i],
                formData.from[i],
                formData.to[i],
            ];
            if (formData.companyname[i]) {
                await con.insert(
                    `INSERT INTO work_experience (emp_id, company_name, designation, from_date, to_date) VALUES (?)`,
                    [workValues]
                );
            }
        }
        //language
        let language: boolean[] = [];
        const rws: string[] = [];
        let able1: string[] = [];
        let able2: string[] = [];
        let able3: string[] = [];

        if (formData.hindi) {
            language.push(formData.hindi);
            if (formData.read1) {
                able1.push("read");
            }
            if (formData.write1) {
                able1.push("write")
            }
            if (formData.speak1) {
                able1.push("speak")
            }
        } else {
            language.push(false);
        }
        if (formData.english) {
            language.push(formData.english)
            if (formData.read2) {
                able2.push("read");
            }
            if (formData.write2) {
                able2.push("write")
            }
            if (formData.speak2) {
                able2.push("speak")
            }
        } else {
            language.push(false);
        }
        if (formData.gujarati) {
            language.push(formData.gujarati)
            if (formData.read3) {
                able3.push("read");
            }
            if (formData.write3) {
                able3.push("write")
            }
            if (formData.speak3) {
                able3.push("speak")
            }
        } else {
            language.push(false);
        }

        rws.push(able1.join(), able2.join(), able3.join())

        for (let i = 0; i < language.length; i++) {
            if (language[i]) {
                await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES ('${id}', '${language[i]}', '${rws[i]}');`);
            }
        }
        //technology

        const tech: IStringArray = [];
        const level: IStringArray = [];

        if (formData.php) {
            tech.push(formData.php);
            level.push(formData.level1)
        }
        if (formData.mysql) {
            tech.push(formData.mysql);
            level.push(formData.level2)
        }
        if (formData.laravel) {
            tech.push(formData.laravel);
            level.push(formData.level3)
        }
        if (formData.oracle) {
            tech.push(formData.oracle);
            level.push(formData.level4)
        }


        for (let i = 0; i < tech.length; i++) {
            if (tech[i]) {
                await con.insert(`INSERT INTO know_techno (emp_id, tech_know, level_of_technology) VALUES ('${id}', '${tech[i]}', '${level[i]}');`);
            }
        }


        for (let i = 0; i < 3; i++) {
            const relation: IStringArray = [
                id,
                formData.name[i],
                formData.mobileno[i],
                formData.rel[i],
            ];
            if (formData.name[i]) {
                await con.insert(
                    `insert into reference_contact(emp_id, name ,contact_number ,relation) values ( ? )`,
                    [relation]
                );
            }
        }
        const pre: Array<string | number> = [
            id,
            formData.preloc,
            formData.notice,
            formData.exctc,
            formData.curctc,
            formData.depa,
        ];
        await con.insert(
            `insert into preferences(emp_id, prefered_location,notice_period , expected_ctc,current_ctc , department) values( ? )`,
            [pre]
        );

        res.json({ msg: "Success" });
    } catch (error) {
        res.json({ msg: "Failed" });
    }
};


const updateform = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const formData: FormData = req.body;


    try {

        await con.update(
            `UPDATE emp_details
              SET fname='${formData.fname}', lname='${formData.lname}',designation='${formData.designa}',email='${formData.email}',phone='${formData.phone}',gender='${formData.gender}',
              rel_status='${formData.rel_status}',address1='${formData.address1}',address2='${formData.address2}',city='${formData.city}',
              state='${formData.state}',zipcode='${formData.zipcode}',bd='${formData.bd}'
              WHERE emp_id='${id}';`
        );

        const edu: IStringArray = ["ssc", "hsc", "bachelor", "master"];

        const len: number = formData.board_name.length;
        const eduDetails: getIds[] = await con.getall(`SELECT edu_id FROM edu_detail WHERE emp_id IN (${id});`);

        for (let i = 0; i < len; i++) {
            if (eduDetails[i]) {
                await con.update(`UPDATE edu_detail
              SET Name_of_board_or_course='${formData.board_name[i]}', Passing_year='${formData.py[i]}', Percentage='${formData.percentage[i]}'
              WHERE emp_id='${id}' AND type_of_result='${edu[i]}' AND edu_id='${eduDetails[i].edu_id}';`)
            } else {
                if (formData.board_name[i]) {
                    await con.update(`INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage)
                VALUES ('${id}', '${edu[i]}', '${formData.board_name[i]}', '${formData.py[i]}', '${formData.percentage[i]}');`)
                }
            }
        }

        const workExperience: getIds[] = await con.getall(`SELECT id AS work_id FROM work_experience WHERE emp_id IN (${id});`);

        const wklen: number = formData.companyname.length;
        for (let i = 0; i < wklen; i++) {
            if (workExperience[i]) {
                await con.update(`UPDATE work_experience
              SET company_name='${formData.companyname[i]}', designation='${formData.designation[i]}', from_date='${formData.from[i]}', to_date='${formData.to[i]}'
              WHERE emp_id='${id}' AND id='${workExperience[i].work_id}';`);
            } else {
                if (formData.companyname[i]) {
                    await con.update(`INSERT INTO work_experience (emp_id, company_name, designation, from_date, to_date)
                VALUES ('${id}', '${formData.companyname[i]}', '${formData.designation[i]}', '${formData.from[i]}', '${formData.to[i]}');`);
                }
            }
        }

        //language
        let language: boolean[] = [];
        const rws: string[] = [];
        let able1: boolean[] = [];
        let able2: boolean[] = [];
        let able3: boolean[] = [];

        if (formData.hindi) {
            language.push(formData.hindi);
            if (formData.read1) {
                able1.push(formData.read1);
            }
            if (formData.write1) {
                able1.push(formData.write1)
            }
            if (formData.speak1) {
                able1.push(formData.speak1)
            }
        } else {
            language.push(false);
        }
        if (formData.english) {
            language.push(formData.english)
            if (formData.read2) {
                able2.push(formData.read2);
            }
            if (formData.write2) {
                able2.push(formData.write2)
            }
            if (formData.speak2) {
                able2.push(formData.speak2)
            }
        } else {
            language.push(false);
        }
        if (formData.gujarati) {
            language.push(formData.gujarati)
            if (formData.read3) {
                able3.push(formData.read3);
            }
            if (formData.write3) {
                able3.push(formData.write3)
            }
            if (formData.speak3) {
                able3.push(formData.speak3)
            }
        } else {
            language.push(false);
        }

        rws.push(able1.join(), able2.join(), able3.join());

        await con.delete(`DELETE FROM language WHERE emp_id='${id}';`);
        for (let i = 0; i < language.length; i++) {
            if (language[i]) {
                await con.insert(`INSERT INTO language (emp_id, language_know, rws)
            VALUES ('${id}', '${language[i]}', '${rws[i]}');`);
            }
        }
        //technology

        const tech: IStringArray = [];
        const level: IStringArray = [];

        if (formData.php) {
            tech.push(formData.php);
            level.push(formData.level1)
        }
        if (formData.mysql) {
            tech.push(formData.mysql);
            level.push(formData.level2)
        }
        if (formData.laravel) {
            tech.push(formData.laravel);
            level.push(formData.level3)
        }
        if (formData.oracle) {
            tech.push(formData.oracle);
            level.push(formData.level4)
        }

        const technoDetails: Ids[] = await con.getall(
            `SELECT id AS tech_id FROM know_techno WHERE emp_id IN (${id});`
        );
        for (let i = 0; i < tech.length; i++) {
            if (technoDetails[i]) {
                await con.update(`UPDATE know_techno
            SET tech_know='${tech[i]}', level_of_technology='${level[i]}'
            WHERE emp_id='${id}' AND id='${technoDetails[i].tech_id}';`);
            } else {
                if (tech[i]) {
                    await con.insert(`INSERT INTO know_techno (emp_id, tech_know, level_of_technology)
              VALUES ('${id}', '${tech[i]}', '${level[i]}');`);
                }
            }
        }

        const references: getIds[] = await con.getall(
            `SELECT ref_id FROM reference_contact WHERE emp_id IN (${id});`
        );

        const refLen: number = formData.name.length;
        for (let i = 0; i < refLen; i++) {
            if (references[i]) {
                await con.update(`UPDATE reference_contact
                SET name='${formData.name[i]}', contact_number='${formData.mobileno[i]}', relation='${formData.rel[i]}'
                WHERE emp_id='${id}' AND ref_id='${references[i].ref_id}';`);
            } else {
                if (formData.name[i]) {
                    await con.insert(`INSERT INTO reference_contact (emp_id, name, contact_number, relation)
                  VALUES ('${id}', '${formData.name[i]}', '${formData.mobileno[i]}', '${formData.rel[i]}');`);
                }
            }
        }
        // Preferences
        await con.update(`UPDATE preferences
        SET prefered_location='${formData.preloc}', notice_period='${formData.notice}', expected_ctc='${formData.exctc}', current_ctc='${formData.curctc}', department='${formData.depa}'
        WHERE emp_id='${id}';`);
        res.json({ msg: "Success" });
    } catch (error) {
        res.json({ msg: "Failed" });
    }
};

export default { insertform, updateform };
