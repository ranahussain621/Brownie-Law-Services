import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home.jsx"
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AboutUs from '../Pages/about-us/AboutUs'
import ContactUs from "../Pages/contact-us/ContactUs";
import FAQs from "../Pages/FAQs";
import Law from "../Pages/Lawpage/Law";
import Lawyers from "../Pages/LawyerPage/lawyer";
import DashboardRoutes from "./dashboardRoutes";
import SubscriptionThankYou from "../Pages/SubscriptionThankYou";
import Elite from "../Pages/Elite/index"
import Starter from "../Pages/Starter/Starter/index"
import Advance from "../Pages/Advance/Advance/index"
import SubScriptionScreen from "../Components/SubscriptionModule/SubScriptionScreen.jsx";
import MainFirms from "../Pages/Firms/MainFirms.jsx";
import FirmsDetails from '../Pages/Firms/FirmDetails/FirmsDetails.jsx'
import StripePayment from "../Components/StripePayment/StripeCheckout.jsx";
import EmailVerified from "../Pages/EmailVerified/EmailVerified.jsx";

const router = [
    {
      layout: "auth",
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/elite",
          element: <Elite />
        },
        {
          path: "/starter",
          element: <Starter/>
        },
        {
          path: "/advance",
          element: <Advance />
        },
        {
          path: "/firms",
          element: <MainFirms />
        },   
        {
          path: '/firm-details',
          element: <FirmsDetails />
        },
        
        {
          path: "/aboutus",
          element: <AboutUs />
        },

        {
          path: "/contact",
          element: <ContactUs />
        },
        {
          path: "/faq",
          element: <FAQs />
        },
        {
          path: "/laws",
          element: <Law />
        },
        {
          path: "/subscriptions-plans/:id/*",
          element: <SubScriptionScreen />
        },
        {
          path: "/checkout",
          element: <StripePayment />
        },
        {
          path: "/lawyers",
          element: <Lawyers />
        },
        {
          path: "/auth/login",
          element: <Login />
        },
        {
          path: "/auth/register",
          element: <Register />
        },
        {
          path: "/auth/signup/:id/*",
          element: <Register />
        },
        {
          path: "/auth/forgot-password",
          element: <ForgotPassword />
        },
        {
          path: "/auth/reset-password/:id/*",
          element: <ResetPassword />
        },
        {
          path: "/thankyou",
          element: <SubscriptionThankYou />
        }
        ,
        {
          path: "/user-verified/:id/*",
          element: <EmailVerified />
        }
      ]
    },
    {
     layout:"dashboard",
     children :[
      {
        path: "/dashboard/*",
        element: <DashboardRoutes />,
      }
     ]
    }
];


export default router