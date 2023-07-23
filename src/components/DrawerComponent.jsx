import { Link } from "react-router-dom";
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import logo from '../assets/logos/13.png'

export const DrawerComponent = ({ mobileOpen, handleDrawerToggle, navItems }) => {

    return (
        <Box component="nav">
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '45%' },
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ my: 2 }}>
                            <Stack
                                component="img"
                                sx={{
                                maxHeight: { xs: '10%' },
                                maxWidth: { xs: 50 },
                                ml: { xs: '40%' }
                                }}
                                justifyContent="center"
                                alignItems="center"
                                alt="Homebor Logo"
                                src={logo}
                            />
                    </Typography>
                    <Divider />
                    <List>
                        {navItems.map((item) => (
                            <Link key={item} to={`/` + item.toLowerCase().replace(/\s/g, "_").trim()} style={{ textDecoration: 'none', color: 'black' }}>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={item} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}
