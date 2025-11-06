import React from "react" 
import { useDispatch, useSelector } from "react-redux" 
import { useState, useEffect } from "react" 
import { addItem, removeItem } from "../redux/slices/CartSlice" 
import { toast,ToastContainer } from 'react-toastify';
import { addAmount, deductAmount } from "../redux/slices/AmountSlice" 
import 'react-toastify/dist/ReactToastify.css';


function DetailedItem() {
  const productInfo = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const c = useSelector((state) => state.cart)
  const [available, setAvailable] = useState(false)
  useEffect(() => {
    c.forEach((item) => {
      productInfo.id === item.id ? setAvailable(true) : ""
    })
  },)

  function cartAddClickHandler() {
    dispatch(addAmount(productInfo.price))
    dispatch(addItem(productInfo))

  }
  function cartRemoveClickHandler() {
    setAvailable(false) 
    dispatch(deductAmount(productInfo.price)) 
    dispatch(removeItem(productInfo.id)) 
  }

  return (
    <div className="flex flex-col md:flex-row border-[3px] md:gap-6 rounded-xl bg-gray-100 border-gray-300 w-[90vw] sm:w-[80vw] p-10 items-center justify-around">
      <div className=" bg-white w-[100%] sm:w-[90%] md:w-[40%] flex items-center justify-center p-4 py-8 border-gray-300 rounded-2xl border-2">
        <img src={productInfo.image} className="h-[12rem] sm:h-[15rem] md:h-72 lg:h-80 xl:h-80" alt="" />
      </div>
      <div className="w-[85%] md:w-[50%] py-4 flex flex-col gap-1 md:gap-1 xl:gap-2 justify-center">
        <div className="p-1 font-bold italic text-2xl md:text-xl lg:text-2xl">{productInfo.title}</div>
        <div className="p-1 italic md:text-xs lg:text-sm">{productInfo.description}</div>
        <div className="font-semibold p-1 text-xl md:text-lg lg:text-xl xl:text-2xl">
          Price: <span className="font-bold">${productInfo.price}</span>
        </div>
        <div className="text-[0.8rem] text-gray md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] bg-teal-400 w-fit px-2 lg:px-3 py-1 rounded-xl">
          &#10022;  {productInfo.category}
        </div>
        <div className="p-1">
          <span className="font-bold">{productInfo.rating.rate}
          <i class="fa fa-star-o"></i></span> rating with <span className="font-bold">{productInfo.rating.count}</span>{" "}
          reviews
        </div>
        {!available ? (
          <button
            onClick={cartAddClickHandler}
            className="bg-blue-600 text-sm sm:text-[0.9rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] hover:-translate-y-1 duration-[0.4s] w-fit px-2 py-2 sm:py-2 rounded-md text-white"
          >
            Add to cart
          </button>
        ) : (
          <button
            className="bg-red-600 md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] hover:-translate-y-1 w-fit duration-[0.4s] px-2 py-1 sm:py-2 rounded-md text-white"
            onClick={cartRemoveClickHandler}
          >
            remove from cart
          </button>
        )}
      </div>
      <ToastContainer/>
    </div>
  ) 
}

export default DetailedItem 
