const {Basket, BasketDevice} = require('../models/models')

class BasketController {
    async addItem(req, res) {
        const {itemId} = req.body
        const brand = await Brand.create({name})
        return res.json(brand) 
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async removeItem(req, res) {
        const {name} = req.body
        await Brand.destroy({
            where: {
                name: name
            }
        })
        return res.json(`${name} deleted`)
    }
}

module.exports = new BasketController()