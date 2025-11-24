import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const experiences = [
  {
    company: "Internshala",
    position: "Internshala Student Partner (ISP)",
    location: "Remote",
    duration: "Nov 2025 – Present",
    bullets: [
      "Motivating students to go for online Internshala Trainings and help them to upskill themselves.",
      "Promoting Internshala campaigns in your college and helping students to find their dream internships & jobs",
      "Participating in social media branding campaigns and learn how to communicate for a brand online"
    ]
  },
  {
    company: "IBM SkillsBuild & CSRBOX",
    position: "Data Analytics Intern",
    location: "Remote",
    duration: "June 2024 – Aug 2024",
    github: "https://github.com/D-S007/Global-Water-and-Sanitation-Analysis",
    certificate: "https://drive.google.com/file/d/1ym47O-JQWO5eemsYHMwI5DPOeuGDNyeR/view?usp=sharing",
    bullets: [
      "Project Course: Analyzed 20 years of WHO data on 'Water and Sanitation access' across 100+ countries.",
      "TechStack: Used Python (Pandas, NumPy, Seaborn), SQL & Tableau to explore correlations between service levels (basic, limited, safely managed).",
      "Impact: Identified key challenges, uncovered long-term trends, and recommended five SDG-6 aligned interventions."
    ]
  },
  {
    company: "MCN Solutions",
    position: "Python Developer Intern",
    location: "On-site",
    duration: "Jan 2024 – May 2024",
    certificate: "https://drive.google.com/file/d/1WvrzyussZShh53QBnyi1ZUr0Yfu-kTBx/view?usp=sharing",
    bullets: [
      "Participated in an intensive, project-based training program focused on advancing Python proficiency beyond core fundamentals.",
      "Key training areas included asynchronous programming (asyncio), building and consuming RESTful APIs, advanced data structures, and design patterns.",
      "Led the end-to-end development of 'CodeGalaxy' - a scalable coding challenge platform.Architected the system using advanced OOP principles to create a modular execution engine, problem management system, and real-time result evaluator."
    ]
  },
  // {
  //   company: "Freelance (Upwork)",
  //   position: "Data Analyst (Freelance Projects)",
  //   location: "Remote",
  //   duration: "May 2025 – Present",
  //   bullets: [
  //     "Delivered ETL pipelines, dashboards, and insights for global clients.",
  //     "Executed Excel automation & SQL reporting solutions.",
  //     "Built custom analytics apps using Streamlit and FastAPI."
  //   ]
  // }
];

const WorkExperience = () => {
  return (
    <section 
      id="experience" 
      className="relative px-6 lg:px-20 pt-20 pb-10"> {/*pt changes space between Introdcution page's bottom & WE page's top*/}
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
