import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { addProfileAPI } from '../../utilities/profile-service'

function Edit() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [profile, setProfile] = useState(null);

    const getBook = async () => {
        const retrievedBook = await addProfileAPI(profile)
        console.log(retrievedBook)
        setProfile(retrievedBook);
    }

    useEffect(() => {
        getBook();
    }, []);

    const [formData, setFormData] = useState(null);

    const getFormData = async () => {
        setFormData(profile);
    };


    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleUpdate = async (event) => {
        event.preventDefault();
        const profile = await addProfileAPI(profile);
        navigate(`/profile${id}`);
        console.log(profile);
    }

    return (
        <div>
            <form >

                <h2>Name:</h2>
                <input
                    onChange={handleChange}
                    name="name"
                    placeholder="Enter Name"
                    
                />

                <h2>Age:</h2>
                <input
                    onChange={handleChange}
                    name="age"
                    placeholder="Enter Age"
                    
                />

                <h2>Eye Color:</h2>
                <input
                    onChange={handleChange}
                    name="eyeColor"
                    placeholder="Enter Eye Color"
                />

                <h2>Hair Color:</h2>
                <input
                    onChange={handleChange}
                    name="hairColor"
                    placeholder="Enter Hair Color"
                />

                <h2>Region</h2>
                <input
                    onChange={handleChange}
                    name="region"
                    placeholder="Enter Region"
                    
                />

                <h2>Hometown:</h2>
                <input
                    onChange={handleChange}
                    name="homeTown"
                    placeholder="Enter Hometown"
                    
                />

                <h2>Family:</h2>
                <input
                    onChange={handleChange}
                    name="family"
                    placeholder="Enter Family"
                />

                <h2>Friends:</h2>
                <input
                    onChange={handleChange}
                    name="friends"
                    placeholder="Enter Friends"
                />

                <h2>Pokemon:</h2>
                <input
                    onChange={handleChange}
                    name="pokemon"
                    placeholder="Enter Pokemon"
                />

                <h2>Trainer Class:</h2>
                <input
                    onChange={handleChange}
                    name="trainerClass"
                    placeholder="Enter Trainer Class"
                />

                <h2>Badge:</h2>
                <input
                    onChange={handleChange}
                    name="badge"
                    placeholder="Enter Badge"
                />

                {/* <h2>Location:</h2>
                <select name="location" value={input.location} onChange={handleChange}>
                    <option value="DEFAULT" disabled>Choose a city</option>
                    <option value="NYC">New York City</option>
                    <option value="HVA">Hampton, VA</option>
                    <option value="Coleman">Coleman, Ohio</option>
                </select> <br /><br /> */}
                <button>Edit Profile</button>
            </form>
        </div>
    );
}
export default Edit;


