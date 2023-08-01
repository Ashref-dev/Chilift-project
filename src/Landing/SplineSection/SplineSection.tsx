import Spline from "@splinetool/react-spline";

const SplineSection = () => {
  return (
    <div className="hidden md:d-block" >
      <h1 className="flex items-center justify-center text-center font-display text-4xl font-medium">
        Elegance en simplicité.
      </h1>
      <div className="image-placeholder min-h-[max(550px,90vh)]">
        <Spline scene="https://prod.spline.design/UPCb0c4RpNVr2AsX/scene.splinecode" />
      </div>
    <div/>
  );
};

export default SplineSection;
