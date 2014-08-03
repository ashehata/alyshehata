Template.contact.events({
	'click .sendMessage' : function(e, tmpl){
		var messageContent = tmpl.find(".messageContent").value;
		var name = tmpl.find(".name").value;
		var contact = tmpl.find(".email").value;
		Meteor.call('sendContactEmail',
            name + " - Email: " + contact,
            messageContent
        );
	}
})