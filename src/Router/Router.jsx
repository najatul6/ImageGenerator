import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import LogIn from "../Pages/LogIn/LogIn";
import SignUP from "../Pages/SignUp/SignUP";
import TermsCondition from "../Pages/TermsCondition/TermsCondition";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "termsCondition",
        element: <TermsCondition />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "privacyPolicy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "/logIn",
    element: <LogIn />,
  },
  {
    path: "/signUp",
    element: <SignUP />,
  },
]);

export default routes;
