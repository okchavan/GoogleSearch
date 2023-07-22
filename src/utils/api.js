import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyB-NQ7bYD4Z1pdCb8JWS_sXjJWpvxpsrZY",
    cx: "a35b5ad2e52d9457c",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};