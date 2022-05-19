const sendinblue = require('../../api/sendinblue')


export default function handler(req, res) {
    const { message = '', emails = [], senderEmail = "", template = undefined } = req.body;
    let sendSmtpEmail = {
        to: emails,
        templateId: template,
        params: {
            message,
            senderEmail
        },
    };
    sendinblue(sendSmtpEmail)
    res.send('success');
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.end(JSON.stringify({ name: 'John Doe' }))
}