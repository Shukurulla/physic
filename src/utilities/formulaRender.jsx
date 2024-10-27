import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

const FormulaRenderComponent = ({ content }) => {
  if (!content) {
    return <div className=""></div>;
  }

  function formatTextForKaTeX(text) {
    // Oraliqlarni va noto'g'ri belgilardan tozalash uchun replace funksiyalarini qo'llaymiz
    let formattedText = text
      .replace(/\u2013/g, "-") // En dashni "-" ga almashtirish
      .replace(/\u2009/g, " ") // Thin space ni oddiy oraliqqa almashtirish
      .replace(/(\d+)\s*–\s*(\d+)/g, "$$$1^{-}$"); // Masalan, 10–10 formatidagi matematik ifodani KaTeX formatiga keltirish

    // KaTeX uchun matn ichidagi boshqa matematik ifodalarni ham aniqlash va qayta ishlash
    // Misol uchun: m, s, v kabi birliklarni aniqlash
    formattedText = formattedText.replace(/(\d+)\s*m/g, "$$10^{-10}$$ m");

    // Shu yerda istalgan boshqa matematik belgilarni tanlab olish mumkin bo'ladi
    return formattedText;
  }

  const processText = (text) => {
    const parts = text.split(/(\$.*?\$)/);
    return parts.map((part, index) => {
      if (part.startsWith("$") && part.endsWith("$")) {
        const formula = part.slice(1, -1);
        // LaTeX formulasini qayta ishlaymiz
        const processedFormula = formula
          .replace(/\\frac/g, "\\frac ")
          .replace(/\{/g, "{")
          .replace(/\}/g, "}")
          .replace(/\_/g, "_");

        try {
          return <InlineMath key={index}>{processedFormula}</InlineMath>;
        } catch (error) {
          console.error("Formula rendering error:", error);
          return (
            <span key={index} className="text-red-500">
              {part}
            </span>
          );
        }
      }
      return <span key={index}>{part}</span>;
    });
  };

  const paragraphs =
    typeof formatTextForKaTeX(content) === "string"
      ? formatTextForKaTeX(content).split("\n")
      : [];

  return (
    <div className="space-y-1">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-justify font-[500] text-[17px]">
          {processText(paragraph)}
        </p>
      ))}
    </div>
  );
};

export default FormulaRenderComponent;
