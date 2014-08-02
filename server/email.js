Meteor.startup(function () {
process.env.MAIL_URL="smtp://aly%40alyshehata.com:alool1995@smtp.1and1.com:25/"; 
})

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: "a.shehata%40uky.edu",
      from: from,
      subject: subject,
      text: text
    });
    console.log("Email Sent!")
  }
});
