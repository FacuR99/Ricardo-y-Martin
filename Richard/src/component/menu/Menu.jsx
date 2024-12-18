import "./men.css";
import { Link } from "react-router"


export default function Menu(){
    return(
        
        <nav className="container-nav navbar navbar-expand-lg fixed-top "> 
        <div className="ll container-fluid ">

           <div className="navbar-brand"> <h1 className="t"> <Link to="/" className="fiet text-decoration-none">Rick & Morty</Link></h1></div>

           <div>

            <div className=' navbar-toggler' data-bs-target='#menu' data-bs-toggle="collapse" > 

            <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#6ECCAF" className=" bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>

            </div>

            <div className="collapse navbar-collapse" id="menu">
            <ul className="container-items nav nav-pills gap-3 ">
                <li className="nav-items"> <Link to="/Character" className="tier nav-link text-decoration-none bc-hover"> Characters</Link> </li>
                <li className="nav-items"> <Link to="/Contact" className="tier  nav-link text-decoration-none bc-hover"> Contact</Link></li>
                
            </ul>
            </div>
            </div>
            </div>
        </nav>
        
    )
}