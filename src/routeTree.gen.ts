/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SearchQueryImport } from './routes/search/$query'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SearchQueryRoute = SearchQueryImport.update({
  path: '/search/$query',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/search/$query': {
      id: '/search/$query'
      path: '/search/$query'
      fullPath: '/search/$query'
      preLoaderRoute: typeof SearchQueryImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ IndexRoute, SearchQueryRoute })

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/search/$query"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/search/$query": {
      "filePath": "search/$query.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
