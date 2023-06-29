import "./price.css";
import PriceCard from "./priceCard";

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
    colorScheme: "yellow",
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
    colorScheme: "orange",

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
    colorScheme: "blue",

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
    colorScheme: "black",
  },
];

export default function Price() {
  return (
    <div className=" min-h-screen p-24">
      <div className="flex flex-wrap ">
        {costings.map((card) => (
          <PriceCard key={card.id} cardData={card.data} colorScheme={card.colorScheme}></PriceCard>
        ))}
      </div>
    </div>
  );
}
