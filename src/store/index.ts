import { planListApi } from './reducers/planList.api';
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    [planListApi.reducerPath]: planListApi.reducer
  }
})

export const {usePlanQuery} = planListApi