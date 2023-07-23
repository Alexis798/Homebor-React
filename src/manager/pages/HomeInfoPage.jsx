import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Grid, Stack, Typography } from "@mui/material"
import { ManagerLayout } from "../layout/ManagerLayout"
import welcome from '../../assets/manager/welcome.png'
import bed from '../../assets/icon/habitacion.png'
import certificated from '../../assets/icon/certificacion.png'
import language from '../../assets/icon/language.png'
import pets from '../../assets/icon/mascotas.png'
import age from '../../assets/icon/family.png'
import gender from '../../assets/icon/genero.png'
import food from '../../assets/icon/food.png'
import diet from '../../assets/icon/special-diet.png'
import { BorderColor, Download, Edit, Error, HelpOutline, Home, LocationOn, ShowChart } from "@mui/icons-material"

export const HomeInfoPage = () => {
    return (
        <ManagerLayout>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                height="100%"
                className="animate__animated animate__fadeIn"
            >
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: {xs: '15vh'}, mb: {xs: '2vh'}}}>
                    <Grid item xs={10} sx={{ borderRadius: '3vh', mb: {xs: '15vh'}}}>
                        <Grid container direction="row" spacing={2} >
                            {/*House Photos*/}
                            <Grid item xs={12} sx={{ mb: '5vh'}}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Stack justifyContent="center" alignItems="center">
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxHeight: { xs: '65vh', sm: '45vh', md: '50vh', lg: '65vh' },
                                                    maxWidth: { xs: '65vh', sm: '45vh', md: '50vh', lg: '65vh' },
                                                }}
                                                alt="Organize your information."
                                                src={ welcome }
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Stack justifyContent="center" alignItems="center">
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxHeight: { xs: '65vh', sm: '45vh', md: '50vh', lg: '65vh' },
                                                    maxWidth: { xs: '65vh', sm: '45vh', md: '50vh', lg: '65vh' },
                                                }}
                                                alt="Organize your information."
                                                src={ welcome }
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Stack justifyContent="center" alignItems="center">
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxHeight: { xs: '65vh', sm: '45vh', md: '50vh', lg: '65vh' },
                                                    maxWidth: { xs: '65vh', sm: '45vh', md: '50vh', lg: '65vh' },
                                                }}
                                                alt="Organize your information."
                                                src={ welcome }
                                            />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/*Home Info*/}
                            <Grid item xs={12} sm={12} md={12} sx={{ mb: '5vh'}}>
                                <Grid container spacing={2}>

                                    {/*Home Description*/}
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Stack spacing={2}>
                                            <Typography textAlign="left" variant="h5" sx={{ mb: '2vh'}}><Box fontWeight='fontWeightMedium'>Vernon's Homestay</Box></Typography>
                                            <Typography variant="body1" color="#808080">Hola, soy Sujey Velásquez, Mexicana. Me considero una persona tranquila, ordenada y disciplinada. Mi hobbie es hacer karaoke en casa con mi familia y hacer juegos de mesa, también practico yoga y meditación. Voy a Vancouver a estudiar Commerce en University Canada West.</Typography>
                                        </Stack>
                                    </Grid>

                                    <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'none', md: 'flex'}}} />

                                    <Grid item xs={12} sm={12} md={5}>
                                        <Grid container>
                                            <Grid item xs={8}>
                                                <Typography textAlign="left" variant="h5" sx={{ mb: '2vh'}}><Box fontWeight='fontWeightMedium'>Owner Details</Box></Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Stack spacing={2}>
                                                    <Button variant="contained" color="success">Edit Homestay</Button>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                        <Stack spacing={2}>
                                            <Typography variant="body1" color="#808080"><b>Email:</b> lenys@gmail.com</Typography>
                                            <Typography variant="body1" color="#808080"><b>Owner:</b> Cristina Craig Jason Baculod</Typography>
                                            <Typography variant="body1" color="#808080"><b>Phone Number:</b> 6045893</Typography>
                                            <Typography variant="body1" color="#808080"><b>Occupation:</b> Lawyer</Typography>
                                            <Typography variant="body1" color="#808080"><b>Background Check:</b> 24th Mar 2023</Typography>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </Grid>

                            {/*Preferences*/}
                            <Grid item xs={12} sm={12} md={12} sx={{ mb: '5vh'}}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <Typography textAlign="left" variant="h5" sx={{ mb: '2vh'}}><Box fontWeight='fontWeightMedium'>Preferences</Box></Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={3}>
                                        <Stack spacing={1}>
                                            <Typography textAlign="center" variant="h5" sx={{ mb: '2vh'}} color="#808080">Bedrooms</Typography>
                                            <Typography variant="h6" textAlign="center"><Box fontWeight='fontWeightMedium'>4</Box></Typography>
                                            <Grid container justifyContent="right" alignItems="right" sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                                                <Grid item={12}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            maxHeight: { xs: '20vh' },
                                                            maxWidth: { xs: '20vh' },
                                                        }}
                                                        alt="Organize your information."
                                                        src={ bed }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Stack spacing={1}>
                                            <Typography textAlign="center" variant="h5" sx={{ mb: '2vh'}} color="#808080">Experience as a Homestay</Typography>
                                            <Typography variant="h6" textAlign="center"><Box fontWeight='fontWeightMedium'>9 Years</Box></Typography>
                                            <Grid container justifyContent="right" alignItems="right" sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                                                <Grid item={12}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            maxHeight: { xs: '20vh' },
                                                            maxWidth: { xs: '20vh' },
                                                        }}
                                                        alt="Organize your information."
                                                        src={ certificated }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Stack spacing={1}>
                                            <Typography textAlign="center" variant="h5" sx={{ mb: '2vh'}} color="#808080">Background Language</Typography>
                                            <Typography variant="h6" textAlign="center"><Box fontWeight='fontWeightMedium'>English, Mandarin, Canto</Box></Typography>
                                            <Grid container justifyContent="right" alignItems="right" sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                                                <Grid item={12}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            maxHeight: { xs: '20vh' },
                                                            maxWidth: { xs: '20vh' },
                                                        }}
                                                        alt="Organize your information."
                                                        src={ language }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Stack spacing={1}>
                                            <Typography textAlign="center" variant="h5" sx={{ mb: '2vh'}} color="#808080">Pets</Typography>
                                            <Typography variant="h6" textAlign="center"><Box fontWeight='fontWeightMedium'>No</Box></Typography>
                                            <Grid container justifyContent="right" alignItems="right" sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                                                <Grid item={12}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            maxHeight: { xs: '20vh' },
                                                            maxWidth: { xs: '20vh' },
                                                        }}
                                                        alt="Organize your information."
                                                        src={ pets }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Stack spacing={1}>
                                            <Typography textAlign="center" variant="h5" sx={{ mb: '2vh'}} color="#808080">Age Preference</Typography>
                                            <Typography variant="h6" textAlign="center"><Box fontWeight='fontWeightMedium'>Any</Box></Typography>
                                            <Grid container justifyContent="right" alignItems="right" sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                                                <Grid item={12}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            maxHeight: { xs: '20vh' },
                                                            maxWidth: { xs: '20vh' },
                                                        }}
                                                        alt="Organize your information."
                                                        src={ age }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Stack spacing={1}>
                                            <Typography textAlign="center" variant="h5" sx={{ mb: '2vh'}} color="#808080">Gender Preference</Typography>
                                            <Typography variant="h6" textAlign="center"><Box fontWeight='fontWeightMedium'>Female</Box></Typography>
                                            <Grid container justifyContent="right" alignItems="right" sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                                                <Grid item={12}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            maxHeight: { xs: '20vh' },
                                                            maxWidth: { xs: '20vh' },
                                                        }}
                                                        alt="Organize your information."
                                                        src={ gender }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Stack spacing={1}>
                                            <Typography textAlign="center" variant="h5" sx={{ mb: '2vh'}} color="#808080">Food Service</Typography>
                                            <Typography variant="h6" textAlign="center"><Box fontWeight='fontWeightMedium'>Yes</Box></Typography>
                                            <Grid container justifyContent="right" alignItems="right" sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                                                <Grid item={12}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            maxHeight: { xs: '20vh' },
                                                            maxWidth: { xs: '20vh' },
                                                        }}
                                                        alt="Organize your information."
                                                        src={ food }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Stack spacing={1}>
                                            <Typography textAlign="center" variant="h5" sx={{ mb: '2vh'}} color="#808080">Special Diet</Typography>
                                            <Typography variant="h6" textAlign="center"><Box fontWeight='fontWeightMedium'>No</Box></Typography>
                                            <Grid container justifyContent="right" alignItems="right" sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                                                <Grid item={12}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            maxHeight: { xs: '20vh' },
                                                            maxWidth: { xs: '20vh' },
                                                        }}
                                                        alt="Organize your information."
                                                        src={ diet }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/*Location*/}
                            <Grid item xs={12} sm={12} md={12} sx={{ mb: '5vh'}}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <Typography textAlign="left" variant="h5" sx={{ mb: '2vh'}}><Box fontWeight='fontWeightMedium'>Location</Box></Typography>
                                    </Grid>

                                    <Grid item xs={12} md={4}>
                                        <Stack spacing={2}>
                                            <Typography variant="body1" color="#808080"><b>Address:</b> 4198 Bran St.</Typography>
                                            <Typography variant="body1" color="#808080"><b>City:</b> Vancouver</Typography>
                                            <Typography variant="body1" color="#808080"><b>State:</b> British Columbia</Typography>
                                            <Typography variant="body1" color="#808080"><b>Postal Code:</b> V5N 584</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center" alignItems="center">
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxHeight: { xs: '40vh' },
                                                    maxWidth: { xs: '40vh' },
                                                }}
                                                alt="Organize your information."
                                                src={ welcome }
                                            />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Reservations */}
                            <Grid item xs={12} sm={12} md={12} sx={{ mb: '5vh'}}>
                                <Grid container spacing={2} sx={{ backgroundColor: '#F6F6F6', py: 4, borderRadius: '3vh' }}>

                                    <Grid item xs={12}>
                                        <Typography textAlign="left" variant="h5" sx={{ mb: '2vh'}}><Box fontWeight='fontWeightMedium'>Reservations</Box></Typography>
                                    </Grid>

                                    {/*ESTE CODIGO DEBE REMPLAZARSE POR UN MAP O FOREACH QUE PERMITA ESCRIBIR ESTO SOLO UNA VEZ */}
                                    <Grid item xs={12} sm={10} md={6} lg={4} >
                                        <Card sx={{ maxWidth: { xs: 400, sm: 410, md: 420} }}>
                                            <CardContent sx={{ backgroundColor: '#FFFFFF'}}>
                                                <Grid container  direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                                    <Grid item sm={6}>
                                                        <CardMedia
                                                        component="img"
                                                        height="140"
                                                        src={ welcome }
                                                        alt="green iguana"
                                                        />
                                                    </Grid>
                                                    <Grid item sm={6}>
                                                        <Grid container direction="row" spacing={2}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Typography variant='subtitle1' align="center"><b>Raul Escalante</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={6} sm={5}>
                                                                <Typography variant='body2' align="center"><b>In Stay</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={6} sm={7}>
                                                                <Typography variant='body2' align="center"><b>Room 1 - Bed 1</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={6} sm={6}>
                                                                <Stack>
                                                                    <Typography variant='subtitle1' align="center"><b>Arrive:</b></Typography>
                                                                    <Typography variant='subtitle1' align="center">2022-11-05</Typography>
                                                                </Stack>
                                                            </Grid>
                                                            <Grid item xs={6} sm={6}>
                                                                <Stack>
                                                                    <Typography variant='subtitle1' align="center"><b>Leave:</b></Typography>
                                                                    <Typography variant='subtitle1' align="center">2022-11-05</Typography>
                                                                </Stack>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardActionArea sx={{ backgroundColor: '#6C47A6' }}>
                                                <CardActions>
                                                    <Grid container justifyContent="center" alignItems="center">
                                                        <Grid item md={12}>
                                                            <Stack>
                                                                <Typography variant='subtitle1' align="center" sx={{ color: 'white' }}><b>Download Student Information</b></Typography>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                </CardActions>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={10} md={6} lg={4} >
                                        <Card sx={{ maxWidth: { xs: 400, sm: 410, md: 420} }}>
                                            <CardContent sx={{ backgroundColor: '#FFFFFF'}}>
                                                <Grid container  direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                                    <Grid item sm={6}>
                                                        <CardMedia
                                                        component="img"
                                                        height="140"
                                                        src={ welcome }
                                                        alt="green iguana"
                                                        />
                                                    </Grid>
                                                    <Grid item sm={6}>
                                                        <Grid container direction="row" spacing={2}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Typography variant='subtitle1' align="center"><b>Nataly Ventura</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={6} sm={5}>
                                                                <Typography variant='body2' align="center"><b>Pending</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={6} sm={7}>
                                                                <Typography variant='body2' align="center"><b>Room 2 - Bed 1</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={6} sm={6}>
                                                                <Stack>
                                                                    <Typography variant='subtitle1' align="center"><b>Arrive:</b></Typography>
                                                                    <Typography variant='subtitle1' align="center">2022-11-05</Typography>
                                                                </Stack>
                                                            </Grid>
                                                            <Grid item xs={6} sm={6}>
                                                                <Stack>
                                                                    <Typography variant='subtitle1' align="center"><b>Leave:</b></Typography>
                                                                    <Typography variant='subtitle1' align="center">2022-11-05</Typography>
                                                                </Stack>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <Grid container direction="row">
                                                <Grid item xs={6}>
                                                    <CardActionArea sx={{ backgroundColor: '#38AC3D' }}>
                                                        <CardActions>
                                                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                                                <Grid item md={12}>
                                                                    <Stack>
                                                                        <Typography variant='subtitle1' align="center" sx={{ color: 'white' }}><b>Accept</b></Typography>
                                                                    </Stack>
                                                                </Grid>
                                                            </Grid>
                                                        </CardActions>
                                                    </CardActionArea>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <CardActionArea sx={{ backgroundColor: '#F63636' }}>
                                                        <CardActions>
                                                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                                                <Grid item md={12}>
                                                                    <Stack>
                                                                        <Typography variant='subtitle1' align="center" sx={{ color: 'white' }}><b>Reject</b></Typography>
                                                                    </Stack>
                                                                </Grid>
                                                            </Grid>
                                                        </CardActions>
                                                    </CardActionArea>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={10} md={6} lg={4} >
                                        <Card sx={{ maxWidth: { xs: 400, sm: 410, md: 420} }}>
                                            <CardContent sx={{ backgroundColor: '#FFFFFF'}}>
                                                <Grid container  direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                                    <Grid item sm={6}>
                                                        <CardMedia
                                                        component="img"
                                                        height="140"
                                                        src={ welcome }
                                                        alt="green iguana"
                                                        />
                                                    </Grid>
                                                    <Grid item sm={6}>
                                                        <Grid container direction="row" spacing={2}>
                                                            <Grid item xs={12} sm={12}>
                                                                <Typography variant='subtitle1' align="center"><b>Not available</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={12} sm={12}>
                                                                <Typography variant='body2' align="center"><b>Room 3 - Bed 2</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={6} sm={6}>
                                                                <Stack>
                                                                    <Typography variant='subtitle1' align="center"><b>Arrive:</b></Typography>
                                                                    <Typography variant='subtitle1' align="center">2022-11-05</Typography>
                                                                </Stack>
                                                            </Grid>
                                                            <Grid item xs={6} sm={6}>
                                                                <Stack>
                                                                    <Typography variant='subtitle1' align="center"><b>Leave:</b></Typography>
                                                                    <Typography variant='subtitle1' align="center">2022-11-05</Typography>
                                                                </Stack>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardActionArea sx={{ backgroundColor: '#6C47A6' }}>
                                                <CardActions>
                                                    <Grid container justifyContent="center" alignItems="center">
                                                        <Grid item md={12}>
                                                            <Stack>
                                                                <Typography variant='subtitle1' align="center" sx={{ color: 'white' }}><b>Event created by the house</b></Typography>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                </CardActions>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Bedrooms Information */}
                            <Grid item xs={12} sm={12} md={12} sx={{ mb: '5vh'}}>
                                <Grid container spacing={2} sx={{ backgroundColor: '#F6F6F6', py: 4, borderRadius: '3vh'}} justifyContent="center" alignItems="center">

                                    <Grid item xs={10} md={8} lg={10}>
                                        <Typography variant="h5" sx={{ mb: '2vh', textAlign: {xs: 'center', sm: 'left' }}}><Box fontWeight='fontWeightMedium'>Bedrooms Information</Box></Typography>
                                    </Grid>

                                    <Grid item xs={8} md={4} lg={2}>
                                        <Stack spacing={2}>
                                            <Button variant="contained" color="success">Create Event</Button>
                                        </Stack>
                                    </Grid>

                                    {/*ESTE CODIGO DEBE REMPLAZARSE POR UN MAP O FOREACH QUE PERMITA ESCRIBIR ESTO SOLO UNA VEZ */}
                                    <Grid item xs={12} sm={10} md={6} lg={6}>
                                        <Card sx={{ maxWidth: {xs: 400, md: 550} }}>
                                            <CardContent sx={{ backgroundColor: '#FFFFFF'}}>
                                                <Grid container  direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                                    <Grid item sm={8}>
                                                        <CardMedia
                                                        component="img"
                                                        height="140"
                                                        src={ welcome }
                                                        alt="green iguana"
                                                        />
                                                        <Grid container direction="row" justifyContent="center" alignItems="center">
                                                            <Grid item sm={12}>
                                                                <Typography variant='subtitle1' align="center"><b>CAD $ 400</b></Typography>
                                                            </Grid>
                                                            <Grid item sm={6}>
                                                                <Typography variant='subtitle1' align="center"><b>Executive</b></Typography>
                                                            </Grid>
                                                            <Grid item sm={6}>
                                                                <Typography variant='subtitle1' align="center"><b>Yes</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Stack spacing={2}>
                                                                    <Button variant="contained" color="success">Reserve Now</Button>
                                                                </Stack>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item sm={4}>
                                                        <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
                                                            <Grid item sm={12}>
                                                                <Typography variant='subtitle1' align="center"><b>Beds available</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Stack spacing={2}>
                                                                    <Button variant="contained" color="homestayResident2">Twin</Button>
                                                                </Stack>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Stack spacing={2}>
                                                                    <Button variant="contained" color="buttonGray">Twin</Button>
                                                                </Stack>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={10} md={6} lg={6} >
                                        <Card sx={{ maxWidth: {xs: 400, md: 550} }}>
                                            <CardContent sx={{ backgroundColor: '#FFFFFF'}}>
                                                <Grid container  direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                                    <Grid item sm={8}>
                                                        <CardMedia
                                                        component="img"
                                                        height="140"
                                                        src={ welcome }
                                                        alt="green iguana"
                                                        />
                                                        <Grid container direction="row" justifyContent="center" alignItems="center">
                                                            <Grid item sm={12}>
                                                                <Typography variant='subtitle1' align="center"><b>CAD $ 400</b></Typography>
                                                            </Grid>
                                                            <Grid item sm={6}>
                                                                <Typography variant='subtitle1' align="center"><b>Executive</b></Typography>
                                                            </Grid>
                                                            <Grid item sm={6}>
                                                                <Typography variant='subtitle1' align="center"><b>Yes</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Stack spacing={2}>
                                                                    <Button variant="contained" color="success">Reserve Now</Button>
                                                                </Stack>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item sm={4}>
                                                        <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
                                                            <Grid item sm={12}>
                                                                <Typography variant='subtitle1' align="center"><b>Beds available</b></Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Stack spacing={2}>
                                                                    <Button variant="contained" color="homestayResident2">Twin</Button>
                                                                </Stack>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Stack spacing={2}>
                                                                    <Button variant="contained" color="buttonGray">Twin</Button>
                                                                </Stack>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/*Additional Information*/}
                            <Grid item xs={12} sm={12} md={12} sx={{ mb: '5vh'}}>
                                <Grid container spacing={2}>

                                    {/*Health Information*/}
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Stack spacing={2}>
                                            <Typography textAlign="left" variant="h5" sx={{ mb: '2vh'}}><b>Health Information</b></Typography>
                                            <Typography variant="body1" color="#808080"><b>Smoker Politics:</b> Strictly Non-Smoking</Typography>
                                            <Typography variant="body1" color="#808080"><b>Allergies:</b> Allergic Rhinitis</Typography>
                                            <Typography variant="body1" color="#808080"><b>Take medication:</b> No</Typography>
                                            <Typography variant="body1" color="#808080"><b>Physical or Mental Condition:</b> No</Typography>
                                            <Typography variant="body1" color="#808080"><b>Health Problems:</b> No</Typography>
                                        </Stack>
                                    </Grid>

                                    <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'none', md: 'flex'}}} />

                                    <Grid item xs={12} sm={12} md={5}>
                                        <Stack spacing={2}>
                                            <Typography textAlign="left" variant="h5" sx={{ mb: '2vh'}}><b>Additional Information</b></Typography>
                                            <Typography variant="body1" color="#808080"><b>Background:</b> Canadian</Typography>
                                            <Typography variant="body1" color="#808080"><b>Religion:</b> Christian</Typography>
                                            <Typography variant="body1" color="#808080"><b>Misdemeanor:</b> No</Typography>
                                            <Typography variant="body1" color="#808080"><b>School:</b> Not preference</Typography>
                                            <Typography variant="body1" color="#808080"><b>Do you authrize to see your criminal background check?:</b> Yes</Typography>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </Grid>

                            {/*Files to Download*/}
                            <Grid item xs={12} sm={12} md={12}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">

                                    <Grid item xs={12}>
                                        <Stack spacing={2}>
                                            <Typography textAlign="left" variant="h5" sx={{ mb: '2vh'}}><b>Files to Download</b></Typography>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={10} sm={10} md={6}>
                                        <Stack spacing={2}>
                                            <Button variant="contained">Brouchere for Students</Button>
                                            <Button variant="contained" color="homestayResident">Homestay Resident Sultability Declaration</Button>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={10} sm={10} md={5}>
                                        <Stack spacing={2}>
                                            <Button variant="contained" color="homestayResident2">Homestay Provider Agreement 2021-2023</Button>
                                            <Button variant="contained" color="homestayResident3">Canadian Direct Deposit Set-Up</Button>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ManagerLayout>
    )
}