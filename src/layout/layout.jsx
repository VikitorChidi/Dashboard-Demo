import {Suspense} from "react";
import PropTypes from 'prop-types';
import Loader from "../components/loader/Loader.jsx";
import {Box, Grid} from "@mui/material";

const Layout = ({children}) => {

    return (
        <Suspense fallback={<Loader/>}>
            <Grid container>
                {/* Main content */}
                <Grid item xs={12}>
                    {children}
                </Grid>
            </Grid>
        </Suspense>
    )
}
export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};