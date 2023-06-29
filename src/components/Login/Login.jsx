import React from 'react'
import styles from './Login.module.css'
import Phonenumber from '../mobilecomponents/phonenumber'
const data = [+91,+1,+61,+49]
const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div className={styles.leftcontent}>
                    <div className={styles.text}>
                        <img className={styles.vector1} src="/images/vector2.svg" alt="" />
                        <p>Login</p>
                        <h1>Welcome back &#128075;</h1>
                        <p>Enter your Email and password to continue</p>
                        <img className={styles.vector2} src="/images/vector3.svg" alt="" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="/images/vector1.svg" alt="" className={styles.vector3} />
                        <img src="/images/Phone.svg" alt="Logo" className={styles.image} />
                    </div>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.contant}>
                    <div className="flex flex-col gap-8">
                    <Phonenumber options={data}/>
                    <p className="text-blue-700 flex items-center gap-1 px-2"><div className='w-full h-[1px] bg-blue-700'></div> or <div className='w-full h-[1px] bg-blue-700'></div></p>
                    <a className="hover:underline text-blue-700 text-[15px] ml-3" href="#">Login with Email</a>
                    </div>
                    <div className="mt-9">
                    <button className={styles.button}><img src="/images/Google.svg" alt="Google" /></button>
                    <button className={styles.button}><img src="/images/facebook.svg" alt="FB" /></button>
                    <button className={styles.button}><img src="/images/Apple.svg" alt="Apple" /></button>
                    </div>
                    <div className="mt-52">
                    <span className={styles.span}>Don’t have an account?</span> <a className="hover:underline text-blue-900 text-[15px]" href='#'>Sign up </a><br /><br />
                    <button className={styles.OTP}>Send me OTP</button><br />
                    <button className={styles.cancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login