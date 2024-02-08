import NavBar from "./components/NavBar";
import {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/characters')
     .then(res => res.json())
     .then(data => setUsers(data))
     .catch(err => console.error(err))
     console.log(characters)
    }, [])

    return (
        <>
        <header>
            <NavBar />
        </header>
        <Outlet context={users} />
        </>
    );
};

export default App;
