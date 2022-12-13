import { FC } from "react";

const FacePack: FC = () => {
  return (
    <>
      <div className="face_pack">
        <img src={require("../../assets/images/facepack.jpg")} alt="" />
      <div className="face_pack_cont">
        <p>Beauty at Home</p>
        <h3>Organic Face Mask</h3>
        <h4>SAVE 10%</h4>
        <span>with code : natural10</span>
        <button type="button" className="btn">Shop Now</button>
      </div>
      </div>
    </>
  );
};
export default FacePack;
