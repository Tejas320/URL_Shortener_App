import { createRootRoute, createRoute } from "@tanstack/react-router"
import RootLayout from "../RootLayout.jsx"
import HomePage from "../pages/HomePage.jsx"
import AuthPage from "../pages/AuthPage.jsx"
import DashboardPage from "../pages/DashboardPage.jsx"
import NotFound from "../components/NotFound.jsx"

export const rootRoute = createRootRoute({
    component: RootLayout,
    notFoundComponent: NotFound
})

const homePageRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage,
})

const authRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/auth',
    component: AuthPage,
})

const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashboardPage,
})

export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authRoute,
    dashboardRoute
])