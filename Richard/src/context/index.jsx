import { createContext, useState } from "react";

export const CharactersContext= createContext ({})

export default function CharactersProvider({children}){
    let[character, setCharacters]=useState([]);
    const mostrarData=async()=>{
        let infoApi= await fetch("https://rickandmortyapi.com/api/character") 
     .then((resp)=>{return resp.json()})
     .then((resp2)=>{return resp2;})
     .catch((error)=>console.log("error" +error));

      setCharacters(infoApi.results)
    
    }
    mostrarData();
    return(
        <CharactersContext.Provider value={character}>{children}</CharactersContext.Provider>
    )
}