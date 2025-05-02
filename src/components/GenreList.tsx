import React from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre();
  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
