import React from 'react';
import videoSrc from './video.mp4';

function Video() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const video = React.useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    video.current?.play();
  }

  const handlePause = () => {
    video.current?.pause();
  }

  const handleForward = () => {
    if (video.current) video.current.currentTime += 2;
  }

  const handlePlaybackRate = (speed: number) => {
    if (video.current) video.current.playbackRate = speed;
  }

  const handlePictureInPicture = async () => {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
    } else {
        await video.current.requestPictureInPicture();
    }
    
  }

  const handleMute = () => {
    if (video.current) video.current.muted = !video.current.muted;
  }

  return (
    <div>
      <div className="flex">
        {
            !isPlaying ? <button onClick={handlePlay}>Play</button> 
            : <button onClick={handlePause}>Pause</button>
        }
        <button onClick={handleForward}>{">>"}</button>
        <button onClick={() => handlePlaybackRate(0.5)}>x0.5</button>
        <button onClick={() => handlePlaybackRate(1)}>x1</button>
        <button onClick={() => handlePlaybackRate(2)}>x2</button>
        <button onClick={handlePictureInPicture}>Picture mode</button>
        <button onClick={handleMute}>Mute</button>
      </div>

      <video 
        controls 
        ref={video} 
        src={videoSrc}
        onPlay={() => setIsPlaying(true)} 
        onPause={() => setIsPlaying(false)}
      ></video>
    </div>
  );
}

export default Video;
