import {
  CARTDATA,
  GETALLDATA,
  GETDATAERROR,
  GETDATALAPTOP,
  GETDATALOADING,
  GETSINGLEDATA,
  UPDATEDCARTDATA,
} from "./actionType";
import axios from "axios";
import { Store } from "./store";
export const getAllData = (data: any) => {
  return { type: GETALLDATA, payload: data };
};
export const getDataLoading = () => {
  return { type: GETDATALOADING };
};
export const getDataError = (data: any) => {
  return { type: GETDATAERROR, payload: data };
};
export const getDataLaptop = (data: any) => {
  return { type: GETDATALAPTOP, payload: data };
};
export const getDataThunk = async (): Promise<void> => {
  try {
    Store.dispatch({
      type: GETDATALOADING,
    });
    const { data } = await axios.get(
      "https://dummyjson.com/products?limit=100&skip=0"
    );
    console.log(data);

    Store.dispatch({
      type: GETALLDATA,
      payload: data,
    });
  } catch (err: any) {
    Store.dispatch({
      type: GETDATAERROR,
      payload: err.message,
    });
  }
};
export const getSingleData = (data: any) => {
  return { type: GETSINGLEDATA, payload: data };
};
export const getCartData = (data: any) => {
  return { type: CARTDATA, payload: data };
};
export const updateCartData = (data: any) => {
  return { type: UPDATEDCARTDATA, payload: data };
};
// export const getSingleData = async (id: any) => {

//   try {
//     // Store.dispatch({
//     //   type: GETDATALOADING,
//     // });
//     const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
//     Store.dispatch({
//       type: GETSINGLEDATA,
//       payload: data,
//     });
//   } catch (err: any) {
//     Store.dispatch({
//       type: GETDATAERROR,
//       payload: err.message,
//     });
//   }
// };
