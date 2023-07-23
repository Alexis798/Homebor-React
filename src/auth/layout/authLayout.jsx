import { Box } from "@mui/system"
import { NavBar } from "../../Home"


export const AuthLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', width: '100%',}}>
            <NavBar />
            { children }
        </Box>
    )
}
