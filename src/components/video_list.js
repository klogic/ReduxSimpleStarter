import React from 'react';
import VideoItem from './video_list_item';

const VideoList = (props) => {
    
    const VideoItems = props.videos.map((video) => {
      return <VideoItem  videoItem = {video} />
    });

    return (
    <ul className="col-md-4 list-group">
        {VideoItems}
    </ul>
    );
};
export default VideoList;