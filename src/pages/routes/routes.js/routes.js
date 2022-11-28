import Category from "../../Category/Category";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
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
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
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
                
            ]
         }
    
])
export default routes;