import Layout from "../layout/layout.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {accessibleRoutes} from "./accessibleRoutes.js";


const Router = () => {

    const HandleLayout = ({route}) => {
        const {element} = route;
        return <Layout pageData={route}>{element}</Layout>;
    };

    return (
        <Routes>
            {accessibleRoutes.map((route, index) => (
                <Route
                    key={`route-${index}`}
                    path={route.path}
                    element={<HandleLayout route={route}/>}
                />

            ))}
            <Route
                key="not-found"
                path="*"
                element={<Navigate to="/dashboard"/>}
            />
        </Routes>
    );
}
export default Router;
