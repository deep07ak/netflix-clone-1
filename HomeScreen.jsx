import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNetflixOriginals,
  nfOriginalsSelector,
  fetchTopRatedTv,
  topRatedTvSelector,
  fetchPopularTv,
  popularTvSelector,
} from "../features/tv/tvslice.js";
import Header from "../components/Header";
import Row from "../components/Row";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  popularMoviesSelector,
  topRatedMoviesSelector,
} from "../features/movies/moviesSlice";

function HomeScreen(props) {
  const [randomIndex, setRandomIndex] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNetflixOriginals());
  }, []);
  const nfOriginals = useSelector(nfOriginalsSelector);

  useEffect(() => {
    if (nfOriginals.status === "success") {
      let randomIndex = Math.floor(
        Math.random() * nfOriginals.data.results.length
      );
      setRandomIndex(randomIndex);
    }
  }, [nfOriginals]);

  return (
    <>
      {nfOriginals.status === "loading" ? (
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-white" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : nfOriginals.status === "success" ? (
        <Header video={nfOriginals.data.results[randomIndex]} platfrom="tv" />
      ) : (
        "error"
      )}
      <div className="container-fluid py-3">
        <Row
          title="Popular Movies"
          action={fetchPopularMovies}
          selector={popularMoviesSelector}
          platform="movies"
        />
        <Row
          title="Top Rated Movies"
          action={fetchTopRatedMovies}
          selector={topRatedMoviesSelector}
          platform="movies"
        />

        <Row
          title=" Top Rated Tv "
          action={fetchTopRatedTv}
          selector={topRatedTvSelector}
          platform="tv"
        />
        <Row
          title="Popular Tv "
          action={fetchPopularTv}
          selector={popularTvSelector}
          platform="tv"
        />
      </div>
    </>
  );
}

export default HomeScreen;
