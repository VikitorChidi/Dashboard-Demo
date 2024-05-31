import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Navigate to the home page or any other route
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                padding: 3,
            }}
        >
            <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                404
            </Typography>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                The page you are looking for does not exist or has been moved.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleGoHome}>
                Go to Home
            </Button>
        </Box>
    );
};

export default PageNotFound;