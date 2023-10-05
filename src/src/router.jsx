import { createBrowserRouter } from "react-router-dom";

import routes from "@/constants/routes.js";
import Test from "@/pages/Test.jsx";
import Layout from "@/components/common/template/Layout.jsx";
import LoginPage from "@/pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    // loader: ,
    // errorElement: ,
    children: [
      {
        path: routes.home,
        element: <Test />,
      },
      {
        path: routes.fund,
        element: <Test />,
      },
      {
        path: routes.celebrity,
        element: <Test />,
      },
      {
        path: routes.myFund,
        element: <Test />,
      },
      {
        path: routes.setting,
        element: <Test />,
      },
      {
        path: routes.signIn,
        element: <LoginPage />,
      },
      {
        path: routes.signUp,
        element: <Test />,
      },
    ],
  },
]);

export default router;
