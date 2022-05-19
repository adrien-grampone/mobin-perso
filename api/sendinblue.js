
import SibApiV3Sdk from 'sib-api-v3-sdk';
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

const sendinblue = (sendSmtpEmail) => {
    apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
        return true;
    }, function (error) {
        console.error(error);
        return false;
    });
}


module.exports = sendinblue