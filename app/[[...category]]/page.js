import HomeContainer from '@/containers/home';
import Movies from '@/mocks/movies';
import Genres from '@/mocks/genres';

function Home({ params }) {
  let categoryId = params.category;
  const selectedCategoryMovies = Movies.results.filter((movie) =>
    movie.genre_ids.includes(+categoryId),
  );
  const selectedCategory = Genres.genres.find(
    (genre) => genre.id === +categoryId,
  );
  return (
    <HomeContainer
      selectedCategory={{
        id: categoryId,
        movies: selectedCategoryMovies || [],
        title: selectedCategory?.name,
      }}
    />
  );
}

export default Home;
