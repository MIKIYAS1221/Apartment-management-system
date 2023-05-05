import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const login = async (email, password) => {
    return axios.post(`${BASE_URL}/users/login`, { email, password }).then((response) => {
        return response.data;
    });
};

export const register = async (data) => {
    return axios.post(`${BASE_URL}/users/signup`, data).then((response) => {
        return response.data;
    });
};

export const makeApartmentRequest = async (id,date) => {
    return axios.post(`${BASE_URL}/users/makeApartmentRequest`, {id,date}).then((response) => {
        return response.data;
    });
}