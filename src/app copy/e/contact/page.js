import React from 'react';
import ProfileCard from './ProfileCard';

const page = () => {
  const profiles = [
    {
      profilePicture: '/Ellipse.jpg',
      name: 'Aont reni',
      profession: 'Co-founder at visio',
    },
    {
      profilePicture: '/Ellipse.jpg',
      name: 'Aimy Len',
      profession: 'Marketing head at visio',
    },
    {
      profilePicture: '/Ellipse.jpg',
      name: 'Aont reni',
      profession: 'Co-founder at visio',
    },
  ];

  return (
    <div>

      {profiles.map((profile, index) => (<ProfileCard  key={index} profilePicture={profile.profilePicture}   name={profile.name} profession={profile.profession}
        />
      ))}
    </div>
  );
};

export default page;
