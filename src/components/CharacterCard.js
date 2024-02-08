//import React from 'react'
import { useOutletContext } from 'react-router-dom'

const CharacterCard = ({ id, name, role, specialty, picture }) => {
    const characters = useOutletContext();
    console.log(characters)
    return (
        <div>
            <div className="card">
                <img src={characters.picture} alt={characters.name} className="card-img-bottom" />
                <div className="card-body">
                    <h2 className="card-title">{characters.name}</h2>
                    <p><strong>Role:</strong> {characters.role}</p>
                    <p>Specialty: {characters.specialty}</p>
                </div>
            </div>
        </div>
    )
}
export default CharacterCard