import { useSelector } from "react-redux";
import { RootState } from "../app/redux/movie/store"; // Importa RootState desde store.ts
import { MovieComponent } from "../components/MovieComponent";
import { Movie } from "../core/Movie";


export const Movie_page = () => {
  const movie : Movie= useSelector((state: RootState) => {
    return state.movies; // Retorna el objeto movies
  });


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {movie.Title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {movie.Plot}
          </p>

          <MovieComponent movie = {movie} />
          
            
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <img src={movie.Poster} alt="mockup" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};
