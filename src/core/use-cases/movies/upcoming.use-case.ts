import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { UpcomingResponse } from '../../../infrastructure/interfaces/movies-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

interface Options {
    page?: number;
    limit?: number;
}

export const upcomingUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {

    try {

        const upcoming = await fetcher.get<UpcomingResponse>('/upcoming', {
            params: {
                page: options?.page ?? 1
            }
        });

        return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);


    } catch (error) {

        console.error(error);
        throw new Error('Error fetching movies - Upcoming');

    }

}