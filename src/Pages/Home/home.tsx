import { FC, useEffect } from "react";
import "../Home/home.css";
import AdItem from "./adItem";
import AdWatch from "./adwatch";
import Carousel from "./carousel";
import Laptop from "./laptop";
import Mobile from "./mobile";
import MenWatch from "./menWatch";
import WomenWatch from "./womenWatch";
import { getDataThunk } from "../../Store/action";
import { useAppDispatch } from "../../Hook/hook";
import Subcribe from "./subscribe";
import Footer from "../../Components/footer/footer";
const Home: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDataThunk);
  }, []);
  return (
    <>
      <div className="home_page">
        <Carousel />
        <Laptop />
        <Mobile />
        <AdItem />
        <MenWatch />
        <AdWatch />
        <WomenWatch />
        <Subcribe />
        <Footer />
      </div>
    </>
  );
};
export default Home;
