import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
    const [characters, setCharacters] = useState([])

    const fetchCharacters = () => {
        fetch("http://localhost:3000/characters")
            .then(res => res.json())
            .then(data => setCharacters(data))
            .catch(err => console.error(err))
    }

useEffect(() => {
  fetchCharacters()
}, [])

console.log(characters)
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Outlet context={{characters, /*fetchCharacters,*/ setCharacters}} />
        </>
    );
};

export default App;
