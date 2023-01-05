function Edit() {
    const [newProfile, setNewProfile] = useState({

        name: "",
        age: Number,
        eyeColor: "",
        hairColor: "",
        region: "",
        hometown: "",
        family: [],
        friends: [],
        pokemon: [],
        trainerClass: "",
        badge: ""
    })
    
    function handleChange(event) {
        const { name, value } = event.target;
        setNewProfile(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault()
      
    }

    return (
        <div>
            <form action={`/profile/${profile._id}?_method=PUT`} method="POST">

                <h2>Name:</h2>
                <input
                    onChange={handleChange}
                    name="name"
                    value={newProfile.name}
                    placeholder="Enter Name"
                    
                />

                <h2>Age:</h2>
                <input
                    onChange={handleChange}
                    name="age"
                    value={newProfile.age}
                    placeholder="Enter Age"
                    
                />

                <h2>Eye Color:</h2>
                <input
                    onChange={handleChange}
                    name="eyeColor"
                    value={newProfile.eyeColor}
                    placeholder="Enter Eye Color"
                />

                <h2>Hair Color:</h2>
                <input
                    onChange={handleChange}
                    name="hairColor"
                    value={newProfile.hairColor}
                    placeholder="Enter Hair Color"
                />

                <h2>Region</h2>
                <input
                    onChange={handleChange}
                    name="region"
                    value={newProfile.region}
                    placeholder="Enter Region"
                    
                />

                <h2>Hometown:</h2>
                <input
                    onChange={handleChange}
                    name="homeTown"
                    value={newProfile.homeTown}
                    placeholder="Enter Hometown"
                    
                />

                <h2>Family:</h2>
                <input
                    onChange={handleChange}
                    name="family"
                    value={newProfile.family}
                    placeholder="Enter Family"
                />

                <h2>Friends:</h2>
                <input
                    onChange={handleChange}
                    name="friends"
                    value={newProfile.friends}
                    placeholder="Enter Friends"
                />

                <h2>Pokemon:</h2>
                <input
                    onChange={handleChange}
                    name="pokemon"
                    value={newProfile.pokemon}
                    placeholder="Enter Pokemon"
                />

                <h2>Trainer Class:</h2>
                <input
                    onChange={handleChange}
                    name="trainerClass"
                    value={newProfile.trainerClass}
                    placeholder="Enter Trainer Class"
                />

                <h2>Badge:</h2>
                <input
                    onChange={handleChange}
                    name="badge"
                    value={newProfile.badge}
                    placeholder="Enter Badge"
                />

                {/* <h2>Location:</h2>
                <select name="location" value={input.location} onChange={handleChange}>
                    <option value="DEFAULT" disabled>Choose a city</option>
                    <option value="NYC">New York City</option>
                    <option value="HVA">Hampton, VA</option>
                    <option value="Coleman">Coleman, Ohio</option>
                </select> <br /><br /> */}
                <button onClick={handleClick}>Edit Profile</button>
            </form>
        </div>
    );
}
export default Edit;