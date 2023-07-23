import { createSlice } from '@reduxjs/toolkit'

export const studentProfileSlice = createSlice({
    name: 'studentProfile',
    initialState: {
        isLoadingStudent: true,
        studentProfile: []
    },
    reducers: {
        onLoadStudentProfileManager: ( state, { payload = [] } ) => {
            state.isLoadingStudent = false;
            state.studentProfile = payload;
        },
        onLogoutStudentProfileManager: ( state ) => { 
            state.isLoadingStudent = true;
            state.studentProfile = []
        }
    },
})

export const { onLoadStudentProfileManager, onLogoutStudentProfileManager } = studentProfileSlice.actions