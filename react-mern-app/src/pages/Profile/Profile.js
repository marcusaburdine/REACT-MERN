import styles from "./Profile.module.css"
import profileData from "../../profileData"
import React, { useState } from 'react'





export default function Profile() {
  

  console.log(profileData)

  return (
    <>
    <div className={styles.coverImage} ></div>
   
    
    <div className={styles.profile}>
    <div className={styles.profileImage} ></div>
      <div className={styles.intro}>
        <h2>Intro</h2>
        {profileData[0].name}
        
      </div>
      <div className={styles.photos}></div>
      <div className={styles.post}></div>
      <div className={styles.posts}></div>
    </div>
    </>
  );


};

