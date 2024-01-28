import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 w-full rounded-lg">
      <h1 className="text-center font-bold mb-7 text-2xl">FAQ ft.GG</h1>
      <Accordion
        title="Do you prefer Linux or MacOS"
        answer="I like to use Windows"
      />
      <Accordion
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use styled components"
      />
      <Accordion title="Firebase or Supabase?" answer="I am using Appwrite!" />
    </div>
  );
};

export default FAQ;