import axios from 'axios'

const ADS_API_REST_URL = "http://localhost:8080/ads.json";

class APIService {

    getAds(){
        return axios.get(ADS_API_REST_URL);
    }

}

export default new APIService();