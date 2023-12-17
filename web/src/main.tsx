import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./utils/themeProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, ErrorPage } from "./components/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
