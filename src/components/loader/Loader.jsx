import {Box, CircularProgress} from "@mui/material";

const Loader = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <CircularProgress color="inherit"/>
        </Box>
    )
}
export default Loader