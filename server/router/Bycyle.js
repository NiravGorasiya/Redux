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
        return res.status(200).json({ status: true, result })
    } catch (error) {

    }
})

router.delete("/delete/:id", async (req, res, next) => {
    try {
        const result = await Bycyle.findById(req.params.id)
        result.delete();
        return res.status(200).json({ message: "successfull delete" })
    } catch (error) {

    }
})

router.put("/update/:id", async (req, res, next) => {
    try {
        console.log(req.body);
        const { owner, price, description } = req.body
        const result = await Bycyle.findByIdAndUpdate({ _id: req.params.id }, {
            owner,
            description,
            price
        }, {
            new: true
        })
        return res.status(200).json({ status: true, result, message: "record as successfull update" })
    } catch (error) {

    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const result = await Bycyle.findById(req.params.id)
        return res.status(200).json({ status: true, result, message: "record as successfull update" })
    } catch (error) {

    }
})


module.exports = router