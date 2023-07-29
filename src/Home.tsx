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
import MarqueeLogo from "./Landing/MarqueeLogo/MarqueeLogo";

function Home() {
  return (
    <>
      <HeroText />
      {/* <MapImages /> */}
      <ClipVideo />
      <About1 />
      <MarqueeLogo />
      {/* <HorizontalScrollSection /> */}
      <Quote />
      <SplineSection />
      <About2 />
      <BlogSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
