// const api_key = '1796892666a2027063ca588e7b6bdccf-7bbbcb78-b95459fe';
// const domain = "sandboxf5a9f1d69b824c0f9da91480996c893e.mailgun.org";
// const gun = require('mailgun-js')({
//   apiKey: api_key,
//   domain: domain
// });
//
//
// module.exports = (message) => {
// console.log('Mail gun!!!');
//
//   return gun.messages().send({
//     from: 'Mailgun Sandbox <postmaster@sandboxf5a9f1d69b824c0f9da91480996c893e.mailgun.org>',
//     to: 'Godwin Okoi <gordie2u@gmail.com>',
//     subject: 'Hobby Management',
//     text: message
//   });
//
// }


const nodemailer = require('nodemailer');
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

module.exports = {

function (sendEmail){

nodemailer.createTestAccount((err, account) => {
  console.log('attempting to send mail . . .');
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'gordie2u@gmail.com', // generated ethereal user
            pass: 'thestomper.1' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Gordie" <gordie2u@gmail.com>', // sender address
        to: 'gordie2u@gmail.com', // list of receivers
        subject: 'Hobby Management', // Subject line
        text: 'message', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Mail sent');
        // Preview only available when sending through an Ethereal account
        console.log(info);

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
      });
    }
}
