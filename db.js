import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"raiz",
    password:"Jo40Vi70r@@",
    database:"blog",
})