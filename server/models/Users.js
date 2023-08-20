const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	},{ timestamps: true });

module.exports = mongoose.model("users", UsersSchema);