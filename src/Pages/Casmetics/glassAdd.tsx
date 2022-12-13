import { FC } from "react";

const GlassAdd: FC = () => {
  return (
    <>
      <div className="sunglass">
        <div className="men_glass">
          <img src={require("../../assets/images/menglass.jpg")} alt="" />
        </div>
        <div className="women_glass">
          <img src={require("../../assets/images/womenglass.jpg")} alt="" />
        </div>
        <div className="glass_content">
           <h4>Sunglasses</h4>
           <h5>Mens & Womens</h5>
           <span>Start From</span>
           <p>$99</p>
           <button type="button" className="btn">Show Now</button>
        </div>
      </div>
    </>
  );
};
export default GlassAdd;
