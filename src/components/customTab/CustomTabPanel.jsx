import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const CustomTabPanel = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{
                overflowY: isSmallScreen ? 'auto' : 'visible',
                maxHeight: isSmallScreen ? 'calc(100vh - 120px)' : 'none',
                width: '100%',
            }}
        >
            {value === index && (
                <Box sx={{
                    fontSize: isSmallScreen ? '14px' : '16px',
                    textAlign: isSmallScreen ? 'center' : 'left',
                    p: isSmallScreen ? 2 : 3
                }}>
                    <Typography sx={{font: 'Switzer',}}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default CustomTabPanel;

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};