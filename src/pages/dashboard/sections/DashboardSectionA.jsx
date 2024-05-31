import {Box, InputAdornment, TextField, Typography} from "@mui/material";
import {MiniArrow, UnionSvg} from "../../../svg";
import BasicTabs from "../BasicTab";
import GifDisplay from "../../../components/gifDisplay/GifDisplay";
import Navbar from "../../../components/navbar/Navbar";
import avatarGif from "../../../assets/gif/PADemo.gif"

const DashboardSectionA = ({theme, isSmallScreen}) => {

    const TextFieldPlaceholder = () => {
        return (
            <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                <Typography component={"strong"} sx={{
                    fontSize: {xs: '14px', sm: '16px'},
                    lineHeight: '16px',
                    fontWeight: 600,
                    color: "black",
                    mr: '0.25rem'
                }}>{"Looking for "}</Typography>
                <Typography component={"span"}
                            sx={{
                                fontSize: {xs: '14px', sm: '16px'},
                                lineHeight: '16px',
                                fontWeight: 500
                            }}> {" design |"}</Typography>
            </Box>
        )
    }

    const TextFieldEndAdornment = () => {
        return (
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: {xs: '72px', sm: '74px'},
                width: {xs: '150px', sm: '125px'},
                borderRadius: '15px',
                backgroundColor: "#FFBE2E",
            }}>
                <MiniArrow/>
            </Box>
        )
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    maxHeight: '790px',
                    mx: 'auto',
                    maxWidth: isSmallScreen ? 'auto': '1300px',
                    mt: {xs: "3rem", sm: '3rem'},
                    px: {xs: '1rem', sm: '0'}
                }}>
                <Navbar theme={theme} isSmallScreen={isSmallScreen}/>
                <Box
                    component='section'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        mt: '5rem',
                        maxWidth: '42rem',
                        mb: '1.5rem'
                    }}>
                    <Typography variant={"h5"} component={"p"} sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        lineHeight: '4rem',
                        font: 'Switzer',
                        fontSize: '3rem',
                    }}>Finding the right fit <GifDisplay src={avatarGif} width={'68px'} height={'43px'}/>has never been
                        easier</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: '80%',
                    textAlign: 'center',
                    maxWidth: '100%',
                    px: '1rem'
                }}>
                    <Typography component={"p"}
                                sx={{
                                    fontWeight: 400,
                                    fontSize: {xs: '18px', sm: '22px'},
                                    lineHeight: '32px',
                                    font: 'Switzer',
                                }}>With our
                        rigorous pre-vetting process, you'll never have to</Typography>
                    <Typography component={"p"}
                                sx={{
                                    fontWeight: 400,
                                    fontSize: {xs: '18px', sm: '22px'},
                                    lineHeight: '32px',
                                    font: 'Switzer',
                                }}>worry
                        about
                        finding the ideal candidate ever again.</Typography>
                </Box>
                {/*TextField section*/}
                <Box sx={{maxWidth: '570px', mt: '1.5rem', width: '100%', px: '1rem'}}>
                    <TextField
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                height: '74px',
                                width: '100%',
                                border: '1.5px',
                                borderRadius: '15px',
                                pr: '0px'
                            }
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">{<TextFieldPlaceholder/>}</InputAdornment>,
                            endAdornment: <TextFieldEndAdornment/>
                        }}
                    />
                </Box>
                <BasicTabs isSmallScreen={isSmallScreen}/>
            </Box>
            <Box
                sx={{zIndex: -1, mt: '5rem'}}>
                <UnionSvg width={'100%'} height={'133'}/>
            </Box>
        </>
    )
}
export default DashboardSectionA;