import "./MarqueeLogo.css";
import logo from "../../assets/marquee.png";
const MarqueeLogo = () => {
  return (
    <div>
      <div style={{ paddingBottom: "2rem" }}>
        <div className="marquee">
          <div className="marquee-content scsc">
            <img src="" alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
          </div>
          <div className="marquee-content scsc">
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
            <img src={logo} alt="" />
          </div>
        </div>
        {/* <div className="marquee">
            <div className="marquee-content scroll-it rev">
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
            </div>
            <div className="marquee-content scroll-it rev">
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default MarqueeLogo;
