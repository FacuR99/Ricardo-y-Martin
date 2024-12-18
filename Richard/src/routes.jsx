import {BrowserRouter as Router,Routes,Route} from "react-router"
import Home from "./pages/home/Home"
import Characters from "./pages/characters/Character"
import Contact from "./pages/contact/Contact"
import CharactersProvider from "./context"


export default function RouSite() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Character" element={<CharactersProvider><Characters/></CharactersProvider>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
        </Router>
    )
}