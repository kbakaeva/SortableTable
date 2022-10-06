const db = require('../db')
class LogisticController {
    async createRow(req, res) {
        const { date, name, quantity, distance } = req.body
        const createLogistic = await db.query(`INSERT INTO logistic (date, name, quantity, distance) values ($1, $2, $3, $4) RETURNING *`, [date, name, quantity, distance])
        res.json(createLogistic.rows[0])
    }

    async getRow(req, res) {
        const getLogistic = await db.query(`SELECT * from logistic`)
        res.json(getLogistic.rows)
    }

    async updateRow(req, res) {
        const { id, date, name, quantity, distance } = req.body
        const updateLogistic = await db.query(`UPDATE logistic set date = $1, name = $2, quantity = $3, distance =$4 where id = $5 RETURNING *`, [date, name, quantity, distance, id])
        res.json(updateLogistic.rows[0])

    }

    async deleteRow(req, res) {
        const id = req.params.id
        const deleteLogistic = await db.query(`DELETE FROM logistic where id = $1`, [id])
        res.json(deleteLogistic.rows[0])
    }
}

module.exports = new LogisticController()