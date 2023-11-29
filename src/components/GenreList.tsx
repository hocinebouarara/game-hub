import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map((genre: Genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
