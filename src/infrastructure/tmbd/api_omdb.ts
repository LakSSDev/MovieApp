import { transfromToMovie } from "../../core/transformToMovie";

export const api_omdb = async (movie: any) => {

    const key = 'ff50f1b9';
    const URL = `http://www.omdbapi.com/?t=${movie}&plot=full&apikey=${key}`


    const response = await fetch(URL);
    const data = await response.json();


    return transfromToMovie(data);





}