import { Box, Grid } from "@mui/material"
import { NavBar } from "../components/Navbar"
import { FooterLine } from "../components/FooterLine"

export const HomeLayout = ({ children }) => {
    return (
        <Grid container>
            <NavBar />
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
