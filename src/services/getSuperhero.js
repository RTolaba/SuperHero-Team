import axios from 'axios'

const apiKey = '4569019506489216'

export default function getApi(id){
    const apiURL = `/api/${apiKey}/${id}`
    const data = []
    return axios.get(apiURL)
        .then(res => {
            data.push(res)
            console.log("mostrando data:")
            console.log(data)
            const heros = data.map(hero => {
                const {id, name} = hero.data
                const {url} = hero.data.image
                const fullname = hero.data.biography["full-name"]
                const {alignment} = hero.data.biography
                const {powerstats, appearance, work} = hero.data
                console.log("Entrando en map: " + id + ' ' + name)
                return {id, name, url, fullname, alignment, powerstats, appearance, work}
            })
            console.log("devolviendo array con id y nombre: " + heros) 
            return heros
        })
    
}
// segundo intento resuelto pero solo trae un heroe
/*
    const data = []
    const heros = []
    for(let i = 0; i<=5; i++){

        const apiURL = `/api/${apiKey}/${team[i]}`
        heros.push(axios.get(apiURL)
                .then(res => {
                    data.push(res)
                    const hero = data.map(hero => {
                        const {id, name} = hero.data
                        return {id, name}
                    })
                    return hero
                }))
    }
    
    return heros
*/


//primer intento no resuelto 
/*const data = [] 

    for(let i = 0; i<=5; i++){

        const apiURL = `/api/${apiKey}/${team[i]}`
        axios.get(apiURL, {responseType:'json'})
            .then(response => {
                data.push(response)
                return response
                })
    }

    const heros = data.map(res => {        
        const { id, name } = res.data
        const {fullname} = res.data.biography['full-name']
        console.log('entrando en el map')
        return  {id, name, fullname}
    })
    console.log("array data")
    console.log(data)
    console.log("array heros")
    console.log(heros)
 
    return heros*/