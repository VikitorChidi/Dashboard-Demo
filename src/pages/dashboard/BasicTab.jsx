import {useState} from "react";
import "../../index.css"
import {Box, Grid, Tab, Tabs, Typography} from "@mui/material";
import CustomTabPanel from "../../components/customTab/CustomTabPanel";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const BasicTabs = ({isSmallScreen}) => {
    const [value, setValue] = useState(0);

    const tabContentA = ["Python Developer", "Shopify Developer", "MERN Stack Developer", "Full Stack Developer"]
    const tabContentB = ["Data Scientist", "Frontend Developer", "Shopify Developer", "Python Developer"]
    const tabContentC = ["Python Developer", "Shopify Developer", "Full Stack Developer", "Explore More"]

    const handleChange = (event, newValue) => setValue(newValue);

    const PanelContent = ({value}) => {
        return (
            <Typography sx={{
                font: 'Switzer',
                fontWeight: 400,
                fontSize: { xs: '14px', sm: '16px' },
                lineHeight: '16px',
                color: "#959595",
                p: "5px",
                width: '168px',
                textAlign: isSmallScreen ? 'center' : 'left',
                mx: 'auto', // Center text on mobile
                whiteSpace: 'nowrap' // Prevent text wrapping
            }}>{value}</Typography>
        )
    }

    return (
        <Box sx={{
            maxWidth: { xs: '100%', sm: '920px' },
            height: isSmallScreen ? '300px' : '230px',
            borderRadius: '15px',
            background: '#F8F8F8',
            px: 2,
            pb: 2,
            mt: { xs: "2rem", lg: "2rem" },
            mb: "4rem",
            overflowY: isSmallScreen ? 'auto' : 'hidden'
        }}>
            <Box sx={{display: 'flex', justifyContent: 'center', py: 2}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered={!isSmallScreen}
                    TabIndicatorProps={{
                        style: {display: 'none'}
                    }}
                    sx={{
                        flexDirection: 'row',
                        pt: "2px",
                        '& .MuiTab-root': {
                            color: "#202229",
                            textTransform: 'none',
                            fontSize: { xs: '12px', sm: '14px' },
                            borderRadius: '15px',
                            mx: { xs: 1, sm: 1 },
                            minWidth: 'auto',
                            textAlign: isSmallScreen ? 'center' : 'left'
                        },
                        '& .Mui-selected': {
                            color: "#202229",
                            borderRadius: '15px',
                            backgroundColor: '#A2E9A6',
                        }
                    }}
                >
                    <Tab label="IT & Development" {...a11yProps(0)} />
                    <Tab label="Design and Creative" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Grid container spacing={3} alignItems={"center"} justifyContent={"center"} sx={{ px: isSmallScreen ? "1rem" : "5rem" }}>
                    <Grid item xs={12} sm={4}>{tabContentA.map((val) => <PanelContent
                        value={val}/>)}</Grid>
                    <Grid item xs={12} sm={4}>{tabContentB.map((val) => <PanelContent
                        value={val}/>)}</Grid>
                    <Grid item xs={12} sm={4}>{tabContentC.map((val) => <PanelContent
                        value={val}/>)}</Grid>
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Grid container spacing={3} alignItems={"center"} justifyContent={"center"} sx={{ px: isSmallScreen ? "1rem" : "5rem" }}>
                    <Grid item xs={12} sm={4}>{tabContentC.map((val) => <PanelContent
                        value={val}/>)}</Grid>
                    <Grid item xs={12} sm={4}>{tabContentA.map((val) => <PanelContent
                        value={val}/>)}</Grid>
                    <Grid item xs={12} sm={4}>{tabContentB.map((val) => <PanelContent
                        value={val}/>)}</Grid>
                </Grid>
            </CustomTabPanel>
        </Box>
    );
}

export default BasicTabs;