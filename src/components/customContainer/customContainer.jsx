import {Box, Container} from "@mui/material";

const CustomContainer = ({ children }) => {
    return (
        <Container maxWidth={"md"}>
            <Box sx={{height: '100vh', width:'100wh', overflow:"hidden" }}>
                {children}
            </Box>
        </Container>
    )
};
export default CustomContainer;