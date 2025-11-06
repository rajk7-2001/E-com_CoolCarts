import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slices/CartSlice";
import removeIcon from "../assets/removeIcon.png";
import addIcon from "../assets/addIcon.png";
import { addAmount, deductAmount } from "../redux/slices/AmountSlice";
import { addOn, reduce } from "../redux/slices/QuantitySlice";

function CartItem(props) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity[props.info.id]);
  return (
    <div className="p-3">

    <div className="flex border-2 p-3 gap-3 m-2 w-72 border-gray-400 items-center justify-around">
      <div className="w-36 border-2 border-gray-300 rounded-lg bg-slate-100 flex flex-col justify-center items-center p-2 gap-1">
        <img src={props.info.image} className="h-20" />
        <div className="font-semibold">${props.info.price}</div>
      </div>
      <div className="text-center">
        <div className="font-semibold">Quantity</div>
        <div className="flex scale-95 p-1 gap-2 font-semibold text-[1.3rem] justify-center items-center">
          {quantity > 1 ? (
            <button
              onClick={() => {
                dispatch(reduce(props.info.id));
                quantity > 0 ? dispatch(deductAmount(props.info.price)) : "";
              }}
              className="hover:scale-[1.1] font-bold text-xl border-black border-[3px] rounded-full h-4 w-4"
            ></button>
          ) : (
            <button
              onClick={() => {
                dispatch(removeItem(props.info.id));
                dispatch(deductAmount(props.info.price));
              }}
              className="text-white bg-blue-100"
            >
              <img src={removeIcon} className="h-5" />{" "}
            </button>
          )}

          <div className="pb-[0.1rem]">{quantity ? quantity : 1}</div>
          <button
            onClick={() => {
              dispatch(addOn(props.info.id))
              dispatch(addAmount(props.info.price))
            }}
            className="hover:scale-[1.1] font-bold flex items-center justify-center"
          >
            <img src={addIcon} className="h-4" alt="" srcset="" />
          </button>
        </div>
      </div>
    </div>
    <div className="w-72 h-[4.2rem] flex justify-center items-center border-2 p-3 font-semibold text-center text-xs border-gray-400 mx-auto">{props.info.title}</div>
    </div>
  );
}

export default CartItem;
