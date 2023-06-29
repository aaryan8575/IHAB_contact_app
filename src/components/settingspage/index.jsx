import React from 'react'
import styles from "./settings.module.css"
import Image from 'next/image';
export default function Settingspage() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Image src="/images/logo.png" alt="icon" width={82} height={64} className={styles.logo_icon} />
        <Image src="/images/premium-2 1.png" alt="icon" width={19.2} height={13.8} className={styles.group_icon} />
      </div>
      <div className={styles.wrapper}>
        <Image src="/images/Ellipse 820.png" alt="icon" width={100} height={100} className={styles.logo_icon} />
        
      </div>
      <div className={styles.wrapper}>
        <Image src="/images/contact.png" alt="icon" width={66.67} height={65.4} className={styles.logo_icon3} />
      </div>
    </div>
  )
}
