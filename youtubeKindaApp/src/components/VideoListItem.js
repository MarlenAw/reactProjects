import React from 'react';

const VideoListItem = (props) => {
  // console.log(props.video);
  return (
    <li>
      <img src={props.video.snippet.thumbnails.default.url}/>
      {props.video.snippet.title}
    </li>
  )
}

export default VideoListItem;
