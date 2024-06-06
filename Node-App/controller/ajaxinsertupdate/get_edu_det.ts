import { RowDataPacket } from "mysql2";
import con from "../../models/database"
import { Request, Response } from "express";
import { Edu } from "../../interfacefile";

async function edu_det(req: Request, res: Response) {
  const query: Edu[] = await con.getall(`select * from edu_detail`);
  res.json(query);
}
export default edu_det;
