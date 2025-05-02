import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
