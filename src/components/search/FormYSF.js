import SuperheroFound from "./SuperheroFound";
import React, {useState} from "react";



export default function FormYSuperHeroFound(){
    const [keyword, setkeyword] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("mostrando valor del input ")
        console.log(e.target['buscar'].value)
        setkeyword(e.target['buscar'].value)
        console.log(keyword)
    }

    return (
    
    <>
    <form onSubmit={handleSubmit}>
        <input
        name="buscar"
        type="text"
        placeholder="Busque un heroe..."
        />
        
        
    </form>

    <div>
        <SuperheroFound
        nameHero={keyword}
        />
    </div>
    </>
    )

}