import { PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material"
import { Box, Card, CardContent, CardMedia, Divider, Fab, Grid, IconButton, Stack, Typography } from "@mui/material"
import { differenceInWeeks, format } from "date-fns"
import { useState } from "react"
import studentPhoto from "../../assets/emptys/profile-student-empty.png"
import { Link } from "react-router-dom"

export const CardStudents = ({data}) => {

    const [ moreInfo, setMoreInfo ] = useState(false)

    const moreInfoButton = () => {
        setMoreInfo(!moreInfo)
    }

    return (
        data.name_a != 'NULL' && data.dir_a != 'NULL' && data.photo_a != 'NULL' && (
            <Grid container justifyContent="center" alignItems="center" sx={{ py: 2}}>
                <Grid item xs={12} sm={10} md={6} lg={10}>
                    <Card sx={{ display: 'flex' }}>
                        <Grid container direction="row" sx={{ maxHeight: {xs: 600, lg: 280} }}>
                            <Grid item xs={12} sm={12} md={12} lg={4}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Link to={`/studentinfo/${data.mail_s}`}>
                                            <CardMedia
                                                component="img"
                                                sx={{ objectFit: "contain", height: { xs: 150, lg: 280 } }}
                                                src={ data.photo_s != 'NULL' ? `https://www.homebor.com/${data.photo_s}` : studentPhoto }
                                                alt="Student's Photo"
                                            />
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Fab sx={{ mt: '-45%'}} variant="extended" onClick={ moreInfoButton }>
                                            More Info
                                        </Fab>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {moreInfo == false && (
                                <Grid item xs={12} sm={12} md={12} lg={8}>
                                    <CardContent>
                                        <Grid container direction="row" spacing={2}>
                                            <Grid item md={8}>
                                                <Stack>
                                                    <Typography variant='subtitle1' align="left"><b>{data.name_s} {data.l_name_s}</b></Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={4} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="right"><b>{data.nationality}</b></Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={12} >
                                                <Divider />
                                            </Grid>
                                            <Grid item md={12} >
                                                <Stack>
                                                    <Typography variant='subtitle2' align="left"><b>School</b> {data.n_a?.name_a}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={4} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle2' align="center"><b>Gender:</b></Typography>
                                                    <Typography variant='subtitle2' align="center">{data.gen_s}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={4} md={2} >
                                                <Stack>
                                                    <Typography variant='subtitle2' align="center"><b>Age:</b></Typography>
                                                    <Typography variant='subtitle2' align="center">{data.db_s != null && ( format(new Date(data.db_s), 'MM/dd/yyyy'))}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={4} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle2' align="center"><b>First Day:</b></Typography>
                                                    <Typography variant='subtitle2' align="center">{data.firstd != null && ( format(new Date(data.firstd), 'MM/dd/yyyy'))}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={2} >
                                                <Stack>
                                                    <Typography variant='subtitle2' align="center"><b>Last Day:</b></Typography>
                                                    <Typography variant='subtitle2' align="center">{data.lastd != null && ( format(new Date(data.lastd), 'MM/dd/yyyy'))}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={2} >
                                                <Stack>
                                                    <Typography variant='subtitle2' align="center"><b>Weeks of Stay:</b></Typography>
                                                    <Typography variant='subtitle2' align="center">{differenceInWeeks(new Date(data.lastd), new Date(data.firstd))} Weeks</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle2' align="center"><b>Situation:</b></Typography>
                                                    <Typography variant='subtitle2' align="center">{data.status}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle2' align="center"><b>Type Student:</b></Typography>
                                                    <Typography variant='subtitle2' align="center">{data.type_s}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle2' align="center"><b>Language:</b></Typography>
                                                    <Typography variant='subtitle2' align="center">{data.lang_s}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle2' align="center"><b>Destination City:</b></Typography>
                                                    <Typography variant='subtitle2' align="center">{data.destination_c}</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            )}

                            { moreInfo == true && (
                                <Grid item xs={12} sm={12} md={12} lg={8}>
                                    <CardContent>
                                        <Grid container direction="row" spacing={2}>
                                            <Grid item md={12}>
                                                <Stack>
                                                    <Typography variant='subtitle1' align="left"><b>More Info</b></Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={12} >
                                                <Divider />
                                            </Grid>
                                            <Grid item xs={4} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><b>Accommodation</b></Typography>
                                                    <Typography variant='subtitle1' align="center">Empty</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={4} md={2} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><b>Meal Plan</b></Typography>
                                                    <Typography variant='subtitle1' align="center">{data.meal_p}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={4} md={2} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><b>Special Diet</b></Typography>
                                                    <Typography variant='subtitle1' align="center">No</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={2} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><b>Smokers</b></Typography>
                                                    <Typography variant='subtitle1' align="center">{data.smoke_l}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><b>Children</b></Typography>
                                                    <Typography variant='subtitle1' align="center">{data.children}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><b>Teenagers</b></Typography>
                                                    <Typography variant='subtitle1' align="center">{data.teenagers}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><b>Pets</b></Typography>
                                                    <Typography variant='subtitle1' align="center">{data.pets}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><b>Pick Up Service</b></Typography>
                                                    <Typography variant='subtitle1' align="center">{data.pick_up}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={6} md={3} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><b>Drop Off Service</b></Typography>
                                                    <Typography variant='subtitle1' align="center">{data.drop_off}</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            )}
                            
                        </Grid>
                        
                        
                        <Box>
                            
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        )
    )
}