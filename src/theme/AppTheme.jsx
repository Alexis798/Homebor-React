import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { homeborTheme } from "./homeborTheme"


export const AppTheme = ({children}) => {
    return(
        <ThemeProvider theme={ homeborTheme }>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )

}
