import React from 'react'
import './Grid.css';


const Grid = ({ name, email, image }) => {
  return (
    <>
      <div className="gridbox">
        <div className="box">
          <div className="top-row">

            <div className="profile-container">
              <img className="profile-image" src={image} alt="Profile Image" />
            </div>
            <div className="name-container">
              <h3 className="name">{name}</h3>
              <span className="email">{email}</span>
            </div>
            <div>
              <button className="options-container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </button>
            </div>
          </div>
          <div className="bottom-row">
            <div className="action-container1">
              <button className="edit gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.9082 4.20801C10.2665 6.50801 12.1332 8.26634 14.4499 8.49967" stroke="#2242D8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1333C3.23329 15.1083 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8083 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#2242D8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.5 18.333H17.5" stroke="#2242D8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                Edit</button>
            </div>
            <div className="h-10 w-[0.5px] bg-primary" />
            <div className="action-container2">
              <button className="preview gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.05 8.70041L17.2333 12.1837C16.5333 15.1921 15.15 16.4087 12.55 16.1587C12.1333 16.1254 11.6833 16.0504 11.2 15.9337L9.79999 15.6004C6.32499 14.7754 5.24999 13.0587 6.06665 9.57541L6.88332 6.08375C7.04999 5.37541 7.24999 4.75875 7.49999 4.25041C8.47499 2.23375 10.1333 1.69208 12.9167 2.35041L14.3083 2.67541C17.8 3.49208 18.8667 5.21708 18.05 8.70041Z" stroke="#2242D8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5498 16.1583C12.0331 16.5083 11.3831 16.8 10.5915 17.0583L9.2748 17.4917C5.96646 18.5583 4.2248 17.6667 3.1498 14.3583L2.08313 11.0667C1.01646 7.75833 1.8998 6.00833 5.20813 4.94167L6.5248 4.50833C6.86646 4.4 7.19146 4.30833 7.4998 4.25C7.2498 4.75833 7.0498 5.375 6.88313 6.08333L6.06646 9.575C5.2498 13.0583 6.3248 14.775 9.7998 15.6L11.1998 15.9333C11.6831 16.05 12.1331 16.125 12.5498 16.1583Z" stroke="#2242D8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.5332 7.1084L14.5749 8.1334" stroke="#2242D8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.7168 10.333L12.1335 10.9497" stroke="#2242D8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                Preview Card</button>
            </div>
            <div className="h-10 w-[0.5px] bg-primary" />
            <div className="action-container3">
              <button className="share gap-2"  >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4248 11.3755L11.4081 8.38379" stroke="#2242D8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.16689 5.2668L13.2419 2.90846C16.4169 1.85013 18.1419 3.58346 17.0919 6.75846L14.7336 13.8335C13.1502 18.5918 10.5502 18.5918 8.96689 13.8335L8.26689 11.7335L6.16689 11.0335C1.40856 9.45013 1.40856 6.85846 6.16689 5.2668Z" stroke="#2242D8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                Share</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Grid;