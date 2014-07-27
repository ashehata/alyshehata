process.env.MAIL_URL="smtp://alyehabshehata%40gmail.com:Aloosh99@smtp.gmail.com:465/"; 

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: "a.shehata@uky.edu",
      from: from,
      subject: subject,
      text: text
    });
    console.log("Email Sent!")
  }
});
