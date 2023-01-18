import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

const initialAppState = {
  data: data,
  totalAmount: 0,
};

const appSlice = createSlice({
  name: "cart-state",
  initialState: initialAppState,
  reducers: {
    increment(state, action) {
      const findIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex !== -1) {
        let getItem = state.data[findIndex];
        let availableAmount =
          getItem.available - 1 > 0 ? getItem.available - 1 : 0;
        let totalItems =
          getItem.available <= 0 ? getItem.quantity : getItem.quantity + 1;
        let totalAmount =
          getItem.available <= 0
            ? getItem.total
            : getItem.total + action.payload.price;
        let item = {
          id: getItem.id,
          name: getItem.name,
          available: availableAmount,
          price: getItem.price,
          quantity: totalItems,
          total: totalAmount,
        };
        state.data[findIndex] = item;
        const reduceAmount = state.data.reduce((acc, item, i, arr) => {
          return acc + Math.floor(item.price * item.quantity * 100) / 100;
        }, 0);
        state.totalAmount = reduceAmount;
      }
    },
    decrement(state, action) {
      const findIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex !== -1) {
        let getItem = state.data[findIndex];
        let availableAmount =
          getItem.quantity > 0 ? getItem.available + 1 : getItem.available;
        let totalItems = getItem.quantity <= 0 ? 0 : getItem.quantity - 1;
        let totalAmount =
          getItem.total <= 0 ? 0 : getItem.total - action.payload.price;
        let item = {
          id: getItem.id,
          name: getItem.name,
          available: availableAmount,
          price: getItem.price,
          quantity: totalItems,
          total: totalAmount,
        };
        state.data[findIndex] = item;
        const reduceAmount = state.data.reduce((acc, item, i, arr) => {
          return acc + Math.floor(item.price * item.quantity * 100) / 100;
        }, 0);
        state.totalAmount = reduceAmount;
      }
    },
  },
});

export const appStateActions = appSlice.actions;

export default appSlice;
