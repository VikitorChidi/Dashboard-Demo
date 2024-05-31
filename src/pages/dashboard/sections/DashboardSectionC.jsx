import {Box, Typography} from "@mui/material";
import {ArrowBack, ArrowFront, DoubleQuotationMark, Groove} from "../../../svg";
import avatarImgUrl from '../../../assets/images/avatarImg.png'
import grooveImgUrl from '../../../assets/images/grooveAvatar.png'
import React from "react";

const DashboardSectionC = ({isSmallScreen, isMediumScreen, theme}) => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                height: 'fit-content',
                backgroundColor: "#202229",
                px: isSmallScreen ? '1rem' : '3rem',
                clipPath: {
                    xs: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)",
                    sm: "polygon(0 6%, 100% 0, 100% 94%, 0 100%)",
                    md: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                },
                py: isSmallScreen ? '10rem' : '20rem',
                mt: "-5rem",
            }}
        >
            <Box sx={{
                position: 'absolute',
                top: isSmallScreen ? '-1rem' : '-1.5rem',
                right: isSmallScreen ? '2rem' : '10rem',
                zIndex: 0,
                width: isSmallScreen ? '40px' : '100px',
                height: 'auto'
            }}>
                <DoubleQuotationMark/>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                alignItems: 'center',
                gap: isSmallScreen ? '2rem' : '15rem',
                zIndex: 1,
                justifyContent: 'flex-start',
                ml: isSmallScreen ? "" : '-7rem'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isSmallScreen ? 'center' : 'flex-start',
                    gap: '1rem',
                    textAlign: isSmallScreen ? 'center' : 'left'
                }}>
                    <Box sx={{maxWidth: '379px', textAlign: isSmallScreen ? 'center' : 'left'}}>
                        <Typography
                            variant={"h5"}
                            sx={{
                                fontWeight: 700,
                                lineHeight: isSmallScreen ? '2.5rem' : '4rem',
                                fontSize: isSmallScreen ? '1.5rem' : '3rem',
                                color: '#FFFFFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                font: 'Switzer',
                            }}
                        >
                            How it worked for Jason <img src={avatarImgUrl} width="57px" height="57px"
                                                         style={{borderRadius: '25px'}} alt={avatarImgUrl}/> at
                        < /Typography>
                        <Box sx={{
                            width: isSmallScreen ? 'auto' : '100%',
                            textAlign: isSmallScreen ? 'center' : 'left',
                            mt: 3
                        }}>
                            <Groove/>
                        </Box>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '461px',
                            fontWeight: 400,
                            font: 'Switzer',
                            lineHeight: '32px',
                            fontSize: isSmallScreen ? '16px' : '22px',
                            color: '#FFFFFF',
                            textAlign: isSmallScreen ? 'center' : 'left',
                            wordWrap: 'break-word',
                        }}
                    >{"Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since."}</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '1.5rem',
                        justifyContent: isSmallScreen ? 'center' : 'flex-start'
                    }}>
                        <ArrowBack/>
                        <ArrowFront/>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isSmallScreen ? 'center' : 'flex-start',
                    gap: '1rem',
                    textAlign: isSmallScreen ? 'center' : 'left'
                }}>
                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem'}}>
                        <img src={grooveImgUrl} width={isSmallScreen ? '70px' : '99px'}
                             height={isSmallScreen ? '70px' : '99px'} style={{borderRadius: '50%'}} alt={grooveImgUrl}/>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '0.5rem'
                        }}>
                            <Typography variant='h6' sx={{
                                fontWeight: 600,
                                fontSize: isSmallScreen ? '24px' : '34px',
                                lineHeight: '44px',
                                color: '#FFFFFF',
                                font: 'Switzer',
                            }}>Jason Makki</Typography>
                            <Typography variant='body1' sx={{
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '18px',
                                color: '#FFFFFF',
                                font: 'Switzer',
                            }}>Engineer at GROOVE</Typography>
                            <Typography variant='subtitle1' sx={{
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '18px',
                                color: '#FFFFFF',
                                font: 'Switzer',
                            }}>San Francisco</Typography>
                        </Box>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '499px',
                            fontWeight: 400,
                            lineHeight: '32px',
                            fontSize: isSmallScreen ? '16px' : '22px',
                            color: '#FFFFFF',
                            textAlign: isSmallScreen ? 'center' : 'left',
                            wordWrap: 'break-word',
                            font: 'Switzer',
                        }}
                    >{"Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters."}</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default DashboardSectionC;