import React from 'react';

const VideoDetail  = ({video}) => {
  if (!video){
    return <div className="col-md-8">Loading...</div>
  }
  const videoId = video.id.videoId;
  const title = video.snippet.title;
  const description = video.snippet.description;
  const url = `https://www.youtube.com/embed/${videoId}`; 
  /* es6 concat with string refactor from  =>   
  const url = 'https://www.youtube.com/embed/' + videoId; 
  */

  return (
  <div className="col-md-8">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={url} allowFullScreen />
    </div>
    <div className="details">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
  );
}

export default VideoDetail;