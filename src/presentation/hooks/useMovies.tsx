import React, { useEffect, useState } from 'react';
import type { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;
let upcomingPageNumber = 1;
let topRatedPageNumber = 1;

export const useMovies = () => {

    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    useEffect(() => {

        initialLoad();

    }, []);

    const initialLoad = async () => {

        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = UseCases.popularUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.topRatedUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.upcomingUseCase(movieDBFetcher);

        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);
        setIsLoading(false);

    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,
        //Methods
        popularNextPage: async () => {
            popularPageNumber++;
            const popularMovies = await UseCases.popularUseCase(movieDBFetcher, {
                page: popularPageNumber
            });
            setPopular(prev => [...prev, ...popularMovies]);
        },
        upcomingNextPage: async () => {
            upcomingPageNumber++;
            const upcomingMovies = await UseCases.upcomingUseCase(movieDBFetcher, {
                page: upcomingPageNumber
            });
            setUpcoming(prev => [...prev, ...upcomingMovies]);
        },
        topRatedNextPage: async () => {
            topRatedPageNumber++;
            const topRatedMovies = await UseCases.topRatedUseCase(movieDBFetcher, {
                page: topRatedPageNumber
            });
            setTopRated(prev => [...prev, ...topRatedMovies]);
        },
    }

}
