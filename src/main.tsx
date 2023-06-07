import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import strings from "./constants/strings"
import Layout from "./Layout"
import About from "./pages/About"
import ErrorPage from "./pages/Error"
import Experiences from "./pages/Experiences"
import Home from "./pages/Home"
import Random from "./pages/Random"

const components = {
  about: About,
  home: Home,
  random: Random,
  experiences: Experiences,
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // not part of the layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      ...strings.pages.map((each) => {
        const Component = components[each.toLowerCase() as keyof typeof components]
        return {
          path: `/${each}`,
          element: <Component />,
        }
      }),
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
