import {Box, Typography} from "@mui/material";

const CustomCard = ({
                        isSmallScreen,
                        description,
                        contentArray = [{img: "", imgTitle: "", radius: "", imgWidth: "", imgHeight: ""}],
                        ...props
                    }) => {

    return (
        <Box component={"div"} sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "flex-start",
            p: 2,
            backgroundColor: "#FFFFFF",
            borderRadius: '7px',
            width: '100%'
        }}>
            <Typography
                variant="body1"
                sx={{
                    fontWeight: 'bold',
                    lineHeight: '24px',
                    font: 'Switzer',
                    fontSize: isSmallScreen ? '14px' : '16px',
                    textAlign: 'center',
                    color: "#202229",
                    pl: isSmallScreen ? '12px' : '17px'
                }}
            >{description}</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                mt: isSmallScreen ? '1rem' : '0',
                gap: isSmallScreen ? '1rem' : '0'
            }}>
                {contentArray.map((content, index) => {
                    return (
                        <Box key={index} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: isSmallScreen ? 0 : 2,
                            my: isSmallScreen ? 2 : 0,
                            width: isSmallScreen ? '100%' : 'auto'
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "96px",
                                height: "96px",
                                borderRadius: content?.radius,
                                backgroundColor: "#F6F6F6",
                                mt: "15px",
                                mb: content?.imgTitle === "" ? "36px" : 0
                            }}>
                                <img src={content?.img} alt={content?.imgTitle}
                                     style={{width: content?.imgWidth, height: content?.imgHeight}}/>
                            </Box>
                            <Typography
                                component={"p"}
                                sx={{
                                    fontWeight: 600,
                                    lineHeight: '18px',
                                    font: 'Switzer',
                                    fontSize: isSmallScreen ? '12px' : '14px',
                                    textAlign: 'center',
                                    color: "#202229",
                                    maxWidth: '81px',
                                    mt: "15px"
                                }}
                            >{content?.imgTitle}</Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>

    )
}
export default CustomCard;