import { useState } from "react";
import MovieList from "./components/MovieList";

export default function App() {

  const [sortOrder, setSortOrder] = useState("desc"); // "asc" or "desc"

  const movies = [
    { id: 1, title: "Inception", rating: 8.8 },
    { id: 2, title: "Interstellar", rating: 8.6 },
    { id: 3, title: "The Dark Knight", rating: 9.0 },
    { id: 4, title: "Tenet", rating: 7.4 },
    { id: 5, title: "Dunkirk", rating: 7.8 },
    { id: 6, title: "The Prestige", rating: 8.5 },
    { id: 7, title: "Memento", rating: 8.4 },
    { id: 8, title: "The Matrix", rating: 8.7 },
    { id: 9, title: "The Lord of the Rings: The Fellowship of the Ring", rating: 8.8 },
    { id: 10, title: "The Lord of the Rings: The Two Towers", rating: 8.7 },
    { id: 11, title: "The Lord of the Rings: The Return of the King", rating: 9.0 },
    { id: 12, title: "The Hobbit: An Unexpected Journey", rating: 7.8 },
    { id: 13, title: "The Hobbit: The Desolation of Smaug", rating: 7.8 },
    { id: 14, title: "The Hobbit: The Battle of the Five Armies", rating: 7.4 },
    { id: 15, title: "Avatar", rating: 7.9 },
    { id: 16, title: "Avatar: The Way of Water", rating: 7.8 },
    { id: 17, title: "Gladiator", rating: 8.5 },
    { id: 18, title: "The Shawshank Redemption", rating: 9.3 },
    { id: 19, title: "Pulp Fiction", rating: 8.9 },
    { id: 20, title: "Fight Club", rating: 8.8 },
  ];
  
  
  const sortedMovies = [...movies].sort((a, b) => {
    return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
  });
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="mb-6">
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Sort: {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
      </div>

      <MovieList movies={sortedMovies}/>

    </div>
  )
}