import logo from './logo.svg';
import './App.css';
import ListOfSuperheros from './components/list/ListOfSuperheros';



function App() {

  /*const [heros, setHeros] = useState([])
  const teamHeros = getApi()

  setHeros(teamHeros)
  console.log("actualizando heroes")
  console.log(heros)
  useEffect( function(){
    console.log("actualizando heroes")
    setHeros(teamHeros) 
    console.log(heros)

  }, [heros, teamHeros])*/
    
  const idTeamHeros = [70, 644, 489, 263, 289, 313]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          s
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <ListOfSuperheros team={idTeamHeros} />
        
        
      </header>
      
    </div>
  );
}

export default App;
