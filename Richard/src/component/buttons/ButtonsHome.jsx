import { Link } from "react-router"
import "./buttons.css"

export default function Buttonshome({contenido}) {
    return[ 
        <Link to={contenido} className="aa btn col-4 botonHome">{contenido}</Link>
    ]
}