import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const KaTeXNodeParser = ({ children }) => {
  const text = typeof children === "string" ? children : "";

  const parts = [];
  // Qo‘llab-quvvatlaydi: \[...\], \( ... \), yoki (formula) — oddiy holatlar uchun
  const regex = /(\\\[.*?\\\]|\\\(.*?\\\)|\((\s*[\d\^\\text{},+\-*/=]+\s*)\))/g;

  let lastIndex = 0;
  const matches = [...text.matchAll(regex)];

  matches.forEach((match) => {
    const index = match.index;
    const formula = match[0];

    // Oldingi oddiy matn
    if (index > lastIndex) {
      parts.push({ type: "text", content: text.slice(lastIndex, index) });
    }

    let cleaned = "";
    let isBlock = false;

    if (formula.startsWith("\\[")) {
      cleaned = formula.replace(/^\\\[|\\\]$/g, "");
      isBlock = true;
    } else if (formula.startsWith("\\(")) {
      cleaned = formula.replace(/^\\\(|\\\)$/g, "");
    } else if (formula.startsWith("(")) {
      cleaned = formula.replace(/^\(|\)$/g, "").trim();
    }

    // `\\text` va boshqa belgilarni to‘g‘rilaymiz
    cleaned = cleaned.replace(/\\\\/g, "\\");

    parts.push({ type: "math", content: cleaned, isBlock });
    lastIndex = index + formula.length;
  });

  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.slice(lastIndex) });
  }

  return (
    <div className="katex-render space-y-2">
      {parts.map((part, idx) => {
        if (part.type === "math") {
          return part.isBlock ? (
            <BlockMath key={idx}>{part.content}</BlockMath>
          ) : (
            <InlineMath key={idx}>{part.content}</InlineMath>
          );
        } else {
          return <span key={idx}>{part.content}</span>;
        }
      })}
    </div>
  );
};

export default KaTeXNodeParser;
