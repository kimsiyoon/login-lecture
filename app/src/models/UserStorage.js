"use strict";

const db = require("../config/db");

class UserStorage {

   // static getUsers(isAll, ...fields) {}

    static getUsersInfo(id) {
        return new Promise((reserve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                reserve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((reserve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
                if (err) reject(`${err}`);
                reserve({ success: true });
            });
        });
    }
}

module.exports = UserStorage;

