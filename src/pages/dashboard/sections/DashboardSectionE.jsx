import {Box, Typography} from "@mui/material";
import {ContentNumA, ContentNumB, ContentNumC} from "../../../svg";
import ContentA from "../../../assets/images/ContentImgA.png"
import ContentB from "../../../assets/images/ContentImgB.png"
import ContentC from "../../../assets/images/ContentImgC.png"
import CustomDisplayItem from "../../../components/customDisplayItem/CustomDisplayItem";

const DashboardSectionE = ({theme, isSmallScreen, isMediumScreen}) => {

    const displayItems = [
        {
            num: <ContentNumA/>,
            title: 'Find your next star performer.',
            desc: 'Explore the vast Zwilt marketplace to find the candidate that meets your needs.',
            itemImg: ContentA,
            bg: "#EDEFFF",
            link: "Join now"
        },
        {
            num: <ContentNumB/>,
            title: 'Evaluate to your heart’s content.',
            desc: 'Assess the candidate through work history, transparent tests and video interviews.',
            itemImg: ContentB,
            bg: "#FFF7E1",
            link: "Browse more"
        },
        {
            num: <ContentNumC/>,
            title: 'Start building your team.',
            desc: 'Onboard your candidate right away and start creating the next big thing.',
            itemImg: ContentC,
            bg: "#F3F3F3",
            link: "Join now"
        },
    ]

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: '5rem'
        }}>
            <Typography
                sx={{font: 'Switzer', fontWeight: 700, fontSize: '54px', lineHeight: '64px', textAlign: 'center', pb: '4rem'}}>Start
                your journey today.</Typography>
            {
                Array.isArray(displayItems) && Array.from(displayItems).map((el, idx) => (
                    <CustomDisplayItem
                        itemImg={el?.itemImg} title={el?.title} bg={el?.bg} desc={el?.desc} num={el?.num}
                        link={el?.link}/>
                ))
            }
        </Box>
    )
}
export default DashboardSectionE