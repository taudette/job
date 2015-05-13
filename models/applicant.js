var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({
	name: String,
	bio: String,
	skills: [String],
	years: Number,
	why: String
});

	

//conect to database
var Applicant = mongoose.model('applicant', applicantSchema);

module.exports = Applicant;
