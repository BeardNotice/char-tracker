import "./Card.css"
const CharacterCard = ({character}) => {

    const generateScarsDisplay = (numScars) => {
        const scarSymbols = ["◇", "◈"];
        let scarsDisplay = "";
        for (let i = 0; i < 3; i++) {
            scarsDisplay += i < numScars ? scarSymbols[1] : scarSymbols[0];
        }
        return scarsDisplay;
    };

    console.log(character)
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{character.name}</h2>
                    <img src={character.picture} alt={character.name} className="card-img-bottom" width={300} height ={400} />
                    <p className='role-specialty' ><strong>Role:</strong> <em>{character.role}</em></p>
                    <p className='role-specialty' ><strong>Specialty:</strong> <em>{character.specialty}</em></p>
                    <p className='role-specialty' ><strong>Scars:</strong> <em>{generateScarsDisplay(character.scars)}</em></p>
                </div>
            </div>
        </>
    )
}
export default CharacterCard