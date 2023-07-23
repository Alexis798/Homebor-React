import { Checkbox, Divider, Fab, FormControl, FormControlLabel, FormGroup, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { ManagerLayout } from "../layout/ManagerLayout"
import { Add, Search } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { CardAcademies, CardStudents } from "../components"
import { useStudentListStore } from "../hooks/useStudentListStore"


export const StudentDirectoryPage = () => {

    const { isLoadingStudentList, studentList, startLoadingStudentList } = useStudentListStore()

    const [ searchInput, setSearchInput ] = useState("");
    const [ situation, setSituation ] = useState("");
    const [ city, setCity ] = useState("");

    const handleChange = (e) => {
        e.preventDefault()
        const input = e.target.value

        if (/^[^!-\/:-@\[-`{-~]+$/.test(input) || input === "") {
            setSearchInput(input);
        }
    }

    const handleChangeSituation = ( e ) => {
        setSituation(e.target.value);
    }

    const handleChangeCity = ( e ) => {
        setCity(e.target.value);
    }

    useEffect(() => {
        startLoadingStudentList()
    }, [])

    useEffect(() => {
        filterOfStudets()
    }, [situation])

    const filterOfStudets = () => {
        if (situation === "") return
        return studentList.students?.filter( data => data.status === situation)
    }

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

                            <Grid item xs={10} md={8} lg={10}>
                                <Typography variant="h5" sx={{ mb: '2vh', textAlign: {xs: 'center', sm: 'left' }}}><b>Search Student</b></Typography>
                            </Grid>
                                    
                            {/*Search Bar*/}
                            <Grid item xs={12} sx={{ mb: '5vh' }}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                   <Grid item xs={12}>
                                        <TextField
                                            value={searchInput}
                                            onChange={handleChange}
                                            id="filled-start-adornment"
                                            placeholder="Insert student name or email"
                                            sx={{ width: '100%', backgroundColor: '#FFFFFF'}}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                                            }}
                                            
                                        />
                                   </Grid>
                                </Grid>
                            </Grid>

                            {/* Filter Options */}
                            <Grid item xs={3}>
                                <Grid container spacing={4} justifyContent="left" alignItems="left" sx={{ px: 1}}>
                                    <Grid item xs={12}>
                                        <Typography variant='h5' align="left"><b>Filter Students By</b></Typography>
                                        <Divider />
                                    </Grid>

                                    {/* Status */}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Status</b></Typography>
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label="Show All" />
                                            <Divider />
                                        </FormGroup>
                                    </Grid>
                                    
                                    {/* Situation */}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Situation</b></Typography>
                                        <FormControl fullWidth>
                                            <InputLabel>Select Situation</InputLabel>
                                            <Select
                                                label="Select Situation"
                                                value={situation}
                                                onChange={ handleChangeSituation }
                                            >
                                                <MenuItem value={'Confirm Registration'}>Confirm Registration</MenuItem>
                                                <MenuItem value={'Search for Homestay'}>Search for Homestay</MenuItem>
                                                <MenuItem value={'Student for Select House'}>Student for Select House</MenuItem>
                                                <MenuItem value={'House for Accept Student'}>House for Accept Student</MenuItem>
                                                <MenuItem value={'Student for Select House'}>Student for Select House</MenuItem>
                                                <MenuItem value={'Homestay Found'}>Homestay Found</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Divider />
                                    </Grid>

                                    {/* Destination City */}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Destination City</b></Typography>
                                        <FormControl fullWidth>
                                            <InputLabel>Select Destination City</InputLabel>
                                            <Select
                                                label="Select Destination City"
                                                value={city}
                                                onChange={ handleChangeCity }
                                            >
                                                <MenuItem value={'Toronto'}>Toronto</MenuItem>
                                                <MenuItem value={'Vancouver'}>Vancouver</MenuItem>
                                                <MenuItem value={'Montreal'}>Montreal</MenuItem>
                                                <MenuItem value={'Columbia Britanica'}>Columbia Britanica</MenuItem>
                                                <MenuItem value={'Ottawa'}>Ottawa</MenuItem>
                                            </Select>
                                        </FormControl>
                                        
                                        <Divider />
                                    </Grid>

                                   

                                    {/* Date Range */}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Date Range</b></Typography>
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label="1 - 5 Days" />
                                            <FormControlLabel required control={<Checkbox />} label="6 - 14 Days" />
                                            <FormControlLabel required control={<Checkbox />} label="15 - 30 Days" />
                                            <FormControlLabel required control={<Checkbox />} label="30 Days Onwards" />
                                            <Divider />
                                        </FormGroup>
                                    </Grid>

                                    {/* Type Accomodation */}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Type Accomodation</b></Typography>
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label="Single" />
                                            <FormControlLabel required control={<Checkbox />} label="Share" />
                                            <FormControlLabel required control={<Checkbox />} label="Executive" />
                                            <Divider />
                                        </FormGroup>
                                    </Grid>

                                    {/* Gender */}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Gender</b></Typography>
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label="Female" />
                                            <FormControlLabel required control={<Checkbox />} label="Male" />
                                            <FormControlLabel required control={<Checkbox />} label="Non-binary" />
                                            <Divider />
                                        </FormGroup>
                                    </Grid>

                                    {/* Food Service */}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Food Service</b></Typography>
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label="Yes" />
                                            <FormControlLabel required control={<Checkbox />} label="No" />
                                            <Divider />
                                        </FormGroup>
                                    </Grid>

                                    {/* Age Range */}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Age Range</b></Typography>
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label="0 - 8 Years" />
                                            <FormControlLabel required control={<Checkbox />} label="8 - 14 Years" />
                                            <FormControlLabel required control={<Checkbox />} label="14 - 21 Years" />
                                            <FormControlLabel required control={<Checkbox />} label="22 Years Onwards" />
                                            <Divider />
                                        </FormGroup>
                                    </Grid>

                                    {/* Pick Up */}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Pick Up Service</b></Typography>
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label="Yes" />
                                            <FormControlLabel required control={<Checkbox />} label="No" />
                                            <Divider />
                                        </FormGroup>
                                    </Grid>

                                    {/* Drop off */}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Drop off Service</b></Typography>
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label="Yes" />
                                            <FormControlLabel required control={<Checkbox />} label="No" />
                                            <Divider />
                                        </FormGroup>
                                    </Grid>

                                    {/* Type Student*/}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Type Student</b></Typography>
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label="English and French Course" />
                                            <FormControlLabel required control={<Checkbox />} label="High School" />
                                            <FormControlLabel required control={<Checkbox />} label="College / University" />
                                            <FormControlLabel required control={<Checkbox />} label="Summer Camps" />
                                            <Divider />
                                        </FormGroup>
                                    </Grid>

                                    {/* Can Share With*/}
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' align="left"><b>Can Share With</b></Typography>
                                        <FormGroup>
                                            <FormControlLabel required control={<Checkbox />} label="Smokers" />
                                            <FormControlLabel required control={<Checkbox />} label="Children" />
                                            <FormControlLabel required control={<Checkbox />} label="Teenager" />
                                            <FormControlLabel required control={<Checkbox />} label="Pets" />
                                            <Divider />
                                        </FormGroup>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Students */}
                            {isLoadingStudentList == false && (
                                <Grid item xs={12} sm={12} md={9} sx={{ mb: '5vh' }}>
                                    <Grid container spacing={2} sx={{ borderRadius: '3vh'}} justifyContent="center" alignItems="center">

                                        {searchInput.length == 0 && studentList.students?.map(data => (
                                            <CardStudents data={data} key={data.id} />
                                        ))}

                                        {searchInput.length > 0 && studentList.students?.map(data => ( data.name_s.toLowerCase().match(searchInput.toLowerCase()) != null ||  data.l_name_s.toLowerCase().match(searchInput.toLowerCase()) != null ||  data.mail_s.toLowerCase().match(searchInput.toLowerCase()) != null) && (
                                            <CardStudents data={data} key={data.id} />
                                        ))}

                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ManagerLayout>
    )
}