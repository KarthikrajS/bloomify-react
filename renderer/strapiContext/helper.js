"use client";
const AUTH_TOKEN = import.meta.env.PUBLIC_ENV__VIKE_API_TOKEN

export const getToken = () => {
    if (typeof localStorage !== 'undefined')
        return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token) => {
    if (token) {
        if (typeof localStorage !== 'undefined')
            localStorage.setItem(AUTH_TOKEN, token);
    }
};

export const removeToken = () => {
    if (typeof localStorage !== 'undefined')
        localStorage.removeItem(AUTH_TOKEN);
};