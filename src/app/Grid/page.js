import React from "react";
import Grid from "../components/Grid/Grid";

export default function Home() {
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