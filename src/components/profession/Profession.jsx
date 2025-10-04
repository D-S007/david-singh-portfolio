import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Data Analysis & Visualization",
    description:
      "I transform raw data into actionable insights by cleaning, analyzing, and visualizing it with tools like Python, R, and Tableau to tell a compelling story.",
  },
  {
    id: 2,
    title: "Predictive Modeling (ML)",
    description:
      "I build and deploy machine learning models using frameworks like Scikit-learn and TensorFlow to forecast trends, predict outcomes, and automate decision-making.",
  },
  {
    id: 3,
    title: "Data Engineering & Pipelines",
    description:
      "I design and manage robust data pipelines, ensuring data is efficiently extracted, transformed, and loaded (ETL) into databases like SQL for analysis.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in analyzing complex datasets, building predictive
            models, and creating clear data visualizations that drive strategic
            business decisions.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines statistical rigor with technical expertise to
            uncover hidden patterns and deliver solutions that are both
            insightful and impactful.
          </p>
        </div>
        <a
          href="mailto:[your.email@example.com]" // Changed this to a mailto link
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;