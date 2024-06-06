import { RowDataPacket } from "mysql2";
import con from "../../models/database";
import { Request, Response } from "express";
import { State } from "../../interfacefile";

async function get_state(req: Request, res: Response) {
    const query: State[] = await con.getall(`select * from states`);
    res.json(query);
}

export default get_state;
