const sendinblue_create_contact = require('../../api/sendinblue-createContact')


export default function handler(req, res) {
    const { email = "" } = req.body;
    sendinblue_create_contact(email)
    res.send('success');
}