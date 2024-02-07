import { useState } from "react"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Buscador.css'

const Buscador =()=>{
    const [characters, setCharacters] = useState ([])
    const [choosenCharacter, setChoosenCharacter] = useState('')
    
    const consultApiCharacter = () => {

        // console.log("entré a consulta api")
        if (choosenCharacter !== "") {
            const route = `https://dragonball-api.com/api/characters?name=${choosenCharacter}`;
            fetch(route)
            .then((response) => response.json())
            .then((formattedResponse) => {
                const items = formattedResponse || []; 
                console.log(formattedResponse)
                setCharacters(items);
            })
            .catch((error) => console.log(error));
        } else {
            setCharacters([]);
        }
    };
    
    
  


    return(

        
        <>
        <input type="text" placeholder="Ingresa tu personaje" onChange={(e) => setChoosenCharacter(e.target.value)}></input><br></br>
        <button type="button" onClick={consultApiCharacter}>Buscar</button>

        {
            [...characters] // Hacemos una copia del arreglo para no modificar el estado directamente
            .sort((a, b) => a.name.localeCompare(b.name)) // Ordenamos por nombre
            .map((character, index) => (
                <Card className="custom-card2" key={index}> 
                    <Card.Img variant="top" src={character.image} className="custom-img-size"/>
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                    </Card.Body>
                </Card>
            ))
        }
    </>

    )

}

export default Buscador