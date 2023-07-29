import ClipVideo from "./ClipVideo";
import HeroText from "./HeroText";
import MapImages from "./MapImages";
import About1 from "./Landing/About1/About1";
import About2 from "./Landing/About2/About2";
import Quote from "./Landing/Quote/Quote";
import Newsletter from "./Landing/Newsletter/Newsletter";
import BlogSection from "./Landing/BlogSection/BlogSection";
import Footer from "./Landing/Footer/Footer";
import HorizontalScrollSection from "./Landing/HorizontalScrollSection/HorizontalScrollSection";
import SplineSection from "./Landing/SplineSection/SplineSection";
import Marquee from "react-fast-marquee";
import logo from "./assets/logo_vector_black_mini.svg";

function Home() {
  return (
    <>
      <HeroText />
      {/* <MapImages /> */}
      <ClipVideo />
      <About1 />
      {/* <HorizontalScrollSection /> */}
      <Marquee autoFill={true} pauseOnHover={true}>
        <img className="mx-8 my-4 h-16" src={logo} alt="logo" />
      </Marquee>
      <Quote />

      <SplineSection />
      <Marquee autoFill={true} pauseOnHover={true}>
        <img className="mx-8 mt-4 mb-16 h-16" src={logo} alt="logo" />
      </Marquee>
      <About2 />

      <BlogSection />
      <Newsletter />
      <Marquee autoFill={true} pauseOnHover={true}>
        <img className="mx-8 mt-2 mb-16 h-16" src={logo} alt="logo" />
      </Marquee>
      <Footer />
    </>
  );
}

export default Home;
