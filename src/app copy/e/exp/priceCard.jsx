import React from 'react'
import styles from './priceCard.module.css'
import clsx from "clsx"

export default function PriceCard({cardData , colorScheme}) {
  return (

    <div className={clsx(styles.priceCard , {
        [styles["priceCard--yellow"]]: colorScheme === "yellow" ,
        [styles["priceCard--orange"]]: colorScheme === "orange" ,
        [styles["priceCard--blue"]]: colorScheme === "blue" ,
        [styles["priceCard--black"]]: colorScheme === "black" ,
    })}>
        <div className={styles.cardTextColor}>
            <div className='font-semibold text-3xl p-2 pb-0'>
                {cardData.title}  
            </div>  

            <div className='font-normal text-sm p-2 mb-5'>
                {cardData.subtitle}  
            </div>

            <div className='flex justify-center'>
                <div className={`${styles.costBox} rounded-2xl font-semibold text-2xl w-1/2 p-3 `}>
                    {cardData.prise} <span className='text-base'> {cardData.per} </span>
                </div>
            </div>
            <div className='font-normal text-sm p-2 mb-5'>
                {cardData.priseSubTitle}
            </div>


            <div className='pt-12 pb-16 text-left '>
                {cardData.features.map(({feature , available}) => (
                    <div className='flex p-3 '>
                        <div className='pr-3 flex items-center'>  { available ? <svg width="22" height="14" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9L9.32471 16L24 2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg> : <svg width="17" height="17" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 18.9231L18.9231 2" strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.9231 18.9231L2 2"  strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}    </div>
                        <div className={ available ? "true" : "false"}>{feature}</div>
                    </div>
                    )) }
            </div>

            <div className={`${styles.btnBorder} pt-16 pb-8 `}>
                <div className={` ${styles.btn} rounded-3xl text-lg p-7 `}> {cardData.priseSubTitle} </div>
            </div>
        
        </div>            

        
    </div>
    
  )
}


