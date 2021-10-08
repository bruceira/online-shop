const express = require("express")
const Products = require("../model/productModel")

const router = express.Router()


router.get("/product", async (req, res) => {
  const data = await Products.find()

  res.json(data)
})

router.post("/product/new", async (req, res) => {

  const data = await new Products(req.body)
  data.save()
  res.json(data)
})

router.delete("/product/delete/:id", async (req, res) => {
  const data = await Products.findByIdAndDelete(req.params.id)
  res.json(data)

})
module.exports = router