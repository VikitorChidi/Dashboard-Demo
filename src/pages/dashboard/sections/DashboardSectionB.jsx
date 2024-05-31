import {Box, Typography} from "@mui/material";
import CustomCard from "../../../components/customCard/CustomCard";
import shopifyUrl from "../../../assets/images/shopify.png"
import magnetoUrl from "../../../assets/images/magneto.png"
import dsUrl from "../../../assets/images/ds.png"
import wfUrl from "../../../assets/images/wf.png"
import dnUrl from "../../../assets/images/dn.png"
import vectorForwardUrl from "../../../assets/images/vectorForward.png"
import vectorBackwardUrl from "../../../assets/images/vectorBackward.png"
import figmaUrl from "../../../assets/images/figma.png"
import psUrl from "../../../assets/images/ps.png"
import iaUrl from "../../../assets/images/ia.png"
import urUrl from "../../../assets/images/ur.png"
import fourDUrl from "../../../assets/images/fourD.png"
import {DashboardIcon, ExploreMore, Medal, RankPersonnel} from "../../../svg";
import MiniDisplay from "../../../components/miniDisplay/MiniDisplay";


const DashboardSectionB = ({isSmallScreen, isMediumScreen, theme}) => {

    const firstColumn = [
        {img: shopifyUrl, imgTitle: "Shopify Developer", radius: '74px', imgWidth: '50px', imgHeight: '50px'},
        {img: magnetoUrl, imgTitle: "Magento Developer", radius: '74px', imgWidth: '32px', imgHeight: '40px'},
        {img: dsUrl, imgTitle: "Data Scientist", radius: '74px', imgWidth: '42px', imgHeight: '39px'},
        {img: wfUrl, imgTitle: "Webflow Developer", radius: '74px', imgWidth: '43px', imgHeight: '30px'},
        {img: dnUrl, imgTitle: "Dot Net Developer", radius: '74px', imgWidth: '69px', imgHeight: '40px'},
        {img: vectorForwardUrl, imgTitle: "", radius: '30px', imgWidth: '25px', imgHeight: '15px'},
    ]

    const secondColumn = [
        {img: vectorBackwardUrl, imgTitle: "", radius: '30px', imgWidth: '25px', imgHeight: '15px'},
        {img: figmaUrl, imgTitle: "UX Designer", radius: '74px', imgWidth: '26px', imgHeight: '39px'},
        {img: psUrl, imgTitle: "Graphics Designer", radius: '74px', imgWidth: '48px', imgHeight: '48px'},
        {img: iaUrl, imgTitle: "Illustration Artist", radius: '74px', imgWidth: '47px', imgHeight: '44px'},
        {img: urUrl, imgTitle: "Unreal Engine", radius: '74px', imgWidth: '55px', imgHeight: '55px'},
        {img: fourDUrl, imgTitle: "Cinema 4D", radius: '74px', imgWidth: '53px', imgHeight: '53px'},
    ]

    const thirdColumn = [
        {icon: <Medal/>, title: "989 Skills"},
        {icon: <DashboardIcon/>, title: "45 Sub-Categories"},
        {icon: <RankPersonnel/>, title: "1011 Profiles"},
    ]

    return (
        <>
            <Box
                component="div"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: 'fit-content',
                    backgroundColor: "#EDEFFF",
                    px: isSmallScreen ? '1rem' : '3rem',
                    clipPath: {
                        xs: "polygon(0 0.5%, 100% 0, 100% 99%, 0 100%)",
                        sm: "polygon(0 6%, 100% 0, 100% 99%, 0 100%)",
                        md: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                    },
                    mt: isSmallScreen ? "-4rem" : '-3rem'
                }}
            >
                <Box
                    component='section'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        my: isSmallScreen ? '3rem' : '5rem',
                        maxWidth: '59rem',
                        textAlign: 'center'
                    }}>
                    <Typography variant="h5" sx={{
                        fontWeight: 700,
                        lineHeight: '4rem',
                        fontSize: {xs: '2rem', md: '3rem'},
                        mt: isSmallScreen ? '3rem' : '5rem',
                        mb: isSmallScreen ? '1.5rem' : '2rem',
                        font: 'Switzer',
                    }}>
                        Your one-stop marketplace for finding the talent your business needs.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isSmallScreen ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: "flex-start",
                        width: '100%',
                        px: isSmallScreen ? "1rem" : '5rem',
                        mt: '2.5rem',
                        gap: '2rem',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: isSmallScreen ? 'center' : 'flex-start',
                            justifyContent: 'center',
                            gap: '5rem',
                            width: isSmallScreen ? '100%' : '40%'
                        }}
                    >
                        <MiniDisplay
                            header={"Find Dev and IT professionals to scale your business."}
                            contentArray={thirdColumn}/>
                        <MiniDisplay
                            header={"Explore Creative individuals with a keen eye for detail.  "}
                            contentArray={thirdColumn}/>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center'}}>
                            <ExploreMore height={'74'} width={'74'} viewBox={`0 0 ${74} ${74}`}/>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    lineHeight: '18px',
                                    fontSize: {xs: '18px', md: '22px'},
                                    textAlign: 'center',
                                    color: "#202229",
                                    font: 'Switzer',
                                }}
                            >{"Explore More"}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isSmallScreen ? 'center' : 'flex-start',
                        justifyContent: isSmallScreen ? 'center' : 'flex-start',
                        width: isSmallScreen ? '100%' : '60%',
                        gap: '2rem',
                        mb: '10rem',


                    }}>
                        <CustomCard description="IT & Development" contentArray={firstColumn}
                                    isSmallScreen={isSmallScreen}/>
                        <CustomCard description="Design & Creative" contentArray={secondColumn}
                                    isSmallScreen={isSmallScreen}/>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '5px',
                        }}>
                            <Typography component={"strong"} sx={{
                                fontWeight: 700,
                                fontSize: {xs: '18px', md: '22px'},
                                lineHeight: '32px',
                                font: "Switzer"
                            }}>{"30 more "}</Typography>
                            <Typography component={"p"} sx={{
                                fontWeight: 400,
                                fontSize: {xs: '18px', md: '22px'},
                                lineHeight: '32px',
                                font: "Switzer"
                            }}>{" to explore"}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default DashboardSectionB;