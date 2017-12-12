var bio = {
	"name": "Sajawal Ghani",
	"role": "Student",
	"contact": {
		"mobile": "+49 172 89452 77",
		"email": "sajawal.ghani@gmail.com",
		"github": "GhaniS",
		"linkedIn": "sajawal.ghani",
		"location": "Stuttgart-Germany"
	},
	"biopic": "images/Portfolio_Image_BW.jpg",
	"welcomeMessage": "Good Day! Welcome to my project Interactive Resume. I hope you'll like it.",
	"skills": ["HTML", "JavaScript", "jQuery", "PHP", "SILAB", "Sublime Text", "Mac OS X", "Linux", "Windows"],
	"Achievements": ["Deutschland Stipendium (Apr 2016- Mar 2017)", "Silvermedal in Bachelors Studies (2015)"]
};

var work = {
	"jobs": [
	{
		"employer": "RIB Software Technologies",
		"title": "WerkStudent",
		"location": "Stuttgart- Möhringen",
		"dates": "Apr 2017 - Nov 2017",
		"description": "It is a software company which provide 5D simulations to construction companies prior to the actual construction. I am responsible for writing scripts in Javascript which contributes to an overall process of simulating various aspects of construction.",
		"url": "http://www.rib-software.com/"
	},
	{
		"employer": "Institute for Engineering Design and Industrial Design",
		"title": "HiWi",
		"location": "Stuttgart - Vaihingen",
		"dates": "Jan 2015- Mar 2016",
		"description": "This institute is mainly focused on automobile technology. I as an IT student am assisting them in the electrical parts of the automobile which include several integrated circuits, general wiring in the car, and also circuit maintenance. This job includes the determining of correct voltage value of the sensors in order to gauge the maximum and minimum limits of the design of the test bench. Moreover, I am also partly responsible of the mechanical parts of the test bench ( automobile model) where sometimes I have to build new mechanical part for the car.",
		"url": "https://www.iktd.uni-stuttgart.de/index.php?lang=en"

	}
	]
};

var projects = {
	"projects": [
	{
		"title": "The Interactive Resume",
		"dates": "Recent",
		"description": "I created the online Interactive resume to showcase my skills in JavaScript",
		"images": ['images/theResumeProject.jpg']
	},
	{
		"title": "GoCure Website prototype",
		"dates": "2014",
		"description": "Design the layout of the an interactive website as a semester project in my bachelors studies",
		"images": ['images/goCure.jpg']
	},

	]
};

var education = {
	"schools": [
	{
		"name": "University of Stuttgart",
		"location": "Stuttgart",
		"degree": "Master of Information Technology",
		"majors": "Computer Hardware Software Engineering",
		"years": "Oct 2015 - Present",
		"url": "http://www.uni-stuttgart.de/infotech"
	},

	{
		"name": "COMSATS Institute of Information Tecnology" ,
		"location": "Islamabad",
		"degree": "Electrical(Computer) Engineering",
		"majors": "Computer Engineering",
		"years": "Sep 2010 - Jul 2015",
		"url": "http://islamabad.comsats.edu.pk/"
	}

	],

};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#topContacts").append(HTMLlinkedIn.replace("%data%", bio.contact.linkedIn));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
/* 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill); */
	}

		if (bio.Achievements.length > 0) {
		$('#header').append(HTMLachievementsStart);

		for (i = 0; i < bio.Achievements.length; i++) 
		{
			var formattedAchievements = HTMLachievements.replace('%data%', bio.Achievements[i]);
			$('#achievements').append(formattedAchievements);
		}

	}
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#footerContacts").append(HTMLlinkedIn.replace("%data%", bio.contact.linkedIn));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
}

work.display = function() {

	for (job in work.jobs) {
		
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedlocation);

		var formattedUrl = HTMLworkUrl.replace("#", work.jobs[job].url);
		$(".work-entry:last").append(formattedUrl);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);





	}
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (school in education.schools){
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].years));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolURL.replace("#", education.schools[school].url));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}

}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
