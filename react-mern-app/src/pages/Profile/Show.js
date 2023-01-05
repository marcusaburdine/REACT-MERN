import styles from "./Profile.module.css"
import Post from "../../component/Post/Post"
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { addProfileAPI } from '../../utilities/profile-service'




function Profile() {
  const Info = [{

    name: 'Misty',
    age: 10,
    eyeColor: 'Viridian',
    hairColor: 'Orange',
    region: 'Kanto',
    homeTown: 'Cerulean City',
    family: 'Daisy, Violet, Lily',
    friends: 'Ash, Brock, Tacy, Max, May',
    pokemon: 'Staryu, Vaporeon, Gyarados, Carracosta, Sobble, Cramorant',
    trainerClass: 'Water-Types',
    badge: 'Cascade Badge'

  }]

  const [profile, setProfile] = useState(null)

  const { id } = useParams()
  console.log(id);
  const getProfile = async () => {
    const data = await addProfileAPI.showProfile(profile)
    setProfile(profile)
  }
  useEffect(() => { getProfile() }, [])


  const handleDelete = async () => {
    await addProfileAPI(profile);
  }


  return (
    <>
      <div className={styles.coverImage} ></div>



      <div className={styles.profile}>
        <div className={styles.profileImage} ></div>
        <div className={styles.name}><h2>{Info[0].name}</h2></div>
        <div className={styles.intro}>
          <div className={styles.age}><h2>Age: {Info[0].age}</h2></div>
          <div className={styles.eyeColor}><h2>Eye Color: {Info[0].eyeColor}</h2></div>
          <div className={styles.hairColor}><h2>Hair Color: {Info[0].hairColor}</h2></div>
          <div className={styles.region}><h2>Region: {Info[0].region}</h2></div>
          <div className={styles.homeTown}><h2>Hometown: {Info[0].homeTown}</h2></div>
        </div>
        <div className={styles.photos}>
          <Link to="/profile/:id">
            <div className={styles.newbtn}><button><strong>New Profile</strong></button></div>
          </Link>
          <Link to="/profile/:id/edit">
            <div className={styles.editbtn}><button><strong>Edit Profile</strong></button></div>
          </Link>
        </div>
        <div className={styles.post}></div>
        <div className={styles.posts}></div>
        <Post />
      </div>

    </>
  );



};





export default Profile

