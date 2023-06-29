import React from 'react';
import styles from './acc.module.css';
import Image from 'next/image';


const ProfileCard = ({name, profession }) => {
  return (
    <div className='flex w-full justify-between mt-5 bg-[#F4F6FD] rounded-2xl h-20 items-center'>
      <div className='flex gap-6 px-10 '>

        <div>
          <div>
            <p className={styles.name}>{name}</p>
          </div>
          <div>
            <p className={styles.profession}>{profession}</p>
          </div>    
        </div>
      </div>
      <div className='flex px-10 gap-6'>
        <div>
          <button className={styles.btn}>Change </button>
        </div>
        <div>
        
        </div>
      </div>
      
    </div>

  





  );
};

export default ProfileCard;


