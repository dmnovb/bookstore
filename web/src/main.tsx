import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./utils/themeProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, ErrorPage } from "./components/pages";
import { AuthProvider } from "./components/context/AuthContext.tsx";
import { Dashboard } from "./components/Dashboard.tsx";
import { Toaster } from "@/components/ui/toaster";

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
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="ui-theme">
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </ThemeProvider>
);
