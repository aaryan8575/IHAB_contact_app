import React from 'react'
import Image from 'next/image';

export default function Page() {
    return (
        <div className='w-10 h-10'>
            <div className=' relative rounded aspect-square bg-red-500 p-72 '>
            {/* <Image src="/Ellipse.jpg" width={20} height={20} /> */}
            <Image src="/Ellipse.jpg" fill alt="cover image" />
            </div>        
        </div>
    )
}
