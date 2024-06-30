import Home from "../page/home"
import HouseOfSale from "../page/houseOfSale";
import HouseForRent from "../page/houseForRent";
import Project from "../page/project";



const path={
    home:"/",
    houseOfSale:"/nha-ban",
    houseForRent:"/nha-cho-thue",
    project:'/du-an'
}


const routes=[
    {
        path:path.home,
        element:Home
    },
    {
        path: path.houseOfSale,
        element:HouseOfSale
    },
    {
        path: path.houseForRent,
        element:HouseForRent
    },{
    path: path.project,
        element:Project
    }
]

export {routes,path} 