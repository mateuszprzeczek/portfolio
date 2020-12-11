const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({
  origin: true
})
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})
console.log('mailTransport')

mailTransport.sendEMail = function (mailRequest) {
    return new Promise(function (resolve, reject) {
      mailTransport.sendMail(mailRequest, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve("The message was sent!");
        }
      });
    });
  }
console.log('sendEmailFunc')
exports.submit = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', '*')
  console.log(res)
  console.log(req)

  if (req.method === 'OPTIONS') {
    res.end()
  } else {
    cors(req, res, () => {
      if (req.method !== 'POST') {
        return
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `${req.body.name} just messaged me from my website`,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
      }

      return mailTransport.sendMail(mailOptions).then(function (email) {
        res.status(200).send({
            isEmailSend: true
          }).json({ success: true, msg: 'Mail sent' });
        console.log('success')
    }).catch(function (exception) {
        res.status(200).json({ success: false, msg: exception });
        console.log('nosuccess')
    });
    })
  }
})