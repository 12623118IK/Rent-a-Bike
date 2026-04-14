import mysql, {Pool} from "mysql2/promise";

export class Database {
    conn: Pool;

    constructor() {
        this.conn = mysql.createPool({
            host: "localhost",
            database: "luxury_car_rent_system",
            user: "root",
            password: "",
        })
    }
}