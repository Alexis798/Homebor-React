import { useDispatch, useSelector } from "react-redux"
import homeborApi from "../../api/homeborApi"
import { onLoadStudentList } from "../../store/manager/studentListSlice"

export const useStudentListStore = () => {

    const { isLoadingStudentList, studentList } = useSelector( state => state.studentList )
    const dispatch = useDispatch()

    const startLoadingStudentList = async() => {

        try {

            const { data } = await homeborApi.get('/student/studentList')
            dispatch( onLoadStudentList( data ) );
            
        } catch (error) {
            console.log('Error cargando academias')
            console.log(error)
        }
    }

    return {
        //* Propiedades
        isLoadingStudentList, 
        studentList,

        //*Metodos
        startLoadingStudentList
    }
}