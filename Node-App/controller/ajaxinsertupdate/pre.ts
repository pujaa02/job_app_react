import con from "../../models/database";
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { PreferedLocation } from "../../interfacefile";

async function pre(req: Request, res: Response) {
  const query: PreferedLocation[] = await con.getall(`select * from preferences`);
  res.json(query);
}
export default pre;
