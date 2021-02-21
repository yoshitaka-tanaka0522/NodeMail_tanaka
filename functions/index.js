var Mailer = require('nodemailer');
var Smtpsetting = {
  service: 'Gmail',
  secure: true,
  auth: {
    user: 'test',
    pass: 'test',
    port: '465' 
  }
};

exports.sendMail = functions.https.onRequest((req, res) => {
var Mailobject = {
  from: 'req.body.mail',
  to: 'test@gmail.com',
  subject: 'This mail is test.',
  text: `test`,
  html: `
  <html>
  <head>
  </head>
  <body>
  <h1>テスト送信</h1>
  <p>テスト</p>
  </body>
  </html>
  ` 
};

//SMTP
var Smtp = Mailer.createTransport('SMTP', Smtpsetting);

let Send = () => Smtp.sendMail(Mailobject, function (err, res) {

  if (err) {
    console.log('エラー出力' + err);

  } else {
    console.log('テストメッセージ' + res.message);
  }
  //SMTP
  Smtp.close();
});
Send();
next();
});
