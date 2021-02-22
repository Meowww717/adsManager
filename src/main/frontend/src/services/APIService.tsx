import axios from 'axios'

const ADS_API_REST_URL = "http://localhost:8080/ads.json";



class APIService {

    getAds(){
        return [
            {
                "id": 1,
                "name": "Ad 1",
                "date": "13-01-2021",
                "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif"
            },
            {
                "id": 2,
                "name": "Ad 2",
                "date": "14-01-2021",
                "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif"
            },
            {
                "id": 3,
                "name": "Ad 3",
                "date": "15-01-2021",
                "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif"
            },
            {
                "id": 4,
                "name": "Ad 4",
                "date": "16-01-2021",
                "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif"
            },
            {
                "id": 5,
                "name": "Ad 5",
                "date": "17-01-2021",
                "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif"
            },
            {
                "id": 6,
                "name": "Ad 6",
                "date": "18-01-2021",
                "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif"
            },
            {
                "id": 7,
                "name": "Ad 7",
                "date": "19-01-2021",
                "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif"
            },
            {
                "id": 8,
                "name": "Ad 8",
                "date": "20-01-2021",
                "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif"
            },
            {
                "id": 9,
                "name": "Ad 9",
                "date": "21-01-2021",
                "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif"
            },
            {
                "id": 10,
                "name": "Ad 10",
                "date": "22-01-2021",
                "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Dukesource125.gif"
            }
        ];
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