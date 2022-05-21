const {Type} = require('../models/models')

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async remove(req, res) {
        const {id} = req.params
        const type = await Type.findOne(
            {
                where: {id}
            },
        )
        return res.json(`${type.name} deleted`)
    }
}

module.exports = new TypeController()