import { Box, Paper, Typography } from "@mui/material";
import { BlackPlayIcon, BluePlayIcon } from "../../svg";

const CustomDetail = ({ level, title, content, key, ...props }) => {
    return (
        <Paper key={key} sx={{
            maxWidth: '635px',
            height: content ? 'auto' : '80px',
            boxShadow: content ? '0px 4px 6px rgba(0, 0, 0, 0.07)' : '',
            p: { xs: 2, sm: 2 }, // Padding adjustments for mobile and larger screens
            mb: 1
        }} elevation={1}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                {content ? <BluePlayIcon /> : <BlackPlayIcon />}
                <Box component='div'
                    sx={{
                        minWidth: '190px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap', // Allows wrapping on smaller screens
                    }}>
                    <Typography sx={{
                        font: 'Switzer',
                        fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
                        fontWeight: 600,
                        lineHeight: '17.83px',
                        color: '#202229',
                        mr: 0.5, // Margin right for spacing
                    }}>{`${level}:`}</Typography>
                    <Typography sx={{
                        font: 'Switzer',
                        fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
                        fontWeight: 400,
                        lineHeight: '17.83px',
                        color: '#202229'
                    }}>{title}</Typography>
                </Box>
            </Box>
            {content ? <Typography sx={{
                font: 'Switzer',
                fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
                fontWeight: 400,
                lineHeight: '26px',
                textAlign: 'left',
                maxWidth: '100%', // Ensure it takes full width
                mt: 2, // Margin top for spacing
                color: '#202229'
            }}>{content}</Typography> : null}
        </Paper>
    )
}

export default CustomDetail;