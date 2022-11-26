import Category from "../../Category/Category";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

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
            }
        ]
        
    }
])
export default routes;