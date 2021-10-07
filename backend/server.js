const express = require("express")
const mongoose = require("mongoose")
const mongodb = require("mongodb")
const cors = require("cors")
const productRoutes = require("./routes/productRoutes")
const dotenv = require("dotenv")
dotenv.config()

// const MongoClient = mongodb.MongoClient

// MongoClient.connect(process.env.ONLINE_DB_URI, { useNewUrlParser: true, })
//   .catch(err => {
//     console.log(err.stack)
//   }).then(() => console.log("db connected"))

mongoose.connect("mongodb://127.0.0.1:27017/onlinedatabase", { useNewUrlParser: true })


const app = express()

app.use(cors())
app.use(express.json())
app.use("/", productRoutes)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

const port = process.env.PORT || 3030

app.listen(port, () => console.log(`server is running on ${port}`))