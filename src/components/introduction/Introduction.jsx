import person from "../../assets/images/person.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import SocialMedia from "../common/socialMedia/SocialMedia"; // <-- adjust if your folder/file casing differs
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// Information summary data -- UPDATED FOR A DATA ANALYST PROFILE
const informationSummaryData = [
  { id: 1, title: "Projects Completed", description: "17+" },
  { id: 2, title: "Key Skills", description: "15+" },
  { id: 3, title: "Certifications", description: "8+" },
];

const Introduction = () => {
  return (
    <div
      id="introduction"
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-32 lg:mb-28 max-xl:gap-2 p-4 max-xxl:px-6"
    >
      {/* LEFT SECTION */}
      <div className="w-full flex flex-col max-lg:text-center gap-8">
        <div className="pt-4 me-8 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold w-full">
            Hey, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">David Singh</span>
          </p>

          <p className="text-sm xxs:text-lg lg:text-[18px] my-4 leading-relaxed">
            A Passionate <span className="bg-highlight">Data Analyst</span> based in{" "}
            <span className="bg-highlight">New Delhi, India</span> with hands-on expertise in ETL
            Pipelines, Statistical Modeling, and Interactive Visualizations using{" "}
            <span className="bg-highlight">Tableau</span>, <span className="bg-highlight">Python</span>{" "}
            & <span className="bg-highlight">SQL</span>, and a strong foundation in Machine Learning.
          </p>

          <p className="text-center lg:text-start">
            <a className="btn-primary btn btn-xs xxs:btn-lg text-white" href="https://drive.google.com/file/d/1subtTDGC69U9R0JvT9se-upal96C3YO5/view?usp=sharing">
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid grid-flow-col auto-cols-max grid-cols-3 w-fit mt-6 gap-3">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - IMAGE + FLOATING SOCIAL ICONS */}
      <div className="w-full max-w-[480px] flex flex-col items-center max-lg:mx-auto">
        {/* Image wrapper: controls max size; image stays responsive */}
        <div className="relative w-full">
          <img
            src={person}
            alt="person"
            className="w-full h-auto max-h-[560px] rounded-3xl object-cover shadow-2xl shadow-gray-200 block"
          />

          {/* Floating icons: half below the image bottom */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20">
            <div className="flex gap-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* optional spacer to keep layout balanced on small screens */}
        <div className="h-3 md:h-5" />
      </div>
    </div>
  );
};

export default Introduction;
