

import { getMovieDetails } from "../../../utils/omdb";

export default async function Movie(props) {
  const params = await props.params;
  const movie = await getMovieDetails(params.id);

  if (!movie) {
    return <p className="text-center text-slate-400">Movie not found</p>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* Poster */}
      <div>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Details */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{movie.Title}</h1>
        <p className="text-slate-400">
          {movie.Year} • {movie.Runtime} • {movie.Genre}
        </p>

        <p className="leading-relaxed">{movie.Plot}</p>

        <div className="flex gap-6 mt-4">
          <span className="bg-green-600 px-4 py-2 rounded-lg">
            ⭐ {movie.imdbRating}
          </span>
          <span className="bg-slate-700 px-4 py-2 rounded-lg">
            {movie.Rated}
          </span>
        </div>
      </div>
    </div>
  );
}

