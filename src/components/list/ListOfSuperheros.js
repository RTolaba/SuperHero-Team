import React, { useState, useEffect } from 'react'
import getApi from '../../services/getSuperhero'
import Superhero from '../superhero/Superhero'

export default function ListOfSuperheros({team=[]}) {
    
   const [heros, setHeros] = useState([])
   useEffect( function() {   
    for (let i=0; i<=5; i++){
        console.log(team[i])
        getApi(team[i])
        .then(hero => setHeros(currentHero => currentHero.concat(hero)))
    }
 }, [team])

    return heros.map(({id, name, fullname, url, alignment, powerstats, appearance, work}) => 
        <Superhero 
        id={id}s
        key={id}
        name={name}
        fullname={fullname}
        url={url}
        alignment={alignment}
        powerstats={powerstats}
        appearance={appearance}
        work={work}    
        />
    )   
}
