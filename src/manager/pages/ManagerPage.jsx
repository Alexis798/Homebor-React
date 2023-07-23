import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Box, Container, Stack } from "@mui/system"
import { FooterLine, NavBar } from "../../Home"
import { ManagerLayout } from "../layout/ManagerLayout"
import welcome from '../../assets/manager/welcome.png'
import { Button, Col, Row } from "react-bootstrap"
import { ArrowForward } from "@mui/icons-material"
import { FooterPurple } from "../../components/FooterPurple"


export const ManagerPage = () => {
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

                {/* Welcome */}
                
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: {xs: '5vh'}, mb: {xs: '2vh'}}}>
                
                    <Grid item xs={10} sx={{ backgroundColor: '#EFF8FF', borderRadius: '3vh', mt: {xs: '15vh'}, mb: {xs: '15vh'}}}>

                        <Grid container  direction="row" justifyContent="center" alignItems="center" >
                            <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg:'flex' } }}>
                                <Stack>
                                    <Typography variant='h4' align="left"><Box fontWeight='fontWeightMedium' display='inline'>Hi, Andres</Box></Typography>
                                    <br />
                                    <Typography variant='h6' align="left">Ready to start the day? let's review your students and homestays</Typography>
                                </Stack>
                            </Grid>
                            <Grid item md={6}>
                                <Grid container direction="column" justifyContent="center" alignItems="center" display="flex">
                                    <Box
                                        component="img"
                                        sx={{
                                            maxHeight: { xs: '45vh' },
                                            maxWidth: { xs: '45vh' },
                                        }}
                                        alt="Organize your information."
                                        src={ welcome }
                                    />
                                    <br />
                                    <Grid item container direction="column" sx={{ display: { sm: 'flex', md:'none', lg: 'none' }, px: "5vw"}}>
                                        <Typography variant='h5' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Hi, Andres</Box></Typography>
                                        <br />
                                        <Typography variant='body1' align="center">Ready to start the day? let's review your students and homestays</Typography>
                                        <br />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                   
                </Grid>

                {/*Status */}
                <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center" mb="10vh">

                    <Grid item xs={10} md={10}>
                        <Typography variant='subtitle' align="left"><Box fontWeight='500' display='inline'>Status</Box></Typography>
                    </Grid>

                    <Grid item xs={10} sx={{ backgroundColor: '#F5F5F5', borderRadius: '3vh'}}>

                        <Grid container spacing={2}  direction="row" justifyContent="center" alignItems="center" sx={{ mb: '3%' }} >
                            <Grid item xs={10} sm={10} md={8} lg={6}>
                                <Stack>
                                    <Grid container  direction="row" justifyContent="center" alignItems="center" sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg:'flex'}, backgroundColor: '#CDC1EC', borderRadius: '3vh' }}>
                                        <Grid item xs={12} md={6}>
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxHeight: { xs: '45vh' },
                                                    maxWidth: { xs: '45vh' },
                                                }}
                                                alt="Organize your information."
                                                src={ welcome }
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Stack>
                                                <Typography variant='h4' align="center"><Box fontWeight='fontWeightMedium' display='inline'>83%</Box></Typography>
                                                <br />
                                                <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Confirmed students</Box></Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container  direction="row" justifyContent="center" alignItems="center" sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg:'flex'}, backgroundColor: '#CDC1EC', borderRadius: '3vh' }}>
                                        <Grid item xs={12} md={6}>
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxHeight: { xs: '45vh' },
                                                    maxWidth: { xs: '45vh' },
                                                }}
                                                alt="Organize your information."
                                                src={ welcome }
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Stack>
                                                <Typography variant='h4' align="center"><Box fontWeight='fontWeightMedium' display='inline'>91%</Box></Typography>
                                                <br />
                                                <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Confirmed homestay</Box></Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container  direction="row" justifyContent="center" alignItems="center" sx={{ display: {xs: 'flex', sm: 'flex', md: 'flex', lg:'none'}, backgroundColor: '#CDC1EC', borderRadius: '3vh' }}>
                                        <Grid item xs={12} md={6}>
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxHeight: { xs: '45vh' },
                                                    maxWidth: { xs: '45vh' },
                                                }}
                                                alt="Organize your information."
                                                src={ welcome }
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Stack>
                                                <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>House for city</Box></Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Grid>
                            <Grid item sm={2} lg={6} >
                                <Grid container  direction="row" justifyContent="center" alignItems="center">
                                    <Grid item sm={2} lg={10} justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg:'flex'}, height: '55vh', backgroundColor: '#CDC1EC', borderRadius: '3vh' }}>
                                        <Box
                                            component="img"
                                            sx={{
                                                maxHeight: { xs: '45vh' },
                                                maxWidth: { xs: '45vh' },
                                            }}
                                            alt="Organize your information."
                                            src={ welcome }
                                        />
                                        <Stack>
                                            <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>House for city</Box></Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                   
                </Grid>

                {/*Overview */}
                <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center" mb="10vh">
                
                    <Grid item xs={10} md={10}>
                        <Typography variant='subtitle' align="left"><Box fontWeight='500' display='inline'>Overview</Box></Typography>
                    </Grid>

                    <Grid item xs={10} sx={{ backgroundColor: '#C6A6DF', borderRadius: '3vh'}}>

                        <Grid container  direction="row" justifyContent="center" alignItems="center" sx={{ mb: '5%' }} >
                            
                            <Grid item xs={12} sm={10} md={6} lg={3} >
                                <Stack>
                                    <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Total students:</Box></Typography>
                                    <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>80</Box></Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={10} md={6} lg={3} >
                                <Stack>
                                    <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Active Students in homestay</Box></Typography>
                                    <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>31</Box></Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={10} md={6} lg={3} >
                                <Stack>
                                    <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Total homestay</Box></Typography>
                                    <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>120</Box></Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={10} md={6} lg={3} >
                                <Stack>
                                    <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>House for accept students</Box></Typography>
                                    <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>4</Box></Typography>
                                </Stack>
                            </Grid>

                        </Grid>

                    </Grid>
                   
                </Grid>

                {/*Students */}
                <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center" mb="10vh">
                
                    <Grid item xs={10} sx={{ backgroundColor: '#F6F8FC', borderRadius: '3vh'}}>

                        <Grid container  direction="row" justifyContent="center" alignItems="center" mb="3%" spacing={2}>
                            
                            
                            <Grid item md={12}>
                                <Typography variant='h6' align="left"><Box fontWeight='500' display='inline'>Student for confirm registration</Box></Typography>
                            </Grid>

                            {/*ESTE CODIGO DEBE REMPLAZARSE POR UN MAP O FOREACH QUE PERMITA ESCRIBIR ESTO SOLO UNA VEZ */}
                            <Grid item xs={12} sm={10} md={6} lg={4} >
                                <Card sx={{ maxWidth: 400 }}>
                                    <CardContent sx={{ backgroundColor: '#E7E3DB'}}>
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
                                                <Stack>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>Barbie Mattel</Box></Typography>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>Mexican</Box></Typography>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>Start the day:</Box></Typography>
                                                    <Typography variant='subtitle1' align="left">2022-11-05</Typography>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>School:</Box> Hansa Language Centre</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActionArea sx={{ backgroundColor: '#F1F1F1' }}>
                                        <CardActions>
                                            <Grid item md={12}>
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>More details <ArrowForward style={{verticalAlign:"middle"}}/></Box></Typography>
                                                </Stack>
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={10} md={6} lg={4} >
                                <Card sx={{ maxWidth: 400 }}>
                                    <CardContent sx={{ backgroundColor: '#E7E3DB'}}>
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
                                                <Stack>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>Barbie Mattel</Box></Typography>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>Mexican</Box></Typography>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>Start the day:</Box></Typography>
                                                    <Typography variant='subtitle1' align="left">2022-11-05</Typography>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>School:</Box> Hansa Language Centre</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActionArea sx={{ backgroundColor: '#F1F1F1' }}>
                                        <CardActions>
                                            <Grid item md={12}>
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>More details <ArrowForward style={{verticalAlign:"middle"}}/></Box></Typography>
                                                </Stack>
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={10} md={6} lg={4} >
                                <Card sx={{ maxWidth: 400 }}>
                                    <CardContent sx={{ backgroundColor: '#E7E3DB'}}>
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
                                                <Stack>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>Barbie Mattel</Box></Typography>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>Mexican</Box></Typography>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>Start the day:</Box></Typography>
                                                    <Typography variant='subtitle1' align="left">2022-11-05</Typography>
                                                    <Typography variant='subtitle1' align="left"><Box fontWeight='500' display='inline'>School:</Box> Hansa Language Centre</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActionArea sx={{ backgroundColor: '#F1F1F1' }}>
                                        <CardActions>
                                            <Grid item md={12}>
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>More details <ArrowForward style={{verticalAlign:"middle"}}/></Box></Typography>
                                                </Stack>
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                        </Grid>

                    </Grid>
                   
                </Grid>

                {/*Homestay */}
                <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center" mb="10vh">
                
                    <Grid item xs={10} sx={{ backgroundColor: '#F6F8FC', borderRadius: '3vh'}}>

                        <Grid container  direction="row" justifyContent="center" alignItems="center" sx={{ mb: '5%' }} spacing={2} >
                            
                            
                            <Grid item md={12}>
                                <Typography variant='h6' align="left"><Box fontWeight='500' display='inline'>Homestay for certified</Box></Typography>
                            </Grid>

                            {/*ESTE CODIGO DEBE REMPLAZARSE POR UN MAP O FOREACH QUE PERMITA ESCRIBIR ESTO SOLO UNA VEZ */}
                            <Grid item sm={12} md={6} lg={4} >
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                    component="img"
                                    height="240"
                                    src={ welcome }
                                    alt="green iguana"
                                    />
                                    <CardContent sx={{ backgroundColor: '#EDEDED'}}>
                                        <Grid container direction="row" spacing={2}>
                                            <Grid item md={12} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>ANGELES FLORES, Ali Susan</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">135 William St, Toronto</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Bedrooms:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">2</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Pets:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">No</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Gender:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">Any</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Age:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">Any</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActionArea sx={{ backgroundColor: '#F1F1F1' }}>
                                        <CardActions>
                                            <Grid item md={12}>
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>More details <ArrowForward style={{verticalAlign:"middle"}}/></Box></Typography>
                                                </Stack>
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item sm={12} md={6} lg={4} >
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                    component="img"
                                    height="240"
                                    src={ welcome }
                                    alt="green iguana"
                                    />
                                    <CardContent sx={{ backgroundColor: '#EDEDED'}}>
                                        <Grid container direction="row" spacing={2}>
                                            <Grid item md={12} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>ANGELES FLORES, Ali Susan</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">135 William St, Toronto</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Bedrooms:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">2</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Pets:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">No</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Gender:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">Any</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Age:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">Any</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActionArea sx={{ backgroundColor: '#F1F1F1' }}>
                                        <CardActions>
                                            <Grid item md={12}>
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>More details <ArrowForward style={{verticalAlign:"middle"}}/></Box></Typography>
                                                </Stack>
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item sm={12} md={6} lg={4} >
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                    component="img"
                                    height="240"
                                    src={ welcome }
                                    alt="frontage"
                                    />
                                    <CardContent sx={{ backgroundColor: '#EDEDED'}}>
                                        <Grid container direction="row" spacing={2}>
                                            <Grid item md={12} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>ANGELES FLORES, Ali Susan</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">135 William St, Toronto</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item sm={12} md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Bedrooms:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">2</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Pets:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">No</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Gender:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">Any</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item md={6} >
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>Age:</Box></Typography>
                                                    <Typography variant='subtitle1' align="center">Any</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActionArea sx={{ backgroundColor: '#F1F1F1' }}>
                                        <CardActions>
                                            <Grid item sm md={12}>
                                                <Stack>
                                                    <Typography variant='subtitle1' align="center"><Box fontWeight='500' display='inline'>More details <ArrowForward style={{verticalAlign:"middle"}}/></Box></Typography>
                                                </Stack>
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>

                    </Grid>
                   
                </Grid>

                <FooterLine />

            </Grid>
       </ManagerLayout>
    )
}
