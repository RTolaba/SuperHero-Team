import axios from 'axios'

const apiKey = '4569019506489216'

export default function searchSuperhero({nameHero}){

    const apiURL = `/api/${apiKey}/search/${nameHero}`
    const response = []
    return axios.get(apiURL)
        .then(res => {
            try{
                response.push(res)
                const { results } = response[0].data
                const herosFound = results.map(hero => {
                    const { id, name } = hero
                    const { url } = hero.image
                    return {id, name, url}
                })
                return herosFound 
            }
            catch{
                console.log("Heroe no encontrado, verifique que escribio bien a heroe")
            }
            
        })
}