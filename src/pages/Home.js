import CharacterCard from '../components/CharacterCard';
import {Outlet, useOutletContext} from 'react-router-dom'
function Home(/* {characters} */) {
    const characters = useOutletContext()
    const characterList = characters.map(character=>{
        return <CharacterCard key={character.id}  /> })


    return (
        <>
            <main>
                <h1>Candela Obscura Character Tracker</h1>
                <Outlet context={characters} />
                {characterList}

            </main>
        </>
    );
}
export default Home