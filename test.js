var gmailer = require("./lib/gmailer.js");

var mailOptions = {
	from: "lovespreading2014@gmail.com", // sender address
	to: "shelleysun1992@gmail.com", // list of receivers
	subject: "Register Success!", // Subject line
	html: "Dcard" // html body
}

gmailer.sendGmail(mailOptions);
