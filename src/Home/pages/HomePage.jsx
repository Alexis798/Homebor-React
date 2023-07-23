import { useEffect, useRef } from "react";
import { Box, Button, Card, CardContent, CardActionArea, CardMedia, Grid, Typography, Stack, TextField, Fab, Avatar } from "@mui/material"
import { Container } from "@mui/system";
import { HomeLayout } from "../layout/homeLayout"
import banner from '../../assets/home/banner_img.png'
import bannerOla from '../../assets/home/ondaRosa.png'
import bannerOlaMorada from '../../assets/home/ondaMorada.png'
import iHomestay from '../../assets/home/iHomestay_logo.png'
import organize from '../../assets/home/carpeta.png'
import productivity from '../../assets/home/barras.png'
import cycle from '../../assets/home/ciclo.png'
import save from '../../assets/home/administracion-del-dinero.png'
import strenght from '../../assets/home/compania.png'
import community from '../../assets/home/business-people.png'
import connect from '../../assets/home/connect.png'
import contact from '../../assets/manager/welcome.png'
import andrea from '../../assets/home/ab.jpg'
import pamela from '../../assets/home/pm.jpg'
import homestayImage from '../../assets/home/HomestayIMAGE.png'
import studentpreview from '../../assets/home/StudentpreviewIMAGE.png'
import assigmentpreview from '../../assets/home/AssigmentPreviewIMAGE.png'
import {  ArrowForward } from "@mui/icons-material"
import { useLocation } from 'react-router-dom';


const styles = {
    heroContainer: {
        height: '80%',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: `calc(100vw)`,
        marginTop: `calc(100vw - 90vw)`,
        padding: 24,
    },
    serviceContainer: {
        height: '100%',
        backgroundImage: `url(${bannerOla})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: `calc(100vw)`,
        padding: 24,
    },
    connectContainer: {
        height: '100%',
        backgroundImage: `url(${bannerOlaMorada})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: `calc(100vw)`,
        padding: 24,
    },
};



