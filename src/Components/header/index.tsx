import { FC } from "react";
import "../header/header.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../Hook/hook";

const Header: FC = () => {
  const data = useAppSelector(state=> state.getDataReducer.cartData);
  return (
    <>
      <header>
        <h3>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>Shopping
          Site
        </h3>
        <div className="search">
          <input type="search" className="form-control search_input" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className="profile">
          <Link to="login" className="cart"><i className="fa fa-user" aria-hidden="true"></i> Login</Link>
          <Link to="cart" className="cart"><i className="fa fa-cart-plus" aria-hidden="true"></i>Cart <span className="badge_parent"><span className="num">{data.length}</span></span></Link>
          
        </div>
      </header>
    </>
  );
};
export default Header;
