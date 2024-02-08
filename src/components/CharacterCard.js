import React from 'react'

const CharacterCard = ({ id, name, role, specialty, picture }) => {
    return (
        <div>
            <div className="character-card">
                <img src={picture} alt={name} />
                <h2>{name}</h2>
                <p><strong>Role:</strong> {role}</p>
                <p><italic>Specialty:</italic> {specialty}</p>
            </div>
        </div>
    )
}
export default CharacterCard