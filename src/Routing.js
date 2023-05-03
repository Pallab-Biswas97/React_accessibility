import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WCAG from "./components/WCAG";
import Home from "./components/Home";
import Remediation from "./components/Remediation";

const Routing=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
 <Routes>
    <Route path="/" element={<Home />} />/
    <Route path="/wcag" element={<WCAG />} />
    <Route path="/remediation" element={<Remediation />} />
</Routes>
</BrowserRouter>

    )
}
export default Routing;

