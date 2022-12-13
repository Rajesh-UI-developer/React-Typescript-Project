import { FC } from "react";
import "./home.css";

const Subcribe: FC = () => {
  return (
    <>
      <div className="subcribe">
        <div className="sub_cont">
          <h5>Join Our Newsletter</h5>
          <p>Subcribe to get information about products and coupons</p>
        </div>
        <div className="sub_input_cont">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn" type="button" id="button-addon2">
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Subcribe;
