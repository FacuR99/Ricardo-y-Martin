import { useState ,useEffect, useContext } from "react"
import Menu from "../../component/menu/Menu"
import Carta from "../../component/arta/Carta"
import Filtro from "../../component/filtros/Filtro"
import "./caracter.css"


export default function Characters(){

    let [data,setData]=useState([])

    let filterName=["Character Alive", "Character Dead", "Female","Male", "Origin unknown"]

    let [dataCompleta,setDataCompleta]=useState([])

    let [filtrosAplicados,setFiltrosAplicados]=useState([])

    let[show,setShow]=useState(true)

    const mostrarData=async()=>{
        let infoApi= await fetch("https://rickandmortyapi.com/api/character") 
     .then((resp)=>{return resp.json()})
     .then((resp2)=>{return resp2;})
     .catch((error)=>console.log("error" +error))

      setDataCompleta(infoApi.results)
      setData(infoApi.results)
    }
      

    const filtros=(inputData)=>{
 
        console.log("checkbox activo?" + inputData.checked);
        console.log(inputData.value);
     
        
         let pulsado=inputData.checked;
         let filtroPulsado=inputData.value;
         console.log(pulsado)
         console.log(filtroPulsado)

         if(pulsado){setFiltrosAplicados([...filtrosAplicados,filtroPulsado])
            
         }else{
            setData(dataCompleta)
            let filtrosActualizados=filtrosAplicados.filter((fil)=>{return fil !== filtroPulsado})
            setFiltrosAplicados(filtrosActualizados)
            
         }
    }

    useEffect(()=>{
        
        filtrosAplicados.forEach((filtro)=> {
            if(filtro === "Female"){
                let infoFiltrada = data.filter ((pjs)=>{return pjs.gender === "Female"});
                setData(infoFiltrada)
              }if(filtro === "Male"){
                 let infoFiltrada =data.filter ((pjs)=>{return pjs.gender === "Male"});
                 setData(infoFiltrada)
              }if(filtro === "Character Alive"){
                 let infoFiltrada =data.filter ((pjs)=>{return pjs.status === "Alive"});
              setData(infoFiltrada)
             }if(filtro === "Character Dead"){
                 let infoFiltrada =data.filter ((pjs)=>{return pjs.status === "Dead"});
             setData(infoFiltrada)
             }if(filtro === "Origin unknown"){
                 let infoFiltrada =data.filter ((pjs)=>{return pjs.origin.name === "unknown"});
             setData(infoFiltrada)}
        })
        ;},[filtrosAplicados])


    useEffect(()=>{
            mostrarData();},[])

    return(
        
        <div>
            <Menu></Menu>

            <div className="frnt"><h2 className="rtr">Filtros</h2></div>


            <div className="container-filter p-4  d-flex  gap-2 rounded-2 ee">
             <h2 className="arco">Filtros</h2>
            
                <div className="mobile-filters" onClick={()=>{setShow (!show)}}>
                
                <svg className="pastor" width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="3.5" x2="40" y2="3.5" stroke="#6ECCAF"/>
                <line y1="14.5" x2="40" y2="14.5" stroke="#6ECCAF"/>
                <line y1="26.5" x2="40" y2="26.5" stroke="#6ECCAF"/>
                <circle cx="33.5" cy="3.5" r="3" fill="#344D67" stroke="#6ECCAF"/>
                <circle cx="20.5" cy="26.5" r="3" fill="#344D67" stroke="#6ECCAF"/></svg>
                </div>

            </div>


            <form className={show?"ana":"ana d-flex container-full-2 p-2 pt-0"}>

{
   filterName.map((filter)=>{
       return <Filtro key={filter} title={filter} filtros={filtros}/>
   })
} 
</form>
           
            
            <section className="section-cards aling-items-center m-0 row justify-content-center w-100 pt-5">
            {
            data.length !== 0?
            data.map((pjs)=>{
                return <Carta key={pjs.id} pjs={pjs}/>
            }): 
            <div className="wqw container-alert alert d-flex aling-items-center gap-2 rounded-2"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOklEQVR4nNXaO2sVQRTA8f+msFdQiWBhIRhQCyEhjRZKzE3SqfkKfgJ7U+apEl/xmhCUNEoaH50fxyaCEIhGTSwMA6c4LFfd3Tlnd+bAwM7cO3P3x8zdO48LfjEGvAd2gD25vkRmcQc4BP6U0nfgOpnEbYVYBU4BZ4DXUrafA+aWQsyXXiuAxwpzg0RjBvglN7rwl/ckj5mugEgeM60QixXrJIeZUoilmnWTwUxFIJLB9BRiObKtzjA94KcRojNMTyFWjNtuDTPpiGgNM6kQD/CNwgsTM5xW1ITxXk3MM8u52U2FeNig/nMFmeuqZyaAHxGIWIgJRiMeSYNdQKIwGrEWgbCCNMJck1VcqPAiEmEJqYXRiL4BwhpSCXMV+GaM8ID8E3NZ9cRTQ4QXpPw7E+79Yij8KAWbxghPCHKvr6Ttd0j3hMxJ7MMTEmJY2t4NmS+SOU1+kHPS9teQ+aD2oHKCDAHb0vbbUDCq9qLmMoEMARvSbnjaXtBbnL8dPlBD7jsg9gfNjD0w54FZSWfbQAzaty1veXYdherhSvOtFDFFaaFVeQZsNcyuAHcljUQMp/WY1aIFRn/Zw3UTxEuLJW/sMIuBFE2Hk0fPrCpImLHW6Ym+x8FQU8wx4LikcF21J/qep1ttPM0KWUq47zZ6YlpDeGJaR3hgOkNYYjpHWGCSQcRgkkM0wQTEkxQRdTDJI6pgskEMms6E44gTsjrcyulPNRpzoCaMWf7NCYlx4JMcUXwG3kQsrv4bR9KdS07AHTObAAAAAElFTkSuQmCC" alt="high-priority"></img> <p className="">Sorry! There are no characters width all those properties.</p></div>
            }
           
            </section>
            </div>
           
    )
    
}