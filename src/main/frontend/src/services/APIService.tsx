import axios from 'axios'

const ADS_API_REST_URL = "http://localhost:8080/api/ads";

class APIService {

    getAds(){
        return axios.get(ADS_API_REST_URL);
    }

    // @ts-ignore
    put = ads => {
        axios.put(`http://localhost:8080/api/ads/${ads.id}`, ads)
            .then(res => {
                // this.setState({items: res.data});
                // this.props.history.push('/items');
            })
            .catch(err => console.log(err));
    }

}

export default new APIService();