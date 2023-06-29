"user client"
import React from 'react'
import './Email.css';
import MyComponent from '@/app/d/stepper/stepper';
import { stepperData } from '@/app/d/data';
import Button from '../../components/button/index';
import AppleIcon from "@/public/icons/apple.svg"
import GmailIcon from "@/public/icons/Gmaillogo.svg"
import OutlookIcon from "@/public/icons/outlooklogo.svg"

const Email = () => {
    return (
        <div>
            <div className="gridwrapper h-screen grid items-center justify-center md:justify-start md:items-start rounded-2xl ">


                <div className="mx-5 mt-5">
                    <div className="title">Generate email signature</div><br />
                    <div className="text">Select with which email app you want to Generate Email signature</div>
                </div>
                <br/>

                <div className='flex flex-col bg-[#F4F6FD] md:flex-row'>
                    <div className=" bg-[#F4F6FD] justify-center sm:bg-white m-2  grid grid-cols-2 md:grid-cols-1 gap-1 rounded-[25px] p-3 ">
                            <Button title="Email" startIcon={GmailIcon} color="text4" size="small" className="!py-2 !pr-0 !mr-0" />
                            <Button title="Outlook " startIcon={OutlookIcon} color="text4" size="small" className="!py-2 !pr-0 !mr-0"/>
                            <Button title="Outlook " startIcon={OutlookIcon} color="text4" size="small" className="!py-2 !pr-0 !mr-0 "/>
                            <Button title="Outlook " startIcon={OutlookIcon} color="text4" size="small" className="!py-2 !pr-0 !mr-0 "/>
                            <Button title="Apple " startIcon={AppleIcon} color="text4" size="small" className="!py-2 !pr-0 !mr-0 "/>
                            <Button title="Apple " startIcon={AppleIcon} color="text4" size="small" className="!py-2 !pr-0 !mr-0 "/>
                    </div>
                    <div className="flex"><MyComponent data={stepperData} />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Email;