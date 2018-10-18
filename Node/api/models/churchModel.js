const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChurchSchema = new Schema
({
	churchID:
	{
		type: String
	},
	picture:
	{
		type: String
	},
	about:
	{
		type: Array
	},
	clergy:
	{
		type: Array
	},
	donations:
	{
		type: Array
	},
	bible:
	{
		type: Array
	},
	sermons:
	{
		type: Array
	},
	events:
	{
		type: Array
	}
})

module.exports = mongoose.model('Church', ChurchSchema)