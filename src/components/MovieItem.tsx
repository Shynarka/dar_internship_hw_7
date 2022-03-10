import React, { useState } from "react";
import { Movie } from "../types";

type Props = {
  movie: Movie;
};

const MovieItem: React.FC<Props> = ({ movie }) => {
  const [state, setState] = useState({
    loading: false,
    addedToWatchLater: false,
  });

  const watchLaterClick = () => {
    setState((newState) => ({
      ...newState,
      addedToWatchLater: true,
    }));
  };

  return (
    <div className="item" style={{ margin: "1rem" }}>
      <img src={movie.image} alt={movie.title} style={{ width: "120px" }} />
      <div>{movie.title}</div>
      {/* <div>{movie.description}</div> */}
      <div>({movie.duration / 60} hours)</div>
      <button
        onClick={watchLaterClick}
        style={{ border: "0px", padding: "5px" }}
      >
        {state.addedToWatchLater ? "Added to list" : "Watch later"}
      </button>
    </div>
  );
};

export default MovieItem;
