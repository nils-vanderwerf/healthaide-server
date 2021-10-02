import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { readdirSync } from "fs" //file system
const morgan = require("morgan")

require("dotenv").config();
const app = express()

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
})
.then(() => console.log("DB CONNECTED"))
.catch(error => console.error("DB CONNECTION ERROR", error))


//middleware
app.use(cors())
app.use(morgan("dev"))
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
// readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));


const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is running on port ${port}`));