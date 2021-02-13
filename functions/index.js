const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

admin.initializeApp();

// Using Gmail
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'newlifetanaka', // here use your real email
    pass: 'newlifetanaka2020' // put your password correctly (not in this question please)
  }
});

// Sending the request
exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        // Getting query parameter from http request
        const to = req.query.to;
        const msg = req.query.msg;
        const email = req.query.email;
        const title = req.query.title;

        const mailOptions = {
            from: gmailEmail,
            to: to,
            subject: 'This is a sample of email function',
            html: `${email}+${title}+${msg}`
        };

        // Getting results
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });
});