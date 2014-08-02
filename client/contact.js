Template.contact.events({
	'click .sendMessage' : function(e, tmpl){
		var messageContent = tmpl.find(".messageContent").value;
		var name = tmpl.find(".name").value;
		var email = tmpl.find(".email").value;
		Meteor.call('sendEmail',
            'aly%40alyshehata.com',
            email,
            (name + " " + email),
            messageContent);
	}
})