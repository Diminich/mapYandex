import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api-maps.yandex.ru/2.1/?apikey=89421737-9451-4936-8983-4e920b355b6c&lang=ru_RU'
});

