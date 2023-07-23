import { useDispatch, useSelector } from "react-redux"
import homeborApi from "../../api/homeborApi"
import { onLoadAcademyList } from "../../store/manager/academyListSlice"

export const useAcademyListStore = () => {

    const { isLoadingAcademyList, academyList } = useSelector( state => state.academyList )
    const dispatch = useDispatch()

    const startLoadingAcademyList = async() => {

        try {

            const { data } = await homeborApi.get('/academy')
            console.log(data)
            dispatch( onLoadAcademyList( data ) );
            
        } catch (error) {
            console.log('Error cargando academias')
            console.log(error)
        }
    }

    return {
        //* Propiedades
        isLoadingAcademyList, 
        academyList,

        //*Metodos
        startLoadingAcademyList
    }
}