import { Movie } from "./Movie"


export const transfromToMovie = (apiResponse: Movie) => ({
    return: {
        Title: apiResponse.Title,
        Type: apiResponse.Type,
        Plot: apiResponse.Plot,
        Poster: apiResponse.Poster,
        Released: apiResponse.Released,
        Year: apiResponse.Year,
        Awards: apiResponse.Awards,
        Actors: apiResponse.Actors,
    }
})




