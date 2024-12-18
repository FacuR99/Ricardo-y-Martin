import { useState } from "react"
import "./cartita.css"

export default function Carta({pjs}) {
    let [ocultar,setOcultar]=useState(true)
    return(
    <div className="helado card container-card d-flex flex-row justify-content-between col-xs-12 col-md-6 col-sm-12">
        <div className="wpp">
        <img src={pjs.image} />
        <h2 className="pol t-title text-center ">{pjs.name}</h2>
        <div className="ohana"><button onClick={()=>setOcultar(false)} className={ocultar?"monu b-card btn btn-active btn-x-md ":"d-none"}>Know More</button></div>
        </div>

        {ocultar ===true ?''
    : 
    <div className="py-2">

        <div className="oye"><button className="oy btn-list border border-0 m-2 rounded-3 d-flex justify-content-end " onClick={()=>setOcultar(true)} >X</button></div>
        <ul className=" list list-group">
            <li className="lises container-item p-3 d-flex flex-column list-group-item">Character Status: {pjs.status}</li>
            <li className="lises container-item p-3 d-flex flex-column list-group-item">Species: {pjs.species}</li>
            <li className="lises container-item p-3 d-flex flex-column list-group-item">Origin: {pjs.origin.name}</li>
            <li className="lises container-item p-3 d-flex flex-column list-group-item">Gender: {pjs.gender}</li>
        </ul>
    </div>} 

</div>

    )

}