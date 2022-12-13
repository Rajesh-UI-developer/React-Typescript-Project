import { FC } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useAppDispatch } from "../../Hook/hook";
import { getCartData, getDataLaptop } from "../../Store/action";
type cardProps = {
  data: any;
};
import "./card.css";
const Card: FC<cardProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dataView = (item: any) => {
    dispatch(getDataLaptop(item));
    navigate(`/product/${item.id}`);
  };
  const cartToStore = (data: any) => {
    dispatch(getCartData(data));
    // toast.success("Item Added Successfully");
  };
  return (
    <>
      <div className="col card_">
        <div className="card h-100 card_common">
          <img src={props.data.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.data.title}</h5>
            <p>{props.data.description}</p>
          </div>
          <button
            type="button"
            className="card_btn"
            onClick={() => dataView(props.data)}
          >
            View Details
          </button>
        </div>

        <div className="overlay" onClick={() => cartToStore(props.data)}>
          <i className="fa fa-cart-plus " aria-hidden="true" />
        </div>
      </div>
      {/* <ToastContainer
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
      /> */}
    </>
  );
};
export default Card;
