import { createRoute } from "@tanstack/react-router"
import DashboardPage from "../pages/Dashboard"

export const dashboardRoute = createRoute({
    getParentRoute: () => import("./routeTree").then(m => m.rootRoute),
    path: '/dashboard',
    component: DashboardPage
})