import React from 'react';
import { FeaturedMovie } from '@/components/featured-movie';
import { Categories } from '@/components/categories';
import Movies from '@/mocks/movies';
import Genres from '@/mocks/genres';
import { MoviesSection } from '@/components/movies-section';

function HomeContainer({ selectedCategory }) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]}></FeaturedMovie>
      <Categories categories={Genres.genres.slice(0, 5)}></Categories>
      {selectedCategory.movies.length > 0 && (
        <MoviesSection title={selectedCategory.title} movies={selectedCategory.movies} />
      )}
      <MoviesSection
        title="Popular Films"
        movies={Movies.results.slice(1, 7)}
      />
      <MoviesSection
        title="Your favorites"
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
}

export default HomeContainer;
