import Loadable from "../../components/loadable/Loadable";
import {lazy} from "react";

const Dashboard = Loadable(lazy(() => import("./Dashboard.jsx")))


 export const dashboardRoutes = [
    {
        path: '/dashboard',
        element: <Dashboard />,
        showSideBar: false,
        breadcrumb: false,
    }
]

