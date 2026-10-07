import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLAyout from "../layout/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import DashboardLayout from "./DashboardLayout";
import HomeDashboard from "../../features/dashboard/ui/pages/Home";

export default function AppRoutes () {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <AuthLAyout />,
            children: [
                {
                    path: "",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                }
            ]
        },

        {
            path: "/home",
            element: <DashboardLayout />,
            children: [
                {
                    path: "",
                    element: <HomeDashboard />
                }
            ]

        }
    ]);


    return <RouterProvider router={router} />
}