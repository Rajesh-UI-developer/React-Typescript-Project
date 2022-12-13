import { FC } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../Hook/hook";
import { getCartData } from "../../Store/action";

const ProductBtns: FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.getDataReducer.singleData);
  const cartBtn = () => {
    dispatch(getCartData(data));
    toast.success("Item Added Successfully");
  };
  return (
    <>
      <div className="product_btns">
        <button
          type="button"
          className="cart_btn btn btn-info"
          onClick={cartBtn}
        >
          Cart
        </button>
        <button type="button" className="cart_btn btn btn-success">
          Buy Now
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
export default ProductBtns;
