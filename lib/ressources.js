import axios from "axios";
import Cookie from "js-cookie";

import { API_URL } from '../utils/api/api-url'

export const postDocumentAdherent = (formData) => {
    // const { titre = "", thematique = "", fichier = null } = variables
    //prevent function from being ran on the server
    if (typeof window === "undefined") {
        return;
    }

    return new Promise((resolve, reject) => {
        let token = Cookie.get("token")
        if (!token) {
            reject()
        }
        axios({
            method: 'POST',
            url: `${API_URL}/document-adherents`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: formData
        })
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                console.log("error", error)
                //reject the promise
                reject(error);
            });
    });
};
