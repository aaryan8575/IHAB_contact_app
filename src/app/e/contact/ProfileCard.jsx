// import React from 'react';
// import styles from './ProfileCard.module.css';
// import Image from 'next/image';
// const ProfileCard = ({ profilePicture, name, profession }) => {
//   return (
//     <div className='flex w-full justify-between mt-5 bg-[#F4F6FD] rounded-3xl'>
//       <div className='flex gap-6 px-10 '>
//         <div className='relative w-[50px] aspect-[1/1] rounded-[50%] overflow-hidden'>
//         <div className=' rounded aspect-square w-5 h-5'>
//           <Image src="/Ellipse.jpg" fill  />
//         </div>
//         </div>
//         <div>
//           <div>
//             <p className={styles.name}>{name}</p>
//           </div>
//           <div>
//             <p className={styles.profession}>{profession}</p>
//           </div>    
//         </div>
//       </div>
//       <div className='flex px-10 gap-6'>
//         <div>
//           <button className={styles.btn}>view</button>
//         </div>
//         <div>
//         <label className={styles.checkbox}>
//            <input type="checkbox" className={styles.checkboxInput} />
//            <span className={styles.checkmark}></span>
//          </label>
//         </div>
//       </div>
//     </div>


//     // <div className={styles.ProfileCard}>
//     //   <img className={styles.profilePicture} src={profilePicture} />
//     //   <div className={styles.details}>
//     //     <p className={styles.name}>{name}</p>
//     //     <p className={styles.profession}>{profession}</p>
//     //   </div>
//     //   <div className={styles.buttonContainer}>
//     //     <button className={styles.viewButton}>View</button>
//     //     <label className={styles.checkbox}>
//     //       <input type="checkbox" className={styles.checkboxInput} />
//     //       <span className={styles.checkmark}></span>
//     //     </label>
//     //   </div>
//     // </div>
//   );
// };
// export default ProfileCard;


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
