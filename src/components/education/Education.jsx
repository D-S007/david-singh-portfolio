// pages/Education.jsx
import React, { useState } from "react";
import educationData from "./educationData";
import EducationArrowCard from "./EducationArrowCard";
import EducationDetail from "./EducationDetail";
import "./education.css";

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="education"
      className="px-6 py-12 bg-gradient-to-b from-white to-[#FBF9FF]"
    >
      <div className="max-w-6xl mx-auto relative">

        {/* ---------- HEADING ---------- */}
        <div className="max-w-3xl text-center mx-auto pb-8">
          <p className="section-title pb-6">Education</p>
          <p className="text-sm md:text-lg text-gray-500">
            A structured snapshot of my academic journey, core disciplines, and specialization tracks.
          </p>
        </div>

        {/* ---------- POPUP OVERLAY (click to close) ---------- */}
        {activeIndex !== null && (
          <div
            onClick={() => setActiveIndex(null)}   // ← CLOSE ON CLICK ANYWHERE
            className="
              absolute inset-0 z-20
              bg-white rounded-2xl shadow-xl p-4 cursor-pointer
              animate-[fadeUp_0.25s_ease-out]
            "
          >
            <EducationDetail item={educationData[activeIndex]} />
          </div>
        )}

        {/* ---------- SMALL CARDS ---------- */}
        <div className={`${activeIndex !== null ? "opacity-0 pointer-events-none" : ""}`}>
          <div className="flex gap-6 items-start justify-between">
            {educationData.map((item, i) => (
              <EducationArrowCard
                key={item.id}
                item={item}
                index={i}
                active={i === activeIndex}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
