import axios from 'axios';

const KEY = 'AIzaSyBepSVEz_cS785LWn5pmsGhouiT46Hltsk';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:  {
        part:       'snippet',
        order:      'date',
        maxResults: 5,
        key:        KEY
    }
});