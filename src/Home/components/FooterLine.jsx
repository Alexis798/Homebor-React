import { Container, Grid, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import logo  from '../../assets/logos/white.png'
import dots from '../../assets/img/bg-pattern-dot.png'
import { Facebook, Instagram, Twitter } from "@mui/icons-material"

const styles = {
  heroContainer: {
    backgroundImage: `url(${dots})`,
    backgroundRepeat: 'repeat',
  },
};

export const FooterLine = () => {
    return (
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ backgroundColor: "#5B408A", py: 1}} style={styles.heroContainer}>
          <Grid item xs={10}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={2}>
                <Box
                    component="img"
                    sx={{
                        maxHeight: { xs: '10vh', sm: '16vh' },
                        maxWidth: { xs: '10vh', sm: '16vh' },
                    }}
                    alt="logo"
                    src={ logo }
                />
              </Grid>
              <Grid item xs={8} justifyContent="center" alignItems="center">
                <Grid item xs={12} justifyContent="center" alignItems="center">
                  <Typography variant='body2' align="center" color='white'>(C) Copyright 2023, All rights reserved</Typography>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                  <Grid  container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                      <Facebook fontSize="small" sx={{ color: 'white' }}/>
                    </Grid>
                    <Grid item>
                      <Twitter fontSize="small" sx={{ color: 'white' }}/>
                    </Grid>
                    <Grid item>
                      <Instagram fontSize="small" sx={{ color: 'white' }}/>
                    </Grid>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    )
}
