import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const experiences = [
  {
    company: "Quantium",
    position: "Data Analytics Virtual Intern",
    location: "Remote",
    duration: "Jun 2024 – Jul 2024",
    github: "https://github.com/d-s007/quantium-retail-analysis",
    certificate: "https://forage-quantium-certificate-link",
    bullets: [
      "Cleaned and analyzed retail transaction datasets using Python & SQL.",
      "Performed segment analysis and hypothesis testing to uncover insights.",
      "Generated automated Excel/BI deliverables reducing manual effort by 30%."
    ]
  },
  {
    company: "PwC Switzerland",
    position: "Power BI Intern (Virtual)",
    location: "Remote",
    duration: "Apr 2024 – May 2024",
    certificate: "https://forage-pwc-certificate-link",
    bullets: [
      "Developed Power BI dashboards for customer churn analysis.",
      "Built KPI scorecards for executive-level reporting.",
      "Automated data refresh pipelines improving reporting speed."
    ]
  },
  {
    company: "Freelance (Fiverr)",
    position: "Data Analyst (Freelance Projects)",
    location: "Remote",
    duration: "2023 – Present",
    bullets: [
      "Delivered ETL pipelines, dashboards, and insights for global clients.",
      "Executed Excel automation & SQL reporting solutions.",
      "Built custom analytics apps using Streamlit and FastAPI."
    ]
  }
];

const WorkExperience = () => {
  return (
    <section 
      id="experience" 
      className="relative px-6 lg:px-20 pt-5 pb-10"> {/*pt changes space between Introdcution page's bottom & WE page's top*/}
      <div className="max-w-135 text-center mx-auto pb-8">
        <p className="section-title pb-6">Work Experience</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          A curated overview of my professional roles, responsibilities, and credentials.
        </p>
      </div>

      {/* --- Vertical Timeline Line (Improved) --- */}
      <div className="absolute left-7 sm:left-10 top-70 bottom-16 w-[3px] bg-purple-300 rounded-full"></div>

      <div className="flex flex-col gap-12 relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-xl p-6 lg:p-10 transition-all duration-300 hover:shadow-2xl"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-2 sm:-left-3 top-10 h-4 w-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>

            {/* Top Row */}
            <div className="flex max-md:flex-col justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold text-picto-primary">
                  {exp.company}
                </h3>
                <p className="text-gray-700 text-lg font-medium">
                  {exp.position}
                </p>
                <p className="text-gray-500 mt-1">
                  {exp.location} • {exp.duration}
                </p>
              </div>

              {/* Icons */}
              <div className="flex items-center gap-4 max-md:mt-2">
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-picto-primary transition-all"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                )}

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-picto-primary transition-all"
                  >
                    <FontAwesomeIcon icon={faCertificate} size="2x" />
                  </a>
                )}
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="mt-5 space-y-2 text-gray-700 text-[15px]">
              {exp.bullets.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 bg-purple-600 rounded-full"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
