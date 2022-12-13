import { FC, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../Hook/hook";
import { updateCartData } from "../../Store/action";
import "./cart.css";

const Cart: FC = () => {
  const data = useAppSelector((state) => state.getDataReducer.cartData);
  const dispatch = useAppDispatch();
  const [Quantity, setQuantity] = useState<number | null>(null);
  const [input, setInput] = useState<number>(1);

  const quantity = (e: any, item: any) => {
    const price = Number(e.target.value) * Number(item.price);
    setInput(e.target.value);
    setQuantity(price);
  };
  const deleteCart = (id: number) => {
    const updated = data.filter((item: any) => item.id !== id);
    dispatch(updateCartData(updated));
    toast.success("Item Deleted Successfully");
  };

  return (
    <>
      {data?.map((item: any, index: any) => (
        <div key={index} className="cart_cont">
          <div className="image_">
            <img src={item.thumbnail} alt={item.title} />
          </div>
          <div className="content">
            <h5>Product Name</h5>
            <h4>{item.title}</h4>
          </div>
          <div className="content">
            <h5>Product Price</h5>
            <h4>{Quantity ? Quantity : item.price}</h4>
          </div>
          <div className="content">
            <h5>Quantity</h5>
            <input
              type="number"
              name=""
              id=""
              value={input}
              onChange={(e) => quantity(e, item)}
            />
          </div>
          <div className="content_btn">
            <button type="button" className="btn btn-success">
              Place Your Order
            </button>
          </div>
          <div className="content_btn">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteCart(item.id)}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      ))}
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
export default Cart;
