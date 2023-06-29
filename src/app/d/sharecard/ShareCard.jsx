import React from "react";
import styles from "../sharecard/SharCard.module.css";
import Image from "next/image";

const ShareCard = () => {
  return (
    <div className={`${styles.parent}`}>
      <div
        className={`border-2 border-white hover:border-blue-400 ${styles.card}`}
      >
        <div className={styles.header}>
          <div className={`tracking-tight ${styles.subheader1}`}>
            <p>Personal</p>
          </div>
          <div
            className={`flex border-2 border-white cursor-pointer hover:border-blue-400 ${styles.subheader2}`}
          >
            <div className={`${styles.close}`}>
              <svg
                width="6"
                height="6"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L11 1"
                  stroke="#2242D8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11L1 1"
                  stroke="#2242D8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className={`border-2 border-white hover:border-blue-400 ${styles.queue}`}
        >
          <div
            className={`border-2 border-transparent hover:border-blue-400 ${styles.qrcode}`}
          >
            <Image
              src="/images/Clippathgroup.svg"
              alt="QR Code"
              width={180}
              height={180}
            />
            <div
              className={`border-2 border-transparent hover:border-blue-400 ${styles.white}`}
            >
              <div className={`cursor-pointer ${styles.subpart}`}>
                <Image
                  src="/images/hello.svg"
                  alt="Subpart"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`tracking-tight ${styles.tap}`}>
          <p>Tap on QR to save to files</p>
        </div>

        <div
          className={`border-2 border-white hover:border-blue-400 ${styles.copylink}`}
        >
          <a href="#">
            <p className={`${styles.para}`}>Copy link to card</p>
          </a>
        </div>

        <div
          className={`border-2 border-white hover:border-blue-400 ${styles.socialmedia}`}
        >
          <div className={`${styles.direct}`}>
            <p className={`${styles.directpara}`}>Direct share to</p>
          </div>
          <div className={`${styles.logos}`}>
            <div
              className={`border-2 border-blue-200 hover:border-blue-400 cursor-pointer ${styles.instagram}`}
            >
              <div className={`${styles.ins}`}>
                <Image
                  src="/images/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div
              className={`border-2 border-blue-200 hover:border-blue-400 cursor-pointer ${styles.facebook}`}
            >
              <div className={`${styles.fb}`}>
                <Image
                  src="/images/path14.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div
              className={`border-2 border-blue-200 hover:border-blue-400 cursor-pointer ${styles.twitter}`}
            >
              <div className={`${styles.twi}`}>
                <Image
                  src="/images/white_background.svg"
                  alt="Twitter"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div
              className={`border-2 border-blue-200 hover:border-blue-400 cursor-pointer ${styles.linkedin}`}
            >
              <div className={`${styles.lin}`}>
                <Image
                  src="/images/Path2521.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareCard;
