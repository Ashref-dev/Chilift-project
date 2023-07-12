import video from "./assets/video_sample.webm";
function ClipVideo() {
  return (
    <video
      className="h-screen w-full animate-clip-from-top-animation object-cover"
      autoPlay
      muted
      loop
    >
      <source src={video} type="video/webm" />
    </video>
  );
}

export default ClipVideo;
