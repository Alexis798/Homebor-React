import { useState } from "react"
import { Box, Button, Card, CardContent, CardMedia, Checkbox, Container, FormControl, FormControlLabel, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { Cached, Email, Lock, Person, Summarize, Visibility, VisibilityOff } from "@mui/icons-material"
import { AuthLayout } from "../layout/authLayout"
import { HideandShowPassword } from "../hooks"


export const RegisterPage = () => {

    const { showPassword, handleClickShowPassword, handleMouseDownPassword } = HideandShowPassword()
    
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
                        mt: { xs: "20vh", sm: "20vh", md: "10vh", lg: "10vh"}, 
                        mb: {xs: "15vh", sm: "10vh", md:"0vh", lg: "5vh"},
                        ml: { xs: '2%', md: '5%'},
                        mr: { xs: '2%', md: '5%'},
                    }}
                >
                    
                    <Grid 
                        container 
                        justifyContent="center" 
                        direction="row"
                        sx={{ 
                            mb: {sm: '0vh', md: '5vh'},
                            backgroundColor: '#FFFFFF'
                        }}
                    >
                        
                        <Grid 
                            item
                            xs={8}
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center"
                        >
                            <Stack sx={{ mt: '5%'}}>
                                <h2>Register and Work with Us!</h2>
                                <br/>

                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <FormControl variant="standard" sx={{ width: '90%', marginBottom: '5%'}}>
                                            <InputLabel>
                                                Name
                                            </InputLabel>
                                            <Input
                                            
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Person />
                                                </InputAdornment>
                                            }
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <FormControl variant="standard" sx={{ width: '90%', marginBottom: '5%'}}>
                                            <InputLabel >
                                                Last Name
                                            </InputLabel>
                                            <Input
                                            
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Person />
                                                </InputAdornment>
                                            }
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <FormControl variant="standard" sx={{ width: '95%', marginBottom: '5%'}}>
                                            <InputLabel>
                                                Email
                                            </InputLabel>
                                            <Input
                                            
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Email />
                                                </InputAdornment>
                                            }
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <FormControl variant="standard" sx={{ width: '90%', marginBottom: '5%'}}>

                                            <InputLabel>Password</InputLabel>
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
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
                                    </Grid>

                                    <Grid item xs={6}>
                                        <FormControl variant="standard" sx={{ width: '90%', marginBottom: '5%'}}>

                                            <InputLabel>Repeat Password</InputLabel>
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
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
                                    </Grid>

                                    <Grid item xs={12}>
                                        <FormControl variant="standard" sx={{ width: '95%', marginBottom: '5%'}}>
                                            <InputLabel>Register As</InputLabel>
                                            <Select
                                            label="Age"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Summarize />
                                                </InputAdornment>
                                            }
                                            >
                                                <MenuItem value={undefined}></MenuItem>
                                                <MenuItem value={'student'}>Register as Student</MenuItem>
                                                <MenuItem value={'homestay'}>Register as Homestay</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    {/*TODO: AGREGAR CUADRO DEL RECAPCHA*/}

                                    <Box mb="5%">
                                        <Grid container spacing={2} justifyContent="center">
                                            <Grid item>
                                                <FormControlLabel control={<Checkbox defaultChecked />} label="I Agree with Terms and Conditions" />
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <Box>
                                        <Grid container spacing={2} justifyContent="center">
                                            <Grid item>
                                                <Button color="palleteColor1" variant="contained">
                                                    <Typography color="white" variant="button">Register</Typography>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>

                            </Stack>
                        </Grid>
                       
                    </Grid>
                </Container>
                       
            </Grid>
        
        </AuthLayout>
    )
}
