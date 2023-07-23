import axios from "axios";
import {API_URL} from "@/constatns";

export const login = async (email: string, password: string) => {
    /**
     Алгоритм:
     1. Делаем запрос к API
     2. В случае успеха возвращаем true и сохраняем в cookie token
     3.
     */

    console.log(email, password);

    try {
        const {data} = await axios.post(`${API_URL}/login`, {
            email: email.trim().toLocaleLowerCase(),
            password: password.trim()
        });
        console.log('data: ', data);
        //Сохраняем данные в cookies
    } catch (error) {
        console.error(`Error handled: `, error);
        return false;
    }
};

export const register = async (name: string, email: string, password: string) => {
    /**
     Алгоритм:
     1. Делаем запрос к API
     2. В случае успеха возвращаем true и сохраняем в cookie token
     3.
     */
    console.log(name, email, password);

    try {
        const {data} = await axios.post(`${API_URL}/register`, {
            name: name,
            email: email.trim().toLocaleLowerCase(),
            password: password.trim()
        });
        console.log('data: ', data);
        //Сохраняем данные в cookies, если есть
    } catch (error) {
        console.error(`Error handled: `, error);
        return false;
    }
};

export const checkAuth = () => {
    try {

    } catch (e) {

    }
};