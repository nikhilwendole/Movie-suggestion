
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { searchMovies } from "../utils/omdb";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);


  const fetchMovies = async (q: string) => {
    setLoading(true);
    const results = await searchMovies(q);

    const uniqueMovies = Array.from(
      new Map(results.map((m: any) => [m.imdbID, m])).values()
    );

    setMovies(uniqueMovies);
    setLoading(false);
  };

  useEffect(() => {
    if (!query) return;
    fetchMovies(query);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetchMovies(query);
  };

  return (
    <div className="min-h-[80vh] flex flex-col gap-10">

      
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-2xl rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies like Batman, Inception..."
            className="flex-1 px-5 py-4 bg-transparent text-white placeholder-gray-400 outline-none"
          />

          <button
            type="submit"
            className="px-6 font-semibold bg-blue-600 hover:bg-blue-700 transition-all"
          >
            Search
          </button>
        </form>
      </div>

    
      {loading && (
        <p className="text-center text-gray-400 animate-pulse">
          Searching movies...
        </p>
      )}

      
      {!loading && query && movies.length === 0 && (
        <p className="text-center text-gray-400">
          No movies found for <span className="text-white">"{query}"</span>
        </p>
      )}

      {/* 🎬 Movie Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

    </div>
  );
}
