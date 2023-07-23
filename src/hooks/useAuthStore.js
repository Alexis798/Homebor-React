import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice"
import homeborApi from "../api/homeborApi"

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );

        try {

            const { data } = await homeborApi.post('/auth', { email, password })

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime())

            dispatch( onLogin({ name: email, uid: data.uid, userType: data.userType  }) );

        } catch (error) {

            dispatch( onLogout('Credenciales Incorrectas'))
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10)

        }
    }

    const checkAuthToken = async () => {

        dispatch( onChecking() );

        const token = localStorage.getItem('token')
        if (!token) return dispatch( onLogout() );

        try {
            
            const { data } = await homeborApi.get('auth/renew')

            console.log(data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch( onLogin({ name: data.name, uid: data.uid, userType: data.type  }) );

        } catch (error) {

            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    return {
        //* Propiedades
        status,
        user,
        errorMessage,

        //*Metodos
        startLogin,
        checkAuthToken
    }
}