import About from "../../About/About/About";
import Blog from "../../Blog/Blog";
import Category from "../../Category/Category";
import Contact from "../../Contact/Contact";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import Seller from "../../Dashboard/AllUsers/Seller";
import Users from "../../Dashboard/AllUsers/Users";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Myproduct from "../../Dashboard/Myproduct/Myproduct";
import Payment from "../../Dashboard/Payment/Payment";
import ReportedAdmin from "../../Dashboard/ReportedAdmin";
import Faq from "../../Faq/Faq";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
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
                path: '/about',
                element:<About></About>
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
                path: '/contact',
                element:<Contact></Contact>
            },
            {
                path: '/category/:id',
                element:<Category></Category>,
                loader: ({params})=>fetch(`https://first-sale-server.vercel.app/category/${params.id}`)
            } ,  
            {
                path: '/blogs',
                element: <Blog></Blog>,
               
            },      
            {
                path: '/product',
                element: <Category></Category>,
                loader: ()=>fetch(`http://localhost:5000/categorys`)
            } ,   
            {
                path: '/support',
                element: <Faq></Faq>,
               
            },
            
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
                    path:'/dashboard/reported',
                    element: <AdminRoute><ReportedAdmin></ReportedAdmin></AdminRoute>
              
                },
                {
                    path:'/dashboard/myproduct',
                    element: <Myproduct></Myproduct>
              
                },
                {
                    path: '/dashboard/payment/:id',
                    element: <Payment></Payment>,
                    loader: ({params}) => fetch(`https://first-sale-server.vercel.app/bookingproducts/${params.id}`)
                }
                

            ]
         },
         {
            path: '*',
            element: <PageNotFound></PageNotFound>
        }
    
])
export default routes;