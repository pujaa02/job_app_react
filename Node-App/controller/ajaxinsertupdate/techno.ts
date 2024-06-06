import con from "../../models/database"
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { Technology } from "../../interfacefile";

async function tech(req: Request, res: Response) {
  const query: Technology[] = await con.getall(`select * from know_techno`);
  res.json(query);
}
export default tech;
