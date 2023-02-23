import App from "../App"
import HomePage from "../Components/HomePage"
import DetailsPage from "../Components/DetailsPage"
export const routers = [
    {
        path:"/",
        element:<App/>,
        children : [
            {   index:true,
                element:<HomePage/> 
            },
            {
                path:"country/:name",
                element:<DetailsPage/>
            }
        ]
    }
]