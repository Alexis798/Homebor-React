import { Link } from "react-router-dom";
import { ArrowCircleRightOutlined, LogoutOutlined, Menu, MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import homebor from '../../assets/logos/homebor.png'
import logo from '../../assets/logos/13.png'
import { DrawerHook } from "../../hooks";
import { DrawerComponent } from "../../components/DrawerComponent";


export const NavBarManager = () => {

    const navItems = ['Homestays', 'Students', 'Schools', 'Utilities', 'Logout'];

    const { mobileOpen, handleDrawerToggle} = DrawerHook()

    return (
        <AppBar component="nav" color="navBar">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}
                >
                    <Stack
                        component="img"
                        sx={{
                        maxHeight: { xs: 0, sm: '10%' },
                        maxWidth: { xs: 0, sm: 129 },
                        ml: { xs: '0%', md: '0%', lg: '20%'}
                        }}
                        alt="Homebor Logo"
                        src={homebor}
                    />
                </Typography>

                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block', md: 'none' } }}
                >
                    <Stack
                        component="img"
                        sx={{
                        maxHeight: { xs: '10%' },
                        maxWidth: { xs: 50 },
                        ml: { xs: '0%', md: '0%', lg: '20%'}
                        }}
                        alt="Homebor Logo"
                        src={logo}
                    />
                </Typography>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                    onClick={handleDrawerToggle}
                >
                    <Menu />
                </IconButton>

                <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' }, mr: { xs: '0%', md: '0%', lg: '10%'} }} spacing={1}>
                    {navItems.map((item) => (
                        <Link key={item} to={item === 'Try for Free' ? `/login` : `/` + item.toLowerCase().replace(/\s/g, "_").trim()} style={{ textDecoration: 'none', }}>
                            <Button color={ item === 'Try for Free' ? "ButtonHeaderHome" : "primary" } variant={ item === 'Try for Free' ? "contained" : "text"}>
                                <Typography color={ "black" } variant="button">{item}</Typography>
                                {
                                    item === 'Try for Free' && <ArrowCircleRightOutlined sx={{ color: grey[900] }}/>
                                }
                            </Button>
                        </Link>
                        
                    ))}
                </Stack>
                
            </Toolbar>

            {/*When the screen is small then the drawer can call this component */}
            <DrawerComponent mobileOpen={ mobileOpen } handleDrawerToggle={ handleDrawerToggle } navItems={ navItems }/>
            
        </AppBar>
    )
}
