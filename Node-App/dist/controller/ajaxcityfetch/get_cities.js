"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../models/database"));
async function get_cities(req, res) {
    const query = await database_1.default.getall(`select * from cities`);
    res.json(query);
}
exports.default = get_cities;
//# sourceMappingURL=get_cities.js.map