//? Variable de entorno para consultar a la base de datos
export const getEnvVariables = () => {

    return {
        VITE_API_URL: import.meta.env.VITE_API_URL,
    }
    
}