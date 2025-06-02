import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from './Main'
import Header from "./Header";
import Footer from "./Footer";
import Home from "../../container/Home";

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                    </Route>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;