import Marquee from "react-fast-marquee";

// Import logos from assets
import pythonLogo from "../../assets/logos/python.svg";
import pandasLogo from "../../assets/logos/pandas.svg";
import scikitlearnLogo from "../../assets/logos/scikitlearn.svg";
import powerbiLogo from "../../assets/logos/powerbi.svg";
import dockerLogo from "../../assets/logos/docker.svg";
import fastapiLogo from "../../assets/logos/fastapi.svg";
import mysqlLogo from "../../assets/logos/mysql.svg";
import tableauLogo from "../../assets/logos/tableau.svg";

const techData = [
  { name: "Python", url: "https://www.python.org/", logo: pythonLogo },
  { name: "Pandas", url: "https://pandas.pydata.org/", logo: pandasLogo },
  { name: "Scikit-learn", url: "https://scikit-learn.org/", logo: scikitlearnLogo },
  { name: "Power BI", url: "https://powerbi.microsoft.com/", logo: powerbiLogo },
  { name: "Docker", url: "https://www.docker.com/", logo: dockerLogo },
  { name: "FastAPI", url: "https://fastapi.tiangolo.com/", logo: fastapiLogo },
  { name: "MySQL", url: "https://en.wikipedia.org/wiki/MySQL", logo: mysqlLogo },
  { name: "Tableau", url: "https://public.tableau.com/app/profile/david.singh1227/vizzes", logo: tableauLogo },
];

const TechStack = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Technologies & Tools</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I work with a modern tech stack to analyze data, build models, and
          create compelling visualizations.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="mt-4 md:mt-10">
        <div className="flex items-center">
          {techData.map((tech) => (
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              key={tech.name}
              className="mx-5 sm:mx-10 md:mx-12 transition-transform duration-300 hover:scale-110"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-12 sm:h-16"
              />
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

// Make sure to export with the correct component name for your file
export default TechStack;