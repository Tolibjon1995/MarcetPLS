import {configureStore} from "@reduxjs/toolkit"
import cards from "./cardProduct/card"

export const store = configureStore({
    reducer:{
        cards

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})