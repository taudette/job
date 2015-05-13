var Applicant = require('../models/applicant.js');

var indexController = {
	index: function(req, res) {

		Applicant.find({}, function(err, documents){
			res.render('index', {
				applicants: documents
			});
		});
	},

	applicantAdd: function(req, res){
		var  applicantData = req.body;
		var skills = applicantData.skills.split(',').map(function(skill){
			return skill.trim();
		});

		var applicant = new Applicant ({
			name: applicantData.name,
			bio: applicantData.bio,
			skills: skills,
			years: applicantData.years,
			why: applicantData.why
		});

		applicant.save(function(err, results){
			res.redirect('/applicants');	
		});
	},

	applicantList: function(req, res) {
		Applicant.find({}, function(err, applicants){
			res.render('applicants', {
				applicants: applicants
			});
		});
	},
	//this is where it gets removed from the server
	applicantDelete: function(req, res){
		Applicant.findByIdAndRemove(req.params.applicantID, function(err, results){
			res.redirect('/applicants');
		});
	},
    applicantView: function(req, res){
    Applicant.findById(req.params.applicantID,
        function(err, applicant){
            res.render('view',{
                applicant: applicant
            });           
        });    
    }
};


module.exports = indexController;