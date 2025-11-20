import person from "../../assets/images/person.jpg";
import "./introduction.css";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// ---- SIMPLE CLEAN TECH STACK ----
const techStack = [
  "Python",
  "SQL",
  "Tableau",
  "Power BI",
  "Streamlit",
  "MS Excel",
  "EDA",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-Learn",
  "Git / GitHub",
  "FastAPI",
  "MongoDB Atlas",
];

const Introduction = () => {
  return (
    <div
      id="introduction"
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-32 lg:mb-28 max-xl:gap-2 p-4 max-xxl:px-6"
    >
      {/* LEFT SECTION */}
      <div className="w-full flex flex-col max-lg:text-center gap-8">

        {/* HEADING + DESCRIPTION */}
        <div className="pt-4 me-8 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold w-full">
            Hey, I’m{" "}
            <span className="text-nowrap shrink-0 inline-block w-full">David Singh</span>
          </p>

          <p className="text-sm xxs:text-lg lg:text-[18px] my-4 leading-relaxed">
            A Passionate <span className="bg-highlight">Data Analyst</span> based in{" "}
            <span className="bg-highlight">New Delhi, India</span> with hands-on expertise in
            ETL Pipelines, Statistical Modeling, and Visualizations using{" "}
            <span className="bg-highlight">Python</span>,{" "}
            <span className="bg-highlight">SQL</span> &{" "}
            <span className="bg-highlight">Tableau</span>.
          </p>

          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="https://drive.google.com/file/d/1subtTDGC69U9R0JvT9se-upal96C3YO5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </p>
        </div>

        {/* ---- CLEAN TECH STACK PILLS ---- */}
        <div className="mx-auto lg:mx-0">
          
          <div className="h-4 md:h-6 lg:h-8" />
          <p className="text-lg font-semibold mb-3 text-gray-700">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full text-sm font-medium
                          bg-gray-100 border border-gray-200 shadow-sm
                          text-gray-700 transition-all duration-200
                          hover:bg-purple-600 hover:border-purple-600 hover:text-white"
              >
                {skill}
              </span>

            ))}
          </div>
        </div>

      </div>

      {/* RIGHT SECTION - IMAGE + SOCIAL ICONS */}
      <div className="w-full max-w-[480px] flex flex-col items-center max-lg:mx-auto">
        <div className="relative w-full">
          <img
            src={person}
            alt="person"
            className="w-full h-auto max-h-[560px] rounded-3xl object-cover shadow-2xl shadow-gray-200 block"
          />

          {/* Floating social icons */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20">
            <div className="flex gap-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
              <SocialMedia />
            </div>
          </div>
        </div>

        <div className="h-3 md:h-5" />
      </div>
    </div>
  );
};

export default Introduction;
