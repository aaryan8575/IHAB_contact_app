import React from "react";
import Button from "@/components/button";
import Header from "@/components/Header";
import EmailSignSnapCards from "@/components/EmailSignSnapCards";
import PageTemplate from "@/components/PageTemplate";
import ContactManage from "@/components/contactmanage/ContactManage";

const page = () => {
  return (
    <div>
      <Button
        title="Submit"
        variant="error"
        disabled={true}
        onClick={() => {
          alert("hello");
        }}
      />
    </div>
  );

  const page = () => {
    return (

      <PageTemplate>
        <main>
          <Header title="Settings/contact" />
          <section className="overflow-hidden p-8 sm:p-10">
            <ContactManage />
          </section>
        </main>
      </PageTemplate>

    );
  };
}
export default page;
