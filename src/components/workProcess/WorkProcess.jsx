import WorkSteps from "./WorkSteps";

// UPDATED: New steps and descriptions for a Data Science workflow
const workStepData = [
  {
    id: 1,
    title: "Define & Discover",
    description:
      "I start by understanding the business problem, gathering requirements, and defining clear objectives for the analysis.",
    // Icon: Magnifying Glass
    svgPath:
      "M22.9,21.5l-5.9-5.9c1.2-1.6,1.9-3.6,1.9-5.7c0-5.5-4.5-9.9-9.9-9.9C3.5,0,0,4.5,0,9.9s4.5,9.9,9.9,9.9c2.1,0,4.1-0.7,5.7-1.9l5.9,5.9L22.9,21.5z M9.9,18c-4.5,0-8.1-3.6-8.1-8.1s3.6-8.1,8.1-8.1s8.1,3.6,8.1,8.1S14.4,18,9.9,18z",
  },
  {
    id: 2,
    title: "Wrangle & Explore",
    description:
      "This phase involves data cleaning, preprocessing, and exploratory data analysis (EDA) to prepare the dataset and uncover initial patterns.",
    // Icon: Data Cleaning / Funnel
    svgPath:
      "M22.9,0H1.1C0.5,0,0,0.5,0,1.1v2.3c0,0.4,0.2,0.7,0.5,0.9L11,13.8v8.2c0,0.5,0.4,1,0.9,1h0.2c0.2,0,0.3-0.1,0.5-0.2l3-2c0.3-0.2,0.5-0.5,0.5-0.8v-5.2l10.5-9.5c0.3-0.2,0.5-0.5,0.5-0.9V1.1C24,0.5,23.5,0,22.9,0z",
  },
  {
    id: 3,
    title: "Model & Analyze",
    description:
      "I apply statistical methods and machine learning algorithms to build, train, and validate models that predict outcomes and reveal deeper patterns.",
    // Icon: Chart / Graph
    svgPath:
      "M23.5,24H2V0h22c0.3,0,0.5,0.2,0.5,0.5v23C24,23.8,23.8,24,23.5,24z M17,11l-4,4l-4-4L2,18v4h20v-8L17,11z",
  },
  {
    id: 4,
    title: "Visualize & Deliver",
    description:
      "The final step is to communicate findings through clear visualizations and reports, translating complex data into actionable business recommendations.",
    // Icon: Presentation Screen
    svgPath:
      "M22,17H2c-1.1,0-2-0.9-2-2V4c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v11C24,16.1,23.1,17,22,17z M12,19l-4,4h8L12,19z M2,5v8h20V5H2z",
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-2 md:py-4 lg:py-6 xl:py-8 max-xxl:px-4"
      id="work-process"
    >

      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Work Process</p>
        {/* UPDATED: Description for a Data Science process */}
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          My process is rooted in a systematic approach to data. I begin by gathering and understanding business requirements, followed by meticulous data cleaning, feature engineering, and exploratory analysis.
        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          From there, I apply machine learning algorithms to build predictive models and translate complex findings into clear, actionable insights through compelling data visualizations.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;