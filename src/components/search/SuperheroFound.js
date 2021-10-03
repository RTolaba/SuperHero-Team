import React, {useState, useEffect} from 'react'
import SearchSuperhero from '../../services/searchSuperhero'
import Superhero from '../superhero/Superhero'



export default function SuperheroFound(nameHero){
    const [Hero, setHero] = useState([])

    useEffect( function() {
        
            SearchSuperhero(nameHero)
            .then(res => {
                if(res !== undefined) {
                    setHero(res)
                }
                else{
                    console.log("Aca en heroe encontrado tmb hay un mensaje de catch")
                    setHero([])
                }
            })
    }, [nameHero])
    console.log("mostrando resultado de HErooooo")
    console.log(Hero)

    return Hero.map(({id, name, url}) => 
    
        <div key={id}>
            <Superhero 
            id = {id}
            name = {name}
            url = {url}
            />
        </div>
    )
}