import ListOfSuperHeros from "../../components/list/ListOfSuperheros"
import SuperheroFound from "../../components/search/SuperheroFound"
import React, {useState} from 'react'

import './index.css'
import FormYSuperHeroFound from "../../components/search/FormYSF"


export default function Home(){
    const idTeamHeros = [70, 644, 489, 263, 289, 313]
    /*const [keyword, setKeyword] = useState("")
    
    const handleSubmit = evt => {
        evt.preventDefault()

        console.log(keyword)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }*/
    return (
        <div className="Home">
            <div className="GridHeros">
            <ListOfSuperHeros 
            team={idTeamHeros}
            
            />
            </div>
            
            <div >
                <FormYSuperHeroFound></FormYSuperHeroFound>
            </div>
            
        </div>
    
    )
    
}

/*
<form onSubmit={handleSubmit} >
                <input onChange={handleChange}
                type="text" 
                value={keyword}
                placeholder="Busque un Superheroe"
                />
            </form>
            <div className="GridHeros Found">
                <SuperheroFound 
                heroName={keyword}
                />
            </div>
*/ 