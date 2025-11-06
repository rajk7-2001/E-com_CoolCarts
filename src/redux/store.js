import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";
import AmountSlice from "./slices/AmountSlice";
import QuantitySlice from "./slices/QuantitySlice";
import ProductSlice from "./slices/ProductSlice";
import FilterSlice from "./slices/FilterSlice";

export const store = configureStore(
    {
        reducer:{
            cart: cartSlice,
            amount: AmountSlice,
            quantity: QuantitySlice,
            product: ProductSlice,
            filter: FilterSlice
        }
    }
)