import con from "../../models/database"
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { Workexp } from "../../interfacefile";

async function work_exp(req: Request, res: Response) {
  const query: Workexp[] = await con.getall(`select * from work_experience`);
  res.json(query);
}
export default work_exp;
