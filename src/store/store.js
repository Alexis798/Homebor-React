import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { academyListSlice } from "./manager/academyListSlice";
import { studentListSlice } from "./manager/studentListSlice";
import { studentProfileSlice } from "./manager/studentProfileSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        academyList: academyListSlice.reducer,
        studentList: studentListSlice.reducer,
        studentProfileManager: studentProfileSlice.reducer
    },
})