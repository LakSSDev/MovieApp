import { useState } from "react";
import { api_omdb } from "../../infrastructure/tmbd/api_omdb";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../app/redux/movie/moviesSlice";
import { ErrorComponent } from "../ErrorComponent";
import { useNavigate } from "react-router-dom";

export const InputComponent = () => {
  const [nameMovie, setNameMovie] = useState("");
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async (e: any) => {
    e.preventDefault();
    const response = await api_omdb(nameMovie);

    if (response.return.Actors === "N/A") {
      setHasError(true);
    } else {
      dispatch(addMovie(response));
      setHasError(false);
      navigate("/movie");
    }
  };

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm">
        <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Some movie marked your childhood, let's see how famous it is...
        </p>

        <form>
          <label
            className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
            htmlFor="search-bar"
          >
            <input
              id="movie"
              placeholder="search for you movie"
              name="movie"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
              onChange={(e) => setNameMovie(e.target.value)}
            />
            <button
              onClick={handleClick}
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
            >
              <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </button>
          </label>
        </form>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fill-opacity="0.7"
          ></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stop-color="#3b82f6"></stop>
              <stop offset="1" stop-color="#1d4ed8"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {hasError && <ErrorComponent />}
    </div>
  );
};
