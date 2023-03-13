import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./reviewSlice";

export default configureStore({
    reducer: reviewSlice
})