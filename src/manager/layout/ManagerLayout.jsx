import { Box, Grid } from "@mui/material"
import { NavBarManager } from "../components"
import { FooterPurple } from "../../components/FooterPurple"
import { FooterLine } from "../../Home"



export const ManagerLayout = ({ children }) => {
    return (
        <Grid container>
            <NavBarManager />
                <Box 
                    sx={{ 
                        mb: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: '100%',
                        width: '100%',
                        overflow: "hidden",
                        overflowY: "scroll",
                        flex: 1
                    }}>
                    { children }
                </Box>
        </Grid>
    )
}
