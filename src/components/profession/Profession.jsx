// Certifications.jsx
import React from "react";

import datacampLogo from "../../assets/certifications/datacamp-logo.png";
import deloitteLogo from "../../assets/certifications/deloitte-logo.png";
import ibmLogo from "../../assets/certifications/ibm-logo.png";
import hackerrankLogo from "../../assets/certifications/hackerrank-logo.png";
import letsupgradeLogo from "../../assets/certifications/letsupgrade-logo.png";

const certifications = [
  {
    name: "Data Analyst Associate",
    provider: "DataCamp",
    link: "https://www.datacamp.com/certificate/DAA0014862100958",
    logo: datacampLogo,
  },
  {
    name: "Deloitte Australia - Data Analytics Job Simulation",
    provider: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Cb6sPcAz4TiT55iGG_1753197965132_completion_certificate.pdf",
    logo: deloitteLogo,
  },
  {
    name: "Data Analytics Internship",
    provider: "IBM Skillsbuild & CSRBOX",
    link: "https://drive.google.com/file/d/1ym47O-JQWO5eemsYHMwI5DPOeuGDNyeR/view?usp=sharing",
    logo: ibmLogo,
  },
  {
    name: "Advanced SQL",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/287ffb898820",
    logo: hackerrankLogo,
  },
  {
    name: "Data Science with Python",
    provider: "Let's Upgrade",
    link: "https://verify.letsupgrade.in/certificate/LUEDSFEB1251771",
    logo: letsupgradeLogo,
  },
  {
    name: "Python",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/cbe38718b7c7",
    logo: hackerrankLogo,
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
    <section id="certifications" className="bg-white py-16 px-8">
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
    </section>
  );
}
