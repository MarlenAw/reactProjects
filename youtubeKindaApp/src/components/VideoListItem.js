import React from 'react';

const VideoListItem = (props) => {
  // console.log(props.video);
  return (
    <li onClick={() => props.onVideoSelect(props.video)}>
      <img src={props.video.snippet.thumbnails.default.url}/>
      {props.video.snippet.title}
    </li>
  )
}

export default VideoListItem;
