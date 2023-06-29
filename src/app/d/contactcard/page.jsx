import ContactCardComponent from "@/components/contactCardComponent";
import React from "react";
import Person1 from "../../../../public/images/peerson4.png";

const contactCardData = [
  {
    title: "All Contacts",
    desc: "35 contacts",
    images: [Person1],
  },
  // {
  //   title: "Recently Added",
  //   desc: "35 contacts",
  //   person1: Person4,
  //   smallPic: [
  //     {
  //       person2: Person2,
  //       person3: Person3,
  //       person4: Person1,
  //     },
  //   ],
  // },
  // {
  //   title: "Live Contacts",
  //   desc: "35 contacts",
  //   person1: Person4,
  //   smallPic: [
  //     {
  //       person2: Person2,
  //       person3: Person3,
  //       person4: Person1,
  //     },
  //   ],
  // },
  // {
  //   title: "Scanned",
  //   desc: "35 contacts",
  //   person1: Person4,
  //   smallPic: [
  //     {
  //       person2: Person2,
  //       person3: Person3,
  //       person4: Person1,
  //     },
  //   ],
  // },
];

const ContactCard = () => {
  return (
    // <h1>contactCard</h1>
    // <>
    //  <Person1/>
    <div className="container mx-auto flex flex-wrap justify-center lg:justify-start ">
      {contactCardData.map((x) => {
        return <ContactCardComponent x={x} />;
      })}
    </div>
    // <Image src={Person1} alt='person1'/>
  );
};

export default ContactCard;
