import styles from "./Profile.module.css"


const React = require("react")

export default function Profile() {

  return (
    <div className={styles.profile}>
      <div className={styles.intro}></div>
      <div className={styles.photos}></div>
      <div className={styles.post}></div>
      <div className={styles.posts}></div>


    </div>
  );


};

