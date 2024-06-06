import con from "../../models/database"
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { Reference } from "../../interfacefile";

async function ref(req: Request, res: Response) {
  const query: Reference[] = await con.getall(`select * from reference_contact`);
  res.json(query);
}
export default ref;
