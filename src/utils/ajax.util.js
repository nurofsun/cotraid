import axios from 'axios';

async function getDataAllProvince() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/indonesia`)
        const { data } = await response;

        return data;
    }
    catch(err) {
        throw err;
    }
}

async function getDataByProvince(province) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/indonesia/provinsi`)
        const { data } = await response;

        return data;
    }
    catch(err) {
        throw err;
    }
}

export { getDataAllProvince, getDataByProvince }