export const HomePage = () => {

    const location = useLocation();

    const home = useRef(null);
    const about = useRef(null);
    const service = useRef(null);
    const contactus = useRef(null)

    useEffect(() => {
        if(location.pathname == '/') {
            home.current?.scrollIntoView({alignToTop: true, behavior: 'smooth', block: 'start'})
        }
        if(location.pathname == '/about_us') {
            about.current?.scrollIntoView({alignToTop: true, behavior: 'smooth', block: 'center'})
        }
        if(location.pathname == '/services') {
            service.current?.scrollIntoView({alignToTop: true, behavior: 'smooth', block: 'center'})
        }
        if(location.pathname == '/contact_us') {
            contactus.current?.scrollIntoView({alignToTop: true, behavior: 'smooth', block: 'start'})
        }
    }, [location])
    

    const registerSubmit = ( event ) => {
        console.log(event)
    }

    return (
       <HomeLayout>
            <Grid
                ref={ home }
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                height="100%"
                className="animate__animated animate__fadeIn"
            >
                {/*Book a Free Demo Section */}
                <Grid
                    container
                    direction="row"
                    justifyContent="left"
                    alignItems="left"
                    style={styles.heroContainer} 
                >
                    <Grid 
                        item 
                        xs={8} 
                        sm={6} 
                        md={4} 
                        sx={{ ml: {md: '5vw'}, mt: {md: '5vw'} }}
                    >
                        <Typography component="h1" variant="b">Simplify Your Homestay process</Typography>
                        <br />
                        <Typography variant="body1">Homebor is a student accommodation platform that efficiently handles your entire business process, maximizing the experience for your team, your homestay families and your students.</Typography>
                        <br />
                        <br />
                        <Button variant="contained" color="ButtonHome">
                            <Typography variant="h6" color="white">Book a free demo</Typography>
                        </Button>
                    </Grid>
                </Grid>

                {/*Benefits of working with us*/}
                <Container 
                    ref={about}
                    direction="column" 
                    sx={{ 
                        mt: { xs: "-20vh", sm: "-20vh", md: "-10vh", lg: "0vh"}, 
                        mb: {xs: "15vh", sm: "10vh", md:"5vh", lg: "5vh"}}}
                >
                    <Grid container justifyContent="center">
                        <Typography variant="b" component="h2" color="#3833BE">Benefits of working with us</Typography>
                    </Grid>
                    <br />
                    <br />
                    
                    <Grid 
                        container 
                        justifyContent="center" 
                        spacing={{xs: 6, sm: 5, md: 10}} 
                        direction="row" 
                        sx={{ 
                            mb: {sm: '0vh', md: '5vh'}
                        }}
                    >
                        <Grid 
                            item 
                            md={4} 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center"
                        >
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        maxHeight: { xs: '20vh' },
                                        maxWidth: { xs: '25vh' },
                                    }}
                                    alt="Organize your information."
                                    src={ organize }
                                />

                                <br />
                                <Typography variant="b" component="h4">Organize your information</Typography>
                            </Stack>
                        </Grid>

                        <Grid 
                            item 
                            md={4} 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center" 
                        >
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        maxHeight: { xs: '20vh' },
                                        maxWidth: { xs: '25vh' },
                                    }}
                                    alt="Increase team productivity."
                                    src={ productivity }
                                />

                                <br />
                                <Typography variant="b" component="h4">Increase team productivity</Typography>
                            </Stack>
                        </Grid>

                        <Grid 
                            item 
                            md={4} 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center" 
                        >
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        maxHeight: { xs: '20vh' },
                                        maxWidth: { xs: '25vh' },
                                    }}
                                    alt="Reduce your duty cycle."
                                    src={ cycle }
                                />

                                <br />
                                
                                <Typography variant="b" component="h4">Reduce your duty cycle</Typography>
                            </Stack>
                        </Grid>

                        <Grid 
                            item 
                            md={4} 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center" 
                        >
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        maxHeight: { xs: '20vh' },
                                        maxWidth: { xs: '25vh' },
                                    }}
                                    alt="Organize your information."
                                    src={ save }
                                />
                                
                                <br />
                                <Typography variant="b" component="h4">Save time and money</Typography>
                            </Stack>
                        </Grid>

                        <Grid 
                            item 
                            md={4} 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center" 
                        >
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        maxHeight: { xs: '20vh' },
                                        maxWidth: { xs: '25vh' },
                                    }}
                                    alt="Increase team productivity."
                                    src={ strenght }
                                />

                                <br />
                                <Typography variant="b" component="h4">Strenghten your company brand</Typography>
                            </Stack>
                        </Grid>

                        <Grid 
                            item 
                            md={4} 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center" 
                        >
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        maxHeight: { xs: '20vh' },
                                        maxWidth: { xs: '25vh' },
                                    }}
                                    alt="Reduce your duty cycle."
                                    src={ community }
                                />

                                <br />
                                
                                <Typography variant="b" component="h4">Be part of our community of collaborators</Typography>
                            </Stack>
                        </Grid>
                       
                    </Grid>
                </Container>

                {/*Create a great experience for your clients*/}
                <Container
                    maxWidth={false} 
                    direction="column" 
                    sx={{ 
                        mt: { xs: "5vh", sm: "10vh", md: "10vh", lg: "10vh"}, 
                        mb: {xs: "30vh", md:"10vh", lg: "5vh"},
                    }}
                >

                    <Container ref={service} maxWidth={false} style={styles.serviceContainer} sx={{ ml: "-2%"}}>
                        <Grid 
                            container 
                            justifyContent="center" 
                            direction="row" 
                            sx={{ 
                                mb: {sm: '0vh', md: '10vh'}
                            }}
                        >

                            <Grid item sm={4} md={4} lg={6} justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg:'flex' }, mt: { md: '-10%', lg: '-10%'} }}>
                                <Typography variant='h5' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Everything you need with a first class user <br /> experience</Box></Typography>
                            </Grid>

                            <Grid item md={6} lg={4} display="flex" justifyContent="center" alignItems="center">
                                <Stack>
                                    <Grid container direction="row">
                                        <Grid item md={2} sx={{mr: {xs: "0%", sm: "0%", md: "35%", lg: "30%"}}}>
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxHeight: { xs: '60vh' },
                                                    maxWidth: { xs: '64vh' },
                                                }}
                                                alt="Organize your information."
                                                src={ homestayImage }
                                            />
                                        </Grid>
                                        <Grid item md={2}>
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxHeight: { xs: '60vh' },
                                                    maxWidth: { xs: '64vh' },
                                                }}
                                                alt="Organize your information."
                                                src={ studentpreview }
                                            />
                                        </Grid>
                                    </Grid>

                                    <br />
                                    <Grid item sx={{ display: { sm: 'flex', md:'none', lg: 'none' }}}>
                                        <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Everything you need with a first class user experience</Box></Typography>
                                    </Grid>
                                </Stack>
                                
                            </Grid>

                        </Grid>
                    </Container>
                    

                    <Grid 
                        container 
                        justifyContent="center" 
                        spacing={{xs: 6, sm: 5, md: 10}} 
                        direction="row" 
                        sx={{ 
                            mb: {xs: '5vh', sm: '5vh', md: '15vh'}
                            }}
                    >
                        <Grid item md={4} display="flex" justifyContent="center" alignItems="center">
                            <Stack>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item sm={4} md={6} lg={10}>
                                        <Box
                                            component="img"
                                            sx={{
                                                maxHeight: { xs: '60vh' },
                                                maxWidth: { xs: '64vh' },
                                            }}
                                            alt="Organize your information."
                                            src={ assigmentpreview }
                                        />
                                    </Grid>
                                </Grid>

                                <br />
                                <Grid item sx={{ display: { sm: 'flex', md:'none', lg: 'none' }}}>
                                    <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Create unique and unforgettable experience for your students and homestay families</Box></Typography>
                                </Grid>
                            </Stack>
                        </Grid>

                        <Grid item sm={4} md={6} justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg:'flex' } }}>
                            <Typography variant='h5' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Create unique and unforgettable <br /> experience for your students and <br /> homestay families</Box></Typography>
                        </Grid>

                    </Grid>

                    <Container maxWidth={false} style={styles.connectContainer} sx={{ ml: "-2%"}}>
                        <Grid 
                            container 
                            justifyContent="center" 
                            spacing={{xs: 6, sm: 5, md: 10}} 
                            direction="row" 
                            sx={{ 
                                mb: {sm: '0vh', md: '5vh'}
                                }}
                        >

                            <Grid item sm={4} md={6} justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg:'flex' }, mt: { md: "-10%"} }}>
                                <Typography variant='h5' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Connect families and students <br /> with our app</Box></Typography>
                            </Grid>

                            <Grid item md={4} display="flex" justifyContent="center" alignItems="center">
                                <Stack>
                                    <Box
                                        component="img"
                                        sx={{
                                            maxHeight: { xs: '60vh' },
                                            maxWidth: { xs: '64vh' },
                                        }}
                                        alt="Organize your information."
                                        src={ connect }
                                    />

                                    <br />
                                    <Grid item sx={{ display: { sm: 'flex', md:'none', lg: 'none' }}}>
                                        <Typography variant='h6' align="center"><Box fontWeight='fontWeightMedium' display='inline'>Connect families and students with our app</Box></Typography>
                                    </Grid>
                                </Stack>
                            </Grid>

                        </Grid>
                    </Container>
                </Container>

                <Container 
                    direction="column" 
                    sx={{ 
                        mt: { xs: "-10vh", sm: "-20vh", md: "10vh", lg: "10vh"}, 
                        mb: {xs: "30vh", md:"10vh", lg: "5vh"}
                        }}
                >
                    

                    <Grid 
                        container 
                        justifyContent="center" 
                        spacing={{xs: 6, sm: 5, md: 10}} 
                        direction="row" 
                        sx={{ 
                            mb: {sm: '0vh', md: '5vh'}
                            }}
                    >
                        <Grid container justifyContent="center" sx={{ mb: "5%" }}>
                            <Typography variant="b" component="h2">Customers reviews</Typography>
                        </Grid>

                        <Grid item >
                            <Card sx={{ maxWidth: 245,  }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="50%"
                                        src={ iHomestay }
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                    <Grid container justifyContent="center" sx={{ mb: "35%" }}>
                                        <Avatar 
                                            alt="agent" src={ pamela } 
                                            sx={{ width: 104, height: 104, mb: "5%" }}
                                        />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Pamela Garcia
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            "It's a great product and I think it can benefit all parties, including agencies, students and families"
                                        </Typography>
                                    </Grid>
                                   
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        height="50%"
                                        src={ bannerOlaMorada }
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card sx={{ maxWidth: 245,  }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="50%"
                                        src={ iHomestay }
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                    <Grid container justifyContent="center" sx={{ mb: "35%" }}>
                                        <Avatar 
                                            alt="agent" src={ andrea } 
                                            sx={{ width: 104, height: 104, mb: "5%" }}
                                        />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Andrea Bravo
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            "I have increased my productivity and my users are happy with the management"
                                        </Typography>
                                    </Grid>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        height="50%"
                                        src={ bannerOlaMorada }
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>

                    </Grid>
                </Container>

                {/*Contact Us*/}
                <Container
                    ref={contactus} 
                    direction="column" 
                    sx={{ 
                        mt: { xs: "-20vh", sm: "-20vh", md: "-10vh", lg: "0vh"}, 
                        mb: {xs: "15vh", sm: "10vh", md:"5vh", lg: "5vh"}
                        }}
                >
                    <Grid container justifyContent="center">
                        <Typography variant="b" component="h2" color='#B00AAA'>Contact Us</Typography>
                    </Grid>
                    <br />
                    <br />

                    <Grid 
                        container 
                        justifyContent="center" 
                        spacing={{xs: 6, sm: 5, md: 10}} 
                        direction="row"
                        sx={{ 
                            mb: {sm: '0vh', md: '5vh'}
                        }}
                    >
                        <Grid item sm={8} md={8} lg={6} sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg:'flex' } }}>
                            <Stack>
                                <Grid container justifyContent="center" sx={{ mb: "5%" }}>
                                    <Typography variant="b" component="h2" color='#909090'>We would love to talk about working together.</Typography>
                                </Grid>
                                <form onSubmit={ registerSubmit }>
                                    <Grid container direction="row" sx={{ mb: "5%" }}>
                                        <Stack width="45%" sx={{ mr: "10%" }}>
                                            <Grid container justifyContent="left" sx={{ mb: "3%" }}>
                                                <Typography variant="b" component="h3" color='#909090'>First Name</Typography>
                                            </Grid>
                                            <TextField id="outlined-basic" label="Your name" variant="outlined" sx={{ width: "100%", mr: '10%'}} />
                                        </Stack>

                                        <Stack width="45%">
                                            <Grid container justifyContent="left" sx={{ mb: "3%" }}>
                                                <Typography variant="b" component="h3" color='#909090'>Last Name</Typography>
                                            </Grid>
                                            <TextField id="outlined-basic" label="Your last name" variant="outlined" sx={{ width: "100%"}}/>
                                        </Stack>
                                    </Grid>
                                    
                                    <Grid item sx={{ mb: "5%" }}>
                                        <Stack>
                                            <Grid container justifyContent="left" sx={{ mb: "3%" }}>
                                                <Typography variant="b" component="h3" color='#909090'>Email.</Typography>
                                            </Grid>
                                            <TextField id="outlined-basic" label="example@domain.com" variant="outlined" sx={{ width: "100%"}}/>
                                        </Stack>
                                    </Grid>

                                    <Grid item sx={{ mb: "5%" }}>
                                        <Stack>
                                            <Grid container justifyContent="left" sx={{ mb: "3%" }}>
                                                <Typography variant="b" component="h3" color='#909090'>Company.</Typography>
                                            </Grid>
                                            <TextField id="outlined-basic" label="" variant="outlined" sx={{ width: "100%"}}/>
                                        </Stack>
                                    </Grid>

                                    <Grid item sx={{ mb: "5%" }}>
                                        <Stack>
                                            <Grid container justifyContent="left" sx={{ mb: "3%" }}>
                                                <Typography variant="b" component="h3" color='#909090'>Phone number.</Typography>
                                            </Grid>
                                            <TextField id="outlined-basic" label="" variant="outlined" sx={{ width: "100%"}}/>
                                        </Stack>
                                        
                                    </Grid>

                                    <Grid item sx={{ mb: "5%" }}>
                                        <Stack>
                                            <Grid container justifyContent="left" sx={{ mb: "3%" }}>
                                                <Typography variant="b" component="h3" color='#909090'>Message.</Typography>
                                            </Grid>
                                            <TextField id="outlined-basic" label="example@domain.com" variant="outlined" multiline rows={4} sx={{ width: "100%"}}/>
                                        </Stack>
                                    </Grid>

                                    <Grid container justifyContent="center" sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg:'none' } }}>
                                        <Stack>
                                            <Fab color="success" aria-label="add" sx={{ mb: "8%"}}>
                                                <ArrowForward />
                                            </Fab>
                                            <Typography variant="b" component="h3" color='#909090' sx={{ ml: "10%"}}>Send</Typography>
                                        </Stack>
                                    </Grid>
                                    
                                </form>
                            </Stack>
                        </Grid>

                        <Grid item md={2} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg:'flex' } }}>
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        maxHeight: { xs: '75vh', sm: '15vh', md: '45vh', lg: '75vh'  },
                                        maxWidth: { xs: '74vh', sm: '15vh', md: '45vh', lg: '75vh' },
                                        display: { xs: 'none', sm: 'none', md: 'flex', lg:'flex' }
                                    }}
                                    alt="Increase team productivity."
                                    src={ contact }
                                />
                                
                                <Grid container justifyContent="center">
                                    <Stack>
                                        <Fab color="success" aria-label="add" sx={{ mb: "8%"}}>
                                            <ArrowForward />
                                        </Fab>
                                        <Typography variant="b" component="h3" color='#909090' sx={{ ml: "10%"}}>Send</Typography>
                                    </Stack>
                                </Grid>
                            </Stack>
                        </Grid>                      
                        
                    </Grid>

                </Container>

            </Grid>
       </HomeLayout>
    )
}
