
import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.imdbID}`}>
      <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer">
        
        {/* Poster */}
        <div className="h-[350px] bg-slate-700">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
            alt={movie.Title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-4 space-y-1">
          <h2 className="font-semibold text-lg line-clamp-1">
            {movie.Title}
          </h2>
          <p className="text-slate-400 text-sm">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}
