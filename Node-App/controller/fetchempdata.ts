import con from "../models/database";
import { Request, Response } from "express";
import {
  Edu,
  Emp,
  Language,
  PreferedLocation,
  Reference,
  Technology,
  Workexp,
  FormData,
} from "../interfacefile";

async function get_user(req: Request, res: Response) {
  const query: Emp[] = await con.getall(
    `select emp_id,fname,lname from emp_details`
  );
  res.json(query);
}

async function emp_det(req: Request, res: Response) {
  const id: string = req.params.id;

  const emp: Emp[] = await con.getall(
    `select * from emp_details where emp_id=${id}`
  );
  const edu: Edu[] = await con.getall(
    `select * from edu_detail where emp_id=${id} `
  );
  const workexp: Workexp[] = await con.getall(
    `select * from work_experience where emp_id=${id}`
  );
  const language: Language[] = await con.getall(
    `select * from language where emp_id=${id}`
  );
  const technology: Technology[] = await con.getall(
    `select * from know_techno where emp_id=${id}`
  );
  const referance: Reference[] = await con.getall(
    `select * from reference_contact where emp_id=${id}`
  );
  const preferance: PreferedLocation[] = await con.getall(
    `select * from preferences where emp_id=${id}`
  );

  let emp_details: Array<string | number | Date> = [];
  let preferances: Array<string> = [];

  let board_name: Array<string> = [];
  let py: Array<number | string> = [];
  let percentage: Array<number | string> = [];

  let result_type: string[] = ["ssc", "hsc", "bachelor", "master"];

  for (let i = 0; i < edu.length; i++) {
    if (result_type[i] === edu[i].type_of_result) {
      board_name.push(edu[i].Name_of_board_or_course);
      py.push(edu[i].Passing_year);
      percentage.push(edu[i].Percentage);
    } else {
      board_name.push("");
      py.push("");
      percentage.push("");
    }
  }
  let companyname: Array<string> = [];
  let designation: Array<string> = [];
  let from: Array<Date | string> = [];
  let to: Array<Date | string> = [];

  for (let i = 0; i < workexp.length; i++) {
    companyname.push(workexp[i].company_name);
    designation.push(workexp[i].designation);
    from.push(workexp[i].from_date);
    to.push(workexp[i].to_date);
  }

  let name: Array<string> = [];
  let mobileno: Array<number | string> = [];
  let rel: Array<string> = [];

  for (let i = 0; i < referance.length; i++) {
    name.push(referance[i].name);
    mobileno.push(referance[i].contact_number);
    rel.push(referance[i].relation);
  }
  let finaldata = {
    fname: emp[0].fname,
    lname: emp[0].lname,
    designa: emp[0].designation,
    email: emp[0].email,
    phone: emp[0].phone,
    gender: emp[0].gender,
    rel_status: emp[0].rel_status,
    address1: emp[0].address1,
    address2: emp[0].address2,
    city: emp[0].city,
    state: emp[0].state,
    zipcode: emp[0].zipcode,
    bd: emp[0].bd,
    board_name,
    py,
    percentage,
    companyname,
    designation,
    from,
    to,
    name,
    mobileno,
    rel,
    preloc: preferance[0].prefered_location,
    notice: preferance[0].notice_period,
    exctc: preferance[0].expected_ctc,
    curctc: preferance[0].current_ctc,
    depa: preferance[0].department,
  };
  res.json({ result: finaldata });
}

export default { get_user, emp_det };
