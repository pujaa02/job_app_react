
import con from "../../models/database"
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { Language } from "../../interfacefile";

async function lan(req: Request, res: Response) {
  const query: Language[] = await con.getall(`select * from language`);
  res.json(query);
}
export default lan;