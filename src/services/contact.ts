import axios from "axios";
import {API_URL} from "@/constatns";
import {getToken} from "@/services/auth";

export const sendForm = async (name: string, email: string, message: string) => {
    try {

        const {data} = await axios.post(`${API_URL}/form`, {
                email: email.trim().toLocaleLowerCase(),
                name: name.trim(),
                message: message.trim()
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + getToken()
                }
            });

        return true;

    } catch (e) {
        console.error(e);
        return false;
    }
};