import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const rootRoute = createRootRoute({
  component: Outlet,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

export const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search/$query",
  component: SearchPage,
});

export const routeTree = rootRoute.addChildren([indexRoute, searchRoute]);
