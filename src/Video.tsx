import React from 'react';
import videoSrc from './video.mp4';

function Video() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const video = React.useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    video.current?.play();
    setIsPlaying(true);
  }

  const handlePause = () => {
    video.current?.pause();
    setIsPlaying(false);
  }

  const handleForward = () => {
    if (video.current) {
        video.current.currentTime = video.current.currentTime +2;
    }
  }

  const handlePlaybackRate = () => {
    if (video.current) {
        const newPlaybackRate = video.current.playbackRate < 2 ? video.current.playbackRate + 0.5 : 0.5;
        video.current.playbackRate = newPlaybackRate;
    }
  }

  const handlePictureInPicture = () => {
    if (video.current) {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        } else if (document.pictureInPictureEnabled) {
          video.current.requestPictureInPicture();
        }
    }
  }

  const handleMute = () => {
    setIsMuted(!isMuted);
  }

  return (
    <div>
      <div className="flex">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleForward}>{">>"}</button>
        <button onClick={handlePlaybackRate}>x1</button>
        <button onClick={handlePictureInPicture}>Picture mode</button>
        <button onClick={handleMute}>Mute</button>
      </div>

      <video 
        controls 
        ref={video} 
        src={videoSrc} 
        muted={isMuted}
        onPlay={() => setIsPlaying(true)} 
        onPause={() => setIsPlaying(false)}
      ></video>
    </div>
  );
}

export default Video;
