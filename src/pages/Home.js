import { useOutletContext } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
function Home(){
    const characters = useOutletContext().characters;
    return(
        <>
        <main>
            <h1>Candela Obscura Character Tracker</h1>
            <div className='character-list'>
                {characters.map(character=>(
                    <CharacterCard key={character.id} {...character} />
                ))}
            </div>
        </main>
        </>
    );
}
export default Home