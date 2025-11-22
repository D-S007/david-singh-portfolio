// components/EducationArrowCard.jsx
import React from "react";

/**
 * Arrow-shaped summary card.
 * Props:
 *  - item: data object
 *  - active: boolean
 *  - onClick: fn
 *  - index: number
 */
export default function EducationArrowCard({ item, active, onClick, index }) {
  return (
    <button
      onClick={() => onClick(index)}
      className={`relative flex-shrink-0 focus:outline-none transition-transform duration-200
        ${active ? "scale-105" : "scale-100"}
        `}
      style={{ width: 360 }}
    >
      <div
        className={`arrow-card p-6 rounded-md shadow-sm border
          ${active ? "border-purple-400/40 bg-white" : "border-gray-100 bg-white"}
        `}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-purple-600 font-medium">{item.year}</p>
            <h4 className="text-lg font-semibold text-gray-800 mt-2">
              {item.institution}
            </h4>
            <p className="text-sm text-gray-500 mt-1">{item.location}</p>
          </div>

          <div className="ml-4 text-right">
            <p className="text-sm text-gray-600">{item.qualification.split("—")[0]?.trim()}</p>
            <p className="text-sm font-medium text-gray-800 mt-2">{item.score}</p>
          </div>
        </div>
      </div>

      {/* arrow head on the right */}
      <div
        className={`arrow-head absolute top-0 right-[-36px] h-full transition-opacity duration-200
          ${active ? "opacity-100" : "opacity-70"}
        `}
      />
    </button>
  );
}
