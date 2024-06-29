
import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../../core/Movie";

const initialState: Movie = {
  Title: "",
  Type: "",
  Plot: "",
  Poster: "",
  Released: "",
  Year: "",
  Awards: "",
  Actors: ""
}


export const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {

      const { Title, Type, Plot, Poster, Released, Year, Awards, Actors } = action.payload.return;

      state.Title = Title;
      state.Type = Type;
      state.Plot = Plot;
      state.Poster = Poster;
      state.Released = Released;
      state.Year = Year;
      state.Awards = Awards;
      state.Actors = Actors
    }
  }
})


export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;