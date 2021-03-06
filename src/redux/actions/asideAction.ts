import {
  ADD_PRODUCT,
  CLEAR_ASIDE,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_PRODUCT,
  SET_ASIDE_DATA,
  SET_TOTAL,
  UPDATE_PERCENT,
  UPDATE_QUANTITY,
} from '../actions-types/asideTypes';

export const addProduct = (
  id:string,
  name: string,
  price: string,
  weight: string,
) => (dispatch:any) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: { id, name, price, weight },
  });
};

export const clearAside = () => (dispatch:any) => {
  dispatch({
    type: CLEAR_ASIDE,
  });
};

export const addQuantity = (id:string) => (dispatch:any) => {
  dispatch({
    type: ADD_QUANTITY,
    payload: { id },
  });
};

export const subQuantity = (id:string) => (dispatch:any) => {
  dispatch({
    type: SUB_QUANTITY,
    payload: { id },
  });
};

export const updateQuantity = (id:string, quantity: number) => (dispatch:any) => {
  dispatch({
    type: UPDATE_QUANTITY,
    payload: { id, quantity },
  });
};

export const removeProduct = (id:string) => (dispatch:any) => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: { id },
  });
};

export const setAsideData = (data:any) => (dispatch: any) => {
  dispatch({
    type: SET_ASIDE_DATA,
    payload: data,
  });
};

export const setTotal = (price:number) => (dispatch:any) => {
  dispatch({
    type: SET_TOTAL,
    payload: { price },
  });
};

export const updatePercent = (percent: number) => (dispatch:any) => {
  dispatch({
    type: UPDATE_PERCENT,
    payload: { percent },
  });
};
