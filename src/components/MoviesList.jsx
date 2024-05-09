import React, { useState } from "react";

function MoviesList() {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "The Shawshank Redemption",
            description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        },
        {
            id: 2,
            title: "The Godfather",
            description:
                "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        },
        {
            id: 3,
            title: "The Dark Knight",
            description:
                "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        },
        {
            id: 4,
            title: "Pulp Fiction",
            description:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        },
        {
            id: 5,
            title: "Schindler's List",
            description:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        },
    ]);

    const [showDescription, setShowDescription] = useState({});

    const toggleDescription = (id) => {
        //                        1                  :  false
        //                        2                  :  false
        //                        3                  :  false
        // on click 1 => 1 : true
        setShowDescription({ ...showDescription, [id]: !showDescription[id] });
    };

    const removeFunction = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index} onClick={() => toggleDescription(movie.id)}>
                        <p>{movie.title}</p>
                        {showDescription[movie.id] && <p>{movie.description}</p>}
                        <button onClick={() => removeFunction(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesList;
