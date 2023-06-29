import "./prise.css";
import PriseCard from "./priseCard";

const costings = [
  {
    id : 0 ,
    data: {
      title: "ihab simple",
      subtitle: "Just for beginners",
      prise: "Free",
      per: "",
      priseSubTitle: "Currently using",
      currentPlan: true,
      features : [
        {feature: "1 user" , available : true},
        {feature: "5 unique cards" , available : true},
        {feature: "Limited Contact management" , available : true},
        {feature: "Scan card" , available : false},
        {feature: "Social Links" , available : false},
        {feature: "Contact group" , available : false},
      ]
    },
    colorScheme: {
      body: "#F6DE80",
      text: "#695712",
      button: "#695712",
      buttonText: "#FFFFFF",
      priseBox : "#E4CE45"
    },
  },
  {
    id : 1 ,
    data: {
      title: "ihab premium",
      subtitle: "Enjoy everything",
      prise: "$5",
      per: "/month",
      priseSubTitle: "Subscribe now",
      currentPlan: false,
      features : [
        {feature: "1 user" , available : true},
        {feature: "Unlimited cards" , available : true},
        {feature: "Contact management" , available : true},
        {feature: "Scan card" , available : true},
        {feature: "Social Links" , available : true},
        {feature: "Contact group" , available : true},
      ]
    },
    colorScheme: {
      body: "#F9D9AA",
      text: "#896126",
      button: "#896126",
      buttonText: "#FFFFFF",
      priseBox : "#FEBB58"

    },
  },

  {
    id : 2 ,
    data: {
      title: "ihab business",
      subtitle: "Best for your business",
      prise: "$4",
      per: "/user",
      priseSubTitle: "Subscribe now",
      currentPlan: false,
      features : [
        {feature: "4+ user" , available : true},
        {feature: "Unlimited cards" , available : true},
        {feature: "Contact management" , available : true},
        {feature: "Scan card" , available : true},
        {feature: "Social Links" , available : true},
        {feature: "Contact group" , available : true},
      ]
    },
    colorScheme: {
      body: "#ABD4FF",
      text: "#1A5088",
      button: "#1A5088",
      buttonText: "#FFFFFF",
      priseBox : "#8FC9F9"      
    },
  },
  {
    id : 3 ,
    data: {
      title: "ihab enterprise",
      subtitle: "Fit for your large business",
      prise: "Call",
      per: "",
      priseSubTitle: "Book a call",
      currentPlan: false,
      features : [
        {feature: "4+ user" , available : true},
        {feature: "Unlimited cards" , available : true},
        {feature: "Contact management" , available : true},
        {feature: "Scan card" , available : true},
        {feature: "Social Links" , available : true},
        {feature: "Contact group" , available : true},
      ]
    },
    colorScheme: {
      body: "#000000",
      text: "#FFFFFF",
      button: "#FFFFFF",
      buttonText: "#000000",
      priseBox : "#292929"      

    },
  },
];

export default function Prise() {
  return (
    <div className=" min-h-screen p-24">
      <div className="flex flex-wrap ">
        {costings.map((card) => (
          <PriseCard key={card.id} card={card}></PriseCard>
        ))}
      </div>
    </div>
  );
}
