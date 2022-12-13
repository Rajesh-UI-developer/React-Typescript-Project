import { FC } from "react";
import Card from "../../Components/Card/card";
import { useAppSelector } from "../../Hook/hook";

const Laptop: FC = () => {
  // const dispatch = useAppDispatch();
  const storeGetData = useAppSelector(
    (state) => state.getDataReducer.data.products
  );
  // const storeGetDataLoad = useAppSelector(
  //   (state) => state.getDataReducer.data.loading
  // );
  // const storeGetDataError = useAppSelector(
  //   (state) => state.getDataReducer.data.error
  // );
  // console.log(storeGetData,storeGetDataLoad,storeGetDataError);
  return (
    <>
      <div className="laptop_content">
        <h3>Top Sale Branded Laptops</h3>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {storeGetData?.map((item: any, index: any) =>
            item.category === "laptops" ? (
              <Card data={item} key={index} />
            ) : null
          )}
        </div>
      </div>
    </>
  );
};
export default Laptop;
