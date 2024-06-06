import con from "../../models/database"
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { Emp } from "../../interfacefile";

async function get_user(req: Request, res: Response) {
  const query: Emp[] = await con.getall(`select emp_id,fname,lname from emp_details`);
  res.json(query);
}
export default get_user;
