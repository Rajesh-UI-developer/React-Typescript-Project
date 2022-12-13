import { FC, useEffect } from "react";
import Footer from "../../Components/footer/footer";
import { useAppDispatch } from "../../Hook/hook";
import { getDataThunk } from "../../Store/action";
import Banner from "./banner";
import FacePack from "./facePack";
import Fragrence from "./fragence";
import SunGlass from "./glass";
import GlassAdd from "./glassAdd";
import Groceries from "./groceries";
import SkinCare from "./skinCare";

const Casmetics: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDataThunk);
  }, []);
  return (
    <>
      <div className="casmetics_container">
        <Banner />
        <SkinCare />
        <Fragrence />
        <GlassAdd />
        <SunGlass />
        <FacePack />
        <Groceries />
        <div className="footer_">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Casmetics;
