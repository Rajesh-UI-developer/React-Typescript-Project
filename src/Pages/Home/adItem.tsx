import { FC } from "react";
import "./home.css";
const AdItem: FC = () => {
  return (
    <>
      <div className="ad_image">
        <img src={require("../../assets/images/laptop-banner.png")} alt="" />
        <div className="ad_content">
          <h4>Grand Sale Starts !!!</h4>
          <div className="contents_">
            <p>Trade-In Offer</p>
            <h5>MacBook Air</h5>
            <h5>Latest Model</h5>
            <p>
              from <span>$9,999</span>
            </p>
          </div>
        </div>
        {/* <div className="offers">
          <h5 className="offer_1">Combo</h5>
          <h5 className="offer_2"> Offers</h5>
          <h5 className="offer_3"> Available</h5>
        </div> */}
      </div>
    </>
  );
};
export default AdItem;
