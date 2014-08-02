process.env.MAIL_URL="smtp://alyshehata13%40gmail.com:alool1995@smtp.gmail.com:465/"; 




Meteor.methods({
  sendEmail: function (from, to, subject, text) {
    console.log("Sending email");
    Email.send({
      from: "a.shehata@uky.edu",
      to: "a.shehata@uky.edu",
      subject: subject,
      text: text
    });
  }
});
