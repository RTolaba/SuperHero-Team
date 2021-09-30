import './Superhero.css'

export default function Superhero({id, name, fullname, url, alignment, powerstats, appearance, work }){

    
    return (
    <div className="Hero">
        <div className="Hero-Presentation">
            <h3>{name}</h3>
            <img alt={name} src={url} />
        </div>
        <div className="Hero-Stats">
            <ul>
                <li>
                    Inteligencia: {powerstats.intelligence}
                </li>
                <li>
                    Fuerza: {powerstats.strength}
                </li>
                <li>
                    Velocidad: {powerstats.speed}
                </li>
                <li>
                    Durabilidad: {powerstats.durability}
                </li>
                <li>
                    Poder: {powerstats.power}
                </li>
                <li>
                    Combate:  {powerstats.combat}
                </li>
            </ul>
        </div>
        <div className="Hero-Buttons">
            <form className="Hero-Form">
                <input type="button" value="Ver Heroe"></input>
                <input type="button" value="Eliminar"></input>
            </form>
        </div>
       
    </div>
    )
}