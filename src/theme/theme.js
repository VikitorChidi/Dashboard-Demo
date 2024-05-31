import {createTheme} from "@mui/material";

const theme = createTheme({
    components: {
        MuiTabs: {
            styleOverrides: {
                root: {
                    // Add your custom tab label styles here
                    '& .Mui-selected': {
                        color: '#202229',
                        // Add other custom styles as needed
                    },
                },
            },
        },
    },
});

export default theme;