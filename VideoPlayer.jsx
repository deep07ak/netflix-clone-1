import React, { useEffect, useState } from "react";

function VideoPlayer(props) {

  const {videosList} = props;
  console.log(videosList);
  const [key, setKey]= useState('');
  
  useEffect(()=>{
      if(videosList && videosList.length > 0){
          const trailer = videosList?.find((item)=>{
              return item.type === "Trailer"
         })
         setKey(trailer.key);
      }   
  }, [videosList])

  return (
    <div className="ratio ratio-16x9 video-player">

      <iframe
        src={`https://www.youtube.com/embed/${key}?rel=0autoplay=1&mute=1`}
        title="YouTube video"
        >
        </iframe>
    </div>
  );
}

export default VideoPlayer;
