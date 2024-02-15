import CharacterCard from '../components/CharacterCard';
import { Outlet, useOutletContext } from 'react-router-dom'
function Home() {
    const characters = useOutletContext()


    const characterList = characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
    })


    return (
        <>
            <main>
                <h1><strong>Candela Obscura Character Tracker</strong></h1>
                <Outlet context={characters} />
                <div>
                    {characterList}
                </div>

            </main>
        </>
    );
}
export default Home

