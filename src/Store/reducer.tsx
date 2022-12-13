import {
  CARTDATA,
  GETALLDATA,
  GETDATAERROR,
  GETDATALAPTOP,
  GETDATALOADING,
  GETSINGLEDATA,
  UPDATEDCARTDATA,
} from "./actionType";

const initialGetData = {
  data: [],
  loading: false,
  error: null,
  dataView: null,
  singleData: null,
  cartData:[],
};
export const getDataReducer = (
  state: any = initialGetData,
  { type, payload }: any
) => {
  switch (type) {
    case GETDATALOADING: {
      return { ...state, data: [], loading: true, error: null };
    }
    case GETALLDATA: {
      return { ...state, data: payload, loading: false, error: null };
    }
    case GETDATAERROR: {
      return { ...state, data: [], loading: false, error: payload };
    }
    case GETDATALAPTOP: {
      return { ...state, dataView: payload };
    }
    case GETSINGLEDATA: {
      return { ...state, singleData: payload };
    }
    case CARTDATA: {
      return { ...state, cartData: [...state.cartData, payload] };
    }
    case UPDATEDCARTDATA: {
      return { ...state, cartData: payload };
    }
    default: {
      return state;
    }
  }
};
