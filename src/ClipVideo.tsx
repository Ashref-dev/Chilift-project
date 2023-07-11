function ClipVideo() {
  return (
    <video
      className="h-screen w-full animate-clip-from-top-animation object-cover"
      autoPlay
      muted
      loop
    >
      <source src="src/assets/video_sample.webm" type="video/webm" />
    </video>
  );
}

export default ClipVideo;
