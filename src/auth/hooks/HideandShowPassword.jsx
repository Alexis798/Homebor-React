import { useState } from "react";

export const HideandShowPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return {
        //*Propiedades
        showPassword,

        //*Metodos
        handleClickShowPassword,
        handleMouseDownPassword
    }
}
