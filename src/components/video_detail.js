import React from 'react';

const VideoDetail = ({video}) => {
  if (!video){
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const vtitle = video.snippet.title;
  const vdesc = video.snippet.description;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="ember-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{vtitle}</div>
        <div>{vdesc}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
