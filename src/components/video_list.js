import React from 'react';
import VideoItem from './video_list_item';

const VideoList = (props) => {
    
    const VideoItems = props.videos.map((video) => {
      return (
      <VideoItem  
        key={ video.etag } 
        videoItem={ video }
        onSelectedVideo={ props.onSelectedVideo } />
      );
    });

    return (
    <ul className="col-md-4 list-group">
        {VideoItems}
    </ul>
    );
};
export default VideoList;