import HomeContainer from '@/containers/home';
import Movies from '@/mocks/movies';
import Genres from '@/mocks/genres';

const delay = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
async function Home({ params }) {
  await delay(1000);

  let categoryId = params.category;
  const selectedCategoryMovies = Movies.results.filter((movie) =>
    movie.genre_ids.includes(+categoryId)
  );
  const selectedCategory = Genres.genres.find(
    (genre) => genre.id === +categoryId
  );
  return (
    <HomeContainer
      selectedCategory={{
        id: categoryId,
        movies: selectedCategoryMovies || [],
        title: selectedCategory?.name
      }}
    />
  );
}

export default Home;
