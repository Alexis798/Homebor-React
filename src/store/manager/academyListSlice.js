import { createSlice } from '@reduxjs/toolkit'

export const academyListSlice = createSlice({
    name: 'academyList',
    initialState: {
        isLoadingAcademyList: true,
        academyList: []
    },
    reducers: {
        onLoadAcademyList: ( state, { payload = [] } ) => {
            state.isLoadingAcademyList = false;
            state.academyList = payload;
        },
        onLogoutAcademyList: ( state ) => {
            state.isLoadingAcademyList = true;
            state.academyList = []
        }
    },
})

export const { onLoadAcademyList, onLogoutAcademyList } = academyListSlice.actions