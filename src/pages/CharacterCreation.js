import './CharacterCreation.css'
import { useState, /*useContext*/ } from "react";
import { useNavigate, Outlet, useOutletContext } from "react-router-dom"

function CharacterCreation() {
    //const {setCharacters} = useContext();
    const setCharacters = useOutletContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        role: "",
        specialty: "",
        picture: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData({ ...formData, picture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/characters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(response =>{
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Character created', data);
            setCharacters(data);
            navigate("/");
            //update state from here
        })
        .catch(error =>{
            console.error('Error:', error)
        })
    };

    const roleSpecialties = {
        Face: ['Journalist', 'Magician'],
        Muscle: ['Explorer', 'Soldier'],
        Scholar: ['Doctor', 'Professor'],
        Slink: ['Criminal', 'Detective'],
        Weird: ['Medium', 'Occultist'],
    };

    return (
        <>
            <div className='character-creation' onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
                <h2>Create Character</h2>
                <form onSubmit={handleSubmit}>
                    <p><label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label></p>
                    <p><label>
                        Role:
                        <select name="role" value={formData.role} onChange={handleChange} required>
                            <option value="">Select Role</option>
                            {Object.keys(roleSpecialties).map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </label></p>
                    <p><label>
                        Specialty:
                        <select
                            name="specialty"
                            value={formData.specialty}
                            onChange={handleChange}
                            required
                            disabled={!formData.role} // Disable until a role is selected
                        >
                            <option value="">Select Specialty</option>
                            {formData.role && roleSpecialties[formData.role].map((specialty) => (
                                <option key={specialty} value={specialty}>
                                    {specialty}
                                </option>
                            ))}
                        </select>
                    </label></p>
                    <p><label>
                        Scars:
                        <select
                            name="scars"
                            value={formData.scars}
                            onChange={handleChange}
                            required
                        >
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </label></p>
                    <div style={{ border: "2px dashed #aaa", padding: "20px", textAlign: "center" }}>
                        <p>Drag & Drop photo here</p>
                    </div>
                    {formData.picture && (
                        <p>
                            <img src={formData.picture} alt="Preview" style={{ maxWidth: "200px", maxHeight: "200px" }} />
                        </p>
                    )}
                    <p> or </p>
                    <p>
                        <label>
                            Picture URL:
                            <input type="text" name="picture" value={formData.picture} onChange={handleChange} required />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Create Character</button>
                    </p>
                </form>
            </div>
        </>
    )
}

export default CharacterCreation;