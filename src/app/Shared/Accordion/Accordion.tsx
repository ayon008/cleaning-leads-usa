// app/components/Accordion.tsx
// ✅ This is a Server Component by default (no "use client")

import React from "react";

interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      {items.map((item, index) => (
        <div key={index} className="my-6">
          <details className="group border rounded-xl p-4 bg-white shadow-sm">
            <summary className="cursor-pointer list-none text-lg font-medium flex justify-between items-center">
              {item.question}
              <span className="transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="mt-2 text-gray-600">{item.answer}</div>
          </details>
        </div>
      ))}
    </div>
  );
}
