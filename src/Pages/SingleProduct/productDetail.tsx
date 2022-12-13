import { FC } from "react";
import { useAppSelector } from "../../Hook/hook";

const ProductDetails: FC = () => {
  const data = useAppSelector((state) => state.getDataReducer.singleData);
  return (
    <>
      {data ?(<div className="product_container_">
      <h4 className="name">{data.category} Details :</h4>
        <div className="row details">
          <p className="col-3">Product Name :</p>
          <h5 className="col-8">{data.title}</h5>
        </div>
        <div className="row details">
          <p className="col-3">Description :</p>
          <h6 className="col-8">{data.description}</h6>
        </div>
        <div className="row details">
          <p className="col-3">Stock Available :</p>
          <h6 className="col-8">{data.stock} Items</h6>
        </div>
        <div className="row details">
          <p className="col-3">Actcual Price :</p>
          <h5 className="col-8">{data.price}</h5>
        </div>
        <div className="row details">
          <p className="col-3">Ratings :</p>
          <h6 className="col-8">{data.rating} / 5</h6>
        </div>
      </div>):null}
    </>
  );
};
export default ProductDetails;
