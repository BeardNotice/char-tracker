import "./Card.css"
const CharacterCard = ({character}) => {
    console.log(character)
    return (
        <>
        <div className="card-container" >
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{character.name}</h2>
                    <img src={character.picture} alt={character.name} className="card-img-bottom" width={300} height ={400} />
                    <p className='role-specialty' ><strong>Role:</strong> <em>{character.role}</em></p>
                    <p className='role-specialty' ><strong>Specialty:</strong> <em>{character.specialty}</em></p>
                </div>
            </div>
        </div>
        </>
    )
}
export default CharacterCard