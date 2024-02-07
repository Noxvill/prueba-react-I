import { useState } from "react"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import './MiApi.css'


const MiApi =()=>{
const [characters, setCharacters] = useState ([])
const [page, setPage] = useState(1)

const consultApi = () =>{
const route = `https://dragonball-api.com/api/characters?page=${page}&limit=5`
fetch(route)
.then((response) => response.json())
.then((formatedResponse) => setCharacters(formatedResponse.items))
.catch((error) => console.log(error))


}

consultApi()

return(

  <>
  {
    characters.map((character) => (
      <Card className="custom-card" key={character.id}>
        <Card.Img variant="top" src={character.image} className="custom-img-size"/>
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
        </Card.Body>
      </Card>
    ))
  }
  <button style={{ backgroundColor: '#e3040e', color: 'white' }} onClick={() => setPage(page - 1 < 1 ? 1 : page - 1)}>Atrás</button>
  &nbsp;
  <button style={{ backgroundColor: '#e3040e', color: 'white' }} onClick={() => setPage(page + 1 > 12 ? 12 : page + 1)}>Siguiente</button>
</>
)

}

export default MiApi