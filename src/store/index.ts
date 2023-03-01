import { planListApi } from './reducers/planList.api';
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    [planListApi.reducerPath]: planListApi.reducer
  },
  middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(planListApi.middleware))
})

export const {usePlanQuery} = planListApi