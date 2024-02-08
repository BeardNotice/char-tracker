import { useState } from "react";
function CharacterCreation() {

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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
            <div className='character-creation'>
                <h2>Create Character</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Role:
                        <select name="role" value={formData.role} onChange={handleChange} required>
                            <option value="">Select Role</option>
                            {Object.keys(roleSpecialties).map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
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
                    </label>
                    <label>
                        Picture URL:
                        <input type="text" name="picture" value={formData.picture} onChange={handleChange} required />
                    </label>
                    <button type="submit">Create Character</button>
                </form>
            </div>
        </>
    )
}

export default CharacterCreation;