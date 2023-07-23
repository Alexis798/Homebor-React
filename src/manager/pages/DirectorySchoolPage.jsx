import { Fab, Grid, InputAdornment, TextField, Typography } from "@mui/material"
import { ManagerLayout } from "../layout/ManagerLayout"
import { Add, Search } from "@mui/icons-material"
import { useAcademyListStore } from "../hooks/useAcademyListStore"
import { useEffect, useState } from "react"
import { CardAcademies } from "../components"

export const DirectorySchoolPage = () => {

    const { isLoadingAcademyList,  academyList, startLoadingAcademyList } = useAcademyListStore()

    const [ searchInput, setSearchInput ] = useState("");

    const handleChange = (e) => {
        e.preventDefault()
        const input = e.target.value

        if (/^[^!-\/:-@\[-`{-~]+$/.test(input) || input === "") {
            setSearchInput(input);
        }
    }

    useEffect(() => {
        startLoadingAcademyList()
    }, [])

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
                                <Typography variant="h5" sx={{ mb: '2vh', textAlign: {xs: 'center', sm: 'left' }}}><b>Search School</b></Typography>
                            </Grid>
                                    
                            {/*Search Bar*/}
                            <Grid item xs={12} sx={{ mb: '5vh'}}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                   <Grid item xs={11}>
                                        <TextField
                                            value={searchInput}
                                            onChange={handleChange}
                                            id="filled-start-adornment"
                                            placeholder="Type the name"
                                            sx={{ width: '100%', backgroundColor: '#FFFFFF'}}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                                            }}
                                            
                                        />
                                   </Grid>
                                   <Grid item xs={1}>
                                        <Fab color="success" aria-label="add">
                                            <Add />
                                        </Fab>
                                   </Grid>
                                </Grid>
                            </Grid>

                            {/* Academies */}
                            {isLoadingAcademyList == false && (
                                <Grid item xs={12} sm={12} md={12} sx={{ mb: '5vh'}}>
                                    <Grid container spacing={2} sx={{ py: 4, borderRadius: '3vh'}} justifyContent="center" alignItems="center">

                                        {searchInput.length == 0 && academyList.academy?.map(data => (
                                            <CardAcademies data={data} key={data.id} />
                                        ))}

                                        {searchInput.length > 0 && academyList.academy?.map(data => data.name_a.toLowerCase().match(searchInput.toLowerCase()) != null && (
                                            <CardAcademies data={data} key={data.id} />
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