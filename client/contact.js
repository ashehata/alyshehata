Template.contact.events({
	'click .sendMessage' : function(e, tmpl){
		var messageContent = tmpl.find(".messageContent").value;
		var name = tmpl.find(".name").value;
		var email = tmpl.find(".email").value;
		console.log("clicked");
		Meteor.call('sendEmail',
            'alyshehata13@gmail.com',
            email,
            (name + " " + email),
            messageContent);
	}
})