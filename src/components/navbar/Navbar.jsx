import {Box, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {useState} from "react";
import {Logo, NavBarMenu} from "../../svg";



const Navbar = ({theme, isSmallScreen}) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const navLinks = [
        {
            title: 'Find Work',
            path: '/'
        },
        {
            title: 'Find Talent',
            path: '/findTalent'
        },
        {
            title: 'Articles',
            path: '/articles'
        },
        {
            title: 'About Us',
            path: '/aboutUs'
        },
        {
            title: 'Contact Us',
            path: '/contactUs'
        }
    ]

    const otherNavLinks = [
        {
            title: 'Log In',
            path: '/login'
        },
        {
            title: 'Join Now',
            path: '/joinNow'
        }
    ]

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: isSmallScreen ? '100%' : '90%',
            height: '60px',
            p: isSmallScreen ? "0 1rem" : '0 1rem',
            backgroundColor: '#525AA0',
            color: 'white',
            borderRadius: '15px',
        }}>
            {/* logo */}
            <Box>
                <Logo width={"112"}/>
            </Box>
            {/* links */}
            <Box sx={{
                display: isSmallScreen ? "none" : 'flex',
                gap: '20px',
                flex: '1',
                ml: 'auto',
                justifyContent: isSmallScreen ? "none" : "center"
            }}>{
                navLinks.map((link, index) => (
                    <Typography key={index} sx={{
                        cursor: 'pointer',
                        color: "#FFFFFF",
                        fontSize: isSmallScreen ? "none" : "0.9rem",
                    }}>{link.title}</Typography>
                ))
            }</Box>
            {/* other icons */}
            <Box>
                {isSmallScreen ? (
                    <IconButton
                        aria-controls="menu"
                        aria-haspopup="true"
                        onClick={handleMenuClick}
                        sx={{display: 'block', mr: 1}}
                    >
                        <NavBarMenu width={"25"}/>
                    </IconButton>
                ) : (
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: "center",
                        gap: '0.2rem'
                    }}>
                        <Typography
                            sx={{
                                cursor: 'pointer',
                                color: "#FFFFFF",
                                fontSize: "14px",
                                fontWeight: 400,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '102px',
                                height: '43px'
                            }}>Log In</Typography>
                        <Typography sx={{
                            cursor: 'pointer',
                            color: "#202229",
                            fontSize: "14px",
                            fontWeight: 400,
                            backgroundColor: "#FFFFFF",
                            borderRadius: "16px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '102px',
                            height: '43px',
                        }}>Join Now</Typography>
                    </Box>
                )}
            </Box>
            {/* Mobile Menu */}
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {otherNavLinks.map((val, idx) => (
                    <MenuItem onClick={handleMenuClose}>{val?.path}</MenuItem>
                ))}
            </Menu>
        </Box>
    )
}
export default Navbar;