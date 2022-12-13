import { FC } from "react";
import Card from "../../Components/Card/card";
import { useAppSelector } from "../../Hook/hook";

const Groceries: FC = () => {
    const storeGetData = useAppSelector(
        (state) => state.getDataReducer.data.products
      );
      return (
        <>
          <div className="laptop_content">
            <h3>Fragence Products </h3>
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {storeGetData?.map((item: any, index: any) =>
                item.category === "groceries" ? (
                  <Card data={item} key={index} />
                ) : null
              )}
            </div>
          </div>
        </>
      );
};
export default Groceries;
