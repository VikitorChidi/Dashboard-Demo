import { Box, Typography } from "@mui/material";
import CustomDetail from "../../../components/customDetail/CustomDetail";

const DashboardSectionD = ({ theme, isSmallScreen, isMediumScreen }) => {

    const items = [
        { level: "Step1", title: 'Resume Screening', content: '' },
        { level: "Step2", title: 'Video Interview', content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit." },
        { level: "Step3", title: 'Technical Evaluation', content: '' },
        { level: "Step4", title: 'Application Review', content: '' },
        { level: "Step5", title: 'Lets get to work', content: '' },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'flex-start',
                px: { xs: '1rem', md: '6rem' },
                py: '6rem',
                width: '100%',
            }}
        >
            <Typography
                sx={{
                    font: 'Switzer',
                    fontWeight: 700,
                    fontSize: { xs: '32px', sm: '40px', md: '48px', lg: '54px' },
                    lineHeight: { xs: '40px', sm: '48px', md: '56px', lg: '64px' },
                    color: '#202229',
                    maxWidth: '635px',
                    wordWrap: 'break-word',
                    textAlign: { xs: 'center', sm: 'left' } // Center text on mobile
                }}
            >
                How we ensure you’re in good hands.
            </Typography>
            <Typography
                sx={{
                    font: 'Switzer',
                    fontWeight: 400,
                    fontSize: { xs: '18px', sm: '20px', md: '22px' },
                    lineHeight: { xs: '28px', sm: '30px', md: '32px' },
                    color: 'rgba(30, 21, 21, 0.8)',
                    maxWidth: '646px',
                    wordWrap: 'break-word',
                    textAlign: { xs: 'center', sm: 'left' } // Center text on mobile
                }}
            >
                With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.
            </Typography>
            <Box sx={{ maxWidth: '635px', width: '100%' }}>
                {Array.isArray(items) && items.map((el, idx) => (
                    <CustomDetail key={idx} level={el.level} title={el.title} content={el.content} />
                ))}
            </Box>
        </Box>
    );
};

export default DashboardSectionD;