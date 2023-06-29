import React from 'react'
import styles from './footer.module.css';
import Typography from '../typography';
import Button from '../button';
import FacebookIcon from "@/public/icons/facebook.svg";
import Googlefooter from "@/public/icons/Googlefooter.svg";
import TwiterIcon from "@/public/icons/twitericon.svg";
import InstaIcon from "@/public/icons/instaicon.svg";


const Footer = () => {
    return (

        <div className='relative'>
            <div className="absolute">
                <div className={styles.section}>
                    <img
                        className="w-[75vw] mx-auto pt-12"
                        src="images/pricingfooterimage.svg"
                        alt="no image"
                    />
                    <img
                        className="absolute w-[18vw] absolute right-[8%] bottom-0"
                        src="images/pricingfootermobileimg.svg"
                        alt="mobile iamge"
                    />
                </div>
            </div>
            <div className="absolute">
                <div className="relative">
                    <div className={styles.footerview}>
                        <div className={styles.footercontent}>
                            <p className={styles.maintext}>
                                Great digital business card place now platform independent
                            </p>
                            <p className={styles.subtext}>
                                Now no more hassle to platform use only one platform ihab live
                                in both Web and app that you can use anytime, anywhere
                            </p>
                        </div>
                        <div className={styles.buttons}>
                            <div className=" flex">
                                <Button title="Download app" color="contained" />
                                <Button title="Try on Web" color="contained" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.logo_icons}>
                            <div className={styles.logo}>
                                <img className={styles.image} src="/images/logo.png" alt="logo" />
                                <Typography className="text-primary" variant="h3">
                                    ihab
                                </Typography>
                            </div>

                            <div className={styles.addressicons}>
                                <button className={styles.icon}>
                                    <Button title="" startIcon={Googlefooter} color="icon" size="large" />
                                </button>
                                <button className={styles.icon}>
                                    <Button title="" startIcon={InstaIcon} color="icon" size="large" />
                                </button>
                                <button className={styles.icon}>
                                    <Button
                                        title=""
                                        startIcon={FacebookIcon}
                                        color="icon"
                                        size="large"
                                    />
                                </button>
                                <button className={styles.icon}>
                                    <Button title="" startIcon={TwiterIcon} color="icon" size="large" />
                                </button>
                            </div>
                        </div>
                        <div class={styles.col}>
                            <Typography className="text-primary" variant="h6">
                                Features
                            </Typography>
                            <ul>
                                <li><a href="#">Digital business card</a></li>
                                <li><a href="#">Scan to convert card</a></li>
                                <li><a href="#">Manage contacts</a></li>
                                <li><a href="#">Share card digitally</a></li>
                                <li><a href="#">Email signature</a></li>
                            </ul>
                        </div>
                        <div class={styles.col}>
                            <Typography className="text-primary" variant="h6">
                                Navigation
                            </Typography>

                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Pricing </a></li>
                                <li><a href="#">Download app</a></li>
                            </ul>
                        </div>
                        <div class={styles.col}>
                            <Typography className="text-primary" variant="h6">
                                Contact details
                            </Typography>

                            <ul>
                                <li><a href="#">ihab@gmail.com</a></li>
                                <li><a href="#">Downing street, downtown, london </a></li>
                            </ul>
                        </div>

                    </div>
                    <hr className={styles.hr} />
                    <p className={styles.p}>&copy;2023 all the rights reserved to ihab</p>
                </div >
            </div>
        </div>
    )
}

export default Footer