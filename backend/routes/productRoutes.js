const express = require("express")
const Products = require("../model/productModel")

const router = express.Router()


router.get("/product", async (req, res) => {
  const data = await Products.find()

  res.json(data)
})


router.post("/product/new", (req, res) => {
  const data = new Products(req.body)
  data.save()
  res.json(data)
})

module.exports = router