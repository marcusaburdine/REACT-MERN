import styles from "./New.module.css"
import React, { useState } from "react";
import { addProfileAPI } from '../../utilities/profile-service'

export default function Create() {
    const [profile, setProfile] = useState({

        name: "",
        age: 0,
        eyeColor: "",
        hairColor: "",
        region: "",
        hometown: "",
        family: "",
        friends: "",
        pokemon: "",
        trainerClass: "",
        badge: ""
    })

    const handleChange = (evt) => {
        setProfile({ ...profile, [evt.target.name]: evt.target.value })
    }


    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const data = await addProfileAPI(profile)

        } catch (err) {
            alert(err)
        }
    }


    return (
        <div className={styles.new}>
            <form onSubmit={handleSubmit} >

                
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

                <div className={styles.createbtn}><button>Create Profile</button></div>

            </form>
        </div>
    );
}
