import axios from 'axios';

const ACCESS_KEY='AIzaSyBzuEW0zymhC_b3ojVd7Rd6g22c0Q93wXU';

export default axios.create({
 baseURL: 'https://www.googleapis.com/youtube/v3/',
 params:{
    part:'snippet',
    maxResults: 5,
    key: ACCESS_KEY
 }
});