import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const CardAcademies = ({data}) => {
    return (
        data.name_a != 'NULL' && data.dir_a != 'NULL' && data.photo_a != 'NULL' && (
            <Grid item xs={12} sm={10} md={6} lg={3}>
                <Card sx={{ maxWidth: {xs: 400, md: 300}, minHeight: 300, maxHeight: 300 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        src={ `https://www.homebor.com/${data.photo_a}` }
                        alt="academy photo"
                    />
                    <CardContent sx={{ backgroundColor: '#FFFFFF'}}>
                        <Grid container  direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item sm={8}>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item sm={12}>
                                        <Typography variant='subtitle1' align="center"><b>{ data.name_a }</b></Typography>
                                    </Grid>
                                    <Grid item sm={12}>
                                        <Typography variant='subtitle1' align="center">{ data.dir_a }</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        )
    )
}