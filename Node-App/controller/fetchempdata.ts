import con from "../models/database"
import { Request, Response } from "express";
import { Edu, Emp, Language, PreferedLocation, Reference, Technology, Workexp, FormData } from "../interfacefile";

async function get_user(req: Request, res: Response) {
    const query: Emp[] = await con.getall(`select emp_id,fname,lname from emp_details`);
    res.json(query);
}

async function emp_det(req: Request, res: Response) {
    const id: string = req.params.id;
    console.log(id, "id");

    const emp: Emp[] = await con.getall(`select * from emp_details where emp_id=${id}`);
    const edu: Edu[] = await con.getall(`select * from edu_detail where emp_id=${id} `);
    const workexp: Workexp[] = await con.getall(`select * from work_experience where emp_id=${id}`);
    const language: Language[] = await con.getall(`select * from language where emp_id=${id}`);
    const technology: Technology[] = await con.getall(`select * from know_techno where emp_id=${id}`);
    const referance: Reference[] = await con.getall(`select * from reference_contact where emp_id=${id}`);
    const preferance: PreferedLocation[] = await con.getall(`select * from preferences where emp_id=${id}`);

    console.log(emp, edu, workexp, language, technology, referance, preferance);

    let emp_data = emp[0];
    console.log(emp_data, "emp_data");



    let data = [];
    data.push(emp[0], preferance[0])

    console.log(data, "dataaaaaaaaa");

    res.json({ result: "complete" });
}


export default { get_user, emp_det };