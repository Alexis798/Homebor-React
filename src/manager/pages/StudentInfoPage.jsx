import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"
import { ManagerLayout } from "../layout/ManagerLayout"
import welcome from '../../assets/manager/welcome.png'
import { BorderColor, Download, Edit, Error, HelpOutline, Home, LocationOn, ShowChart } from "@mui/icons-material"
import { useNavigation, useParams } from "react-router-dom"
import { useEffect, useMemo } from "react"
import { useStudentProfileStore } from "../hooks/useStudentProfileStore"
import studentPhoto from "../../assets/emptys/profile-student-empty.png"

export const StudentInfoPage = () => {

    const { id } = useParams();

    const { isLoadingStudent, studentProfile, startLoadingStudentProfile } = useStudentProfileStore( id )

    useEffect(() => {
        startLoadingStudentProfile()
    }, [id])

    console.log(studentProfile)
    
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
                        <Grid container direction="row" spacing={2}>
                            { studentProfile.student?.map( data => (
                                <>
                                    {/*Student Photo Side */}
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Stack justifyContent="center" alignItems="center">
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxHeight: { xs: '45vh', sm: '45vh', md: '35vh', lg: '50vh'},
                                                    maxWidth: { xs: '45vh',  sm: '45vh', md: '35vh', lg: '50vh'},
                                                }}
                                                alt="Organize your information."
                                                src={ data.photo_s != 'NULL' ? `https://www.homebor.com/${data.photo_s}` : studentPhoto }
                                            />
                                        </Stack>
                                        {/*About Student in small screen */}
                                        <Grid item xs={12} sx={{ display: {xs: 'flex', sm: 'flex', md: 'none'}}}>
                                            <Grid container direction="column">
                                                <Stack mb="5%">
                                                    <Typography textAlign="center" variant="h4" sx={{ mb: '2vh'}}><Box fontWeight='fontWeightMedium'>{data.name_s} {data.l_name_s}</Box></Typography>
                                                    <Typography textAlign="center" variant="body1" color="#CE559B" sx={{fontWeight: 'bold'}}><LocationOn style={{verticalAlign:"middle", color: '#E7A9CC'}}/> {data.nationality}</Typography>
                                                    <Typography textAlign="center" variant="body1" color="#CE559B" sx={{fontWeight: 'bold'}}><ShowChart style={{verticalAlign:"middle", color: '#E7A9CC'}}/> {data.status}</Typography>
                                                    <Typography textAlign="center" variant="body1" color="#CE559B" sx={{fontWeight: 'bold'}}><BorderColor style={{verticalAlign:"middle", color: '#E7A9CC'}}/> Main Register</Typography>
                                                </Stack>
                                                <Stack spacing={2} mb="5%">
                                                    <Typography variant="body1" sx={{fontWeight: 'bold', mb: '2%'}} color="#808080">About the Student</Typography>
                                                    <Grid container justifyContent="left" alignItems="left">
                                                        <Grid item xs={12}>
                                                            <Typography variant="body1" color="#808080">{data.about_me}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Stack>
                                                <Stack justifyContent="center" alignItems="center">
                                                    <Grid item xs={12} mb="10%">
                                                        <Grid container direction="row" spacing={2}>
                                                            <Grid item xs={6}>
                                                                <Button variant="contained" color="studentDownload1"><Download style={{verticalAlign:"middle", color: 'white'}}/> Download PDF</Button>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Button variant="contained" color="studentDownload2"><Download style={{verticalAlign:"middle", color: 'white'}}/> Download PDF</Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Stack>
                                            </Grid>
                                        </Grid>

                                        {/*Booking Panel */}
                                        <Stack spacing={1}>
                                            <Divider textAlign="left"  sx={{fontWeight: 'bold', mb: '3%', color: '#E49DC5'}}>Booking Panel</Divider>
                                            <Button variant="contained" color="studentEdit"><Edit style={{verticalAlign:"middle", color: 'white'}}/> Edit Information</Button>
                                            <Button variant="contained" color="studentBookHouse"><Home style={{verticalAlign:"middle", color: 'white'}}/> Book house</Button>
                                            <Divider textAlign="left"  sx={{fontWeight: 'bold', mb: '3%', color: '#E49DC5'}}>Accommodation Request</Divider>
                                            <Typography variant="body1" color="#808080" textAlign="left"  sx={{fontWeight: 'bold'}}>Start Date of Stay</Typography>
                                            <Typography variant="body1" color="#808080" textAlign="left">{data.firstd}</Typography>
                                            <Typography variant="body1" color="#808080" textAlign="left"  sx={{fontWeight: 'bold'}}>End Date of Stay</Typography>
                                            <Typography variant="body1" color="#808080" textAlign="left">{data.lastd}</Typography>
                                            <Typography variant="body1" color="#000000" textAlign="left"  sx={{fontWeight: 'bold'}}>8 Weeks</Typography>
                                        </Stack>
                                    </Grid>

                                    {/*Student Information Side */}
                                    <Grid item xs={12} sm={12} md={8}>
                                        <Grid container direction="row">

                                            {/*About Student */}
                                            <Grid item xs={8} sx={{ mb: '2%', display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                                                <Stack>
                                                    <Typography variant="h4" sx={{ mb: '2vh'}}><Box fontWeight='fontWeightMedium'>{data.name_s} {data.l_name_s}</Box></Typography>
                                                    <Typography variant="body1" color="#CE559B" sx={{fontWeight: 'bold'}}><LocationOn style={{verticalAlign:"middle", color: '#E7A9CC'}}/> {data.nationality}</Typography>
                                                    <Typography variant="body1" color="#CE559B" sx={{fontWeight: 'bold'}}><ShowChart style={{verticalAlign:"middle", color: '#E7A9CC'}}/> {data.status}</Typography>
                                                    <Typography variant="body1" color="#CE559B" sx={{fontWeight: 'bold'}}><BorderColor style={{verticalAlign:"middle", color: '#E7A9CC'}}/> Main Register</Typography>
                                                </Stack>
                                            </Grid>

                                            {/*Buttons */}
                                            <Grid item xs={4}>
                                                <Grid container justifyContent="right" alignItems="right" sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                                                    <Grid item xs={10}>
                                                        <Stack spacing={2}>
                                                            <Button variant="contained" color="studentDownload1"><Download style={{verticalAlign:"middle", color: 'white'}}/> Download PDF</Button>
                                                            <Button variant="contained" color="studentDownload2"><Download style={{verticalAlign:"middle", color: 'white'}}/> Download PDF</Button>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            {/*Basic Information */}
                                            <Grid item xs={12} sx={{ mb: "5%"}}>
                                                <Grid item xs={12} sx={{ mb: '2%', display: {xs: 'none', sm: 'none', md: 'flex' }}}>
                                                    <Stack>
                                                        <Typography variant="body1" sx={{fontWeight: 'bold', mb: '2%'}} color="#808080">About the Student</Typography>
                                                        <Grid container justifyContent="left" alignItems="left">
                                                            <Grid item xs={11}>
                                                                <Typography variant="body1" color="#808080">{data.about_me}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Stack>
                                                </Grid>
                                                <br />
                                                
                                                <Divider textAlign="left" color="#000000"  sx={{fontWeight: 'bold', mb: '3%'}}>Basic Information</Divider>
                                                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center"  sx={{fontWeight: 'bold'}}>Email</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.mail_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Destination City</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.destination_c}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Arrive Date</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.arrive_f}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Date of Birth</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.db_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Gender</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.gen_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Phone Number</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">1234567890</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Origin Language</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.lang_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Another Language</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.language_a}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Passport</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.passport}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Passport Expiration Date</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.exp_pass}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Visa Expiration Date</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.db_visa}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            {/*Address */}
                                            <Grid item xs={12}>
                                                <Divider textAlign="left" color="#000000"  sx={{fontWeight: 'bold', mb: '3%'}}>Personal Student Address</Divider>
                                                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Country</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.nationality}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>City</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.city_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Province / State</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.state_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Postal Code</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.p_code_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Address</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.dir_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            {/*Professional */}
                                            <Grid item xs={12}>
                                                <Divider textAlign="left" color="#000000"  sx={{fontWeight: 'bold', mb: '3%'}}>Professional Information</Divider>
                                                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Current English Level</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.english_l}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Type Student</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.type_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Program to Study</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.prog_selec}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Schedule</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.schedule}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        
                                    </Grid>

                                    {/*Complete Block*/}
                                    <Grid item xs={12}>

                                        {/*Flight Information*/}
                                        <Divider textAlign="center" color="#000000"  sx={{fontWeight: 'bold', mb: '3%'}}>Flight Information</Divider>
                                        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: "3%"}}>
                                            <Grid item xs={12} sm={4}>
                                                <Stack>
                                                    <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Booking Confirmation</Typography>
                                                    <Typography variant="body1" color="#808080" textAlign="center">{data.n_airline}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <Stack>
                                                    <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Landing Flight Number</Typography>
                                                    <Typography variant="body1" color="#808080" textAlign="center">{data.n_flight}</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: "3%"}}>
                                            <Grid item xs={12} sm={4}>
                                                <Stack>
                                                    <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Flight Date</Typography>
                                                    <Typography variant="body1" color="#808080" textAlign="center">{data.departure_f}</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <Stack>
                                                    <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Arrival at the Homestay</Typography>
                                                    <Typography variant="body1" color="#808080" textAlign="center">{data.arrive_g}</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>

                                        {/*House Information*/}
                                        <Divider textAlign="center" color="#000000"  sx={{fontWeight: 'bold', mb: '3%'}}>House Preferences</Divider>
                                        <Grid container spacing={2} justifyContent="center" alignItems="center">

                                            {/*Can you share with*/}
                                            <Grid item xs={12} sm={12} md={5}>
                                                <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold', mb: '4%'}}>Can you share with:</Typography>
                                                <Grid container direction="row" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Smokers?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.smoker_l}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Children?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.children}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Teenagers?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.teenagers}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Pets?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.pets}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            {/*Accommodation*/}
                                            <Grid item xs={12} sm={12} md={5} sx={{ mb: "3%"}}>
                                                <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold', mb: "4%"}}>Accommodation</Typography>
                                                <Grid container direction="row" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Type Accommodation</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.lodging_type}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Meal Plan</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.meal_p}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Booking Fee</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">250$</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Total Weeckly Price</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">1500$</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            {/*Optional Supplements*/}
                                            <Grid item xs={12}>
                                                <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold', mb: "4%"}}><Error style={{verticalAlign:"middle"}}/> Optional Supplements</Typography>
                                                <Grid container direction="row" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={12} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Accommodation near the school</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.a_near}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Urgent Accommodation Search</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.a_urgent}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Do you want the Summer Fee Plan?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.summer_fee}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={12} md={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Are you under 18?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">No</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Guardianship</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.a_guardianship}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            {/*Transport */}
                                            <Grid item xs={12} sx={{ mb: '4%'}}>
                                                <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold', mb: '4%'}}><Error style={{verticalAlign:"middle"}}/> Transport</Typography>
                                                <Grid container direction="row" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={12} md={5}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Pick up service</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.pick_up}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={5}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Drop off Service</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.drop_off}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" spacing={2} sx={{ mb: "3%"}}>
                                                    <Grid item xs={12}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Transport price</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">500$</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" spacing={2}>
                                                    <Grid item xs={12}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#000000" textAlign="center" sx={{fontWeight: 'bold'}}>Total Accomodation price:</Typography>
                                                            <Typography variant="body1" color="#000000" textAlign="center">5500$</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            {/*Health Information*/}
                                            <Grid item xs={12}>
                                                <Divider textAlign="center" color="#000000"  sx={{fontWeight: 'bold', mb: '3%'}}>Health Information</Divider>
                                                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Do you smoke?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.smoke_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Do you drink alcohol?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.drink_alc}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Have you used any drugs</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.drugs}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Any allergy to Animals</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.allergy_a}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Do you suffer any disease?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.disease}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Any treatment or Medication?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.treatment}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Any Psichological Treatment?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.treatment_p}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Any allergies?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.allergies}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Any surgery in the last 12 months?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.surgery}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: "3%"}}>
                                                    <Grid item xs={12}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>What is your state of health at the moment?</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.health_s}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            {/*Emergency Contact*/}
                                            <Grid item xs={12}>
                                                <Divider textAlign="center" color="#000000"  sx={{fontWeight: 'bold', mb: '3%'}}>Emergency Contact</Divider>
                                                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Name</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.cont_name}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Last Name</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.cont_lname}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: "3%"}}>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Phone Number</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.num_conts}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <Stack>
                                                            <Typography variant="body1" color="#808080" textAlign="center" sx={{fontWeight: 'bold'}}>Relationship</Typography>
                                                            <Typography variant="body1" color="#808080" textAlign="center">{data.relationship}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            {/*Attached Files*/}
                                            <Grid item xs={12}>
                                                <Divider textAlign="center" color="#000000"  sx={{fontWeight: 'bold', mb: '3%'}}>Attached Files</Divider>
                                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack justifyContent="center" alignItems="center">
                                                            <Box
                                                                component="img"
                                                                sx={{
                                                                    maxHeight: { xs: '35vh' },
                                                                    maxWidth: { xs: '35vh' },
                                                                }}
                                                                alt="Passport."
                                                                src={ data.pass_photo != 'NULL' ? `https://www.homebor.com/${data.pass_photo}` : studentPhoto }
                                                            />
                                                            <Typography variant="body1" color="#808080" textAlign="center">Passport Photo</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack justifyContent="center" alignItems="center">
                                                            <Box
                                                                component="img"
                                                                sx={{
                                                                    maxHeight: { xs: '35vh' },
                                                                    maxWidth: { xs: '35vh' },
                                                                }}
                                                                alt="Visa."
                                                                src={ data.visa != 'NULL' ? `https://www.homebor.com/${data.visa}` : studentPhoto }
                                                            />
                                                            <Typography variant="body1" color="#808080" textAlign="center">Visa Photo</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack justifyContent="center" alignItems="center">
                                                            <Box
                                                                component="img"
                                                                sx={{
                                                                    maxHeight: { xs: '35vh' },
                                                                    maxWidth: { xs: '35vh' },
                                                                }}
                                                                alt="Flight Ticket."
                                                                src={ data.flight_image != 'NULL' ? `https://www.homebor.com/${data.flight_image}` : studentPhoto }
                                                            />
                                                            <Typography variant="body1" color="#808080" textAlign="center">Flight Ticket Image</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={3}>
                                                        <Stack justifyContent="center" alignItems="center">
                                                            <Box
                                                                component="img"
                                                                sx={{
                                                                    maxHeight: { xs: '35vh' },
                                                                    maxWidth: { xs: '35vh' },
                                                                }}
                                                                alt="Signature."
                                                                src={ data.signature_s != 'NULL' ? `https://www.homebor.com/${data.signature_s}` : studentPhoto }
                                                            />
                                                            <Typography variant="body1" color="#808080" textAlign="center">Signature</Typography>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ManagerLayout>
    )
}