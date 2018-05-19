import React from 'react';

const VideoItem = ({videoItem}) => {
  /* ({videoItem}) equal =>  const videoItem = props.videoItem; */ 
  const imageUrl = videoItem.snippet.thumbnails.default.url;
  const title = videoItem.snippet.title;
  return (
    <li className="list-group media">
      <div className="media-left">
      <img src={imageUrl} alt= {title}/>
      </div>
      <div className="media-body">
        <div className="media-heading">
          {title}
        </div>
      </div>
    </li>
  )
};

export default VideoItem;