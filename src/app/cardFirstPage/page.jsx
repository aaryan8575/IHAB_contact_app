"use client";
import React from "react";
import Header from "@/components/Header";
import PageTemplate from "@/components/PageTemplate";
import PlusIcon from "@/public/icons/header/plus.svg";
import SearchIcon from "@/public/icons/search-normal.svg";
import Grid from "@/components/Grid/Grid";
import SearchButton from "@/components/searchBar/SearchIconButton";
import Button from "@/components/button";

const page = () => {
  return (
    <PageTemplate>
      <main>
        <Header
          title="cards"
          rightSide={() => {
            return (
              <>
                <Button title="Add card" startIcon={PlusIcon} size="small" />
                <SearchButton text="search" icon={SearchIcon} />
              </>
            );
          }}
        />
        
        <section className="overflow-hidden px-8 sm:px-10">
          <div>
            <main className="gridwrapper">
              <Grid
                name="Aksh Patel"
                email="aksh@gmail.com"
                image={"/images/profile.jpg"}
              />
              <Grid
                name="Harshil Patel"
                email="harshil@gmail.com"
                image={"/images/profile.jpg"}
              />
              <Grid
                name="Prathna"
                email="prathna@gmail.com"
                image={"/images/profile.jpg"}
              />
              <Grid
                name="Prathna"
                email="prathna@gmail.com"
                image={"/images/profile.jpg"}
              />
              <Grid
                name="Saumya Modi"
                email="saumya@gmail.com"
                image={"/images/profile.jpg"}
              />
            </main>
          </div>
        </section>
      </main>
    </PageTemplate>
  );
};

export default page;
