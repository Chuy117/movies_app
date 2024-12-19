import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ff585734489d3edbe38b7ef399e6b078',
        language: 'es',
    }
})