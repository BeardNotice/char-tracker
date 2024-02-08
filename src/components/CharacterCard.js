import { useOutletContext } from 'react-router-dom'

const CharacterCard = ({character}) => {
    console.log(character)
    return (
        <div>
            <div className="card">
                <img src={character.picture} alt={character.name} className="card-img-bottom" />
                <div className="card-body">
                    <h2 className="card-title">{character.name}</h2>
                    <p><strong>Role:</strong> {character.role}</p>
                    <p>Specialty: {character.specialty}</p>
                </div>
            </div>
        </div>
    )
}
export default CharacterCard