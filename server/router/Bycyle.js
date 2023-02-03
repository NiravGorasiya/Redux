const router = require("express").Router()
const Bycyle = require("../model/Bycyle")

router.post("/add", async (req, res, next) => {
    try {
        const { owner, price, description } = req.body
        const result = await Bycyle.create({
            owner,
            description,
            price
        })
        res.status(201).json({ status: true, result, message: 'Successfull add bycyle' })
    } catch (error) {
        console.log(error);
    }
})

router.get("/all", async (req, res, next) => {
    try {
        const result = await Bycyle.find();
        return res.status(200).json(result)
    } catch (error) {

    }
})

module.exports = router