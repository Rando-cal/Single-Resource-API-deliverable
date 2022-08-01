const mongoose = require('mongoose')

const Pens = new mongoose.Schema(
	{
		type: {
			type: String,
			required: true,
		},
		material: {
			type: String,
			
		},

		refillable: {
			type: Boolean
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Pens', Pens)
