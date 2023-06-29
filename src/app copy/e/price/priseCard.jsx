import React from 'react'
import "./priseCard.css"

export default function PriseCard({ card }) {
    return (
        <div className='p-5 m-5 basis-72 flex-1 rounded-2xl text-center' style={{ backgroundColor: card.colorScheme.body, color: card.colorScheme.text }}>

            <div className='prise-title'>
                {card.data.title}
            </div>

            <div className='prise-subtitle'>
                {card.data.subtitle}
            </div>

            <div className='flex justify-center'>
                <div className='cost-box rounded-lg ' style={{ backgroundColor: card.colorScheme.priseBox }}>
                    {card.data.prise}
                </div>
            </div>
            <div className='text-xs pt-1'>
                {card.data.priseSubTitle}
            </div>


            <div className='planfeatures pt-12 pb-16 text-left '>
            {card.data.features.map(({feature , available}) => (
                <div key={feature} className='flex '>
                    <div className='pr-3 flex items-center'>  { available ? <svg width="22" height="14" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9L9.32471 16L24 2" stroke={card.colorScheme.text} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg> : <svg width="17" height="17" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 18.9231L18.9231 2" stroke={card.colorScheme.text} strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.9231 18.9231L2 2" stroke={card.colorScheme.text} strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}    </div>
                    <div className={ available ? "true" : "false"}>{feature}</div>
                </div>
                )) }
        </div>

            <div className='pt-16 pb-8' style={{ borderBlockColor: card.colorScheme.text, borderTopWidth: "2.5px" }}>
                <div className='rounded-3xl text-lg p-7 ' style={{ backgroundColor: card.colorScheme.text, color: card.colorScheme.buttonText, fontWeight: 500 }}> {card.data.priseSubTitle} </div>
            </div>




        </div>
    )
}


