import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../Hook/hook";
import { API } from "../../Server/productAPI";
import { getDataError, getSingleData } from "../../Store/action";
import ImageTab from "./imageTab";
import "./product.css";
import ProductBtns from "./productBtns";
import ProductDetails from "./productDetail";
const Product: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const APICALL = API.GetByID(id)
    .then((res: any) => {
      dispatch(getSingleData(res.data));
    })
    .catch((err: any) => {
      dispatch(getDataError(err.message));
    });
  useEffect(() => {
    id ? APICALL : null;
  }, [id]);
  return (
    <>
      <div className="products_ mb-4">
        <ImageTab />
        <ProductDetails />
        <ProductBtns />
      </div>
    </>
  );
};
export default Product;
