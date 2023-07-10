import Home from "./Home.tsx";
import GlobalStyle from "./GlobalStyle.tsx";
import {Routes, Route} from "react-router-dom";
import Gallery from "./Gallery.tsx";


function App() {

    return (
        <>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/themes" element={<Gallery/>}/>
            </Routes>
        </>
    )
}

export default App
