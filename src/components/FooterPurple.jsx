import { Grid, Typography } from "@mui/material"

export const FooterPurple = () => {
    return(
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: {xs: '5vh'}, mb: {xs: '2vh'}, height: '200%'}}>
            <Grid item xs={12}>
                <Typography variant='h1'>Hola</Typography>
            </Grid>
        </Grid>
    )   
}