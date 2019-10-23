import Axios from 'axios';

export default Axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 0b2ebc8592c1acb6f512dd9e3be12a687f6e6e85cc89733852e09bd76c6f0fad'
    }
})