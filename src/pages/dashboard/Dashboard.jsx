import DashboardSectionA from "./sections/DashboardSectionA";
import {useMediaQuery, useTheme} from "@mui/material";
import DashboardSectionB from "./sections/DashboardSectionB";
import DashboardSectionC from "./sections/DashboardSectionC";
import DashboardSectionD from "./sections/DashboardSectionD";
import DashboardSectionE from "./sections/DashboardSectionE";
import DashboardSectionF from "./sections/DashboardSectionF";


const Dashboard = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));


    return (
        <>
            <DashboardSectionA theme={theme} isSmallScreen={isSmallScreen} />
            <DashboardSectionB theme={theme} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen}/>
            <DashboardSectionC theme={theme} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen}/>
            <DashboardSectionD theme={theme} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen}/>
            <DashboardSectionE theme={theme} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen}/>
            {/*<DashboardSectionF theme={theme} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen}/>*/}
        </>
    );
}
export default Dashboard;