import { createSlice } from '@reduxjs/toolkit'

export const studentListSlice = createSlice({
    name: 'studentList',
    initialState: {
        isLoadingStudentList: true,
        studentList: []
    },
    reducers: {
        onLoadStudentList: ( state, { payload = [] } ) => {
            state.isLoadingStudentList = false;
            state.studentList = payload;
        },
        onLogoutStudentList: ( state ) => { 
            state.isLoadingStudentList = true;
            state.studentList = []
        }
    },
})

export const { onLoadStudentList, onLogoutStudentList } = studentListSlice.actions