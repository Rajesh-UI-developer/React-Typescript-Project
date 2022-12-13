import { FC } from "react";
import "./home.css";
const AdWatch: FC = () => {
  return (
    <>
      <div className="double_ad">
        <div className="first_ad">
          <img src={require("../../assets/images/watch-1.jpg")} alt="" />
        <div className="first_ad_cont">
            <p>Spring Sale is Coming</p>
            <h5>All Smart  Watches Available</h5>
            <h5>Discount</h5>
            <span>15% off</span>
        </div>
        </div>
        <div className="second_ad">
          <img src={require("../../assets/images/boom-headset.png")} alt="" />
          <div className="second_ad_cont">
          <p>Amazing Value</p>
            <h5>Headphones Trending</h5>
            <h5>JBL Harman</h5>
            <span>from $59,99</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdWatch;
