import axios from 'axios';

const axiosAPI = axios.create({
    baseURL : 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
});

const apiRequest = async (method, url, request) => {
    const headers = {
        "X-Riot-Token": "RGAPI-5e617fb7-0ff6-4bb9-b6fb-2be28b48aba6"
    };
    try {
        const res = await axiosAPI({
            method,
            url,
            data: request,
            headers
        });
        return await Promise.resolve(res.data);
    } catch (err) {
        return await Promise.reject(err);
    }
};

const getSummoner = (url, username, region) => apiRequest('get', url, username);

const Api ={
    getSummoner
};

export default Api;