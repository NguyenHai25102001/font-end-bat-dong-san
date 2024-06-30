import {Link, Route, Routes} from "react-router-dom";
import {routes} from "../routes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import images from "../assets/images";

const DefaultLayout=()=> {
    return (
        <div className="font-lexend">
            <Header/>
            <Routes>
                {
                    routes.map((item,index)=>(
                        <Route key={index} path={item.path} element={<item.element/>} />
                    ))
                }

            </Routes>
            <div className="mt-5">
                <Footer/>
            </div>
            <div className="fixed z-40 right-6 bottom-20">
                <Link to={''} className=""><img src={images.icon_facebook} alt="" className={'size-[40px] rounded-full object-cover'}/></Link>
                <Link to={''} className=""><img src={images.icon_zalo} alt="" className={'size-[40px] rounded-full object-cover mt-3'}/></Link>

            </div>


        </div>
    )

}

export default DefaultLayout;