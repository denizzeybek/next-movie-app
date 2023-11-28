import React from 'react';
import { MovieContainer } from '@/containers/movie';
import Movies from '@/mocks/movies';
import { notFound } from 'next/navigation';

const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function MoviePage({ params, searchParams }) {
  await delay(1000);
  const movieDetail = Movies.results.find((movie) => movie.id === +params.id);

  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === 'true') {
    throw new Error('error happened!');
  }

  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  );
}

export default MoviePage;
