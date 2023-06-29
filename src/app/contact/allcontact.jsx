import Header from "@/components/Header";
import PageTemplate from "@/components/PageTemplate";
import SearchBar from "@/components/searchBar/SearchBar";
import SearchButton from "@/components/searchBar/SearchIconButton";
import React from "react";

function Allcontact() {
  return (
    <div>
      <PageTemplate>
        <main>
          <Header title="cards" addBtn={true} />
          <SearchBar />
          <section className="overflow-hidden p-8 sm:p-10"></section>
        </main>
      </PageTemplate>
    </div>
  );
}

export default Allcontact;
