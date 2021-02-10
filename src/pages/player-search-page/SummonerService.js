import axios from 'axios';

const getSummoner = async (username, region) => {
    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}`;
    const headers = {
        'X-Riot-Token': 'RGAPI-5e617fb7-0ff6-4bb9-b6fb-2be28b48aba6'
    };
    try {
        const response = await axios.get(url, {headers});
        return await Promise.resolve(response.data);
    } catch (error) {
        return await Promise.reject(error);
    }
};

const Api ={
    getSummoner
};

export default Api;