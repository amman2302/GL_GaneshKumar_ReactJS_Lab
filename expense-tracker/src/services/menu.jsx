import axios from 'axios';


const getDataFromServer = () => {
    const data = axios.get(`http://localhost:3000/items`)
        .then(response => response.data);
    return data;
}


export {
    getDataFromServer
}