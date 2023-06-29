"use client";

import React, { useState } from "react";
import clsx from "clsx";
import styles from "./profile.module.css";
import Image from "next/image";

const ProfilePhoto = ({ logoStyle, logoSrc, placeholderText, buttonBack }) => {
  const [photoUrl, setPhotoUrl] = useState("");

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhotoUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("photo-upload").click();
  };

  return (
    <>
      <div className={styles.main}>
        <p className={styles.profile_photo_title}>Profile Photo</p>

        <div className={styles.profile_photo_wrapper}>
          <div className={clsx(styles.profile_photo,{[logoStyle]:!!logoStyle,})}>
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt="Profile"
                width={300}
                height={400}
                className={styles.profile_photo_image}
              />
            ) : (
              <img src={logoSrc} alt="No Photo" />
            )}
          </div>
          <div
            className={clsx(styles.custom_file_upload, {
              [buttonBack]: !!buttonBack,
            })}
            onClick={handleButtonClick}
          >
            <p>{placeholderText}</p>
            <img src="/edit-2.svg" alt="edit" />
            <input
              type="file"
              id="photo-upload"
              accept="image/*"
              onChange={handlePhotoUpload}
              className={styles.photo_upload_input}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePhoto;
