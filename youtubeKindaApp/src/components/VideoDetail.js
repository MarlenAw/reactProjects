import React from 'react';

const VideoDetail = (props) => {
  if(!props.video){
    return <div>Loading...</div>
  }
  const videoId = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="Wrapper">
      <div>
        <iframe src={url}></iframe>
      </div>
      <div>
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );

}

export default VideoDetail;
