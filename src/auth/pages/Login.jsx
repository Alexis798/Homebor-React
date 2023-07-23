import { Box, Button, Card, CardContent, CardMedia, Container, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Stack, TextField, Typography } from "@mui/material"
import { Cached, Lock, Person, Visibility, VisibilityOff } from "@mui/icons-material"
import banner from '../../assets/home/banner_login.png'
import { AuthLayout } from "../layout/authLayout"
import { HideandShowPassword } from "../hooks"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useForm } from "../../hooks/useForm"

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

const styles = {
    heroContainer: {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
};

export const LoginPage = () => {

    const { startLogin } = useAuthStore()

    const { showPassword, handleClickShowPassword, handleMouseDownPassword } = HideandShowPassword()
    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm( loginFormFields );

    const loginSubmit = ( event ) => {
        event.preventDefault()

        startLogin({ email: loginEmail, password: loginPassword})
    }
    
    return (
        <AuthLayout>
            <Grid
               container
               direction="row"
               justifyContent="center"
               alignItems="center"
               bgcolor="#FAF2FF"
               className="animate__animated animate__fadeIn"
            >

                <Container 
                    direction="column" 
                    sx={{ 
                        mt: { xs: "20vh", sm: "20vh", md: "10vh", lg: "0vh"}, 
                        mb: {xs: "15vh", sm: "10vh", md:"0vh", lg: "5vh"},
                        ml: { xs: '10%', md: '5%'},
                        mr: { xs: '10%', md: '5%'},
                        backgroundColor: "#FFF"
                    }}
                >
                    
                    <Grid 
                        container 
                        justifyContent="center" 
                        direction="row"
                        spacing={{ xs: 0, sm: 0, md: 2}}  
                        sx={{ 
                            mb: {sm: '0vh', md: '5vh'}
                        }}
                    >
                        <Grid 
                            item 
                            md={6} 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center"
                            style={styles.heroContainer}
                            sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg:'flex' } }}
                            
                        />

                        <Grid 
                            item
                            xs={10}
                            sm={8} 
                            md={6} 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center" 
                        >
                            <Stack sx={{ mt: '5%'}}>
                                <h2>Login</h2>
                                <br/>

                                <Box>
                                    <form onSubmit={ loginSubmit }>
                                        <FormControl variant="standard" sx={{ width: '90%', marginBottom: '5%'}} >
                                            <InputLabel htmlFor="input-with-icon-adornment">
                                                Email
                                            </InputLabel>
                                            <Input
                                                id="input-with-icon-adornment"
                                                name="loginEmail"
                                                value={ loginEmail }
                                                onChange={ onLoginInputChange }
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Person />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>

                                        <FormControl variant="standard" sx={{ width: '90%', marginBottom: '5%'}}>

                                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                            <Input
                                                id="standard-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                name="loginPassword"
                                                value={ loginPassword }
                                                onChange={ onLoginInputChange }
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Lock />
                                                    </InputAdornment>
                                                }
                                                endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </form>
                                </Box>

                                <Box mt="35%">
                                    <Grid container spacing={2}>
                                        <Grid item xs={8} component="div" sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',}}>
                                            <Cached color="secondary" sx={{ fontSize: 16 }}/>
                                            <Typography variant="body2" sx={{ fontSize: {xs: 10, sm: 10, md: 12}, marginLeft: '2%' }}> I have forgot my password</Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button color="palleteColor1" variant="contained" onClick={ loginSubmit }>
                                                <Typography color="white" variant="button">Log In</Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack>
                        </Grid>
                       
                    </Grid>
                </Container>
                       
            </Grid>
        
        </AuthLayout>
    )
}
