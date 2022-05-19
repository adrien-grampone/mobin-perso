import axios from "axios";

export const sendMail = async (variables) => {
    try {
        const { message, emails, senderEmail } = variables
        let request = await axios
            .post("/api/email", {
                message, emails, senderEmail, template: 21
            })
            .then((res) => {
                return res;
            }); 0
        return request.status === 200 ? true : false;;
    } catch (err) {
        console.error(err);
    }
};

export const sendResourceNotif = async (variables) => {
    try {
        const { message, emails } = variables
        let data = {
            message,
            emails,
            template: 26
        }
        let request = await axios
            .post("/api/email", data)
            .then((res) => {
                return res;
            }); 0
        return request.status === 200 ? true : false;;
    } catch (err) {
        console.error(err);
    }
};

export const createContactEmail = async (variables) => {
    try {
        const { email } = variables
        let request = await axios
            .post("/api/create-contact", {
                email
            })
            .then((res) => {
                return res;
            }); 0
        return request.status === 200 ? true : false;;
    } catch (err) {
        console.error(err);
    }
};