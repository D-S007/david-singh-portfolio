import person from "../../assets/images/person.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import SocialMedia from "../common/socialMedia/SocialMedia";

// Information summary data -- UPDATED FOR A DATA ANALYST PROFILE
const informationSummaryData = [
  {
    id: 1,
    title: "Projects Completed",
    description: "17+",
  },
  {
    id: 2,
    title: "Key Skills",
    description: "15+",
  },
  {
    id: 3,
    title: "Certifications",
    description: "8+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      {/* LEFT SECTION */}
      <div className="w-full flex flex-col max-lg:text-center gap-8">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              David Singh
            </span>
          </p>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            A Passionate{" "}
            <span className="bg-highlight">Data Analyst</span> based in{" "}
            <span className="bg-highlight">New Delhi, India</span> with hands-on
            expertise in ETL Pipelines, Statistical Modeling, and Interactive
            Visualizations using <span className="bg-highlight">Tableau</span>,{" "}
            <span className="bg-highlight">Python</span> &
            <span className="bg-highlight"> SQL</span>, and a strong foundation
            in Machine Learning.
          </p>

          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="#contact"
            >
              Let's Connect !
            </a>
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - IMAGE + SOCIAL ICONS */}
      <div
        className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative flex flex-col items-center justify-end gap-4"
      >
        <img
          className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl"
          src={person}
          alt="person"
        />

        {/* Social Icons Box */}
        <div className="relative z-10 flex gap-3 mt-4 bg-white/70 backdrop-blur-md p-2 rounded-xl shadow-md">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
