import { useDispatch, useSelector } from "react-redux"
import homeborApi from "../../api/homeborApi"
import { onLoadStudentProfileManager } from "../../store/manager/studentProfileSlice"


export const useStudentProfileStore = ( id ) => {

    const { isLoadingStudent, studentProfile } = useSelector( state => state.studentProfileManager )
    const dispatch = useDispatch()

    const startLoadingStudentProfile = async() => {

        try {

            const { data } = await homeborApi.get(`/student/studentProfile/${id}`)
            dispatch( onLoadStudentProfileManager( data ) );
            
        } catch (error) {
            console.log('Error cargando academias')
            console.log(error)
        }
    }

    return {
        //* Propiedades
        isLoadingStudent, 
        studentProfile,

        //*Metodos
        startLoadingStudentProfile
    }
}