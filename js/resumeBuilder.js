var name = "Clarissa Nicole Jaime"

var role = " Front End Developer and Digital Marketer"

var email = " clarissanjaime@gmail.com"

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderName.replace("%data%", role);

var bio = {
	"name" : "Clarissa Jaime",
	"role" : "Front End Developer and Digital Marketer",
	"contacts": {
		"mobile" : "915-253-2520",
		"email" : "clarissanjaime@gmail.com",
		"github" : "clarissajaime",
		"twitter" : "@clarissajaime",
		"location" : "Brooklyn, NY"
	},
	"bioPic" : "images/fry.jpg"
};

var education = {
	"schools": {
		"name": "Startup Institute",
		"location": "New York, NY",
		"degree": "Double Bachelor's of Art",
		"majors": "Communication Studies & Political Science",
	},
	{
		"name": "University of Texas at El Paso",
		"location": "El Paso, Texas",
		"degree": "Double Bachelor's of Arts",
		"majors": "Communication Studies & Political Science",
	},
	{
		"name": "University of Texas at El Paso",
		"location": "El Paso, Texas",
		"degree": "Double Bachelor's of Arts",
		"majors": "Communication Studies & Political Science",
	},
	{
		"name": "University of Texas at El Paso",
		"location": "El Paso, Texas",
		"degree": "Double Bachelor's of Arts",
		"majors": "Communication Studies & Political Science",
	},
	{
		"name": "University of Texas at El Paso",
		"location": "El Paso, Texas",
		"degree": "Double Bachelor's of Arts",
		"majors": "Communication Studies & Political Science",
	}
}


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);