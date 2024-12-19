export interface NowPlayingResponse {
    dates:         Dates;
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface PopularResponse {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface TopRatedResponse {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface UpcomingResponse {
    dates:         Dates;
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    // original_language: OriginalLanguage;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

/* export enum OriginalLanguage {
    En = 'en',
    Fr = 'fr',
    Sv = 'sv',
    Es = 'es',
} */

export interface MovieDBCastResponse {
    id:   number;
    cast: MovieDBCast[];
    crew: MovieDBCast[];
}

export interface MovieDBCast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: Department;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          Department;
    job?:                 string;
}

export enum Department {
    Acting = 'Acting',
    Art = 'Art',
    Camera = 'Camera',
    CostumeMakeUp = 'Costume & Make-Up',
    Crew = 'Crew',
    Directing = 'Directing',
    Editing = 'Editing',
    Lighting = 'Lighting',
    Production = 'Production',
    Sound = 'Sound',
    VisualEffects = 'Visual Effects',
    Writing = 'Writing',
}
