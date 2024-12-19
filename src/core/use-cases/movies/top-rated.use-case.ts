import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { TopRatedResponse } from '../../../infrastructure/interfaces/movies-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

interface Options {
    page?: number;
    limit?: number;
}

export const topRatedUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {

    try {

        const top = await fetcher.get<TopRatedResponse>('/top_rated', {
            params: {
                page: options?.page ?? 1
            }
        });

        return top.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {

        console.error(error);
        throw new Error('Error fetching movies - TopRated');

    }

}