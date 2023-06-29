import React from "react";
import PriceHeader from "../priceHeader";
// import Prise from "@/app/e/price/page";
import Accordion from "../accordion";
import Photofootersection from "../pricingphotofooter/photofooter";
import Prise from "@/app copy/e/price/page";

const accordianData = [
  {
    id: 1,
    title: "How Can I Make New Card",
    desc: `“The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012. The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their."`,
  },
  {
    id: 2,
    title: "How Can I Make New Card",
    desc: `“The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012. The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their."`,
  },
  {
    id: 3,
    title: "How Can I Make New Card",
    desc: `“The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012. The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their."`,
  },
  {
    id: 4,
    title: "How Can I Make New Card",
    desc: `“The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012. The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their."`,
  },
  {
    id: 5,
    title: "How Can I Make New Card",
    desc: `“The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012. The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their."`,
  },
];

const PricingFirstPage = () => {
  return (
    <>
      <PriceHeader />
      <div className="flex justify-center">
        <div className="w-[700px] mt-10">
          <div className="text-primary font-medium text-[28px] sm:text-[60px] p-4 mx-12 sm:mx-0 relative">
            <img
              src="/images/bluelines2.png"
              alt="bluelines"
              className="absolute top-[0.5rem] -left-[0.5rem] h-7 sm:h-16"
            />
            <img
              src="/images/rightstring.png"
              alt="rightstring"
              className="absolute top-[4rem] right-4 h-7 sm:h-16 max-sm:top-[2.5rem] max-sm:right-1 "
            />
            {/* top-[4.5rem] -right-[0.5rem] h-7 sm:h-16 */}
            <center>
              <p>Simple & Transparent plans for Everyone</p>
            </center>
            <img
              src="/images/bluelines3.png"
              alt="bluelines"
              className="absolute -bottom-[0.5rem] right-[4.5rem] h-7 sm:h-16 max-sm:-bottom-[0.5rem] max-sm:right-[2.5rem]  "
            />
            {/* -bottom-[0.5rem] right-[3.5rem] h-7 sm:h-16 max-sm: */}
            <img
              src="/images/leftstring.png"
              alt="leftstring"
              className="absolute -bottom-[0.5rem] left-[1.5rem] h-7 sm:h-16"
            />
          </div>
        </div>
      </div>
      <Prise />
      <div className="flex justify-center">
        <div className="mt-10">
          <center>
            <p className="text-primary font-medium text-[28px] sm:text-[60px] p-4 mx-12">
              Frequency Asked Questions
            </p>
          </center>
        </div>
      </div>
      <div className="px-5 sm:px-32">
        <Accordion data={accordianData} />
      </div>
      <div className="mt-20">
        <Photofootersection />
      </div>
    </>
  );
};

export default PricingFirstPage;
