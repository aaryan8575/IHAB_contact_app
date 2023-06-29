import React from 'react'
import Email from "@/components/Email/Email"
import Header from "@/components/Header";
import EmailSignSnapCards from "@/components/EmailSignSnapCards";
import PageTemplate from "@/components/PageTemplate";
// import Button from "@/components/button";
import PlusIcon from "@/public/icons/header/plus.svg";
// import SearchIcon from "@/public/icons/header/search.svg";
export default function Home() {
  return (
    <PageTemplate>
      <main>
        <Header
          title="cards"
          rightSide={() => {
            return (
              <>
                <div className="flex gap-2 sm:gap-4 items-center text-xs sm:text-sm bg-primary text-white rounded-full sm:rounded-xl py-2 px-4 cursor-pointer">
                  <span className="w-6 h-6">
                    {/* plus svg */}
                    <PlusIcon />
                  </span>
                  <span className="">Add card</span>
                </div>
              </>
            );
          }}
        />


        <section className="overflow-hidden px-8 sm:px-10">
          <EmailSignSnapCards />
          <div className="mt-5"><Email /></div>
        </section>

      </main>
    </PageTemplate>


  );
}