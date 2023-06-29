// import Link from 'next/link';
import React from "react";
import Image from "next/image";
// import "../app/globals.css"

const ContactCardComponent = ({ x }) => {
  return (
    <div
      className=" m-5 py-5 px-12 bg-[#c7cbd9] rounded-2xl bg-opacity-30 border-2 border-[#dee1ec] hover:border-[#3f5de6] max-w-[300px]"
      key={x.title}
    >
      <div className="flex flex-col items-center">
        <div>
          <Image src={x.images[0]} height={100} width={100} />
        </div>
        <div
          className="relative"
          style={{
            width: 64 * (x.images.length - 1) - (x.images.length - 2) * 15,
            height: 64,
            top: -25,
          }}
        >
          <div className="flex absolute left-0">
            {x.images.length > 1 &&
              x.images.slice(1).map((x, i) => (
                <div className="relative h-16 w-16">
                  <Image src={x} fill style={{ left: i * -15 }} />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="m-0 mb-5 text-3xl font-semibold text-blue-700 text-center">
          {x.title}
        </h3>
        <p className="mx-0 mb-5 mt-0 text-xl text-center text-blue-500  text-opacity-26">
          {x.desc}
        </p>
      </div>
    </div>
  );
};

export default ContactCardComponent;