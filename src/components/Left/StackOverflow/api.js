import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.stackexchange.com/2.2',
    params:  {
        order:   'desc',
        sort:    'activity',
        site:    'stackoverflow',
        pagesize: 10
    }
});