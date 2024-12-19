import React from 'react';
import { View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage, upcomingNextPage, topRatedNextPage } = useMovies();

    if (isLoading) {
        return <FullScreenLoader />
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                {/* Principal */}
                <PosterCarousel movies={nowPlaying} />
                {/* Popular */}
                <HorizontalCarousel
                    movies={popular}
                    title='Populares'
                    /* loadNextPage={() => popularNextPage()} */
                    loadNextPage={popularNextPage}
                />
                {/* Top Rated */}
                <HorizontalCarousel
                    movies={topRated}
                    title='Mejor calificadas'
                    loadNextPage={topRatedNextPage}
                />
                {/* Upcoming */}
                <HorizontalCarousel
                    movies={upcoming}
                    title='Próximamente'
                    loadNextPage={upcomingNextPage}
                />
            </View>
        </ScrollView>
    )

}
