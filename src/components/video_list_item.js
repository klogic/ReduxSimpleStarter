import React from 'react';

const VideoItem = (props) => {
   return (
     <div>
       {props.videoItem.snippet.channelTitle}
    </div>
   )
};

export default VideoItem;