
import AppLayout from "./pages/layout/AppLayout";
import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
  
    {
      path: "/admin",
      element: <AppLayout />,
      children: [
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
        
      
      ],
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App
