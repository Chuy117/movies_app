import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { PopularResponse } from '../../../infrastructure/interfaces/movies-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

interface Options {
    page?: number;
    limit?: number;
}

export const popularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {

    try {

        const popular = await fetcher.get<PopularResponse>('/popular', {
            params: {
                page: options?.page ?? 1
            }
        });

        return popular.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {

        console.error(error);
        throw new Error('Error fetching movies - popular');

    }

}