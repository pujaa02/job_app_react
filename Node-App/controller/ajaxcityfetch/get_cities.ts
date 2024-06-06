import { RowDataPacket } from "mysql2";
import con from "../../models/database"
import { Request, Response } from "express";
import { City } from "../../interfacefile";

async function get_cities(req: Request, res: Response) {
  const query: City[] = await con.getall(`select * from cities`);
  res.json(query);
}

export default get_cities;
