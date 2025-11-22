// components/EducationDetail.jsx
import React from "react";

export default function EducationDetail({ item }) {
  if (!item) return null;

  return (
    <div className="mt-6 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <div className="grid md:grid-cols-3 gap-4">

        {/* LEFT SUMMARY CARD - PERFECT CENTER (2x2 position of 3x3 grid) */}
        <div className="flex flex-col items-center justify-center text-center h-full p-2">
          <p className="text-[18px] font-semibold text-purple-600">{item.year}</p>

          <h3 className="text-[18px] font-semibold text-gray-800 mt-2 leading-tight">
            {item.institution}
          </h3>

          <p className="mt-1 text-sm text-gray-600">{item.location}</p>

          <p className="mt-4 text-sm italic text-gray-700">{item.qualification}</p>

          <p className="mt-3 text-[15px] font-bold text-gray-800">{item.score}</p>
        </div>


        {/* RIGHT SUBJECT BOXES */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
          {Object.entries(item.details).map(([label, values]) => (
            <div
              key={label}
              className="p-4 rounded-xl border border-purple-600/40 bg-gray-50 shadow-sm"
            >
              <p className="text-[15px] font-semibold text-gray-800">{label}</p>

              <p className="mt-1 text-[13px] text-gray-600 leading-snug">
                {values.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
