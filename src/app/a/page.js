import React from 'react'
import DropDown from "@/components/DropDown"
import CircleCheckbox from '@/components/checkBox/CircleCheckBox';


const page = () => {
   
    const  options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];
    return (
        <main className=' h-screen'>



            {/* <DropDown variant="circle" borderColor="white" backgroundColor="black" /> */}
          
            <DropDown options={options}
                placeholder="Search..."
                borderColor="red"
                hoverColor="lightblue"
                typography={{ fontFamily: 'Arial', fontSize: '14px' }}
            />

            <CircleCheckbox
                options={options}
                variant="circle"
                borderColor="black"
                backgroundColor="blue"
                tickColor="white"
                />



          
        </main>
    )
}

export default page