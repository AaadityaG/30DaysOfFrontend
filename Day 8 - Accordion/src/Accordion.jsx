import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full gap-4"
      >
        <span>{title}</span>
          {accordionOpen ? <span className="text-rose-400 text-3xl font-bold">-</span> : <span className="text-rose-400 text-xl font-bold">+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;