import Category from "../../Category/Category";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import Seller from "../../Dashboard/AllUsers/Seller";
import Users from "../../Dashboard/AllUsers/Users";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Myproduct from "../../Dashboard/Myproduct/Myproduct";
import Payment from "../../Dashboard/Payment/Payment";
import Faq from "../../Faq/Faq";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import DisplayError from "../../Share/DisplayError/DisplayError";
import PageNotFound from "../../Share/PageNotFound/PageNotFound";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRouter from "../PrivateRouter";


const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Home/Home/Home");
const { default: Main } = require("../../Layout/Main");

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/category/:id',
                element:<Category></Category>,
                loader: ({params})=>fetch(`https://first-sale-server.vercel.app/category/${params.id}`)
            } ,  
            {
                path: '/blogs',
                element: <Faq></Faq>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            }
          
        ]
         },
         {
            path: '/dashboard',
            element: <PrivateRouter><DashBoardLayout></DashBoardLayout></PrivateRouter>,
            children:[
                {
                    path:'/dashboard',
                    element: <Dashboard></Dashboard>
                },
                {
                    path:'/dashboard/addproduct',
                    element: <AddProduct></AddProduct>
                },
                {
                    path:'/dashboard/users',
                    element: <AdminRoute><Users></Users></AdminRoute>
              
                },
                {
                    path:'/dashboard/sellers',
                    element: <AdminRoute><Seller></Seller></AdminRoute>
              
                },
                {
                    path:'/dashboard/myproduct',
                    element: <Myproduct></Myproduct>
              
                },
                {
                    path: '/dashboard/payment/:id',
                    element: <AdminRoute><Payment></Payment></AdminRoute>,
                    loader: ({params}) => fetch(`https://first-sale-server.vercel.app/bookingproducts/${params.id}`)
                }
                

            ]
         }
    
])
export default routes;