const db = require('../database/db');


module.exports = class StatusIssue {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }

    static fetchAll = async () => {
        try {
            const [rows] = await db.execute('SELECT * FROM issues');