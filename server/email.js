Meteor.startup(function() {
	Meteor.Mandrill.config({
	    username: "a.sh@outlook.com",
	    key: "a7B6rWVW5DNrPupxvJa8Ew"
	  });
});

Meteor.methods({
	sendContactEmail : function(subject, message) {
		console.log("Sending Email!")
	   	Meteor.Mandrill.send({
	    to: "a.shehata@uky.edu",
	    from: "aly@alyshehata.com",
	    from_name: "Aly Shehata",
	    subject: subject,
	    text: message
	  		});
	   }

})

