import axios from "axios";
import {API_URL} from "@/constatns";

interface ICookieOptions {
    path?: string;
    expires?: Date | string;
    'max-age'?: number | string;
}

export const login = async (email: string, password: string) => {
    try {
        const {data} = await axios.post(`${API_URL}/login`, {
            email: email.trim().toLocaleLowerCase(),
            password: password.trim()
        });

        const {token, expiresIn} = data;

        //Сохраняем куки на 2 часа
        const currentTime = new Date().getTime();
        const expires = new Date(currentTime + expiresIn);
        setCookie('access_token', token, {expires: expires});

        //Переходим в личный кабинет
        return true;
    } catch (error) {
        console.error(`Error handled: `, error);
        return false;
    }
};

export const getCookie = (name: string): string | undefined => {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const setCookie = (name: string, value: string, options: ICookieOptions = {}): void => {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        // @ts-ignore
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
};

export const deleteCookie = (name: string): void => {
    setCookie(name, "", {
        'max-age': -1
    })
}


export const register = async (name: string, email: string, password: string) => {
    /**
     Алгоритм:
     1. Делаем запрос к API
     2. В случае успеха возвращаем true и сохраняем в cookie token
     3.
     */

    try {
        const {data} = await axios.post(`${API_URL}/register`, {
            name: name,
            email: email.trim().toLocaleLowerCase(),
            password: password.trim()
        });

        //Сохраняем данные в cookies, если есть
    } catch (error) {
        console.error(`Error handled: `, error);
        return false;
    }
};

export const logout = () => {
    deleteCookie("access_token");

};

export const getToken = () => {
    return getCookie("access_token");
};

export const checkAuth = () => {
    try {
        const accessToken = getCookie('access_token');
        return !!accessToken;
    } catch (e) {
        return false;
    }
};