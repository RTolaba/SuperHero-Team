import axios from 'axios'

const apiKey = '4569019506489216'

export default function getApi(id){
    const apiURL = `/api/${apiKey}/${id}`
    const data = []
    
    return axios.get(apiURL)
        .then(res => {
            data.push(res)
            const heros = data.map(hero => {
                const {id, name} = hero.data
                const {url} = hero.data.image
                const fullname = hero.data.biography["full-name"]
                const {alignment} = hero.data.biography
                const {powerstats, appearance, work} = hero.data
                return {id, name, url, fullname, alignment, powerstats, appearance, work}
            })

            return heros
        })    
}
