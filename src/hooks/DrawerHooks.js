import { useState } from "react";

export const DrawerHook = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return {
        //*Propiedades
        mobileOpen,

        //*Metodos
        handleDrawerToggle
    }
}
