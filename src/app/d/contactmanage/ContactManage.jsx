import React from "react";
import styles from "./ContactManage.module.css";
import Image from "next/image";
const ContactManage = () => {
  return (
    <div classname={styles.main}>
      <div className="flex w-full justify-between mt-5 bg-[#F4F6FD] rounded-2xl h-35 mb-5">
        <div className="flex gap-15 px-10 mt-5 mb-5">
          <div className="relative w-[50px] aspect-[1/1] rounded-[50%] top-3">
            <Image src="/export.svg" alt="Logo" width={35} height={35} />
          </div>
          <div>
            <div className="mx-px	">
              <p className={styles.name}>Export Contact</p>
            </div>
            {/* <div>
            <p className={styles.profession}></p>
          </div>     */}
          </div>
        </div>
        <div className="flex px-10 gap-6 mt-5 mb-5">
          <div className="relative w-[50px] aspect-[1/1] rounded-[50%] top-3 ">
            <Image src="/iconarrow.svg" alt="Logo" width={12} height={13} />
          </div>
        </div>
      </div>
      <div className={styles.bodycontent}>
        <div className={styles.bodyheader}>
          <div className={styles.subhead}>
            <div className={styles.logo}>
              <Image src="link-2.svg" alt="" width={15} height={15} />
            </div>
            <div className={styles.export}>
              <p className={styles.exportpara}>Sync contacts</p>
            </div>
          </div>
        </div>

        <div className={styles.paragraph}>
          <div className={styles.para}>
            <p className={styles.tex}>connect with google</p>
          </div>
          <div className={styles.button}>
            <div className={styles.icon}></div>
            <div className={styles.iconcontent}>
              <p className={styles.connect}>Connect</p>
            </div>
          </div>
        </div>

        <div className={styles.paragraph}>
          <div className={styles.para}>
            <p className={styles.tex}>Connect with HubSpot</p>
          </div>
          <div className={styles.button}>
            <div className={styles.icon}></div>
            <div className={styles.iconcontent}>
              <p className={styles.connect}>Connect</p>
            </div>
          </div>
        </div>

        <div className={styles.paragraph}>
          <div className={styles.para}>
            <p className={styles.tex}>Connect with salesforce</p>
          </div>
          <div className={styles.button}>
            <div className={styles.icon}></div>
            <div className={styles.iconcontent}>
              <p className={styles.connect}>Connect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactManage;
