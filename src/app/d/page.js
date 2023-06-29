// import "../app/globals.css"
// import "./image_groups/module.css";
import Link from "next/link";

import ContactCard from "./contactcard/page";
import ContactManage from "./contactmanage/ContactManage";


export default function Home() {

  return (
    <>
    
      <main className="flex bg-card min-h-screen flex-col items-center justify-between p-24">
        
        <ContactCard/>
        <h1 className="textSize"></h1>
      </main>
      
    </>
  );
}
