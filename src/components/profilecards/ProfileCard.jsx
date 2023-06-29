import React from 'react';
import styles from './ProfileCard.module.css';

const ProfileCard = ({ profilePicture, name, profession }) => {
  return (
    <div className={styles.ProfileCard}>
      <img className={styles.profilePicture} src={profilePicture} />
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.profession}>{profession}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.viewButton}>View</button>
        <label className={styles.checkbox}>
          <input type="checkbox" className={styles.checkboxInput} />
          <span className={styles.checkmark}></span>
        </label>
      </div>
    </div>
  );
};
export default ProfileCard;
