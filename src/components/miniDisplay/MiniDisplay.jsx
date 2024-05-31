import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";

const MiniDisplay = ({header, contentArray = [{title: "", icon: null}]}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    // const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1rem',
            width: isSmallScreen ? '100%' : '380px'
        }}>
            <Typography
                variant={'h5'}
                sx={{
                    fontWeight: 500,
                    fontSize: isSmallScreen ? '18px' : '24px',
                    lineHeight: isSmallScreen ? "28px" : "34px",
                    font: "Switzer",
                }}
            >{header}</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    gap: isSmallScreen ? '0.5rem' : '1rem',
                }}
            >
                {contentArray.map((content, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: isSmallScreen ? '0.5rem' : '1rem',
                            }}>
                            {content.icon}
                            <Typography
                                variant={"body1"}
                                sx={{
                                    color: '#202229',
                                    fontWeight: 400,
                                    font: "Switzer",
                                    fontSize: isSmallScreen ? '14px' : '16px',
                                    lineHeight: '32px',
                                }}
                            >{content.title}</Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
export default MiniDisplay;