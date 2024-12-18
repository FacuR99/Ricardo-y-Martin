import "./filtr.css"
export default function Filtro({title, filtros}){

return(
    <div className="anita">
        <div className="añoña filter-2 rounded-3 form-check form-switch">
        <input className="yoda form-check-input" id={title} type="checkbox" onClick={(event)=>filtros(event.target)} value={title}/>
        <label className="form-check-label" htmlFor={title}>{title}</label>
        </div>
    </div>
)

}