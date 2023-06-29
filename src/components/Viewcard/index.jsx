import React from 'react';
import BarChart from '../BarChart';
import Image from 'next/image';
import styles from "./viewcard.module.css";

export default function Viewcard() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.demo}>
          <div className=' aspect-square relative p-2'>
            <Image src="/images/Profileimg.jpeg" alt="profileimg" height={500} width={600} />
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className={styles.name}>Jani ren</h1>
              <p className={styles.desc1}>Creative director at ihab tech.</p></div>
            <div>
              <Image src="/images/logo1.png" alt="icon" width={70} height={70} />
            </div>
          </div>
          <hr />

          <h1 className={styles.name}>About</h1>
          <p className={styles.desc2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quidem ad assumenda delectus? Iure, officiis.</p>

          <hr />

          <h1 className={styles.name}>Person detail</h1>
          <div className={styles.desc3}>
            <div className={styles.demo4}>
              <span>Email address </span>
              <span className={styles.des}>jony123@gmail.com </span>
            </div>
            <div className={styles.demo4}>
              <span>Mobile No. </span>
              <span className={styles.des1}>+123456897 </span>
            </div>
          </div>
          <hr />

          <h1 className={styles.name}>Company details</h1>
          <div className={styles.desc4}>
            <div className={styles.demo4}>
              <span className={styles.header2}>Company Name </span>
              <span className={styles.des3}>ihab </span>
            </div>
            <div className={styles.demo4}>
              <span className={styles.header2}>Designation </span>
              <span className={styles.des4}>Creative Designer</span>
            </div>
            <div className={styles.demo4}>
              <span className={styles.header2}>Department </span>
              <span className={styles.des5}>Design </span>
            </div>
            <div className={styles.demo4}>
              <span className={styles.header2}>Mobile No. </span>
              <span className={styles.des1}>+123456897</span>
            </div>
          </div>
          <hr />

          <h1 className={styles.name}>Contacts & Social links</h1>
          <div className="flex items-center gap-4 bg-white rounded-2xl mt-4  ">
            <div>
              <Image src="/images/Phone_icon.png" alt="phoneimg"
                className={styles.phone_icon} width={13.73} height={12.07} />
            </div>
            <div className='flex-1'>
              <div className='flex justify-between pb-6 pt-2'>
                <span className={styles.des7}>+123456897</span>
                <span className={styles.header3}>(For Work) </span>
              </div>
              <div className='flex justify-between pb-6'>
                <span className={styles.des7}>+123456897</span>
                <span className={styles.header4}>(WhatsApp Only) </span>
              </div>
            </div>
          </div>
          <div className={styles.demo3}>

            <div className='flex justify-between gap-4 '>
              <Image src="/images/link_icon.png" alt="phoneimg"
                className={styles.link_icon} width={15.73} height={19.07} />
            </div>
            <div className='flex-1'>
              <div className='flex justify-between  '>
                <span className={styles.des7}>ihab.com</span>
                <span className={styles.header3}>(Product Web) </span>
              </div>
            </div>
          </div>
          <div className={styles.demo2}>
            <div><Image src="/images/linkedin_icon.png" alt="linkedinimg"
              className={styles.phone_icon} width={13.73} height={12.07} /></div>
            
              <div  className='flex-1'>
                <div className='flex justify-between pb-6 pt-2'>
                <span className={styles.des7}>raynjohn</span>
                <span className={styles.header6}>(For Profile) </span>
                </div>
                <div className='flex justify-between '>
                  <span className={styles.des7}>IHAB Tech</span>
                  <span className={styles.header5}>(Product page) </span>
                </div>
              
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className={styles.barchart1}>
            <BarChart />
          </div>

          <div className={styles.option}>
            <div className={styles.optionheader}>More Options </div>
            <div className={styles.moreoptions}>
              <div className={styles.container1}>
                <span className={styles.edit_icon}><Image src="/images/pencil_icon.svg" alt="editicon"
                  width={19.99} height={20.75} />
                </span>
                <span className={styles.edit_text} ><button >Edit card</button></span>

              </div>
              <div className={styles.container1}>
                <span className={styles.edit_icon}><Image src="/images/email.png" alt="emailicon"
                  width={19.99} height={20.75} />
                </span>
                <span className={styles.edit_text}><button >Email Signature</button></span>
              </div>
              <div className={styles.container1}>
                <span className={styles.edit_icon}><Image src="/images/share.png" alt="shareicon"
                  width={19.99} height={20.75} />
                </span>
                <span className={styles.edit_text}><button >Share card</button></span>
              </div>
              <div className={styles.container1}>
                <span className={styles.edit_icon}><Image src="/images/Qrcode.png" alt="QRcode"
                  width={29.99} height={20.75} />
                </span>
                <span className={styles.edit_text}><button >Download QR code</button></span>
              </div>
              <div className={styles.container1}>
                <span className={styles.edit_icon}><Image src="/images/delete.jpg" alt="deleteicon"
                  width={19.99} height={20.75} />
                </span>
                <span className={styles.delete_text}><button >Delete card</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}