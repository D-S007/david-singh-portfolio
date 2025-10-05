// Certifications.jsx
import React from "react";

const certifications = [
  {
    name: "Google Data Analytics",
    provider: "Google",
    link: "#",
    logo: "/src/assets/certifications/SQL_Advanced.png",
  },
  {
    name: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    link: "#",
    logo: "/src/assets/certifications/Data_Science_With_Python.png",
  },
  {
    name: "Advance SQL",
    provider: "HackerRank",
    link: "#",
    logo: "/src/assets/certifications/Internship.png",
  },
  {
    name: "Machine Learning Specialization",
    provider: "IBM Skillsbuild",
    link: "#",
    logo: "/logos/coursera.png",
  },
  {
    name: "NLP chatbots",
    provider: "Nvidia",
    link: "#",
    logo: "/logos/coursera.png",
  },
  {
    name: "Deep Learning",
    provider: "Microsoft Learn",
    link: "#",
    logo: "/logos/coursera.png",
  },
  // {
  //   name: "Machine Learning Specialization",
  //   provider: "Coursera",
  //   link: "#",
  //   logo: "/logos/coursera.png",
  // },
  // {
  //   name: "Machine Learning Specialization",
  //   provider: "Coursera",
  //   link: "#",
  //   logo: "/logos/coursera.png",
  // },
  // {
  //   name: "Machine Learning Specialization",
  //   provider: "Coursera",
  //   link: "#",
  //   logo: "/logos/coursera.png",
  // },
];

export default function Certifications() {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-135 text-center mx-auto pb-8">
        <p className="section-title pb-6">Certifications</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my certifications, badges & credentials.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="rounded-xl p-6 text-center transition duration-300
                       border border-purple-200 
                       bg-gradient-to-br from-white to-purple-50
                       hover:from-white hover:to-purple-100
                       hover:border-purple-500 
                       shadow-sm hover:shadow-lg hover:shadow-purple-300/50
                       transform hover:scale-105"
          >
            <img
              src={cert.logo}
              alt={cert.provider}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">{cert.name}</h3>
            <p className="text-sm text-gray-500">{cert.provider}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-medium text-purple-600 hover:underline"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
