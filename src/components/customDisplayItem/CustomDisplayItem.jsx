import {Box, Typography} from "@mui/material";
import {ExploreMore, MiniExploreMore} from "../../svg";

const CustomDisplayItem = ({num, title, desc, itemImg, bg, link, isSmallscreen}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: bg,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                clipPath: {
                    xs: "polygon(0 0.5%, 100% 0, 100% 99%, 0 100%)",
                    sm: "polygon(0 6%, 100% 0, 100% 99%, 0 100%)",
                    md: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                },
                width: '100%',
                maxWidth: '1300px',
                height: 'fit-content',
                px: {xs: '1rem', sm: '1.5rem'},
                gap: '2rem'
            }}
        >
            <Box sx={{pt: '3rem', px: '1.5rem'}}>{num}</Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '0.9rem',
                pt: {xs: '1rem', sm: '3rem'},
                maxWidth: {xs: '100%', sm: '387.5px'},
                textAlign: {xs: 'center', sm: 'left'}
            }}>
                <Typography
                    sx={{
                        font: 'Switzer',
                        color: '#202229',
                        fontSize: {xs: '24px', sm: '28px'},
                        lineHeight: {xs: '32px', sm: '36px'},
                        fontWeight: 600
                    }}
                >{title}</Typography>
                <Typography sx={{
                    font: 'Switzer',
                    color: 'rgba(32, 34, 41, 0.8)',
                    fontSize: {xs: '16px', sm: '18px'},
                    lineHeight: {xs: '24px', sm: '28px'},
                    fontWeight: 400,
                    maxWidth: {xs: '100%', sm: '400px'},
                    textAlign: {xs: 'center', sm: 'left'}
                }}>{desc}</Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem'}}>
                    <MiniExploreMore/>
                    <Typography sx={{
                        color: '#202229',
                        font: 'Switzer',
                        fontWeight: 500,
                        fontSize: {xs: '16px', sm: '18px'},
                        lineHeight: {xs: '24px', sm: '28px'},
                    }}>{link}</Typography>
                </Box>
            </Box>
            <img src={itemImg} width={"466px"} height={"fit-content"}
                 style={{marginLeft: isSmallscreen ? '' : '22rem'}}/>
        </Box>
    )
}
export default CustomDisplayItem
