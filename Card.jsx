import React from "react";
import { truncateText } from "../utility/utiltehelper";
import Ratings from "./StarRatings";
import { useDispatch } from "react-redux";
import { fetchVideoDetails } from "../features/common/commonSlice";

function Card(props) {
  const { video, platform } = props;
  const dispatch = useDispatch();

  const getVideoDetails = () => {
    dispatch(fetchVideoDetails({ platform, id: video.id }));
  };

  return (
    <div
      className="card h-100 text-white"
      onClick={getVideoDetails}
      data-bs-toggle="modal"
      data-bs-target="#videop-Modal"
    >
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`}
        alt=""
      />
      <div className="card-body">
        <h5 className="display-2 title mb-0">
          {video?.name ||
            video?.title ||
            video?.original_title ||
            video?.original_name}
        </h5>
        <Ratings
          voteAverage={video?.vote_average}
          voteCount={video?.vote_count}
        />
        <p>{truncateText(video?.overview, 60)}</p>
      </div>
    </div>
  );
}

export default Card;
