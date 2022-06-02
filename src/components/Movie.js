import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Grid from "./Grid";
import Spinner from "./Spinner";
import NoImage from "../images/no_image.jpg";
import BreadCrumb from "./BreadCrumb";
// hook
import { useMovieFetch } from "../hooks/useMovieFetch";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";

const Movie = () => {
  const { moveId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(moveId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
    </>
  );
};

export default Movie;
