import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BabyCare from "../Pages/Home/CategoryCard/BabyCare";
import WomenCare from "../Pages/Home/CategoryCard/WomenCare";


import Capsule from "../Pages/Home/CategoryCard/Capsule";
import Injection from "../Pages/Home/CategoryCard/Injection";
import SyrupA from "../Pages/Home/CategoryCard/SyrupA";
import TabletA from "../Pages/Home/CategoryCard/TabletA";
import PrivateRoute from "../Routes/PrivateRoute"
import UpdateProfile from "../../src/Pages/UpdateProfile/UpdateProfile"
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Layout/Dashboard/Cart/Cart";
import UserHome from "../Layout/Dashboard/UserHome/UserHome";
import AllUsers from "../Layout/Dashboard/AllUsers/AllUsers";

import AddItem from "../Layout/Dashboard/AddItem/AddItem";
import ManageMedicine from "../Layout/Dashboard/ManageMedicine/ManageMedicine";
import Payment from "../Layout/Dashboard/Payment/Payment";
import PaymentHistory from "../Layout/Dashboard/PaymentHistory/PaymentHistory";
import CartDashboard from "../Layout/Dashboard/CartDashboard";
import AdminHome from "../Layout/Dashboard/AdminHome";
import SellerHome from "../Layout/Dashboard/SellerHome";
import PaymentManagement from "../Layout/Dashboard/PaymentManagement";
import SellerAd from "../Layout/Dashboard/SellerAd";
import SellerPaymentHistory from "../Layout/Dashboard/SellerPaymentHistory";
import AdminSalesReport from "../Layout/Dashboard/AdminSalesReport";

import AdminManageBanner from "../Layout/Dashboard/AdminManageBanner";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/babyCare",
        element: <PrivateRoute><BabyCare></BabyCare></PrivateRoute>
      },
      
      {
        path: "/womenCare",
        element: <WomenCare></WomenCare>
      
      },
      
      {
        path: "/capsule",
        element: <Capsule></Capsule>
      
      },
      {
        path: "/injection",
        element: <Injection></Injection>
      },
      {
        path : "/SyrupA",
        element: <SyrupA></SyrupA>
      },
      {
        path: "/TabletA",
        element: <TabletA></TabletA>
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        
          path: 'cart',
          element: <PrivateRoute><Cart></Cart></PrivateRoute>
       
      },
      {
        
          path: 'payment',
          element: <Payment></Payment>
       
      },
      {
        
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
       
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addItems',
        element: <AddItem></AddItem>
      },
      {
        path: 'manageMedicine',
        element: <ManageMedicine></ManageMedicine>
      },
      {
        
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
     
    },
    {
        
        path: 'dashboardCart',
        element: <CartDashboard></CartDashboard>
     
    },
    {
        
        path: 'adminHome',
        element: <AdminHome></AdminHome>
     
    },
    {
        
        path: 'sellerHome',
        element: <SellerHome></SellerHome>
     
    },
    
    {
        
        path: 'paymentManagement',
        element: <PaymentManagement></PaymentManagement>
     
    },
    {
        
        path: 'sellerAd',
        element: <SellerAd></SellerAd>
     
    },
    {
        
        path: 'sellerPaymentHistory',
        element: <SellerPaymentHistory></SellerPaymentHistory>
     
    },
    {
        
        path: 'adminSalesReport ',
        element: <AdminSalesReport></AdminSalesReport>
     
    },
    {
        
        path: 'adminManageBanner ',
        element: <AdminManageBanner></AdminManageBanner>
     
    }
    ]
  }
]);