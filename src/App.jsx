import './App.css';
import Select from 'react-select';
import {useEffect, useState} from 'react'

function App() {

      const [berries, setBerries] = useState([])
      const [userSelect, setUserSelect] = useState()
      const [showSelect, setShowSelect] = useState(false)

      const getBerries = async() => {
        const berriesApi = await fetch('https://pokeapi.co/api/v2/berry/')
        const data = await berriesApi.json()
        let resultFetch = data.results.map(data => {
          return {
            value: data.name,
            label: data.name,

          }
        })
        setBerries(resultFetch.sort((a, b) => a.label.localeCompare(b.label)))
      }

      useEffect(() => {
        getBerries()
      }, []);


      const handleSubmit = () => {
        setShowSelect(state => !state)
      }
  
      const handleChange = (value) => {
        setUserSelect(value)
      }


  return (

    <div className="App">
      <h1>{showSelect ? userSelect : ""}</h1>
      <button onClick={() => handleSubmit()} disabled={!userSelect}>{showSelect ? "Hide Button": "Show Button"}</button>
      <Select options={berries} onChange={(e) => handleChange(e.value)}></Select>
    </div>
  );
}

export default App;
