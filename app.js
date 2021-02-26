const express = require('express');
var nodemailer = require('nodemailer');
//var xoauth2 = require('xoauth2');
// const mailSendMiddleware = require('./mailSend');
const app = express();

app.post('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  // メッセージ
  var message = {
    from:'usg92kdmt6r955b7tteb@docomo.ne.jp',
    to: 'newlifetanaka@gmail.com',
    subject: 'nodemailerTest',
    text: 'testmessage'
  };

  // 認証情報
  var auth = {
    type         : 'OAuth2',
    user         : 'newlifetanaka@gmail.com',
    clientId     : '830213183160-2d4ohjpkdogvhefchm9fb5uop7s76mlm.apps.googleusercontent.com',
    clientSecret : 'k98aVY-8Yz7FuUu24mnlNGLq',
    refreshToken : '1//04q9Mr4d9L88BCgYIARAAGAQSNwF-L9IraA_ftWshFmB71hH-5CngpZkGZaVfp_kcMcdpGO5HpjKBGJqGc7HVy5rxEYDJR3RBfgs'
  };

  // トランスポート
  var transport = {
    service : 'gmail',
    auth : auth
  };

  var transporter = nodemailer.createTransport(transport);

  transporter.sendMail(message, function(err, response) {
    console.log(err || response);
  });  

  const obj = {
    message: 'メール送信完了'
  };
  res.status(200).json(obj);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`${PORT}番でサーバ起動`);
});
