import React from "react";
import Phonenumber from "@/components/Phonenumber/page.jsx";
import Grid from "@/components/Grid/Grid";
//import Input from "@/components/Input";

export default function Home() {
  const options = ["+91", "+1", "+2", "+3", "+4"];
  return (
    <main>
      <Phonenumber options={options} />
      <Card/>
    </main>
  );
}



function Card() {
  return (
    <main className="gridwrapper">
      
    <Grid name="Aksh Patel" email="aksh@gmail.com" image={"/images/profile.png"} />
    <Grid name="Harshil Patel" email="harshil@gmail.com" image={"/images/profile.png"}/>
    <Grid name="Prathna" email="prathna@gmail.com" image={"/images/profile.png"}/>
    <Grid name="Prathna" email="prathna@gmail.com" image={"/images/profile.png"}/>
    <Grid name="Saumya Modi" email="saumya@gmail.com" image={"/images/profile.png"}/>
    </main>

    
  );
}