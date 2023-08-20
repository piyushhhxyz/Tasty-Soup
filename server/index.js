const express = require("express");
const cors = require("cors");
const {dbConnect} = require("./config/dbConnect")
const {users} = require("./models/Users");
const authRoutes = require("./routes/auth");

const app = express();
require("dotenv").config()

const PORT = process.env.PORT || 4000;

dbConnect()

app.use(express.json());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)
app.use("/api/v1/auth", authRoutes) 

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running...'
	});
});
app.listen(PORT, () => console.log(`App is running at ${PORT}`))