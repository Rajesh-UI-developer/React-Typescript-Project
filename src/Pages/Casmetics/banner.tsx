import { FC } from "react";
import "./casmetic.css";

const Banner: FC = () => {
  return (
    <>
      <div className="cas_banner">
        <img src={require("../../assets/images/banner.jpg")} alt="" />
        <div className="cas_banner_cont">
          <span>Best Beauty Offers</span>
          <h3>Selected Skincare</h3>
          <div className="d-flex ">
            <h3>UP TO </h3>
            <h3 className="cas_banner_offer ms-3"> 30% OFF</h3>
          </div>

          <p>
            Discover the best beauty offers and treats on some of your <br />{" "}
            favourite luxury beauty brands
          </p>
          <button type="button" className="btn">Shop Now</button>
        </div>
      </div>
    </>
  );
};
export default Banner;
