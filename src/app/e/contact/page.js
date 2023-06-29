import React from 'react';
import ProfileCard from './ProfileCard';
// import ProfileCard from '@/components/banner/ProfileCard.jsx';

const page = () => {
  const profiles = [
    {
      profilePicture: '/Ellipse.jpg',
      name: 'Aont reni',
      profession: 'Co-founder at visio',
    },
    
  ];

  return (
    <div>

      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          profilePicture={profile.profilePicture}
          name={profile.name}
          profession={profile.profession}
        />
      ))}
    </div>
  );
};

export default page;
